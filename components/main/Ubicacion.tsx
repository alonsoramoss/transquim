import React from "react";

const Ubicacion = () => {
  return (
    <div className="flex flex-col items-center text-center px-5 py-5" id="ubicacion">
      <h1 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
        Nuestra ubicación
      </h1>
      <div className="flex flex-wrap items-center justify-center w-full mx-auto max-w-[1100px]">
        <div className="w-full md:w-1/3 text-center items-center font-semibold">
          Av. Los Próceres 125, El Rimac Lima - Perú  
        </div>
        <div className="w-full md:w-2/3 p-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d738.861432097124!2d-77.036490217672!3d-12.037783381154519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf344dd49021%3A0xd5bdcea0be2cf38f!2sAv.%20de%20los%20Pr%C3%B3ceres%20125%2C%20R%C3%ADmac%2015094!5e0!3m2!1ses-419!2spe!4v1719433887328!5m2!1ses-419!2spe" 
        width="100%" height="300" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
