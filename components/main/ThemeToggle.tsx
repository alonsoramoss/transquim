import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { IoSunny, IoMoon } from "react-icons/io5";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <div>
      <button
        title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        className="p-2 rounded-full bg-neutral-800 dark:bg-neutral-200 text-lg"
        onClick={toggleTheme}>
        {isDarkMode ? (
          <IoMoon className="text-white dark:text-black"/>
        ) : (
          <IoSunny className="text-white dark:text-black"/>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
