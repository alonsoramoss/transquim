"use client"

import { useState, useEffect } from "react"

function DecorativeImages() {
  const positions: string[] = [
    "top-[15%] left-[10%]",
    "top-[45%] left-[3%]",
    "bottom-[15%] left-[15%]",
    "top-[30%] right-[10%]",
    "bottom-[35%] right-[5%]",
  ];

  const [imageClasses, setImageClasses] = useState<string[]>([]);

  const getRandomClasses = (): string[] => {
    return positions.sort(() => Math.random() - 0.5).slice(0, 5);
  };

  useEffect(() => {
    setImageClasses(getRandomClasses());
  }, []);

  return (
    <div>
      {imageClasses.length > 0 && (
        <>
          <div>
            <img
              alt="Alessi"
              src="/img/DecorativeImages/newalessi.webp"
              className={`fixed opacity-10 dark:opacity-5 z-[-1] w-[100px] md:w-[150px] lg:w-[200px] ${imageClasses[0]}`}/>
            <img
              alt="Slender"
              src="/img/DecorativeImages/newslender.webp"
              className={`fixed opacity-10 dark:opacity-5 z-[-1] w-[100px] md:w-[150px] lg:w-[200px] ${imageClasses[1]}`}/>
            <img
              alt="Bioflux"
              src="/img/DecorativeImages/newbioflux.webp"
              className={`fixed opacity-10 dark:opacity-5 z-[-1] w-[100px] md:w-[150px] lg:w-[200px] ${imageClasses[2]}`}/>
          </div>

          <div>
            <img
              alt="Yara"
              src="/img/DecorativeImages/newyara.webp"
              className={`fixed opacity-10 dark:opacity-5 z-[-1] w-[100px] md:w-[150px] lg:w-[200px] ${imageClasses[3]}`}/>
            <img
              alt="Ecovibe"
              src="/img/DecorativeImages/newecovibe.webp"
              className={`fixed opacity-10 dark:opacity-5 z-[-1] w-[100px] md:w-[150px] lg:w-[200px] ${imageClasses[4]}`}/>
          </div>
        </>
      )}
    </div>
  );
}

export default DecorativeImages;
