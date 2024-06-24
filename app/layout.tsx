import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SonolaSR",
  description: "Canal de YT SonolaSR",
    icons:{
      icon:["/favicon.ico"],
      apple:["/apple-touch-icon.png"],
      shortcut:["/apple-touch-icon.png"]
    }
};

export default function RootLayout({children}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito_sans.className} bg-[#1c1c1c] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
