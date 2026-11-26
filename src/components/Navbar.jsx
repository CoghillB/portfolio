import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
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
  const onSection = isSectionRoute(location.pathname)

  const links = onPortfolio ? portfolioNav : businessNav
  const crossLink = onPortfolio
    ? { label: 'Website Services', to: BUSINESS_ROUTE }
    : { label: 'Dev Portfolio', to: PORTFOLIO_ROUTE }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setActive('')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -52% 0px' },
    )
    links.forEach((n) => {
      const el = document.getElementById(n.href.slice(1))
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [links])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const sectionHref = (href) => (onSection ? href : `${BUSINESS_ROUTE}${href}`)

  const goToSection = (href) => (e) => {
    e.preventDefault()
    setOpen(false)
    if (!onSection) {
      navigate(`${BUSINESS_ROUTE}${href}`)
      return
    }
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-250 ${
        scrolled
          ? 'glass border-line'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand stamp */}
        <Link
          to={onPortfolio ? PORTFOLIO_ROUTE : BUSINESS_ROUTE}
          className="group flex items-center gap-2.5"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-accent font-mono text-xs font-bold tracking-tight text-[#0a0a0b] transition-transform duration-200 group-hover:-rotate-6">
            BC
          </span>
          <span className="font-display text-[17px] font-extrabold tracking-[-0.03em] text-ink">
            Coghill<span className="text-accent-3">.dev</span>
          </span>
        </Link>

        {/* Desktop links — crisp flat nav with sliding acid underline */}
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((item) => {
            const isActive = active === item.href.slice(1)
            return (
              <li key={item.href}>
                <a
                  href={sectionHref(item.href)}
                  onClick={goToSection(item.href)}
                  className={`relative py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-accent-3"
                      transition={{ type: 'spring', stiffness: 450, damping: 34 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2.5">
          <Link
            to={crossLink.to}
            className="hidden items-center gap-1 rounded-md border border-line bg-card/70 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-ink-soft transition-colors hover:border-line-strong hover:text-ink lg:inline-flex"
          >
            {crossLink.label}
            <ArrowUpRight size={13} className="text-accent-3" />
          </Link>

          <ThemeToggle />

          <a
            href={sectionHref('#contact')}
            onClick={goToSection('#contact')}
            className="btn-accent hidden items-center gap-1.5 rounded-md px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider lg:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-md border border-line bg-card text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="glass max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line px-4 py-5 sm:px-6 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((item) => (
                <li key={item.href}>
                  <a
                    href={sectionHref(item.href)}
                    onClick={goToSection(item.href)}
                    className="block rounded-md px-3 py-2.5 text-[16px] font-medium text-ink-soft transition-colors hover:bg-card-hover hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 border-t border-line pt-2">
                <Link
                  to={crossLink.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-md px-3 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-accent-3 hover:bg-card-hover"
                >
                  <span>{crossLink.label}</span>
                  <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>

            <a
              href={sectionHref('#contact')}
              onClick={goToSection('#contact')}
              className="btn-accent mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-md px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider"
            >
              Let&apos;s talk
              <ArrowUpRight size={14} />
            </a>

            <div className="mt-3 flex items-center gap-2 border-t border-line pt-3">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-md border border-line bg-card py-2.5 text-sm font-medium text-ink"
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-md border border-line bg-card py-2.5 text-sm font-medium text-ink"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
