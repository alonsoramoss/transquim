import { useState, useEffect } from 'react';

const ThemeToggle = ({ setTheme }: { setTheme: (theme: string) => void }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            setIsDarkMode(true);
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [setTheme]);
    
    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);

        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <div>
            <button
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
                onClick={toggleTheme}
            >
                <img
                    src={isDarkMode ? '/svg/luna.svg' : '/svg/sol.svg'}
                    alt={isDarkMode ? 'Modo oscuro' : 'Modo claro'}
                    className="w-6 h-6"
                />
            </button>
        </div>
    );
};

export default ThemeToggle;
