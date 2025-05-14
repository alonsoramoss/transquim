"use client"

import { useState, useEffect } from "react"
import DownArrow from "./DownArrow"

const images = [
  "/img/sliderheader/sliderheader1.webp",
  "/img/sliderheader/sliderheader2.webp",
  "/img/sliderheader/sliderheader3.webp",
  "/img/sliderheader/sliderheader4.webp",
]

const sectores = [
  { name: "salud", bgColor: "bg-blue-500/20", textColor: "text-sky-400" },
  { name: "alimentación", bgColor: "bg-amber-500/20", textColor: "text-amber-400" },
  { name: "cuidado personal", bgColor: "bg-red-500/20", textColor: "text-red-400" },
  { name: "limpieza", bgColor: "bg-violet-500/20", textColor: "text-purple-400" },
  { name: "agricultura", bgColor: "bg-teal-500/20", textColor: "text-emerald-400" },
]

export default function HeroUpContent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 7000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((image, index) => (
        <div key={image} className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${image})`, objectFit: "contain" }}/>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"/>
      <div className="relative flex flex-col items-center px-5 w-full h-full z-[20]" id="inicio">
        <div className="h-full w-full flex flex-col items-center justify-center max-w-[1500px] text-white">
          <div className="animate-fade-in-down">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 text-transparent bg-clip-text">
                TRANSQUIM
              </span>
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-orange-600 to-orange-300 rounded"/>
          </div>
          
          <div className="animate-fade-in-up">
            <p className="md:text-lg lg:text-xl text-center mt-4">
              Ofrecemos productos y soluciones en los sectores de:
              <br/>
              <span className="inline-flex flex-wrap justify-center gap-2 py-4">
                {sectores.map((sector) => (
                  <span key={sector.name}
                    className={`inline-block px-3 py-1 ${sector.bgColor} rounded-full font-semibold ${sector.textColor} transition-all duration-300 hover:scale-105`}>
                    {sector.name}
                  </span>
                ))}
              </span>
            </p>
            
            <p className="hidden md:block max-w-4xl md:text-lg lg:text-xl text-center mx-auto [&>strong]:font-bold [&>strong]:text-orange-400">
              Nuestro compromiso es proporcionar <strong>productos de alta calidad</strong> que cumplen con los más estrictos <strong>estándares de manufactura</strong> y <strong>buenas prácticas</strong>.
            </p>
          </div>
        </div>
        <DownArrow/>
      </div>
    </div>
  )
}