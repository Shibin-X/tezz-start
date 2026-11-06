
import { CheckCircle2, ArrowUpRight } from 'lucide-react'

const portfolioFeatures = [
  'Personal portfolio website',
  'Multiple design templates',
  'Light and dark themes',
  'Skills and project showcase',
  'Personal subdomain',
  'Professional online presence',
]

function StudentInitiative() {
  return (
    <section
      id="students"
      className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-violet-900 py-24 text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border-[50px] border-white/5" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
              Student Portfolio Initiative
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Your skills deserve

              <span className="block text-blue-200">
                a professional stage.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-blue-100">
              Build your personal portfolio website and showcase
              your skills, projects, education and achievements
              in one place.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-blue-800 transition hover:bg-blue-100"
            >
              Get Your Portfolio
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Features */}
          <div className="grid gap-4 sm:grid-cols-2">
            {portfolioFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-4"
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-cyan-300"
                />

                <span className="text-sm font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default StudentInitiative
