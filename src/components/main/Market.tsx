"use client"

import MarketCard from "../sub/MarketCard"
import MarketButton from "../sub/MarketButton"

const Suscribete = () => {
  const linkMarket = "https://transquim.com";

  return (
    <div className="flex flex-col items-center text-center py-20" id="market">
      <h1 className="font-heading text-3xl md:text-5xl px-5 md:px-10 font-extrabold text-green-700 dark:text-lime-400">
        ¡VISITA NUESTRA TIENDA EN LÍNEA!
      </h1>
      <div className="h-1 w-16 my-4 md:my-8 bg-teal-500 animate-pulse rounded"/>
      <div className="max-w-[1440px] px-5">
        <MarketCard src="/img/market.webp" alt="TRANSQUIM Market" LinkMarket={linkMarket}/>
      </div>
      <div className="mt-6 text-sm md:text-lg">
        <MarketButton href={linkMarket}>
        ¡IR A TIENDA!
        </MarketButton>
      </div>
    </div>
  );
};

export default Suscribete;
