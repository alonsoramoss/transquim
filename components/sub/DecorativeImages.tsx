"use client"

import { useState, useEffect } from "react";

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
              alt="alessi"
              src="http://tqp.pe/wp-content/uploads/2020/03/newalessi.png"
              className={`fixed opacity-10 dark:opacity-5 z-[-1] w-[100px] md:w-[150px] lg:w-[200px] ${imageClasses[0]}`}
            />
            <img
              alt="slender"
              src="http://tqp.pe/wp-content/uploads/2020/03/newslender.png"
              className={`fixed opacity-10 dark:opacity-5 z-[-1] w-[100px] md:w-[150px] lg:w-[200px] ${imageClasses[1]}`}
            />
            <img
              alt="bioflux"
              src="http://tqp.pe/wp-content/uploads/2020/03/newbioflux.png"
              className={`fixed opacity-10 dark:opacity-5 z-[-1] w-[100px] md:w-[150px] lg:w-[200px] ${imageClasses[2]}`}
            />
          </div>

          <div>
            <img
              alt="yara"
              src="http://tqp.pe/wp-content/uploads/2020/03/newyara.png"
              className={`fixed opacity-10 dark:opacity-5 z-[-1] w-[100px] md:w-[150px] lg:w-[200px] ${imageClasses[3]}`}
            />
            <img
              alt="ecovibe"
              src="http://tqp.pe/wp-content/uploads/2020/03/newecovibe.png"
              className={`fixed opacity-10 dark:opacity-5 z-[-1] w-[100px] md:w-[150px] lg:w-[200px] ${imageClasses[4]}`}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default DecorativeImages;
