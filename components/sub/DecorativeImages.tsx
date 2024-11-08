"use client"

import { useState, useEffect } from 'react';

function DecorativeImages() {
  // Lista de clases de Tailwind para las posiciones de las imágenes
  const positions: string[] = [
    'top-[15%] left-[10%]',   // Posición 1
    'top-[45%] left-[3%]',    // Posición 2
    'bottom-[15%] left-[15%]',// Posición 3
    'top-[30%] right-[10%]',  // Posición 4
    'bottom-[35%] right-[5%]',// Posición 5
  ];

  // Estado para almacenar las clases asignadas a cada imagen
  const [imageClasses, setImageClasses] = useState<string[]>([]);

  // Función para obtener clases aleatorias
  const getRandomClasses = (): string[] => {
    // Baraja las posiciones y selecciona las primeras 5 posiciones (una para cada imagen)
    return positions.sort(() => Math.random() - 0.5).slice(0, 5);
  };

  // Cambiar clases al cargar el componente o recargar la página
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
