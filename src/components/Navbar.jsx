import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { nav, profile } from '../data/content'
import { ThemeToggle } from './ThemeToggle'

const WEBDEV = { label: 'Web Dev', to: '/web-development' }

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy, home route only.
  useEffect(() => {
    if (!onHome) {
      setActive(location.pathname === WEBDEV.to ? 'webdev' : '')
      return
    }
    const ids = nav.map((n) => n.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [onHome, location.pathname])

  // When landing on the home route with a hash (e.g. after navigating from the
  // WebDev page), smooth-scroll to that section.
  useEffect(() => {
    if (onHome && location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
    }
  }, [onHome, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const goToSection = (href) => (e) => {
    const id = href.slice(1)
    if (onHome) {
      e.preventDefault()
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      e.preventDefault()
      navigate(`/${href}`) // e.g. "/#about"
    }
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled ? 'glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]' : 'border border-transparent'
        }`}
      >
        <Link to="/" className="group flex items-center gap-2 font-display text-sm font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent text-[13px] font-bold text-[#0a0a0a] shadow-[0_0_20px_var(--color-accent-glow)]">
            BC
          </span>
          <span className="text-ink">
            Coghill<span className="text-ink-muted">.dev</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const isActive = onHome && active === item.href.slice(1)
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={goToSection(item.href)}
                  className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors ${
                    isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-card-hover ring-1 ring-line"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            )
          })}
          <li>
            <Link
              to={WEBDEV.to}
              className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors ${
                active === 'webdev' ? 'text-ink' : 'text-ink-soft hover:text-ink'
              }`}
            >
              {active === 'webdev' && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-lg bg-card-hover ring-1 ring-line"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              {WEBDEV.label}
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={goToSection('#contact')}
            className="ml-1 hidden rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-base transition-transform hover:scale-[1.03] lg:inline-block"
          >
            Let&apos;s talk
          </a>

          {/* Mobile toggle */}
          <button
            className="grid h-10 w-10 place-items-center rounded-lg text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass absolute inset-x-4 top-[4.75rem] z-40 rounded-2xl p-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={goToSection(item.href)}
                    className="block rounded-lg px-4 py-3 text-base text-ink-soft transition-colors hover:bg-card-hover hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to={WEBDEV.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base text-ink-soft transition-colors hover:bg-card-hover hover:text-ink"
                >
                  {WEBDEV.label}
                </Link>
              </li>
            </ul>
            <div className="mt-3 flex items-center gap-2 border-t border-line pt-3">
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-card-2 py-2.5 text-center text-sm text-ink">
                <Github size={16} /> GitHub
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-card-2 py-2.5 text-center text-sm text-ink">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
