"use client"

import React from 'react';
import CardAnimatedBorderGradient from '../sub/CardSuscribete';
import ButtonSuscribete from '../sub/ButtonSuscribete';

const Suscribete = () => {
  const channelUrl = `https://www.youtube.com/@SonolaSR`;

  return (
    <div className="flex flex-col items-center justify-center py-5" id="suscribete">
      <h1 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">
        Suscríbete
      </h1>
      <div className="mt-4 px-10">
        <CardAnimatedBorderGradient src="/suscribete.webp" alt="suscribete_perro" channelUrl={channelUrl}/>
      </div>
      <div className="mt-4 w-36">
        <ButtonSuscribete onClick={() => window.open(channelUrl, '_blank')}>
          Suscríbete
        </ButtonSuscribete>
      </div>
    </div>
  );
};

export default Suscribete;
