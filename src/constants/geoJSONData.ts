import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson"

export const transquimGeoJSON: FeatureCollection<Geometry, GeoJsonProperties> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Transformaciones Químicas del Perú",
        amenity: "Empresa",
        popupContent: "Transformaciones Químicas del Perú",
      },
      geometry: {
        coordinates: [
          [
            [
              -77.03683864812768,
              -12.036978039702205
            ],
            [
              -77.03687448730308,
              -12.037160231407157
            ],
            [
              -77.03708622535775,
              -12.037588230307804
            ],
            [
              -77.03696692676625,
              -12.03770657301098
            ],
            [
              -77.03689394512783,
              -12.037775913434885
            ],
            [
              -77.03684416580705,
              -12.03773134599842
            ],
            [
              -77.03673899574524,
              -12.037510468688545
            ],
            [
              -77.03659044905811,
              -12.037199067441549
            ],
            [
              -77.03683864812768,
              -12.036978039702205
            ]
          ]
        ],
        type: "Polygon",
      },
    },
  ],
}
