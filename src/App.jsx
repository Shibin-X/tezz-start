import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

import Hero from './components/business/Hero'
import About from './components/business/About'
import Services from './components/business/Services'
import Projects from './components/business/Projects'
import StudentInitiative from './components/business/StudentInitiative'
import WhyChooseUs from './components/business/WhyChooseUs'
import Contact from './components/business/Contact'

import { ThemeProvider, useTheme } from './context/ThemeContext'

function HomePage() {
  const { theme } = useTheme()

  return (
    <div
      className={`${theme.page} min-h-screen overflow-hidden transition-colors duration-300`}
    >
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <StudentInitiative />
        <WhyChooseUs />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}

export default App