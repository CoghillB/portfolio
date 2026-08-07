import { useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
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
import { normalizePath } from './routes'
import './index.css'

// Scrolls to the URL hash target once loading finishes. This is what makes a
// direct landing on a deep link like /#pricing (e.g. a Google Ads sitelink)
// scroll to the right section. On first load the browser's
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

const ROUTE_META = {
  '/': {
    title: 'Web Design for Small Business & Trades | Kelowna, BC',
    description:
      'Custom websites for small businesses and trades in Kelowna and across Canada. Fixed price in writing before I start, one business day reply, and you deal with me directly.',
  },
  '/portfolio': {
    title: 'Brayden Coghill — Software Developer | Kelowna, BC',
    description:
      'Software developer in Kelowna, BC. I build web applications end to end, from React and TypeScript interfaces to the C#, Node, and PostgreSQL behind them.',
  },
}

// One static index.html serves every route, so its <title> and description
// describe the root (web design) page — that's what a crawler sees before any
// JS runs. Swap them once React knows which route is actually active.
function DocumentMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    // normalizePath: production serves /portfolio/ with a trailing slash.
    const meta = ROUTE_META[normalizePath(pathname)] ?? ROUTE_META['/']
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
  }, [pathname])

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

// Section ids that only ever existed on the developer portfolio, back when it
// lived at the site root. Anything still pointing at e.g. coghilldev.com/#about
// (an older résumé PDF, a LinkedIn profile link) is forwarded to the same
// anchor on /portfolio rather than landing on the web-design page with a hash
// that matches nothing. "#contact" is deliberately absent — both routes render
// the same contact form, so it resolves correctly wherever it lands.
const LEGACY_PORTFOLIO_HASHES = new Set(['home', 'about', 'experience', 'skills', 'work'])

const BusinessHome = () => {
  const { hash } = useLocation()
  const id = decodeURIComponent(hash.slice(1))

  if (LEGACY_PORTFOLIO_HASHES.has(id)) {
    return <Navigate to={`/portfolio${hash}`} replace />
  }
  return (
    <MainLayout>
      <WebDev />
    </MainLayout>
  )
}

// The web-design page moved from /web-development to the site root. GitHub
// Pages can't issue a 301, so the old path stays a real HTTP 200 route (see
// scripts/generate-spa-fallbacks.mjs) and redirects on the client, carrying its
// hash and query along so existing Google Ads sitelinks and Google Business
// Profile links like /web-development#pricing still land on the right section.
const LegacyWebDevRedirect = () => {
  const { hash, search } = useLocation()
  return <Navigate to={{ pathname: '/', search, hash }} replace />
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    // reducedMotion="user" makes every Framer Motion animation honor the
    // OS-level prefers-reduced-motion setting.
    <MotionConfig reducedMotion="user">
      <Router>
        <HashScroll ready={isLoaded} />
        <DocumentMeta />
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Routes>
            <Route path="/" element={<BusinessHome />} />
            <Route path="/portfolio" element={<MainLayout><Portfolio /></MainLayout>} />
            <Route path="/web-development" element={<LegacyWebDevRedirect />} />
            {/* Unknown paths (typos, stale links) land on the business page
                rather than an empty shell. */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </MotionConfig>
  )
}

export default App
