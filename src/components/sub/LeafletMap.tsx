"use client"

import { useEffect, useRef } from "react"
import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson"

export interface Props {
  latitude: number
  longitude: number
  zoom: number
  /** URL del tileLayer, ver: https://leafletjs.com/reference.html#tilelayer */
  tileLayer: string
  /** Atribución requerida por la mayoría de tile servers */
  attribution: string
  geoJSON?: { data: FeatureCollection<Geometry, GeoJsonProperties>; color: string }[]
}

const LeafletMap = ({ latitude, longitude, zoom, tileLayer, attribution, geoJSON = [] }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const initializedRef = useRef(false)

  useEffect(() => {
    if (!containerRef.current || initializedRef.current) return

    observerRef.current = new IntersectionObserver(
      async (entries) => {
        const isVisible = entries[0]?.isIntersecting
        if (isVisible && !initializedRef.current) {
          initializedRef.current = true
          observerRef.current?.disconnect()

          await loadLeafletCSS()
          const leafletModule = await import("leaflet")
          const L = leafletModule.default

          initializeMap(L)
        }
      },
      {
        rootMargin: "200px",
        threshold: 0,
      }
    )

    observerRef.current.observe(containerRef.current)

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  const loadLeafletCSS = () => {
    return new Promise<void>((resolve) => {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
      link.crossOrigin = ""

      link.onload = () => {
        addCustomStyles()
        resolve()
      }

      document.head.appendChild(link)
    })
  }

  const addCustomStyles = () => {
  const style = document.createElement("style")
  style.textContent = `
    .leaflet-pane {
      z-index: 10;
    }

    .leaflet-top {
      z-index: 11;
    }

    .leaflet-control-zoom.leaflet-bar.leaflet-control {
      border-radius: 24px;
      overflow: hidden;
      margin: 14px;
      border: 2px solid #0000ff;
    }

    a.leaflet-control-zoom-in,
    a.leaflet-control-zoom-out {
      background-color: #a4a4eb;
      color: #0000ff;
      border-color: #0000ff;
    }

    a.leaflet-control-zoom-in:hover,
    a.leaflet-control-zoom-out:hover {
      background-color: #0000ff;
      color: white;
    }
  `
  document.head.appendChild(style)
}

  const initializeMap = async (L: any) => {
    if (!containerRef.current) return

    const latlng: [number, number] = [latitude, longitude]

    const map = L.map(containerRef.current, {
      scrollWheelZoom: false,
      dragging: false,
      attributionControl: true,
    }).setView(latlng, zoom)

    map.once("click", () => {
      map.scrollWheelZoom.enable()
      map.dragging.enable()
    })

    L.tileLayer(tileLayer, { attribution }).addTo(map)

    const myIcon = L.icon({
      iconUrl: "/svg/marker.svg",
      iconSize: [25, 36],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    })

    L.marker(latlng, { icon: myIcon })
      .addTo(map)
      .bindPopup("Transformaciones Químicas del Perú")

    if (!geoJSON) return

    geoJSON.forEach(({ data, color }) => {
      L.geoJSON(data, {
        style: { color, weight: 3, opacity: 0.65 },
      }).addTo(map)
    })
  }

  return (
    <div
      ref={containerRef}
      className="block h-full w-full z-0 rounded-2xl"
    />
  )
}

export default LeafletMap
