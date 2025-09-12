import type { Metadata } from "next"
import Navbar404 from "@/components/main/Navbar404"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Página no encontrada - Transformaciones Químicas del Perú",
  description: "La página que buscas no existe. Vuelve al inicio para conocer más sobre TRANSQUIM, empresa peruana con más de 35 años de experiencia en soluciones para salud, alimentación, cuidado personal, limpieza y agricultura.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Página no encontrada - Transformaciones Químicas del Perú",
    description: "La página que buscas no existe. Vuelve al inicio para conocer más sobre TRANSQUIM, empresa peruana con más de 35 años de experiencia en soluciones para salud, alimentación, cuidado personal, limpieza y agricultura.",
    url: "https://transquim.vercel.app",
    siteName: "Transformaciones Químicas del Perú",
    images: [
      {
        url: "https://transquim.vercel.app/og.jpg",
        width: 1200,
        height: 630,
        alt: "Transformaciones Químicas del Perú"
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Página no encontrada - Transformaciones Químicas del Perú",
    description: "La página que buscas no existe. Vuelve al inicio para conocer más sobre TRANSQUIM, empresa peruana con más de 35 años de experiencia en soluciones para salud, alimentación, cuidado personal, limpieza y agricultura.",
    images: ["https://transquim.vercel.app/og.jpg"],
  },
}

export default function NotFound() {
  return (
    <>
      <Navbar404/>
      <div className="flex-1 flex items-center justify-center text-center pt-20 px-4">
        <div className="max-w-xl md:max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4"> Error 404 </h1>
          <p className="text-lg md:text-2xl font-medium mb-4"> Página no encontrada </p>
          <p className="text-base md:text-lg mb-6">
            ¡Hola! No hemos encontrado lo que buscabas. Verifica que la URL sea correcta o usa el botón de abajo para volver a nuestro sitio web.
          </p>
          <Link href="/" className="inline-block text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2.5 px-5 rounded-md transition-colors duration-300">
            Volver al inicio
          </Link>
        </div>
      </div>
    </>
  );
}
