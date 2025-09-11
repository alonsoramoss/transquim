export const scrollToId = (id: string, offset: number = -80) => {
    const attemptScroll = () => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: "smooth" });
        } else {
        requestAnimationFrame(attemptScroll);
        }
    };
    attemptScroll();
};
