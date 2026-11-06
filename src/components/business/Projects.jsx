
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { projects } from '../../data/projects'

function Projects() {
  const { theme } = useTheme()

  return (
    <section
      id="projects"
      className={`border-t ${theme.border} py-24`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-500">
            What We're Building
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Projects & Initiatives
          </h2>

          <p className={`mt-5 max-w-xl leading-7 ${theme.muted}`}>
            Explore the areas where we apply technology and creative
            thinking to solve real-world problems.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className={`rounded-3xl border ${theme.border} ${theme.surface} p-8 transition hover:-translate-y-2 hover:border-blue-500/50`}
            >
              <p className="text-sm font-bold text-blue-500">
                {project.number}
              </p>

              <h3 className="mt-10 text-2xl font-bold">
                {project.title}
              </h3>

              <p className={`mt-4 min-h-20 leading-7 ${theme.muted}`}>
                {project.description}
              </p>

              <span className="mt-6 inline-block rounded-full bg-blue-500/10 px-4 py-2 text-xs text-blue-500">
                {project.category}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
