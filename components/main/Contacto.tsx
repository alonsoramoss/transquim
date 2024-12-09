import { Sora } from "next/font/google";
import CoolBackground from "../sub/CoolBackground"
import Image from "next/image";

const sora = Sora({ subsets: ["latin"] });
const Contacto = () => {
  return (
    <div className="flex flex-col md:items-center pt-10 md:py-20" id="contacto">
      <div className="px-0 md:px-5">
        <article className="flex flex-col bg-gradient-to-r from-[#eb8657] to-[#d0ac7a] dark:from-[#a15633] dark:to-[#b87e2d] py-10 md:py-10 items-center md:relative md:rounded-2xl">
          <CoolBackground/>
          <h1 className={`${sora.className} text-4xl md:text-5xl py-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700`}>
            CONTÁCTANOS
          </h1>
          <div className="max-w-[1500px] w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:px-0 px-5">
              <div className="md:px-10 px-0">
                📞 (01) 381 - 4246 <br /> 
                📱 +51 936 572 969 <br />
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
                  <a href="https://www.facebook.com/transquim" target="_blank" rel="noopener noreferrer">
                    <Image src="/svg/facebook.svg" alt="facebook" width={30} height={30} className="pointer-events-none"/>
                  </a>
                  <a href="https://instagram.com/transquim" target="_blank" rel="noopener noreferrer">
                    <Image src="/svg/instagram.svg" alt="instagram" width={30} height={30} className="pointer-events-none"/>
                  </a>
                  <a href="https://www.linkedin.com/company/transformaciones-qu%C3%ADmicas-del-per%C3%BA-sac" target="_blank" rel="noopener noreferrer">
                    <Image src="/svg/linkedin.svg" alt="linkedin" width={30} height={30} className="pointer-events-none"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-14 font-bold text-green-600">
            ¡Envíos en Lima y a todo el Perú! 🛍️
          </div>
        </article>
      </div>
    </div>
  );
};

export default Contacto;
