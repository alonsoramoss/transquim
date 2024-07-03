import React from "react";

const HeroContent = () => {
  return (
    <div className="flex flex-col items-center py-10 md:py-5 px-5 md:px-5 w-full z-[20]" id="inicio">
      <div className="h-full w-full flex flex-col items-center max-w-[1240px]">
        <p className="[&>strong]:font-medium dark:[&>strong]:text-orange-500 [&>strong]:text-orange-700">
          El 13 de Enero de 1986 la empresa <strong>TRANSQUIM</strong> (Transformaciones Químicas del Perú) inicia sus operaciones con el objetivo de contribuir ética y sosteniblemente en los sectores de <strong>salud</strong>, <strong>alimentación</strong>, <strong>cuidado personal</strong>, <strong>limpieza</strong> y <strong>agricultura</strong>.
          <br />
          Nos comprometemos a brindar <strong>productos de alta calidad</strong> y reconocimiento en el mercado, elaborados bajo <strong>buenas prácticas de manufactura</strong>.
          <br />
          <strong>TRANSQUIM</strong> está creciendo para incluir la <strong>distribución internacional</strong> y <strong>fortalecer nuestras conexiones locales</strong>. A través de nuestra presencia en la web y distribuidores, esperamos compartir soluciones innovadoras con ustedes.
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
