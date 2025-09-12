const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#ff8000] text-black dark:text-white border-t-4 border-orange-700">
            <div className="max-w-[1440px] mx-auto py-12 px-5 text-sm md:text-base">
                <p> &copy; {currentYear} Transformaciones Químicas del Perú </p>
            </div>
        </footer>
    )
}

export default Footer
