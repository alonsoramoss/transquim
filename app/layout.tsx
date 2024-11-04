import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import DecorativeImages from "@/components/sub/DecorativeImages";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transformaciones Químicas del Perú",
  description: "Soluciones innovadoras en los sectores de salud, alimentación, cuidado personal, limpieza y agricultura.",
    icons:{
      icon:["/favicon.ico?v=4"],
      apple:["/apple-touch-icon.png?v=4"],
      shortcut:["/apple-touch-icon.png"]
    }
};

export default function RootLayout({children}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} relative text-black dark:text-white overflow-y-scroll overflow-x-hidden min-h-screen flex flex-col`}
      >
      <div
        className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-50 dark:bg-neutral-950
        dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      >
      <DecorativeImages/>
      </div>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
