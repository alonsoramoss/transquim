"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const AppWhatsApp = () => {
  const [showMessage, setShowMessage] = useState(true);
  const whatsappMensaje = encodeURIComponent("¡Hola! Estoy interesado/a en los productos de TRANSQUIM. ¿Podrían brindarme más información?");

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <div className="fixed right-3 bottom-3 w-10 z-50">
      <Link href={`https://wa.me/51991282997?text=${whatsappMensaje}`} legacyBehavior>
        <a 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={60} height={60} />
        </a>
      </Link>
      {showMessage && (
        <div className= "absolute right-0 bottom-9 mb-3 p-3 bg-white text-sm rounded-md shadow-2xl w-40 border border-gray-300">
          <div className="flex justify-between items-center">
            <span className='text-black'>¿Necesitas más información? Contáctanos!</span>
            <button onClick={handleCloseMessage} className="ml-2 text-white">
              <p className='text-gray-950 pb-10'>&#10005;</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppWhatsApp;
