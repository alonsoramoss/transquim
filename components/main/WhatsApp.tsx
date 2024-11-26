"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react'

const WhatsApp = () => {
  const [showMessage, setShowMessage] = useState(false);
  const whatsappMensaje = encodeURIComponent("¡Hola! Estoy interesado/a en los productos de TRANSQUIM. ¿Podrían brindarme más información?");

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleCloseMessage = () => {
    setShowMessage(false)
  }

  return (
    <div className="fixed right-3 bottom-3 w-10 z-50">
      <Link href={`https://wa.me/51991282997?text=${whatsappMensaje}`} legacyBehavior>
        <a 
          target="_blank" 
          rel="noopener noreferrer"
          className="block animate-shake"
        >
          <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={60} height={60} className="pointer-events-none"/>
        </a>
      </Link>
      {showMessage && (
        <div className= "absolute right-0 bottom-9 mb-3 p-3 bg-white rounded-md shadow-2xl w-36 md:w-72 border border-neutral-300 animate-fadeIn">
          <div className="flex justify-between items-center">
            <span className="text-black text-xs md:text-base">¿Necesitas más información? <br /> ¡Contáctanos!</span>
            <button onClick={handleCloseMessage} className="ml-2 pb-5 text-black hover:text-gray-600 transition-colors">
              &#10005;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsApp;
