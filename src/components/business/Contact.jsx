
import { useState } from 'react'
import {
  Mail,
  Phone,
  Send,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react'

import { useTheme } from '../../context/useTheme'

// Contact details
const WHATSAPP_NUMBER = '917305651107'
const EMAIL_ADDRESS = 'career@tezzstart.com'

const serviceOptions = [
  'Web Development',
  'Digital Marketing',
  'Graphic & Content Design',
  'Cybersecurity & IT',
  'Student Portfolio',
  'Other',
]

function Contact() {
  const { darkMode, theme } = useTheme()

  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const message = `
Hello Tezz Start!

Name: ${form.name}
Email: ${form.email}
Service: ${form.service}

Message:
${form.message}
    `

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    window.open(whatsappURL, '_blank', 'noopener,noreferrer')

    setForm({
      name: '',
      email: '',
      service: '',
      message: '',
    })
  }

  return (
    <section
      id="contact"
      className={`border-t ${theme.border} ${theme.surfaceAlt} py-24`}
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">

        {/* Contact Information */}
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-500">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Have a project

            <span className="block text-blue-500">
              in mind?
            </span>
          </h2>

          <p className={`mt-6 max-w-md leading-8 ${theme.muted}`}>
            Tell us about your requirements. Let's discuss how we can
            help you with your next digital project.
          </p>

          {/* Contact Details */}
          <div className="mt-10 space-y-7">

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-500/10 p-3 text-blue-500">
                <Mail size={22} />
              </div>

              <div>
                <p className={`mb-1 text-sm ${theme.muted}`}>
                  Email Address
                </p>

                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="font-medium transition hover:text-blue-500"
                >
                  {EMAIL_ADDRESS}
                </a>
              </div>

              <ArrowUpRight
                size={18}
                className={`ml-auto ${theme.muted}`}
              />
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-green-500/10 p-3 text-green-500">
                <MessageCircle size={22} />
              </div>

              <div>
                <p className={`mb-1 text-sm ${theme.muted}`}>
                  WhatsApp
                </p>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium transition hover:text-green-500"
                >
                  +91 73056 51107
                </a>
              </div>

              <ArrowUpRight
                size={18}
                className={`ml-auto ${theme.muted}`}
              />
            </div>

            {/* Location - Text Only */}
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-500/10 p-3 text-blue-500">
                <Phone size={22} />
              </div>

              <div>
                <p className={`mb-1 text-sm ${theme.muted}`}>
                  Service Area
                </p>

                <p className="font-medium">
                  Tamil Nadu, India
                </p>
              </div>
            </div>

          </div>

          {/* Contact CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Tezz Start! I would like to know more about your services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Chat on WhatsApp
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Enquiry Form */}
        <form
          onSubmit={handleSubmit}
          className={`rounded-3xl border ${theme.border} ${theme.surface} p-7 sm:p-9`}
        >
          <h3 className="mb-2 text-2xl font-bold">
            Send an Enquiry
          </h3>

          <p className={`mb-7 text-sm ${theme.muted}`}>
            Fill in your details and send your project enquiry directly
            through WhatsApp.
          </p>

          <div className="space-y-5">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-500 ${theme.input}`}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-500 ${theme.input}`}
              />
            </div>

            {/* Service Dropdown */}
            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-sm font-medium"
              >
                Interested Service
              </label>

              <select
                id="service"
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-500 ${theme.input}`}
                style={{
                  colorScheme: darkMode ? 'dark' : 'light',
                }}
              >
                <option value="" disabled>
                  Select a service
                </option>

                {serviceOptions.map((service) => (
                  <option
                    key={service}
                    value={service}
                    style={{
                      backgroundColor: darkMode
                        ? '#10182a'
                        : '#ffffff',
                      color: darkMode
                        ? '#ffffff'
                        : '#0f172a',
                    }}
                  >
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className={`w-full resize-none rounded-xl border px-4 py-3 outline-none transition focus:border-blue-500 ${theme.input}`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Enquiry
              <Send size={18} />
            </button>

            <p className={`text-center text-xs ${theme.muted}`}>
              Your enquiry will open in WhatsApp for submission.
            </p>

          </div>
        </form>

      </div>
    </section>
  )
}

export default Contact
