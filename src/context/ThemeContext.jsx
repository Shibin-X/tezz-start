
import { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => {
    setDarkMode((previous) => !previous)
  }

  const theme = darkMode
    ? {
        page: 'bg-[#080d1b] text-white',
        surface: 'bg-[#10182a]',
        surfaceAlt: 'bg-[#0d1526]',
        border: 'border-white/10',
        muted: 'text-slate-400',
        heading: 'text-white',
        input: 'bg-white/5 border-white/10 text-white placeholder:text-slate-500',
        nav: 'bg-[#080d1b]/85',
      }
    : {
        page: 'bg-slate-50 text-slate-900',
        surface: 'bg-white',
        surfaceAlt: 'bg-slate-100',
        border: 'border-slate-200',
        muted: 'text-slate-600',
        heading: 'text-slate-950',
        input: 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400',
        nav: 'bg-white/90',
      }

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        toggleTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }

  return context
}
