import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { businessNav, portfolioNav, profile } from '../data/content'
import { BUSINESS_ROUTE, PORTFOLIO_ROUTE, isPortfolioRoute, isSectionRoute } from '../routes'
import { ThemeToggle } from './ThemeToggle'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const onPortfolio = isPortfolioRoute(location.pathname)

  // Standalone pages like /privacy render no sections at all, so the anchors
  // below have to leave the page instead of scrolling within it.
  const onSection = isSectionRoute(location.pathname)

  // Both routes are single scrolling pages, so the nav shows whichever set of
  // section anchors belongs to the one you're on.
  const links = onPortfolio ? portfolioNav : businessNav

  // The other audience's door. Kept visible on both routes but styled as a
  // route change rather than another section, so the business page never
  // hides the fact that there's a developer résumé behind it.
  const crossLink = onPortfolio
    ? { label: 'Website Services', to: BUSINESS_ROUTE }
    : { label: 'Dev Portfolio', to: PORTFOLIO_ROUTE }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy over the active route's own sections.
  useEffect(() => {
    setActive('')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach((n) => {
      const el = document.getElementById(n.href.slice(1))
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [links])

  // Hash landings (both routes) are handled centrally by <HashScroll> in App,
  // which waits for the loading screen so the target section exists first.

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // On /privacy the section anchors belong to the business page, so they have
  // to be written as real cross-route URLs — otherwise "#pricing" resolves
  // against /privacy, where nothing has that id, and copying or middle-clicking
  // the link yields an address that goes nowhere.
  const sectionHref = (href) => (onSection ? href : `${BUSINESS_ROUTE}${href}`)

  const goToSection = (href) => (e) => {
    e.preventDefault()
    setOpen(false)
    // Off a section route there is nothing on this page to scroll to. Navigate
    // to the business page carrying the hash and let <HashScroll> in App.jsx
    // do the scrolling once the sections have actually mounted.
    if (!onSection) {
      navigate(`${BUSINESS_ROUTE}${href}`)
      return
    }
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
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
          {links.map((item) => {
            const isActive = active === item.href.slice(1)
            return (
              <li key={item.href}>
                <a
                  href={sectionHref(item.href)}
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
          <li className="ml-2 border-l border-line pl-3">
            <Link
              to={crossLink.to}
              className="rounded-lg border border-line px-3 py-1.5 text-xs text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
            >
              {crossLink.label}
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a
            href={sectionHref('#contact')}
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
              {links.map((item) => (
                <li key={item.href}>
                  <a
                    href={sectionHref(item.href)}
                    onClick={goToSection(item.href)}
                    className="block rounded-lg px-4 py-3 text-base text-ink-soft transition-colors hover:bg-card-hover hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-1 border-t border-line pt-1">
                <Link
                  to={crossLink.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-ink-muted transition-colors hover:bg-card-hover hover:text-ink"
                >
                  {crossLink.label}
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
