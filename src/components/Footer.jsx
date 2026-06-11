import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, ArrowUp } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { profile, nav } from '../data/content'

export const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  const goToSection = (href) => (e) => {
    const id = href.slice(1)
    e.preventDefault()
    if (onHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/${href}`)
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-line px-6 py-12">
      {/* Giant wordmark rising out of the page edge; fills with gradient on hover */}
      <div aria-hidden="true" className="pointer-events-none relative -mx-6 mb-2 flex justify-center overflow-hidden">
        <motion.span
          initial={{ y: '45%', opacity: 0 }}
          whileInView={{ y: '12%', opacity: 1 }}
          viewport={{ once: true, margin: '0px 0px -40px 0px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-stroke pointer-events-auto select-none whitespace-nowrap font-display text-[13.5vw] font-bold leading-none transition-colors duration-500 hover:text-ink sm:text-[10vw]"
        >
          COGHILL.DEV
        </motion.span>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link to="/" className="font-display text-lg font-semibold text-ink">
            Coghill<span className="text-ink-muted">.dev</span>
          </Link>
          <p className="mt-2 max-w-xs text-sm text-ink-muted">{profile.intro}</p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={goToSection(n.href)}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {[
            { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
            { href: profile.socials.github, icon: Github, label: 'GitHub' },
            { href: profile.socials.linkedin, icon: Linkedin, label: 'LinkedIn' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-xl border border-line text-ink-soft transition-colors hover:border-accent/40 hover:bg-card-hover hover:text-ink"
            >
              <Icon size={18} />
            </a>
          ))}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-xl border border-line text-ink-soft transition-colors hover:border-accent/40 hover:bg-card-hover hover:text-ink"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-5xl border-t border-line pt-6 text-center text-xs text-ink-muted">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind &amp; Framer Motion.
      </div>
    </footer>
  )
}

export default Footer
