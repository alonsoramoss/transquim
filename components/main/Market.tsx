"use client"

import React from "react";
import MarketCard from "../sub/MarketCard";
import MarketButton from "../sub/MarketButton";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });
const Suscribete = () => {
  const linkMarket = "https://transquim.com";

  return (
    <div className="flex flex-col items-center text-center py-10 md:py-20" id="market">
      <h1 className={`${sora.className} text-3xl md:text-5xl px-5 md:px-10 font-extrabold text-green-700 dark:text-lime-400`}>
        ¡VISITA NUESTRA TIENDA ONLINE!
      </h1>
      <div className="h-1 w-16 my-4 md:my-8 bg-teal-500 animate-pulse rounded" />
      <div className="max-w-[1500px] px-5">
        <MarketCard src="/img/market.webp" alt="TRANSQUIM Market" LinkMarket={linkMarket}/>
      </div>
      <div className="mt-6 text-sm md:text-lg">
        <MarketButton onClick={() => window.open(linkMarket, "_blank")}>
        ¡IR A TIENDA!
        </MarketButton>
      </div>
    </div>
  );
};

export default Suscribete;
