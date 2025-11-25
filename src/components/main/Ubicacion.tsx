import MagicText from "../sub/MagicText"
import { HiLocationMarker } from "react-icons/hi"
import Map from "../sub/Map"

const Ubicacion = () => {
  return (
    <section id="ubicacion" className="flex flex-col items-center text-center pt-20">
      <h2 className="font-heading text-4xl md:text-5xl font-bold">
        <MagicText>UBÍCANOS</MagicText>
      </h2>
      <div className="h-1 w-32 mt-4 md:my-8 bg-indigo-500 animate-ping rounded"/>
      <div className="flex flex-col md:flex-row items-center justify-center w-full mx-auto max-w-[1440px] gap-x-4 px-5">
        <div className="flex flex-col md:w-1/3 text-lg items-center font-semibold py-8 gap-4">
          Av. de los Próceres 125, El Rimac Lima - Perú
          <a href="https://maps.google.com?daddr=Av. de los Próceres 125, Lima 15094" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
            <HiLocationMarker />
            Dirección
          </a>
        </div>
        <div className="w-full md:w-2/3">
          <Map />
        </div>
      </div>
      <div className="flex space-x-4 mt-20">
        <span className="h-4 w-4 bg-gray-400 rounded-full"></span>
        <span className="h-4 w-4 bg-gray-400 rounded-full"></span>
        <span className="h-4 w-4 bg-gray-400 rounded-full"></span>
      </div>
    </section>
  );
};

export default Ubicacion;
