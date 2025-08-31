import { Montserrat, Sora } from "next/font/google";
import { Metadata } from "next";
import ClientThemeWrapper from "@/providers/ClientThemeWrapper";
import DecorativeImages from "@/components/sub/DecorativeImages";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Analytics } from "@vercel/analytics/next"
import "@/styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });


export const metadata: Metadata = {
  title: "Transformaciones Químicas del Perú",
  description: "TRANSQUIM es una empresa peruana con más de 35 años de experiencia, dedicada a ofrecer productos y soluciones en los sectores de salud, alimentación, cuidado personal, limpieza y agricultura.",
  authors: [{ name: "Alonso Ramos", url: "https://alonsoramos.netlify.app" }],
  creator: "Alonso Ramos",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "tUbG3Yc-yQvaSMjgz4wvH2WVo2JWFF2DRewB0Js1DB8",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Transformaciones Químicas del Perú",
    description: "TRANSQUIM es una empresa peruana con más de 35 años de experiencia, dedicada a ofrecer productos y soluciones en los sectores de salud, alimentación, cuidado personal, limpieza y agricultura.",
    url: "https://transquim.vercel.app",
    siteName: "Transformaciones Químicas del Perú",
    images: [
      {
        url: "https://transquim.vercel.app/og.jpg",
        width: 1200,
        height: 630,
        alt: "TRANSQUIM",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transformaciones Químicas del Perú",
    description: "TRANSQUIM es una empresa peruana con más de 35 años de experiencia, dedicada a ofrecer productos y soluciones en los sectores de salud, alimentación, cuidado personal, limpieza y agricultura.",
    images: ["https://transquim.vercel.app/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${montserrat.variable} ${sora.variable}`}>
      <body className="font-body flex flex-col min-h-screen">
        <ClientThemeWrapper>
          <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-50 dark:bg-neutral-950
            dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <DecorativeImages />
          </div>
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </ClientThemeWrapper>
        <Analytics />
      </body>
    </html>
  );
}
