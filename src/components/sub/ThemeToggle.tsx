import { useTheme } from "next-themes"
import { IoMoon, IoSunny } from "react-icons/io5"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  
  const isDarkMode = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="p-2 rounded-full bg-neutral-800 dark:bg-neutral-200 text-lg"
    >
      <IoSunny className="block dark:hidden text-white" />
      <IoMoon className="hidden dark:block text-black" />
    </button>
  )
}

export default ThemeToggle
