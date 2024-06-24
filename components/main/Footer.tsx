import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="w-full bg-[#02120964] text-gray-200 shadow-lg py-16 border-t-4 border-green-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-sm md:text-base">
                    <div className="flex items-center justify-between">
                        &copy; {currentYear} SonolaSR 
                        <div className="flex flex-col md:flex-row  justify-center ">                        
                        <a href="https://youtube.com/@SonolaSR" target="_blank"
                        className="flex items-center mx-[10px] mb-3 md:mb-0 hover:opacity-80 transition duration-200">
                            <FaYoutube className="h-6 w-6 mr-1"/>
                            Youtube
                        </a>  
                        <a href="https://instagram.com/sonolasr" target="_blank"
                        className="flex items-center mx-[10px] hover:opacity-80 transition duration-200">
                            <FaInstagram className="h-6 w-6 mr-1"/>
                            Instagram    
                        </a>
                    </div>
                        <a href="#descripcion" className="underline">
                            Ir a Inicio
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer