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
      window.scrollTo({ top: y, behavior: 'smooth' });
      closeMenu();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          buttonRef.current &&!buttonRef.current.contains(event.target as Node)) {
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
            <a href="/">
              <Image src="/img/transquim.webp" alt="logo" width={60} height={60} className={theme === 'dark' ? 'icon-dark' : 'icon-light'}/>
            </a>
          </div>

          <div className="flex md:hidden items-center justify-between w-full">
            <ThemeToggle setTheme={setTheme}/>
            <div className="flex items-center justify-center flex-grow">
              <a href="/">
                <Image src="/img/transquim.webp" alt="logo" width={60} height={60} className={theme === 'dark' ? 'icon-dark' : 'icon-light'}/>
              </a>
            </div>
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

          <button
            ref={buttonRef}
            className="relative flex flex-col w-10 h-10 bg-transparent justify-center items-center gap-2 md:hidden" onClick={toggleMenu}>
            <span className={`absolute bg-blue-700 dark:bg-blue-600 h-0.5 w-full rounded transition-all duration-500 ${isMenuOpen ? 'transform rotate-45 top-1/2' : 'top-2'}`}></span>
            <span className={`absolute bg-blue-700 dark:bg-blue-600 h-0.5 w-full rounded transition-all duration-500 ${isMenuOpen ? 'opacity-0' : 'top-1/2'}`}></span>
            <span className={`absolute bg-blue-700 dark:bg-blue-600 h-0.5 w-full rounded transition-all duration-500 ${isMenuOpen ? 'transform -rotate-45 top-1/2' : 'top-8'}`}></span>
          </button>

          <div className="hidden md:flex items-center space-x-5">
            {Socials.map((social) => (
              <a href={social.url} target="_blank" key={social.name} className="relative group">
                <Image
                  src={theme === 'dark' ? `/svg/light-${social.src}` : `/svg/dark-${social.src}`}
                  alt={social.name}
                  key={social.name}
                  width={social.size.width}
                  height={social.size.height}
                  className="hover:opacity-80 transition duration-200"
                />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 text-sm bg-black text-white rounded px-2 py-1 transition-opacity duration-300">
                  {social.name}
                </span>
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
              <nav className="flex flex-col items-center text-gray-950 dark:text-gray-50">
                <a href="#inicio" className="font-semibold text-sm pt-4 pb-2 hover:text-blue-700 hover:underline" onClick={(e) => { handleLinkClick(e, 'inicio'); closeMenu(); }}>
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
              <div className="flex py-4 justify-center">
                {Socials.map((social) => (
                  <a href={social.url} target="_blank" key={social.name} className='relative group mx-3'>
                    <Image
                      src={theme === 'dark' ? `/svg/light-${social.src}` : `/svg/dark-${social.src}`}
                      alt={social.name}
                      key={social.name}
                      width={social.size.width}
                      height={social.size.height}
                      className="hover:opacity-80 transition duration-200"
                    />
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 text-sm bg-black text-white rounded px-2 py-1 transition-opacity duration-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
