"use client"

import { useState, useEffect } from "react"
import { Sora } from "next/font/google"
import Slider from "react-slick"
import { DevTools, IDevToolsElement } from "../sub/ToolMarcas"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const sora = Sora({ subsets: ["latin"] })

export default function Component() {
  const [slidesToShow, setSlidesToShow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div className="flex flex-col items-center mx-auto py-20 px-0 md:px-5 max-w-7xl">
      <article className="w-full bg-gradient-to-t from-[#278074] to-[#0a0f67] dark:from-[#38b1a1] dark:to-[#070d76] py-10 md:py-16 md:rounded-2xl">
        <h1 className={`${sora.className} text-5xl md:text-7xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600`}>
          MARCAS
        </h1>
        <p className="text-lg md:text-xl font-bold text-center text-white py-8">
          ¡Explora nuestras marcas y productos!
        </p>
        <div className="max-w-7xl w-full px-10">
          <Slider {...settings}>
            {DevTools.map((tool: IDevToolsElement) => (
              <div key={tool.id} className="px-2">
                <a href={tool.href} target="_blank" rel="noopener" title={tool.alt} className="block">
                  <img
                    className={`object-contain rounded-md mx-auto transition hover:contrast-125 ${tool?.className}`}
                    src={tool.src}
                    width={tool.width}
                    height={tool.height}
                    alt={tool.alt}/>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </article>
    </div>
  )
}
