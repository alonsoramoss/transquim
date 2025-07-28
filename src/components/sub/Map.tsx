import LeafletMap from "./LeafletMap";
import { transquimGeoJSON } from "@/constants/geoJSONData";

const Map = () => {
  return (
    <div className="m-auto flex max-w-4xl flex-row flex-wrap gap-8">
      <div className="relative h-[630px] min-w-[300px] flex-1 overflow-hidden rounded-[1rem] bg-blue-800">
        <LeafletMap
          latitude={-12.037166508758972}
          longitude={-77.03674662223578}
          zoom={18}
          tileLayer="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_no_buildings/{z}/{x}/{y}{r}.png"
          attribution={`<a class="mr-5" href="http://www.openstreetmap.org/">OpenStreetMap</a>`}
          geoJSON={[
            { data: transquimGeoJSON, color: "#0000ff" },
          ]}
        />
      </div>
    </div>
  )
}

export default Map;