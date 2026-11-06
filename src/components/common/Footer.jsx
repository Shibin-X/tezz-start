
import { Layers3 } from 'lucide-react'
import { useTheme } from '../../context/useTheme'

const footerLinks = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Projects', '#projects'],
  ['Students', '#students'],
  ['Contact', '#contact'],
]

function Footer() {
  const { theme } = useTheme()

  return (
    <footer className={`border-t ${theme.border} py-10`}>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">

        {/* Brand */}
        <div>
          <a href="#home" className="flex items-center gap-2">
            <Layers3 className="text-blue-500" size={22} />

            <span className="text-xl font-bold">
              TEZZ<span className="text-blue-500">START</span>
            </span>
          </a>

          <p className={`mt-2 text-sm ${theme.muted}`}>
            Technology & Digital Solutions.
          </p>
        </div>

        {/* Footer links */}
        <div className="flex flex-wrap gap-5">
          {footerLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`text-sm ${theme.muted} transition hover:text-blue-500`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className={`text-sm ${theme.muted}`}>
          © {new Date().getFullYear()} Tezz Start. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
