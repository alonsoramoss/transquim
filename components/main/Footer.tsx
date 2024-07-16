import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="w-full bg-[#ff6600] text-gray-200 py-12 border-t-4 border-orange-900">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-sm md:text-base">
                    <div className="flex items-center justify-between">
                        <div className="max-w-52 md:max-w-full">
                            &copy; {currentYear} Transformaciones Químicas del Perú
                        </div>
                        <div>
                            <a href="/" className="underline">
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