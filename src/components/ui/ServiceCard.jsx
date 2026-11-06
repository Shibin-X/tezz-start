
import { useTheme } from '../../context/ThemeContext'

function ServiceCard({ service, index = 0 }) {
  const { theme } = useTheme()

  const Icon = service.icon

  return (
    <div
      className={`group rounded-3xl border ${theme.border} ${theme.surface} p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Icon and number */}
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-blue-500/10 p-4 text-blue-500">
          <Icon size={28} />
        </div>

        <span className={`text-sm ${theme.muted}`}>
          {service.number}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-7 text-2xl font-bold">
        {service.title}
      </h3>

      {/* Description */}
      <p className={`mt-4 leading-7 ${theme.muted}`}>
        {service.description}
      </p>

      {/* Tags */}
      <div className="mt-7 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-500/10 px-3 py-2 text-xs font-medium text-blue-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ServiceCard
