import { Check } from 'lucide-react'
import Reveal, { SectionHeading } from '../Reveal'
import ImageWithSkeleton from '../ImageWithSkeleton'
import { Contact } from './Contact.jsx'

const services = [
  {
    title: 'Web Design & Development',
    body: 'Modern, responsive websites built to turn visitors into customers.',
  },
  {
    title: 'Website Maintenance',
    body: 'Keep your site fast, secure, and up to date without the headaches.',
  },
  {
    title: 'SEO & Optimization',
    body: 'Improve your Google rankings and site performance to reach more customers.',
  },
  {
    title: 'E-commerce & Online Stores',
    body: 'Sell online with a secure, easy-to-manage store and a checkout your customers trust.',
  },
  {
    title: 'Custom Web Apps',
    body: 'Booking systems, dashboards, calculators, and other bespoke tools built around how your business works.',
  },
  {
    title: 'Landing Pages',
    body: 'Focused, high-converting pages built to turn ad clicks and campaigns into real leads.',
  },
  {
    title: 'Website Redesigns',
    body: 'Give a dated site a fast, modern, mobile-friendly refresh that truly reflects your brand.',
  },
  {
    title: 'Booking, Forms & Integrations',
    body: 'Contact and booking forms, payments, and the third-party tools you rely on, wired up and working.',
  },
  {
    title: 'Hosting & Setup',
    body: 'Domain, hosting, and email set up and deployed for you, with no technical headaches on your end.',
  },
]

// Flexible, quote-per-project pricing. "Starting from" floors (CAD) for custom
// React/Next.js work: above template shops, well under agency rates. Edit anytime.
const pricing = [
  {
    name: 'Starter',
    tagline: 'A simple one-page or landing site to get you online.',
    priceLabel: 'Starting from',
    price: '$900',
    cadence: 'one-time',
    featured: false,
    features: [
      'Single-page or landing site',
      'Mobile-friendly & fast',
      'Contact form built in',
      'Basic SEO setup',
    ],
  },
  {
    name: 'Business',
    tagline: 'A multi-page site to establish your small business online.',
    priceLabel: 'Starting from',
    price: '$2,500',
    cadence: 'one-time',
    featured: true,
    features: [
      'Up to ~5 custom pages',
      'Designed around your brand',
      'SEO & Google setup',
      'Booking / contact forms',
      'Launch + hosting help',
    ],
  },
  {
    name: 'Custom',
    tagline: 'Web apps, e-commerce, or anything more advanced.',
    priceLabel: 'Starting from',
    price: '$5,000',
    cadence: 'per project',
    featured: false,
    features: [
      'E-commerce or full web app',
      'Custom features & integrations',
      'Scales as your business grows',
      'Quoted to fit your budget',
    ],
  },
]

const work = [
  {
    title: 'Kelowna Creative',
    img: '/kelowna-creative.png',
    alt: 'Kelowna Creative website redesign for a local creative agency',
    body: 'I built a dynamic, visually immersive website for Kelowna Creative that reflects their high-end brand. The result is a fully responsive, polished platform that showcases their portfolio and positions them as a leading creative force in their market.',
    tags: ['TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion', 'AOS'],
    href: 'https://www.kelownacreative.ca',
  },
  {
    title: 'EdgeFinder',
    img: '/edgefinder.png',
    alt: 'EdgeFinder, an AI-powered sports prop betting platform',
    body: 'A full-stack web app for sports prop betting analysis. It blends an AI model with trend and weather data to surface prop picks, with user accounts and subscription billing. The same React front end also ships to Android and iOS through Capacitor.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Fastify', 'Supabase', 'Stripe', 'Capacitor', 'AI'],
    href: 'https://www.edgefinder.ca',
  },
  {
    title: 'M&B Capital',
    img: '/mb-capital.png',
    alt: 'M&B Capital, a marketing and investor site for a private investment firm',
    body: 'A refined marketing and investor site for a private investment firm. An elegant, editorial design that walks investors and business owners through their acquire, build, and realize model with clear calls to action.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    href: 'https://coghillb.github.io/MB-Capital/',
  },
  {
    title: 'Cyan Analytics',
    img: '/cyan-analytics.png',
    alt: 'Cyan Analytics, a marketing site for a data-transparency analytics product',
    body: 'A modern marketing site for a data-transparency analytics product, built with the team in Next.js. Clean, fast, and focused on communicating the platform’s value to a business audience.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Team'],
    href: 'https://www.cyananalytics.io/',
  },
  {
    title: 'Kerion',
    img: '/kerion.png',
    alt: 'Kerion, a landing page for a RimWorld YouTube channel',
    body: 'A punchy landing page for a RimWorld YouTube channel, designed to showcase story-driven let’s-plays and challenge series and funnel viewers straight to the videos.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    href: 'https://coghillb.github.io/kerion-youtube/',
  },
]

// Acid/magenta preview art for entries without a screenshot (matches the
// main Work section's preview style).
const gradients = [
  'linear-gradient(135deg, rgba(198,255,0,0.5), rgba(255,46,154,0.35) 55%, rgba(198,255,0,0.22))',
  'linear-gradient(135deg, rgba(255,46,154,0.45), rgba(198,255,0,0.38) 55%, rgba(255,46,154,0.22))',
  'linear-gradient(135deg, rgba(198,255,0,0.5), rgba(255,46,154,0.3) 55%, rgba(198,255,0,0.25))',
]

const initials = (t) => {
  const w = t.split(/[\s&]+/).filter(Boolean)
  return (w.length > 1 ? w.map((x) => x[0]).join('') : w[0]).slice(0, 2).toUpperCase()
}

const WebDev = () => {
  return (
    <>
      <section id="webdev" className="relative px-6 pt-36 pb-12 sm:pt-40">
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent-3">
              <span className="h-px w-8 bg-accent-3/60" />
              Web Design & Development
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              Web design for small businesses <span className="text-gradient">& trades</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              I build custom, affordable websites for small businesses and trades across Canada.
              My sites are fast, mobile-friendly, and optimized to bring in new customers. Whether you need a new
              site or a refresh, you get clean design, quick turnaround, and clear communication, without the agency
              price tag.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-[#0a0a0a] shadow-[0_0_30px_-6px_var(--color-accent-glow)] transition-all hover:brightness-110"
            >
              Get a free quote
            </a>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Services"
            title="What I can build for you."
            kicker="Whatever you need built, I can help. If you can describe it, I can probably build it. Here's a sample of the work I take on."
          />
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div className="glow-border h-full rounded-2xl border border-line bg-card p-6 text-center">
                  <h3 className="font-display text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recent work */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Recent work" title="Web design projects." />
          <div className="grid gap-6 md:grid-cols-2 md:auto-rows-fr">
            {work.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1} className="h-full">
                <div className="glow-border flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card p-6">
                  {w.img ? (
                    <ImageWithSkeleton
                      src={w.img}
                      alt={w.alt}
                      className="mb-5 aspect-video w-full rounded-xl border border-line object-cover"
                    />
                  ) : (
                    <div
                      className="mb-5 grid aspect-video w-full place-items-center overflow-hidden rounded-xl border border-line"
                      style={{ background: gradients[i % gradients.length] }}
                    >
                      <span className="text-stroke select-none font-display text-6xl font-bold leading-none opacity-80">
                        {initials(w.title)}
                      </span>
                    </div>
                  )}
                  <h3 className="font-display text-xl font-semibold text-ink">{w.title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{w.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-line bg-card-2 px-2.5 py-1 font-mono text-xs text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-3 hover:underline"
                  >
                    View Site →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section id="pricing" className="relative px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple, flexible pricing."
            kicker="I don't do one-size-fits-all. Every project is quoted individually, so you only pay for what you actually need. The tiers below are starting points. Tell me your budget and scope and I'll tailor a quote to fit."
          />
          <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
            {pricing.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1} className="h-full">
                <div
                  className={`glow-border relative flex h-full flex-col rounded-2xl border bg-card p-6 ${
                    tier.featured
                      ? 'border-accent/60 shadow-[0_0_40px_-12px_var(--color-accent-glow)]'
                      : 'border-line'
                  }`}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold text-ink">{tier.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{tier.tagline}</p>

                  <div className="mt-5 border-t border-line pt-5">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
                      {tier.priceLabel}
                    </span>
                    <div className="mt-1 flex items-baseline gap-2">
                      {/* pb/-mb keeps gradient descenders (e.g. the 'q') from clipping */}
                      <span className="text-gradient pb-[0.1em] -mb-[0.1em] font-display text-4xl font-bold">
                        {tier.price}
                      </span>
                      {tier.cadence && <span className="text-sm text-ink-muted">{tier.cadence}</span>}
                    </div>
                  </div>

                  <ul className="mt-6 flex flex-1 flex-col gap-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <Check size={16} className="mt-0.5 shrink-0 text-accent-3" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all ${
                      tier.featured
                        ? 'bg-accent text-[#0a0a0a] shadow-[0_0_30px_-6px_var(--color-accent-glow)] hover:brightness-110'
                        : 'border border-line-strong bg-card text-ink hover:bg-card-hover'
                    }`}
                  >
                    Get a free quote
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-8 text-center text-sm leading-relaxed text-ink-muted">
              All prices in CAD. Every budget and scope is welcome, from a quick one-pager to a full web app. Not sure where you
              fit?{' '}
              <a href="#contact" className="font-medium text-accent-3 hover:underline">
                Get in touch
              </a>{' '}
              and I&apos;ll put together a custom quote, no pressure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* About blurb */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="glass flex flex-col items-center gap-8 rounded-3xl p-8 md:flex-row">
              <div className="shrink-0">
                <ImageWithSkeleton
                  src="/aboutme.jpg"
                  alt="Brayden Coghill, a Canadian web developer"
                  className="mx-auto h-40 w-40 rounded-2xl border border-line object-cover shadow-lg"
                />
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  <span className="text-gradient">About me</span>
                </h2>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Hi, I&apos;m Brayden Coghill, a Canadian web developer. I specialize in modern,
                  affordable websites for small businesses and trades across Canada. My goal is to build sites
                  that are not only good looking but also fast, reliable, and optimized for search so your
                  business can grow.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact (shared EmailJS form) */}
      <Contact />
    </>
  )
}

export default WebDev
