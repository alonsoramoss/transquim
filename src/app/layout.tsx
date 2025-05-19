import { Montserrat } from "next/font/google";
import ClientThemeWrapper from "@/components/utils/ClientThemeWrapper";
import DecorativeImages from "@/components/sub/DecorativeImages";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import "@/styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <title>Transformaciones Químicas del Perú</title>
        <meta name="description" content="TRANSQUIM es una empresa peruana con más de 35 años de experiencia, dedicada a ofrecer productos y soluciones en los sectores de salud, alimentación, cuidado personal, limpieza y agricultura." />
        <meta name="author" content="Alonso Ramos" />
        <meta name="creator" content="Alonso Ramos" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/android-chrome-192x192.png" />

        <link rel="manifest" href="/site.webmanifest" />

        <meta name="google-site-verification" content="tUbG3Yc-yQvaSMjgz4wvH2WVo2JWFF2DRewB0Js1DB8" />

        <meta property="og:url" content="https://transquim.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Transformaciones Químicas del Perú" />
        <meta property="og:description" content="TRANSQUIM es una empresa peruana con más de 35 años de experiencia, dedicada a ofrecer productos y soluciones en los sectores de salud, alimentación, cuidado personal, limpieza y agricultura." />
        <meta property="og:image" content="https://transquim.vercel.app/og.jpg" />
        <meta property="og:site_name" content="Transformaciones Químicas del Perú" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="transquim.vercel.app" />
        <meta property="twitter:url" content="https://transquim.vercel.app" />
        <meta name="twitter:title" content="Transformaciones Químicas del Perú" />
        <meta name="twitter:description" content="TRANSQUIM es una empresa peruana con más de 35 años de experiencia, dedicada a ofrecer productos y soluciones en los sectores de salud, alimentación, cuidado personal, limpieza y agricultura." />
      </head>
      <body suppressHydrationWarning className={`${montserrat.className} relative text-black dark:text-white overflow-y-scroll overflow-x-hidden min-h-screen flex flex-col`}>
        <ClientThemeWrapper>
          <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-50 dark:bg-neutral-950
            dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <DecorativeImages />
          </div>
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </ClientThemeWrapper>
      </body>
    </html>
  );
}
