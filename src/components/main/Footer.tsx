"use client"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const yOffset = -80;
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <div className="w-full bg-[#ff8000] text-black dark:text-white py-12 border-t-4 border-orange-700">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-sm md:text-base">
                    <div className="flex items-center justify-between">
                        <div className="max-w-52 md:max-w-full">
                            <p> &copy; {currentYear} Transformaciones Químicas del Perú </p>
                        </div>
                        <div>
                            <a href="#inicio" className="underline" onClick={(e) => handleLinkClick(e, "inicio")}>
                                Volver arriba
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer