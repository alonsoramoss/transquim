import Hero from "@/components/main/Hero";
import Market from "@/components/main/Market";
import Ubicacion from "@/components/main/Ubicacion";
import Contacto from "@/components/main/Contacto"
import Marcas from "@/components/main/Marcas";
import AppWhatsApp from "@/components/main/AppWhatsApp";

export default function Home() {
  return (
    <main>
      <div>
        <Hero/>
        <Marcas/>
        <Market/>
        <Ubicacion/>
        <Contacto/>
        <AppWhatsApp/>
      </div>
    </main>
  );
}
