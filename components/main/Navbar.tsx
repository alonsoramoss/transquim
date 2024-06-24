"use client"

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    const yOffset = -80;
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

  return (
    <div className="w-full h-24 fixed top-0 bg-gradient-to-b from-transparent to-[#0e3d21a1] backdrop-blur-md shadow-lg z-50 px-5">
      <div className="w-full h-full flex items-center justify-between mx-auto px-4 md:px-6">
        <div className="hidden md:flex items-center md:space-x-2">
          <a
            href="#descripcion"
            className="flex items-center" onClick={(e) => handleLinkClick(e, 'descripcion')}
          >
            <Image
              src="/sonolasr.webp"
              alt="logo"
              width={70}
              height={70}
              className=" hover:rotate-180 transform transition-transform duration-500 rounded-full"
            />
          </a>
        </div>

        <div className="flex md:hidden items-center justify-center flex-grow">
          <a
            href="#descripcion"
            className="flex items-center" onClick={(e) => handleLinkClick(e, 'descripcion')}
          >
            <Image
              src="/sonolasr.webp"
              alt="logo"
              width={70}
              height={70}
              className=" hover:rotate-180 transform transition-transform duration-500 rounded-full"
            />
            <span className="ml-1 md:block text-white font-black text-3xl">
              SonolaSR
            </span>
          </a>
        </div>

        <div className="hidden md:flex md:w-[500px] h-full items-center justify-between mx-5">
          <div className="flex items-center justify-between w-full h-auto border border-[#1cb6619b] bg-[#0e3d21a1] px-5 py-2.5 rounded-full text-white">
            <a href="#descripcion" className=" font-semibold text-sm hover:text-green-400 transform hover:scale-110 transition duration-200"
            onClick={(e) => handleLinkClick(e, 'descripcion')}>
              DESCRIPCION
            </a>
            <a href="#suscribete" className=" font-semibold text-sm hover:text-green-400 transform hover:scale-110 transition duration-200"
            onClick={(e) => handleLinkClick(e, 'suscribete')}>
              SUSCRIBETE
            </a>
            <a href="#video" className=" font-semibold text-sm hover:text-green-400 transform hover:scale-110 transition duration-200"
            onClick={(e) => handleLinkClick(e, 'video')}>
              VIDEOS
            </a>
          </div>
        </div>

        <button
          className="flex flex-col w-12 border-0 bg-transparent gap-3.5 md:hidden"
          onClick={toggleMenu}
        >
          <div className={`bg-green-600 h-0.5 w-full rounded transition-all duration-500 transform origin-left ${isMenuOpen ? "rotate-45" : ""}`}></div>
          <div className={`bg-green-600 h-0.5 w-full rounded transition-all duration-500 transform origin-left ${isMenuOpen ? "opacity-0" : ""}`}></div>
          <div className={`bg-green-600 h-0.5 w-full rounded transition-all duration-500 transform origin-left ${isMenuOpen ? "-rotate-45" : ""}`}></div>
        </button>

        <div className="hidden md:flex items-center space-x-5">
          {Socials.map((social) => (
            <a href={social.url} target="_blank" key={social.name}>
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={social.size.width}
              height={social.size.height}
              className=" hover:opacity-80 transition duration-200"
            />
            </a>
          ))}
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
            className="absolute right-2 top-24 w-40 bg-[#0e3d21a1] border border-[#1cb6619b] rounded-lg text-white md:hidden"
          >
            <div className="flex flex-col items-center">
              <a href="#descripcion" className=" font-semibold text-sm py-2 hover:text-green-400 transform hover:scale-105 transition duration-200" 
                onClick={(e) => { handleLinkClick(e, 'descripcion'); closeMenu(); }}>
                DESCRIPCION
              </a>
              <a href="#suscribete" className=" font-semibold text-sm py-2 hover:text-green-400 transform hover:scale-105 transition duration-200" 
                onClick={(e) => { handleLinkClick(e, 'suscribete'); closeMenu(); }}>
                SUSCRIBETE
              </a>
              <a href="#video" className=" font-semibold text-sm py-2 hover:text-green-400 transform hover:scale-105 transition duration-200" 
                onClick={(e) => { handleLinkClick(e, 'video'); closeMenu(); }}>
                VIDEOS
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Navbar;
