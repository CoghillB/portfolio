import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink-soft transition-colors hover:bg-card-hover hover:text-ink"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default ThemeToggle
