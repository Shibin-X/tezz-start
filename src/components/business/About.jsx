
import { ArrowUpRight } from 'lucide-react'
import { useTheme } from '../../context/useTheme'

function About() {
  const { theme } = useTheme()

  return (
    <section
      id="about"
      className={`border-t ${theme.border} py-24`}
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">

        {/* Section heading */}
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-500">
            About Tezz Start
          </p>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Technology that

            <span className="block text-blue-500">
              moves you forward.
            </span>
          </h2>
        </div>

        {/* Description */}
        <div>
          <p className={`text-lg leading-8 ${theme.muted}`}>
            Tezz Start is a technology and digital solutions initiative
            focused on helping businesses, students and individuals
            build a stronger digital presence.
          </p>

          <p className={`mt-5 leading-8 ${theme.muted}`}>
            Our approach combines modern technology, creative thinking
            and practical solutions. From websites to digital branding,
            we aim to make technology useful and accessible.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-500 transition-all hover:gap-4"
          >
            Work with us
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  )
}

export default About
