import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, ArrowUp, ArrowUpRight } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { profile, businessNav, portfolioNav } from '../data/content'
import { BUSINESS_ROUTE, PORTFOLIO_ROUTE, PRIVACY_ROUTE, isPortfolioRoute, isSectionRoute } from '../routes'

export const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const onPortfolio = isPortfolioRoute(location.pathname)
  const onSection = isSectionRoute(location.pathname)

  const links = onPortfolio ? portfolioNav : businessNav
  const crossLink = onPortfolio
    ? { label: 'Website Services', to: BUSINESS_ROUTE }
    : { label: 'Dev Portfolio', to: PORTFOLIO_ROUTE }

  const sectionHref = (href) => (onSection ? href : `${BUSINESS_ROUTE}${href}`)

  const goToSection = (href) => (e) => {
    e.preventDefault()
    if (!onSection) {
      navigate(`${BUSINESS_ROUTE}${href}`)
      return
    }
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-line bg-base-2/40 px-6 pt-16 pb-10">
      <div className="mx-auto max-w-6xl">
        {/* Top row */}
        <div className="grid gap-10 pb-12 md:grid-cols-[1.3fr_1fr_auto] md:items-start">
          <div>
            <Link to="/" className="group inline-flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-accent font-mono text-xs font-bold text-[#0a0a0b] transition-transform duration-200 group-hover:-rotate-6">
                BC
              </span>
              <span className="font-display text-[17px] font-extrabold tracking-[-0.03em] text-ink">
                Coghill<span className="text-accent-3">.dev</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              {profile.intro}
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              {profile.location} · Canada
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted">
                Navigation
              </p>
              <nav className="mt-4 flex flex-col gap-2.5">
                {links.map((n) => (
                  <a
                    key={n.href}
                    href={sectionHref(n.href)}
                    onClick={goToSection(n.href)}
                    className="w-fit text-ink-soft transition-colors hover:text-ink"
                  >
                    {n.label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted">
                Elsewhere
              </p>
              <div className="mt-4 flex flex-col gap-2.5">
                <Link
                  to={crossLink.to}
                  className="inline-flex w-fit items-center gap-1 text-ink-soft transition-colors hover:text-ink"
                >
                  {crossLink.label}
                  <ArrowUpRight size={13} className="text-accent-3" />
                </Link>
                <a
                  href={`mailto:${profile.email}`}
                  className="w-fit text-ink-soft transition-colors hover:text-ink"
                >
                  Email directly
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-1 text-ink-soft transition-colors hover:text-ink"
                >
                  Résumé (PDF)
                  <ArrowUpRight size={13} className="text-accent-3" />
                </a>
              </div>
            </div>
          </div>

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
                className="grid h-10 w-10 place-items-center rounded-md border border-line bg-card text-ink-soft transition-all hover:-translate-y-0.5 hover:border-accent-3 hover:bg-card-hover hover:text-ink"
              >
                <Icon size={16} />
              </a>
            ))}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-md border border-line bg-card text-ink-soft transition-all hover:-translate-y-0.5 hover:border-accent-3 hover:bg-accent hover:text-[#0a0a0b]"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Interactive oversized wordmark — fills cleanly on hover */}
        <div
          aria-hidden="true"
          className="overflow-hidden border-t border-line pt-6 pb-2 text-center"
        >
          <motion.span
            initial={{ y: '30%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-stroke inline-block cursor-default select-none font-display text-[clamp(3rem,11.5vw,9rem)] font-extrabold leading-[0.9] tracking-[-0.04em] transition-colors duration-300 hover:text-accent-3"
          >
            COGHILL.DEV
          </motion.span>
        </div>

        {/* Bottom legal bar — renders on every route for BC PIPA discoverability */}
        <div className="mt-6 flex flex-col items-center gap-2 border-t border-line pt-6 text-center text-xs text-ink-muted sm:flex-row sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} {profile.name} · Kelowna, British Columbia.</p>
          <Link
            to={PRIVACY_ROUTE}
            className="underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
