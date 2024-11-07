import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

const Ubicacion = () => {
  return (
    <div className="flex flex-col items-center text-center pt-10 md:pt-20" id="ubicacion">
      <h1 className={`${sora.className} text-4xl md:text-5xl pt-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700`}>
        UBÍCANOS
      </h1>
      <div className="h-1 w-32 my-4 md:my-8 bg-indigo-500 animate-pulse rounded" />
      <div className="flex flex-wrap items-center justify-center w-full mx-auto max-w-[1500px] px-0 md:px-5">
        <div className="w-full md:w-1/3 text-lg items-center font-semibold pb-4 md:pb-0">
          Av. Los Próceres 125, El Rimac Lima - Perú  
        </div>
        <div className="w-full md:w-2/3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d738.861432097124!2d-77.036490217672!3d-12.037783381154519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf344dd49021%3A0xd5bdcea0be2cf38f!2sAv.%20de%20los%20Pr%C3%B3ceres%20125%2C%20R%C3%ADmac%2015094!5e0!3m2!1ses-419!2spe!4v1719433887328!5m2!1ses-419!2spe" 
        width="100%" height="500" style={{border:0}} loading="eager" referrerPolicy="no-referrer-when-downgrade" className="rounded"></iframe>
        </div>
      </div>
      <div className="flex space-x-4 mt-10 md:mt-20">
        <span className="h-4 w-4 bg-gray-400 rounded-full"></span>
        <span className="h-4 w-4 bg-gray-400 rounded-full"></span>
        <span className="h-4 w-4 bg-gray-400 rounded-full"></span>
      </div>
    </div>
    
  );
};

export default Ubicacion;
