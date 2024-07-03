import { useState, useEffect } from 'react';

const ThemeToggle = ({ setTheme }: { setTheme: (theme: string) => void }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            setIsDarkMode(true);
            setTheme('dark');
        }
    }, [setTheme]);
    
    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
        
        document.documentElement.classList.toggle('dark', isDarkMode);
    };

    return (
        <div>
            <button
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
                onClick={toggleTheme}
            >
                <img
                    src={isDarkMode ? '/svg/sol.svg' : '/svg/luna.svg'}
                    alt={isDarkMode ? 'Modo claro' : 'Modo oscuro'}
                    className="w-6 h-6"
                />
            </button>
        </div>
    );
};

export default ThemeToggle;
