import Hero from "@/components/main/Hero"
import Marcas from "@/components/main/Marcas"
import Market from "@/components/main/Market"
import Ubicacion from "@/components/main/Ubicacion"
import Contacto from "@/components/main/Contacto"
import WhatsApp from "@/components/main/WhatsApp"

export default function Home() {
  return (
    <main>
      <div>
        <Hero/>
        <Marcas/>
        <Market/>
        <Ubicacion/>
        <Contacto/>
        <WhatsApp/>
      </div>
    </main>
  );
}
