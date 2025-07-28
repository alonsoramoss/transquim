import { Sora } from "next/font/google"
import Map from "../sub/Map";

const sora = Sora({ subsets: ["latin"] });

const Ubicacion = () => {
  return (
    <div className="flex flex-col items-center text-center pt-20" id="ubicacion">
      <h1 className={`${sora.className} text-4xl md:text-5xl pt-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700`}>
        UBÍCANOS
      </h1>
      <div className="h-1 w-32 mt-4 md:my-8 bg-indigo-500 animate-pulse rounded"/>
      <div className="flex flex-col md:flex-row items-center justify-center w-full mx-auto max-w-7xl gap-x-4 px-5">
        <div className="flex flex-col md:w-1/3 text-lg items-center font-semibold py-8 gap-4">
          Av. de los Próceres 125, El Rimac Lima - Perú
          <a href="https://maps.google.com?daddr=Av. de los Próceres 125, Lima 15094" target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Dirección</a>
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
    </div>
  );
};

export default Ubicacion;
