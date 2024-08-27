import React from "react";

const HeroContent = () => {
  return (
    <div className="flex flex-col items-center px-5 pt-10 pb-5 w-full z-[20]" id="inicio">
      <div className="h-full w-full flex flex-col items-center max-w-[1500px]">
        <p className="[&>strong]:font-medium dark:[&>strong]:text-orange-500 [&>strong]:text-orange-700">
          <strong>TRANSQUIM</strong> (Transformaciones Químicas del Perú) se dedica a ofrecer soluciones innovadoras en los sectores de <strong>salud</strong>, <strong>alimentación</strong>, <strong>cuidado personal</strong>, <strong>limpieza</strong> y <strong>agricultura</strong>.
          Nuestro compromiso es proporcionar <strong>productos de alta calidad</strong> que cumplen con los más estrictos <strong>estándares de manufactura y buenas prácticas</strong>.
          </p>
          <br />
          <p className="text-xl text-center">
          ¿Por qué elegir <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">TRANSQUIM</strong>?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-7">
          <div className="flex flex-col text-center p-4 border border-blue-700 rounded-lg shadow-2xl">
            <strong className="text-lg mb-2 text-orange-700 dark:text-orange-500">Calidad Garantizada</strong>
            <p> Fabricamos productos bajo estrictas buenas prácticas de manufactura, garantizando su eficacia y seguridad.</p>
          </div>
          <div className="flex flex-col text-center p-4 border border-blue-700 rounded-lg shadow-2xl">
            <strong className="text-lg mb-2 text-orange-700 dark:text-orange-500">Experiencia y Confianza</strong>
            <p> Con más de 35 años de experiencia en la industria, hemos demostrado ser un líder confiable en la oferta de soluciones químicas de alta calidad.</p>
          </div>
          <div className="flex flex-col text-center p-4 border border-blue-700 rounded-lg shadow-2xl">
            <strong className="text-lg mb-2 text-orange-700 dark:text-orange-500">Alcance Global</strong>
            <p> Estamos en constante expansión, fortaleciendo nuestras conexiones locales y ampliando nuestra red de distribución internacional para ofrecerte lo mejor donde estés.</p>
          </div>
          <div className="flex flex-col text-center p-4 border border-blue-700 rounded-lg shadow-2xl">
            <strong className="text-lg mb-2 text-orange-700 dark:text-orange-500">Compromiso con la Sostenibilidad</strong>
            <p> Trabajamos de manera ética y sostenible, comprometidos con prácticas de producción responsables con el medio ambiente, minimizando el impacto ecológico y promoviendo la sostenibilidad en todas nuestras operaciones.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
