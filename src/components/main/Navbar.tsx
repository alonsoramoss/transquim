"use client";

import { useState, useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import ThemeToggle from "../sub/ThemeToggle"
import { Sora } from "next/font/google"
import { NAV_LINKS } from "@/constants/navLinks"
import { AnimatePresence, motion } from "framer-motion"
import { slideInFromTop } from "@/utils/motion"

const sora = Sora({ subsets: ["latin"] });

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { theme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -75;
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      closeMenu();
    }
  };

  useEffect(() => {
    const savedScrollState = sessionStorage.getItem("hasScrolled");
    if (savedScrollState === "true") {
      setHasScrolled(true);
    }

    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        if (!hasScrolled) {
          setHasScrolled(true);
          sessionStorage.setItem("hasScrolled", "true");
        }
      } else {
        if (hasScrolled) {
          setHasScrolled(false);
          sessionStorage.setItem("hasScrolled", "false");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <div className={`w-full h-20 fixed top-0 transition-colors duration-300 z-50 ${hasScrolled ? "bg-[#ff8000] backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-[1440px] h-full flex items-center justify-between mx-auto px-5">
        <div className="hidden md:flex items-center md:space-x-2">
          <a href="/" aria-label="Ir al inicio">
            <img src="/img/transquim.webp" alt="TRANSQUIM" width={60} height={60} />
          </a>
        </div>

        <div className="flex md:hidden items-center justify-between w-full">
          <ThemeToggle/>
          <div className="flex items-center justify-center flex-grow">
            <a href="/" aria-label="Ir al inicio">
              <img src="/img/transquim.webp" alt="TRANSQUIM" width={60} height={60} />
            </a>
          </div>
        </div>

        <div className="hidden md:flex md:w-[500px] h-full items-center justify-between mx-16">
          <nav className={`${sora.className} flex items-center justify-between w-full h-auto px-5 ${hasScrolled ? (theme === "dark" ?"text-neutral-50" : "text-neutral-950") : "text-neutral-50"}`}>
            <a href="#inicio" className="link font-medium text-sm" onClick={(e) => handleLinkClick(e, "inicio")}>
              INICIO
            </a>
            <a href="#market" className="link font-medium text-sm" onClick={(e) => handleLinkClick(e, "market")}>
              MARKET
            </a>
            <a href="#ubicacion" className="link font-medium text-sm" onClick={(e) => handleLinkClick(e, "ubicacion")}>
              UBICACIÓN
            </a>
            <a href="#contacto" className="link font-medium text-sm" onClick={(e) => handleLinkClick(e, "contacto")}>
              CONTACTO
            </a>
          </nav>
        </div>

        <button aria-label="Mostrar menú" ref={buttonRef} className="relative flex flex-col w-10 h-10 bg-transparent justify-center items-center gap-2 md:hidden" onClick={toggleMenu}>
          <span className={`absolute bg-blue-700 dark:bg-blue-600 h-0.5 w-full rounded transition-all duration-200 ${isMenuOpen ? "transform rotate-45 top-1/2" : "top-2"}`}></span>
          <span className={`absolute bg-blue-700 dark:bg-blue-600 h-0.5 w-full rounded transition-all duration-200 ${isMenuOpen ? "top-1/2 opacity-0" : "top-1/2"}`}></span>
          <span className={`absolute bg-blue-700 dark:bg-blue-600 h-0.5 w-full rounded transition-all duration-200 ${isMenuOpen ? "transform -rotate-45 top-1/2" : "top-8"}`}></span>
        </button>

        <div className="hidden md:flex items-center space-x-5">
          {
            NAV_LINKS.map((link) => {
              const Icon = link.icon;
              
              return (
                <div key={link.id} className="relative">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="peer">
                    <Icon
                      size={link.size}
                      className={`${!hasScrolled ? "text-white" : theme === "dark" ? "text-white" : "text-black"}`}
                    />
                  </a>
                  <span role="tooltip" className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full opacity-0 transition-opacity duration-300 peer-hover:opacity-100 peer-focus-visible:opacity-100 text-xs bg-black text-white rounded-md px-2 py-1">
                    {link.name}
                  </span>
                </div>
              );
            })
          }
          <ThemeToggle/>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            key="mobile-menu"
            variants={slideInFromTop}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.1 }}
            exit="hidden"
            className="absolute right-0 top-20 w-40 bg-[#ff8000] text-white md:hidden">
            <nav className="flex flex-col items-center text-neutral-950 dark:text-neutral-50">
              <a href="#inicio" className="link font-medium text-sm pt-4 pb-2" onClick={(e) => { handleLinkClick(e, "inicio"); closeMenu(); }}>
                INICIO
              </a>
              <a href="#market" className="link font-medium text-sm py-2" onClick={(e) => { handleLinkClick(e, "market"); closeMenu(); }}>
                MARKET
              </a>
              <a href="#ubicacion" className="link font-medium text-sm py-2" onClick={(e) => { handleLinkClick(e, "ubicacion"); closeMenu(); }}>
                UBICACIÓN
              </a>
              <a href="#contacto" className="link font-medium text-sm py-2" onClick={(e) => { handleLinkClick(e, "contacto"); closeMenu(); }}>
                CONTACTO
              </a>
            </nav>
            <div className="flex pt-2 pb-4 justify-center space-x-5">
              {
                NAV_LINKS.map((link) => {
                  const Icon = link.icon;

                  return (
                    <div key={link.id} className="relative">
                      <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="peer">
                        <Icon
                          size={link.size}
                          className={`${theme === "dark" ? "text-white" : "text-black"}`}
                        />
                      </a>
                      <span role="tooltip" className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full opacity-0 transition-opacity duration-300 peer-hover:opacity-100 peer-focus-visible:opacity-100 text-xs bg-black text-white rounded-md px-2 py-1">
                        {link.name}
                      </span>
                    </div>
                  );
                })
              }
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
