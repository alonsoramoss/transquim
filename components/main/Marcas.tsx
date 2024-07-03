import React from "react";
import Image from 'next/image';

const Marcas = () => {
  return (
    <div className="flex flex-col items-center py-5">
      <h1 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
        Nuestras Marcas
      </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8 mt-2 px-5 max-w-[1240px]">
          <a href="https://transquim.com/collections/alessi" target="_blank" rel="noopener noreferrer" className="w-full h-auto">
            <Image src="/img/alessi.webp" alt="alessi" width={550} height={400} className="transition-transform duration-300 transform hover:-translate-y-2"/>
            <p className="dark:text-blue-400 text-blue-800 ">ALESSI</p>
          </a>
          <a href="https://transquim.com/collections/slender" target="_blank" rel="noopener noreferrer" className="w-full h-auto">
            <Image src="/img/slender.webp" alt="slender" width={550} height={400} className="transition-transform duration-300 transform hover:-translate-y-2"/>
            <p className="dark:text-blue-400 text-blue-800">SLENDER</p>
          </a>
          <a href="https://transquim.com/collections/chocolateria-yara" target="_blank" rel="noopener noreferrer" className="w-full h-auto">
            <Image src="/img/yara.webp" alt="yara" width={550} height={400} className="transition-transform duration-300 transform hover:-translate-y-2"/>
            <p className="dark:text-blue-400 text-blue-800">YARA</p>
          </a>
          <a href="https://transquim.com/collections/insumos-agronomos" target="_blank" rel="noopener noreferrer" className="w-full h-auto">
            <Image src="/img/bioflux.webp" alt="bioflux" width={550} height={400} className="transition-transform duration-300 transform hover:-translate-y-2"/>
            <p className="dark:text-blue-400 text-blue-800">BIOFLUX</p>
          </a>
          <a href="https://transquim.com/collections/slender-gel-reforzado" target="_blank" rel="noopener noreferrer" className="w-full h-auto">
            <Image src="/img/slender2.webp" alt="slender2" width={550} height={400} className="transition-transform duration-300 transform hover:-translate-y-2"/>
            <p className="dark:text-blue-400 text-blue-800">SLENDER GEL REFORZADO</p>
          </a>
          <a href="https://transquim.com/collections/ecovibe" target="_blank" rel="noopener noreferrer" className="w-full h-auto">
            <Image src="/img/ecovibe.webp" alt="ecovibe" width={550} height={400} className="transition-transform duration-300 transform hover:-translate-y-2"/>
            <p className="dark:text-blue-400 text-blue-800">ECOVIBE</p>
          </a>
        </div>
    </div>
  );
};

export default Marcas;

