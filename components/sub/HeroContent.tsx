"use client";

import React from "react";

const HeroContent = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-10 mt-32 md:mt-36 w-full z-[20]">
      <div className="h-full w-full flex flex-col gap-5 items-center justify-center">
        <div className="flex flex-col gap-6 text-center font-bold text-white max-w-[600px] w-auto h-auto">
          <span className="text-4xl md:text-6xl">
            Bienvenidos a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">
              {" "}
              SonolaSR
            </span>
            !
          </span>
        </div>

        <p className="text-center text-gray-400 mb-5 max-w-[800px] px-4">
          Un canal en el que encontrarás multirreacciones a los mejores minutos
          de las batallas de rap y del mundo del freestyle. Disfruta de las multirreacciones, vive cada punchline, 
          cada rima y cada barra. ¡Suscríbete en el canal de YT y no te pierdas 
          ninguna multireacción! #sonolasr
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
