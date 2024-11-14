import { useState, useEffect } from 'react';

const ThemeToggle = ({ setTheme }: { setTheme: (theme: string) => void }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            setIsDarkMode(true);
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            setTheme('light');
            document.documentElement.classList.remove('dark');
        }
    }, [setTheme]);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(prevState => !prevState);
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <div>
            <button aria-label="Cambiar tema" className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800" onClick={toggleTheme}>
                <img alt="Cambiar tema" src={isDarkMode ? '/svg/sol.svg' : '/svg/luna.svg'}/>
            </button>
        </div>
    );
};

export default ThemeToggle;
