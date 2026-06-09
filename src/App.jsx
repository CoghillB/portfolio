import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuroraBackground from './components/AuroraBackground'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import Hero from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import WebDev from './components/sections/WebDev'
import './index.css'

const MainLayout = ({ children }) => (
  <>
    <AuroraBackground />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
)

const Portfolio = () => (
  <>
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Contact />
  </>
)

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    // reducedMotion="user" makes every Framer Motion animation honor the
    // OS-level prefers-reduced-motion setting.
    <MotionConfig reducedMotion="user">
      <Router>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Routes>
            <Route path="/" element={<MainLayout><Portfolio /></MainLayout>} />
            <Route path="/web-development" element={<MainLayout><WebDev /></MainLayout>} />
          </Routes>
        </div>
      </Router>
    </MotionConfig>
  )
}

export default App
