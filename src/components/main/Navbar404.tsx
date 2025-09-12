"use client";

import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { scrollToId } from "@/utils/scroll"
import ThemeToggle from "../sub/ThemeToggle"
import { NAV_LINKS } from "@/constants/navLinks"
import { AnimatePresence, motion } from "framer-motion"
import { slideInFromTop } from "@/utils/motion"

const Navbar404 = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === "/") {
        router.replace("/", { scroll: false })
        if (window.location.hash) {
          const targetId = window.location.hash.substring(1)
          setTimeout(() => scrollToId(targetId), 100)
        }
      } else {
        router.replace(window.location.pathname, { scroll: false })
      }
    }

    window.addEventListener("popstate", handlePopState)
    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [router])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();

    if (pathname !== "/") {
      window.history.pushState({}, "", window.location.pathname);
      setTimeout(() => {
        router.push("/", { scroll: false })
        requestAnimationFrame(() => scrollToId(targetId))
      }, 0)
      closeMenu();
      return;
    }

    scrollToId(targetId);
    closeMenu();
  };

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const targetId = window.location.hash.substring(1);
      scrollToId(targetId);
    }
  }, [pathname]);

  useEffect(() => {
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

  return (
    <header className="w-full h-20 fixed top-0 transition-colors duration-300 z-50 bg-[#ff8000] backdrop-blur-md shadow-lg">
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

        <nav className="hidden md:flex md:w-[500px] h-full items-center justify-between mx-16">
          <div className={`font-heading flex items-center justify-between w-full h-auto px-5 text-neutral-950 dark:text-neutral-50`}>
            <a href="#nosotros" className="link font-medium text-sm" onClick={(e) => handleLinkClick(e, "nosotros")}>
              NOSOTROS
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
          </div>
        </nav>

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
            exit="hidden"
            transition={{ duration: 0.1 }}
            className="absolute right-0 top-20 w-40 bg-[#ff8000] text-white md:hidden">
            <nav className="flex flex-col items-center text-neutral-950 dark:text-neutral-50">
              <a href="#nosotros" className="link font-medium text-sm pt-4 pb-2" onClick={(e) => { handleLinkClick(e, "nosotros") }}>
                NOSOTROS
              </a>
              <a href="#market" className="link font-medium text-sm py-2" onClick={(e) => { handleLinkClick(e, "market") }}>
                MARKET
              </a>
              <a href="#ubicacion" className="link font-medium text-sm py-2" onClick={(e) => { handleLinkClick(e, "ubicacion") }}>
                UBICACIÓN
              </a>
              <a href="#contacto" className="link font-medium text-sm py-2" onClick={(e) => { handleLinkClick(e, "contacto") }}>
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
    </header>
  );
};

export default Navbar404;
