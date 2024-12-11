import Navbar404 from "@/components/main/Navbar404";

export const metadata = {
  title: "Página no encontrada - Transformaciones Químicas del Perú",
  description: "Soluciones innovadoras en los sectores de salud, alimentación, cuidado personal, limpieza y agricultura.",
};

export default function NotFound() {
  return (
    <>
      <Navbar404/>
      <div className="absolute inset-0 flex items-center justify-center mb-20">
        <div className="text-center p-8 md:p-16 w-full max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-5"> Error 404 </h1>
          <p className="text-lg md:text-2xl font-medium uppercase"> Página no encontrada </p>
          <p className="text-base md:text-lg mt-5">
            ¡Hola! No hemos encontrado lo que buscabas. Verifica que la URL sea correcta o usa el botón de abajo para volver a nuestro sitio web.
          </p>
          <a href="/" className="mt-5 inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-800 transition duration-300">
            Volver al inicio
          </a>
        </div>
      </div>
    </>
  );
}
