import { useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
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

// Scrolls to the URL hash target once loading finishes. This is what makes a
// direct landing on a deep link like /web-development#services (e.g. a Google
// Ads sitelink) scroll to the right section. On first load the browser's
// native fragment jump fires before React has painted the section, so we
// re-run the scroll after `ready` flips. Also handles in-app hash navigation.
function HashScroll({ ready }) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!ready || !hash) return
    const id = decodeURIComponent(hash.slice(1))
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const padTop = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0
    let raf
    let timer
    // First attempt: smooth for polish (instant under reduced motion).
    raf = requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    })
    // Guaranteed fallback: if the first attempt didn't land the target near the
    // top (first-load races: loading screen, StrictMode remounts, late layout),
    // snap to it instantly. No-op when the smooth scroll already arrived.
    timer = setTimeout(() => {
      const el = document.getElementById(id)
      if (el && Math.abs(el.getBoundingClientRect().top - padTop) > 12) {
        el.scrollIntoView({ block: 'start' })
      }
    }, 1000)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timer)
    }
  }, [ready, pathname, hash])

  return null
}

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
        <HashScroll ready={isLoaded} />
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
