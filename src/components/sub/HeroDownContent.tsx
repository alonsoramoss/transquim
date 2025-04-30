import { IconCertificate, IconShieldCheck, IconUsersGroup, IconLeaf } from "@tabler/icons-react"

const HeroDownContent=()=> {
  return (
    <div className="h-full w-full flex flex-col items-center max-w-[1500px] px-5 py-20 mx-auto">
      <p className="text-center text-3xl md:text-4xl lg:text-5xl font-bold py-16 md:py-20">
        ¿Por qué elegir <strong className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700">TRANSQUIM</strong>?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card-item p-4 pt-8 bg-neutral-50 dark:bg-blue-950">
          <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-neutral-200 rounded-full p-3">
            <IconCertificate size={40} stroke={1.5} color="#0059a6"/>
          </div>
          <strong className="text-lg mb-2 text-orange-700 dark:text-orange-500">Calidad Garantizada</strong>
          <p>Fabricamos productos bajo estrictas buenas prácticas de manufactura, garantizando su eficacia y seguridad.</p>
        </div>

        <div className="card-item p-4 pt-8 mt-8 md:mt-0 bg-neutral-50 dark:bg-blue-950">
          <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-blue-800 rounded-full p-3">
            <IconShieldCheck size={40} stroke={1.5} color="white"/>
          </div>
          <strong className="text-lg mb-2 text-orange-700 dark:text-orange-500">Experiencia y Confianza</strong>
          <p>Con más de 35 años de experiencia en la industria, hemos demostrado ser un líder confiable en la oferta de soluciones químicas de alta calidad.</p>
        </div>

        <div className="card-item p-4 pt-8 mt-8 md:mt-9 lg:mt-0 bg-neutral-50 dark:bg-blue-950">
          <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-neutral-200 rounded-full p-3">
            <IconUsersGroup size={40} stroke={1.5} color="#0059a6"/>
          </div>
          <strong className="text-lg mb-2 text-orange-700 dark:text-orange-500">Alcance Global</strong>
          <p>Estamos en constante expansión, fortaleciendo nuestras conexiones locales y ampliando nuestra red de distribución internacional para ofrecerte lo mejor donde estés.</p>
        </div>

        <div className="card-item p-4 pt-8 mt-8 md:mt-9 lg:mt-0 bg-neutral-50 dark:bg-blue-950">
          <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-blue-800 rounded-full p-3">
            <IconLeaf size={40} stroke={1.5} color="white"/>
          </div>
          <strong className="text-lg mb-2 text-orange-700 dark:text-orange-500">Compromiso con la Sostenibilidad</strong>
          <p>Trabajamos de manera ética y sostenible, comprometidos con prácticas de producción responsables con el medio ambiente.</p>
        </div>
      </div>
    </div>
  )
}

export default HeroDownContent