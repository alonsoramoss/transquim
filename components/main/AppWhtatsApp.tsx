
import Link from 'next/link';
import Image from 'next/image';

const AppWhatsApp = () => {
return (
    <div className="fixed right-3 bottom-3 w-10 z-50">
        <Link href="https://wa.me/991282997" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
                <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={60} height={60}/>
            </a>
        </Link>
    </div>
    );
};

export default AppWhatsApp;
