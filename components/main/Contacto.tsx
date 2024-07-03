import React from "react";
import Image from "next/image";

const Contacto = () => {
  return (
    <div className="flex flex-col items-center px-5 py-10" id="contacto">
      <h1 className="text-[30px] mb-3 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
        Contáctanos
      </h1>
      <div className="max-w-[1100px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <p>📞 (01) 381 - 4246 <br /> 
            📱 +51 936 572 969 <br />
            ✉️ transformaciones@slenderperu.com
            </p>
          </div>
          <div>
            <p>Para compras al por mayor, contactarse con +51 991 282 997</p>
          </div>
          <div className="text-start md:text-center">
            <h2 className="mb-1">Nuestras Redes</h2>
            <div className="flex flex-row items-center justify-start md:justify-center gap-4">
              <a href="https://www.facebook.com/transquim" target="_blank" rel="noopener noreferrer">
                <Image src="/svg/facebook.svg" alt="facebook" width={30} height={30}/>
              </a>
              <a href="https://instagram.com/transquim" target="_blank" rel="noopener noreferrer">
                <Image src="/svg/instagram.svg" alt="instagram" width={30} height={30}/>
              </a>
              <a href="https://www.linkedin.com/company/transformaciones-qu%C3%ADmicas-del-per%C3%BA-sac" target="_blank" rel="noopener noreferrer">
                <Image src="/svg/linkedin.svg" alt="linkedin" width={30} height={30}/>
              </a>
              <a href="https://youtube.com/@slenderperu" target="_blank" rel="noopener noreferrer">
                <Image src="/svg/youtube.svg" alt="youtube" width={30} height={30}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-14 font-bold text-green-600">
        ¡Envíos en Lima y a todo el Perú! 🛍️
        </div>
    </div>
  );
};

export default Contacto;
