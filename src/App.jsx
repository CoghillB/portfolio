import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Backdrop from './components/Backdrop'
import ScrollProgress from './components/fx/ScrollProgress'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import Hero from './components/sections/Hero'
import MarqueeBand from './components/MarqueeBand'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import WebDev from './components/sections/WebDev'
import './index.css'

const MainLayout = ({ children }) => (
  <>
    <Backdrop />
    <ScrollProgress />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
)

const Portfolio = () => (
  <>
    <Hero />
    <MarqueeBand />
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
