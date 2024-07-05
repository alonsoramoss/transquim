"use client";

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Socials } from '@/constants';
import ThemeToggle from './ThemeToggle';
import { slideInFromTop } from '@/utils/motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [theme, setTheme] = useState('light'); 
  const menuRef = useRef<HTMLDivElement>(null);

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
      window.scrollTo({ top: y, behavior: 'smooth' });
      closeMenu();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full h-20 fixed top-0 transition-colors duration-300 z-50 px-5 ${
          hasScrolled ? 'bg-[#ff8000] backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="w-full h-full flex items-center justify-between mx-auto">
          <div className="hidden md:flex items-center md:space-x-2">
            <a href="#inicio" className="flex items-center" onClick={(e) => handleLinkClick(e, 'inicio')}>
              <Image src="/img/transquim.webp" alt="logo" width={60} height={60} className={theme === 'dark' ? 'icon-dark' : 'icon-light'}/>
            </a>
          </div>

          <div className="flex md:hidden items-center justify-between w-full">
            <ThemeToggle setTheme={setTheme} /> 
            <a href="#inicio" className="flex items-center justify-center flex-grow" onClick={(e) => handleLinkClick(e, 'inicio')}>
              <Image src="/img/transquim.webp" alt="logo" width={60} height={60} className={theme === 'dark' ? 'icon-dark' : 'icon-light'}/>
            </a>
          </div>

          <div className="hidden md:flex md:w-[500px] h-full items-center justify-between mx-5">
            <nav className="flex items-center justify-between w-full h-auto px-5 text-gray-950 dark:text-gray-50">
              <a
                href="#inicio"
                className="font-semibold text-sm hover:text-blue-700 hover:underline transition duration-200"
                onClick={(e) => handleLinkClick(e, 'inicio')}
              >
                INICIO
              </a>
              <a
                href="#market"
                className="font-semibold text-sm hover:text-blue-700 hover:underline transition duration-200"
                onClick={(e) => handleLinkClick(e, 'market')}
              >
                MARKET
              </a>
              <a
                href="#ubicacion"
                className="font-semibold text-sm hover:text-blue-700 hover:underline transition duration-200"
                onClick={(e) => handleLinkClick(e, 'ubicacion')}
              >
                UBICACIÓN
              </a>
              <a
                href="#contacto"
                className="font-semibold text-sm hover:text-blue-700 hover:underline transition duration-200"
                onClick={(e) => handleLinkClick(e, 'contacto')}
              >
                CONTACTO
              </a>
            </nav>
          </div>

          <button className="flex flex-col w-10 bg-transparent gap-3 md:hidden" onClick={toggleMenu}>
            <div className={`bg-blue-700 h-0.5 w-full rounded transition-all duration-500 transform origin-left ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></div>
            <div className={`bg-blue-700 h-0.5 w-full rounded transition-all duration-500 transform origin-left ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`bg-blue-700 h-0.5 w-full rounded transition-all duration-500 transform origin-left ${isMenuOpen ? '-rotate-45' : ''}`}></div>
          </button>

          <div className="hidden md:flex items-center space-x-5">
            {Socials.map((social) => (
              <a href={social.url} target="_blank" key={social.name}>
                <Image
                  src={theme === 'dark' ? `/svg/light-${social.src}` : `/svg/dark-${social.src}`}
                  alt={social.name}
                  key={social.name}
                  width={social.size.width}
                  height={social.size.height}
                  className="hover:opacity-80 transition duration-200"
                />
              </a>
            ))}
            <ThemeToggle setTheme={setTheme} />
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
              className="absolute right-0 top-20 w-40 bg-[#ff8000] text-white md:hidden"
            >
              <nav className="flex flex-col items-center">
                <a href="#inicio" className="font-semibold text-sm py-2 hover:text-blue-700 hover:underline" onClick={(e) => { handleLinkClick(e, 'inicio'); closeMenu(); }}>
                  INICIO
                </a>
                <a href="#market" className="font-semibold text-sm py-2 hover:text-blue-700 hover:underline" onClick={(e) => { handleLinkClick(e, 'market'); closeMenu(); }}>
                  MARKET
                </a>
                <a href="#ubicacion" className="font-semibold text-sm py-2 hover:text-blue-700 hover:underline" onClick={(e) => { handleLinkClick(e, 'ubicacion'); closeMenu(); }}>
                  UBICACIÓN
                </a>
                <a href="#contacto" className="font-semibold text-sm py-2 hover:text-blue-700 hover:underline" onClick={(e) => { handleLinkClick(e, 'contacto'); closeMenu(); }}>
                  CONTACTO
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
