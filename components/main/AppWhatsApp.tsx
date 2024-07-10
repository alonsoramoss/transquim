import Link from 'next/link';
import Image from 'next/image';

const AppWhatsApp = () => {
  const whatsappMensaje = encodeURIComponent("¡Hola! Estoy interesado/a en los productos de TRANSQUIM. ¿Podrían brindarme más información?");

  return (
    <div className="fixed right-3 bottom-3 w-10 z-50">
      <Link href={`https://wa.me/51991282997?text=${whatsappMensaje}`} legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={60} height={60}/>
        </a>
      </Link>
    </div>
  );
};

export default AppWhatsApp;
