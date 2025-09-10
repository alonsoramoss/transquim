import CoolBackground from "../sub/CoolBackground"
import Image from "next/image"

const Contacto = () => {
  return (
    <section id="contacto" className="flex flex-col md:items-center mx-auto pt-20 md:pb-40 px-0 md:px-5 max-w-[1440px]">
      <div className="flex flex-col bg-gradient-to-r from-[#fb7d42] to-[#fdc87d] dark:from-[#ab491b] dark:to-[#e29b36] py-10 md:py-16 px-5 md:px-10 items-center md:relative md:rounded-2xl">
        <CoolBackground/>
        <h1 className="font-heading text-4xl md:text-5xl pt-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700">
          CONTÁCTANOS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-8">
          <div>
            📞 Telf: (511) 381 - 4246 <br /> 
            📱 Cel: 936 572 969 | 976 179 379 <br />
            <a href="mailto:transformaciones@slenderperu.com">
              ✉️ transformaciones@slenderperu.com
            </a>
          </div>
          <div>
            <p>Para compras al por mayor, contactarse con +51 991 282 997</p>
          </div>
          <div className="text-start md:text-center">
            <h2 className="mb-1">Nuestras Redes</h2>
            <div className="flex flex-row items-center justify-start md:justify-center gap-4">
              <a href="https://www.facebook.com/transquim" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de TRANSQUIM en Facebook">
                <Image src="/svg/facebook.svg" alt="Facebook" width={30} height={30} />
              </a>
              <a href="https://www.instagram.com/yara_chocolates" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de Yara Chocolates en Instagram">
                <Image src="/svg/instagram.svg" alt="Instagram" width={30} height={30} />
              </a>
              <a href="https://www.linkedin.com/company/transformaciones-qu%C3%ADmicas-del-per%C3%BA-sac" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de TRANSQUIM en LinkedIn">
                <Image src="/svg/linkedin.svg" alt="LinkedIn" width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center font-bold text-green-700 dark:text-green-500">
          ¡Envíos en Lima y a todo el Perú! 🛍️
        </div>
      </div>
    </section>
  );
};

export default Contacto;
