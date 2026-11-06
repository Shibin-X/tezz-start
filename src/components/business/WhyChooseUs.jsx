
import { Users, Monitor, Zap } from 'lucide-react'
import { useTheme } from '../../context/useTheme'

const initiatives = [
  {
    id: 1,
    icon: Users,
    title: 'Student-Focused',
    label: 'For Students',
    description:
      'Helping students build professional portfolios and present their skills, projects and achievements.',
  },
  {
    id: 2,
    icon: Monitor,
    title: 'Business-Oriented',
    label: 'For Businesses',
    description:
      'Helping businesses establish a strong digital presence through websites and digital solutions.',
  },
  {
    id: 3,
    icon: Zap,
    title: 'Technology-Driven',
    label: 'For Everyone',
    description:
      'Combining technology and creative thinking to develop practical digital solutions.',
  },
]

function WhyChooseUs() {
  const { theme } = useTheme()

  return (
    <section className={`border-t ${theme.border} py-24`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-500">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Our Approach
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {initiatives.map((item) => {
            const Icon = item.icon

            return (
              <div key={item.id} className="text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                  <Icon size={28} />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-blue-500">
                  {item.label}
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  {item.title}
                </h3>

                <p className={`mx-auto mt-4 max-w-sm leading-7 ${theme.muted}`}>
                  {item.description}
                </p>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs
