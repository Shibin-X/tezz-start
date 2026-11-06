
import { useState } from 'react'
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowUpRight,
} from 'lucide-react'

import { useTheme } from '../../context/useTheme'

const navLinks = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Projects', '#projects'],
  ['Students', '#students'],
  ['Contact', '#contact'],
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const { darkMode, toggleTheme, theme } = useTheme()

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b ${theme.border} ${theme.nav} backdrop-blur-xl`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
       

<a href="/" className="flex items-center shrink-0">
  <img
    src={
      darkMode
        ? '/logo/logo-dark.webp'
        : '/logo/logo-light.webp'
    }
    alt="Tezz Start - Media & Solutions"
    width="497"
    height="146"
    className="w-[155px] sm:w-[180px] h-auto object-contain"
    loading="eager"
    fetchPriority="high"
  />
</a>


        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`${theme.muted} text-sm font-medium transition hover:text-blue-500`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`rounded-full border ${theme.border} p-2 transition hover:text-blue-500`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-3 lg:hidden">

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`rounded-full border ${theme.border} p-2`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="p-2"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          className={`border-t ${theme.border} ${theme.surface} px-5 py-5 lg:hidden`}
        >
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              className={`block py-3 ${theme.muted} transition hover:text-blue-500`}
            >
              {label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  )
}

export default Navbar
