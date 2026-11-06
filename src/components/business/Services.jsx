
import { motion } from 'framer-motion'

import { useTheme } from '../../context/ThemeContext'
import { services } from '../../data/services'

import ServiceCard from '../ui/ServiceCard'

function Services() {
  const { theme } = useTheme()

  return (
    <section
      id="services"
      className={`border-t ${theme.border} ${theme.surfaceAlt} py-24`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Section heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-500">
              What We Do
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Our Services
            </h2>
          </div>

          <p className={`max-w-md leading-7 ${theme.muted}`}>
            Digital services designed to help you build, grow and
            manage your online presence.
          </p>

        </div>

        {/* Service cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <ServiceCard
                service={service}
                index={index}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
