"use client"

import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const yOffset = -80;
          const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      };

    return (
        <div className="w-full bg-[#ff6600] text-gray-200 py-12 border-t-4 border-orange-900">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-sm md:text-base">
                    <div className="flex items-center justify-between">
                        <div className="max-w-52 md:max-w-full">
                            &copy; {currentYear} Transformaciones Químicas del Perú
                        </div>
                        <div>
                            <a href="#inicio" className="underline" onClick={(e) => handleLinkClick(e, 'inicio')}>
                                Ir a Inicio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer