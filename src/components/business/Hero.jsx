
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Code2,
  Megaphone,
  Palette,
  ShieldCheck,
  Globe2,
} from 'lucide-react'

import { useTheme } from '../../context/ThemeContext'

function Hero() {
  const { theme } = useTheme()

  const technologies = [
    { label: 'Web Development', icon: Code2 },
    { label: 'Digital Marketing', icon: Megaphone },
    { label: 'Creative Design', icon: Palette },
    { label: 'IT Solutions', icon: ShieldCheck },
  ]

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-2 lg:px-8">

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Technology & Digital Solutions
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
            Building Your

            <span className="block bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Digital Future.
            </span>
          </h1>

          <p className={`mt-7 max-w-xl text-lg leading-8 ${theme.muted}`}>
            We help businesses and individuals grow with modern web development,
            digital marketing, creative design and technology solutions.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#services"
              className="flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Services
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#about"
              className={`flex items-center gap-2 rounded-full border ${theme.border} px-7 py-4 font-semibold transition hover:border-blue-500`}
            >
              Discover Us
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Highlights */}
          <div className={`mt-14 flex flex-wrap gap-8 border-t ${theme.border} pt-8`}>
            <div>
              <p className="text-2xl font-bold">Digital</p>
              <p className={`mt-1 text-sm ${theme.muted}`}>
                First Approach
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">Creative</p>
              <p className={`mt-1 text-sm ${theme.muted}`}>
                Thinking
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">Smart</p>
              <p className={`mt-1 text-sm ${theme.muted}`}>
                Solutions
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hero visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-blue-600/30 to-violet-600/30 blur-3xl" />

          <div className={`relative rounded-[32px] border ${theme.border} ${theme.surface} p-6 shadow-2xl sm:p-9`}>

            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm ${theme.muted}`}>
                  Welcome to
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Tezz Start
                </h2>
              </div>

              <div className="rounded-2xl bg-blue-600/15 p-4 text-blue-500">
                <Globe2 size={30} />
              </div>
            </div>

            <div className="my-8 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-700 p-7 text-white">
              <p className="text-sm text-blue-100">
                Our approach
              </p>

              <h3 className="mt-3 text-3xl font-bold leading-tight">
                Ideas into
                <br />
                Digital Reality.
              </h3>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm text-blue-100">
                  Technology meets creativity
                </span>

                <ArrowUpRight size={24} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {technologies.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 rounded-xl ${theme.surfaceAlt} p-4`}
                >
                  <Icon
                    size={20}
                    className="shrink-0 text-blue-500"
                  />

                  <span className="text-xs font-medium sm:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
