"use client"

import React from 'react';
import MarketCard from '../sub/MarketCard';
import MarketButton from '../sub/MarketButton';

const Suscribete = () => {
  const linkMarket = 'https://transquim.com';

  return (
    <div className="flex flex-col items-center text-center px-5 py-5" id="market">
      <h1 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
        Visita nuestra tienda online
      </h1>
      <div className="mt-4 max-w-[1240px]">
        <MarketCard src="/img/market.webp" alt="TRANSQUIM Market" LinkMarket={linkMarket}/>
      </div>
      <div className="mt-4 w-60 max-w-[1240px]">
        <MarketButton onClick={() => window.open(linkMarket, '_blank')}>
          Visitar Tienda
        </MarketButton>
      </div>
    </div>
  );
};

export default Suscribete;
