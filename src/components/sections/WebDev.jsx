import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Clock, FileText, MapPin, User, X } from 'lucide-react'
import Reveal, { SectionHeading } from '../Reveal'
import ImageWithSkeleton from '../ImageWithSkeleton'
import TiltCard from '../fx/TiltCard'
import { Contact } from './Contact.jsx'
import {
  ANNUAL_PREPAY_DISCOUNT_PCT,
  ANNUAL_PREPAY_MONTHS,
  BUILD_STANDARD,
  BUILD_TIERS,
  CARE_PLANS,
  CURRENCY,
  MONTHS_PER_YEAR,
  annualPrice,
  formatPrice,
} from '../../data/pricing'

const services = [
  {
    title: 'Web Design & Development',
    body: 'Custom, responsive websites designed, built, and launched for you.',
  },
  {
    title: 'Website Maintenance',
    body: 'Keep your site fast, secure, and up to date without the headaches.',
  },
  {
    title: 'SEO & Optimization',
    body: 'Technical SEO setup, page speed work, and Google Business Profile configuration.',
  },
  {
    title: 'E-commerce & Online Stores',
    body: 'Sell online with an easy-to-manage store and a standard, secure checkout flow.',
  },
  {
    title: 'Custom Web Apps',
    body: 'Booking systems, dashboards, calculators, and other bespoke tools built around how your business works.',
  },
  {
    title: 'Landing Pages',
    body: 'A single focused page for one campaign or ad, with one clear action and a form wired up.',
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

// Explicit commercial track-record classification:
// anything that isn't commissioned client work says so on the card.
const WORK_KINDS = {
  client: null,
  concept: 'Concept · Not a client project',
  product: 'My own product',
}

const work = [
  {
    title: 'The Daily Edit',
    kind: 'client',
    category: 'Lifestyle Concierge',
    img: '/dailyedit.png',
    alt: 'The Daily Edit, a website for a lifestyle concierge in the Tri-Cities',
    body: "A multi-page site for a lifestyle concierge in the Tri-Cities, built from the owner's brand guide and business card. Services and packages are laid out with clear pricing, and the booking and contact forms send each enquiry to the owner's inbox and a spreadsheet. I also set up the hosting and the business's domain email.",
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Cloudflare Workers'],
    href: 'https://dailyedit.ca/',
  },
  {
    title: 'Cyan Analytics',
    kind: 'client',
    category: 'Data Analytics · Team',
    img: '/cyan-analytics.png',
    alt: 'Cyan Analytics, a marketing site for a data-transparency analytics product',
    body: 'A modern marketing site for a data-transparency analytics product, built with the team in Next.js. Clean, fast, and focused on communicating the platform’s value to a business audience.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Team'],
    href: 'https://www.cyananalytics.io/',
  },
  {
    title: 'M&B Capital',
    kind: 'client',
    category: 'Private Investment Firm',
    img: '/mb-capital.png',
    alt: 'M&B Capital, a marketing and investor site for a private investment firm',
    body: 'A refined marketing and investor site for a private investment firm. An elegant, editorial design that walks investors and business owners through their acquire, build, and realize model with clear calls to action.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    href: 'https://coghillb.github.io/MB-Capital/',
  },
  {
    title: 'Factum',
    kind: 'concept',
    category: 'Payment Protection Prototype',
    img: '/factum.png',
    alt: 'Factum, a design concept for an escrow-style payment protection platform',
    body: 'A design concept for a payment-protection platform: funds would sit in escrow between a client and the business they hired, releasing only on approval. I built it to show what a trust-heavy product can look like, with a clean, editorial interface for a nervous transaction. It is a working prototype, not a live service, and it processes no real payments.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    href: 'https://coghillb.github.io/demo/',
  },
  {
    title: 'EdgeFinder',
    kind: 'product',
    category: 'Full-Stack Web & Mobile App',
    img: '/edgefinder.png',
    alt: 'EdgeFinder, an AI-powered sports prop betting platform',
    body: 'A product I co-own and built end to end as the sole developer. A full-stack web app for sports prop betting analysis, blending an AI model with trend and weather data to surface prop picks, with user accounts and subscription billing. The same React front end also ships to Android and iOS through Capacitor.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Fastify', 'Supabase', 'Stripe', 'Capacitor', 'AI'],
    href: 'https://www.edgefinder.ca',
  },
  {
    title: 'Kerion',
    kind: 'client',
    category: 'Creator Landing Page',
    img: '/kerion.png',
    alt: 'Kerion, a landing page for a RimWorld YouTube channel',
    body: 'A punchy landing page for a RimWorld YouTube channel, designed to showcase story-driven let’s-plays and challenge series and funnel viewers straight to the videos.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    href: 'https://coghillb.github.io/kerion-youtube/',
  },
]

// Confirmed conduct promises. Do not add to this list without owner confirmation.
const promises = [
  {
    icon: MapPin,
    title: 'Based in Kelowna',
    body: "Local, same time zone, happy to meet in person. You're not filing a ticket with an agency three provinces away.",
  },
  {
    icon: User,
    title: 'You deal with me',
    body: 'No account manager, no handoffs. The person you talk to is the person building your site, start to finish.',
  },
  {
    icon: FileText,
    title: 'Fixed price up front',
    body: 'You get a fixed price in writing before I start. No hourly billing, and no surprise invoice at the end.',
  },
  {
    icon: Clock,
    title: 'Reply in 1 business day',
    body: 'Every message gets a real answer from me within one business day. Usually sooner.',
  },
]

const process = [
  {
    title: 'First call',
    body: 'A short call about your business and what the site actually needs to do. You get the price in writing, no obligation.',
  },
  {
    title: 'Content',
    body: "I tell you exactly what I need from you (photos, services, logo) and chase it up so the project doesn't stall.",
  },
  {
    title: 'Design',
    body: 'I show you the layout and the look before any code gets written. Nothing gets built until you approve it.',
  },
  {
    title: 'Build',
    body: 'I build the site, with check-ins along the way so nothing at the end is a surprise.',
  },
  {
    title: 'Launch',
    body: 'Domain, hosting and email set up for you, plus a walkthrough so you can make your own edits afterward.',
  },
]

function HeroShowcase({ items }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length)
    }, 4800)
    return () => clearInterval(id)
  }, [paused, items.length])

  const current = items[active]

  return (
    <TiltCard max={4}>
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative rounded-2xl border border-line-strong bg-card p-2.5 shadow-[4px_4px_0px_var(--color-line)] sm:p-3 sm:shadow-[8px_8px_0px_var(--color-line)]"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-1 -left-1 h-4 w-4 border-t-2 border-l-2 border-accent"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-1 -bottom-1 h-4 w-4 border-r-2 border-b-2 border-accent"
        />

        {/* Project switcher tabs */}
        <div className="mb-2.5 flex flex-wrap items-center gap-1.5">
          {items.map((item, idx) => {
            const isCurrent = idx === active
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => {
                  setActive(idx)
                  setPaused(true)
                }}
                className={`rounded-sm px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider transition-colors sm:px-2.5 ${
                  isCurrent
                    ? 'bg-accent text-[#0a0a0b]'
                    : 'border border-line bg-card-2 text-ink-muted hover:text-ink'
                }`}
              >
                0{idx + 1} {item.title}
              </button>
            )
          })}
        </div>

        {/* Live screenshot viewport */}
        <a
          href={current.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-[16/10] overflow-hidden rounded-xl border border-line bg-base-2"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current.title}
              src={current.img}
              alt={current.alt}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </AnimatePresence>
        </a>

        {/* Caption bar */}
        <div className="mt-3 flex items-center justify-between gap-2 px-1 py-1 sm:gap-3 sm:px-1.5">
          <div className="min-w-0">
            <p className="truncate font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-ink-muted">
              Client Build · {current.category}
            </p>
            <p className="mt-0.5 truncate font-display text-[15px] font-extrabold text-ink">
              {current.title}
            </p>
          </div>
          <a
            href={current.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1 rounded-sm border border-line-strong bg-card-2 px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-ink transition-colors hover:border-accent hover:bg-accent hover:text-[#0a0a0b]"
          >
            Live site
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </TiltCard>
  )
}

const WebDev = () => {
  const [billing, setBilling] = useState('monthly') // 'monthly' | 'annual'
  const showcaseItems = work.slice(0, 3) // The Daily Edit, Cyan Analytics, M&B Capital
  const [leadProject, ...remainingWork] = work
  const featuredPair = remainingWork.slice(0, 2) // Cyan Analytics, M&B Capital
  const bottomRow = remainingWork.slice(2) // Factum, EdgeFinder, Kerion

  return (
    <>
      {/* Hero: lead with craft and proof of work before price */}
      <section id="webdev" className="relative px-4 pt-24 pb-14 sm:px-6 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
            {/* Left copy column */}
            <div className="min-w-0">
              <Reveal y={10}>
                <div className="inline-flex flex-wrap items-center gap-2 rounded-md border border-line bg-card px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink-soft">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span>Web design &amp; development</span>
                </div>
              </Reveal>

              <Reveal delay={0.05} y={16}>
                <h1 className="mt-5 font-display text-[clamp(1.95rem,8.2vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink sm:mt-6 sm:leading-[0.98]">
                  Websites for{' '}
                  <span className="inline-block max-w-full bg-accent px-2 py-0.5 text-[#0a0a0b] sm:px-2.5">
                    small businesses.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.1} y={16}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:mt-6 sm:text-[19px]">
                  Shops, studios, clinics, restaurants, trades, and professional services. Custom{' '}
                  {BUILD_STANDARD.pages}-page websites designed, built, and launched for one fixed
                  price, published right on this page.
                </p>
              </Reveal>

              <Reveal delay={0.14} y={14}>
                <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-ink-muted sm:mt-4">
                  You deal with me, not an account manager. You get the price in writing before I
                  start, and a reply to every message within one business day.
                </p>
              </Reveal>

              <Reveal delay={0.18} y={14}>
                <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-3.5">
                  <a
                    href="#recent-work"
                    className="btn-accent group inline-flex items-center gap-2 rounded-md px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider sm:px-6 sm:py-3.5"
                  >
                    See recent work
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                  <a
                    href="#pricing"
                    className="btn-outline inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold sm:px-6 sm:py-3.5"
                  >
                    See pricing
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right column: interactive client work showcase */}
            <Reveal delay={0.12} y={20} className="min-w-0">
              <HeroShowcase items={showcaseItems} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 01 Recent work: proof of craft right below the fold */}
      <section id="recent-work" className="relative border-t border-line px-4 py-16 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="01"
            eyebrow="Recent work"
            title="Web design"
            accent="projects."
            kicker="Take a look at the sites I've shipped before you decide if the price is worth it."
          />

          {/* Lead featured client project */}
          <Reveal y={18}>
            <article className="studio-card group mb-6 grid overflow-hidden rounded-2xl border border-line bg-card hover:shadow-[6px_6px_0px_var(--hard-shadow)] lg:grid-cols-[1.25fr_1fr]">
              <a
                href={leadProject.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden border-b border-line bg-base-2 lg:border-r lg:border-b-0"
              >
                <ImageWithSkeleton
                  src={leadProject.img}
                  alt={leadProject.alt}
                  wrapperClassName="aspect-video lg:h-full lg:aspect-auto"
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </a>
              <div className="flex min-w-0 flex-col justify-between p-5 sm:p-9">
                <div>
                  <span className="inline-flex rounded-sm bg-accent px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#0a0a0b]">
                    01 · Client Build
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-extrabold tracking-[-0.025em] text-ink sm:text-3xl">
                    {leadProject.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {leadProject.body}
                  </p>
                </div>

                <div className="mt-7">
                  <div className="flex flex-wrap gap-1.5">
                    {leadProject.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-sm border border-line bg-card-2 px-2.5 py-0.5 font-mono text-[11px] text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={leadProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:text-accent-3"
                  >
                    View Site
                    <ArrowUpRight
                      size={15}
                      className="text-accent-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Client builds pair (Cyan Analytics + M&B Capital) */}
          <div className="grid gap-6 md:grid-cols-2 md:auto-rows-fr">
            {featuredPair.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08} className="h-full">
                <WorkCard item={w} index={i + 2} />
              </Reveal>
            ))}
          </div>

          {/* Remaining builds in balanced 3-column row (Factum, EdgeFinder, Kerion) */}
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
            {bottomRow.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.07} className="h-full">
                <WorkCard item={w} index={i + 4} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 02 Services: crisp 3x3 hairline grid */}
      <section id="services" className="relative px-4 py-16 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="02"
            eyebrow="Services"
            title="What I can build"
            accent="for you."
            kicker="Whatever you need built, I can help. If you can describe it, I can build it. Here's a sample of the work I take on."
          />

          <Reveal y={16}>
            <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="group flex flex-col justify-between bg-card p-5 transition-colors duration-200 hover:bg-card-hover sm:p-7"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex rounded-sm border border-line bg-card-2 px-2 py-0.5 font-mono text-[11px] font-bold text-accent-3 tabular-nums transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-[#0a0a0b]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <ArrowUpRight
                        size={15}
                        className="text-ink-muted opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-3 group-hover:opacity-100"
                      />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold tracking-[-0.02em] text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 Working with me: conduct promises + 5-step process */}
      <section id="how-it-works" className="relative px-4 py-16 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="03"
            eyebrow="Working with me"
            title="No agency"
            accent="runaround."
            kicker="You're hiring one person who answers his own phone, quotes a real number before starting, and builds the thing himself. Here's exactly how that goes."
          />

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {promises.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.06} className="h-full">
                <div className="studio-card group flex h-full flex-col rounded-xl border border-line bg-card p-5 hover:-translate-y-1 sm:p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-md border border-line-strong bg-card-2 text-accent-3 transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-[#0a0a0b]">
                    <Icon size={17} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-5 font-display text-[17px] font-bold tracking-[-0.015em] text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Five steps: crisp architectural row */}
          <div className="mt-12 rounded-2xl border border-line bg-card p-5 sm:mt-16 sm:p-10">
            <Reveal>
              <div className="mb-9 flex flex-col justify-between gap-4 border-b border-line pb-7 md:flex-row md:items-end">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent-3">
                    How it works
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-extrabold tracking-[-0.025em] text-ink sm:text-4xl">
                    Five steps, start to finish.
                  </h3>
                </div>
                <p className="max-w-sm text-sm text-ink-muted">
                  Clear milestones, no guesswork, and nothing built until you&apos;ve approved the
                  look.
                </p>
              </div>
            </Reveal>

            <ol className="grid gap-7 md:grid-cols-5 md:gap-5">
              {process.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 0.05} className="flex flex-col">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-accent font-mono text-xs font-bold text-[#0a0a0b] tabular-nums">
                      0{i + 1}
                    </span>
                    <span aria-hidden="true" className="h-px flex-1 bg-line" />
                  </div>
                  <h4 className="mt-4 font-display text-[16px] font-bold text-ink">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 04 Pricing & Ongoing Care */}
      <section id="pricing" className="relative px-4 py-16 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="04"
            eyebrow="Pricing"
            title="Here's what it"
            accent="costs."
            kicker="Fixed scope, fixed price, published on this page. You'll know what you're paying before you contact me, and the number doesn't change once we start."
          />

          {/* Build tiers: no popularity badge on build tiers */}
          <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {BUILD_TIERS.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.08} className="h-full min-w-0">
                <div
                  className={`studio-card relative flex h-full flex-col rounded-2xl border p-5 sm:p-8 ${
                    tier.featured
                      ? 'border-accent bg-surface shadow-[4px_4px_0px_var(--hard-shadow)] sm:shadow-[6px_6px_0px_var(--hard-shadow)]'
                      : 'border-line bg-card'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-extrabold tracking-[-0.02em] text-ink">
                      {tier.name}
                    </h3>
                    <span className="font-mono text-xs font-bold text-ink-muted tabular-nums">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{tier.tagline}</p>

                  <div className="mt-6 border-y border-line py-5">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl font-extrabold tracking-[-0.03em] text-ink tabular-nums sm:text-[2.75rem]">
                        {formatPrice(tier.amount)}
                      </span>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-3">
                        {CURRENCY} {tier.priceNote}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-6 flex flex-1 flex-col gap-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <Check size={15} className="mt-0.5 shrink-0 text-accent-3" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                      tier.featured ? 'btn-accent' : 'btn-outline'
                    }`}
                  >
                    Start your project
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Ongoing care plans */}
          <div className="mt-20 sm:mt-24">
            <Reveal>
              <div className="mx-auto mb-10 max-w-2xl text-center">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent-3">
                  Ongoing care
                </span>
                <h3 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl">
                  Keep it running.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-[16px]">
                  A launched site still needs upkeep, and things change: prices, hours, a new
                  service, new photos. Pick a plan and send them over. Cancel any time.
                </p>

                {/* Monthly / Annual display toggle */}
                <div className="mt-7 inline-flex items-center rounded-md border border-line-strong bg-card p-1">
                  <button
                    type="button"
                    onClick={() => setBilling('monthly')}
                    className={`rounded-sm px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors sm:px-4 ${
                      billing === 'monthly'
                        ? 'bg-accent text-[#0a0a0b]'
                        : 'text-ink-soft hover:text-ink'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    onClick={() => setBilling('annual')}
                    className={`inline-flex items-center gap-1.5 rounded-sm px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors sm:px-4 ${
                      billing === 'annual'
                        ? 'bg-accent text-[#0a0a0b]'
                        : 'text-ink-soft hover:text-ink'
                    }`}
                  >
                    Annual
                    <span className="opacity-80">−{ANNUAL_PREPAY_DISCOUNT_PCT}%</span>
                  </button>
                </div>
              </div>
            </Reveal>

            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3 lg:items-stretch">
              {CARE_PLANS.map((plan, i) => (
                <Reveal
                  key={plan.name}
                  delay={i * 0.08}
                  className={`h-full min-w-0 ${plan.recommended ? '-order-1 lg:order-none' : ''}`}
                >
                  <div
                    className={`studio-card relative flex h-full flex-col rounded-2xl border p-5 sm:p-7 ${
                      plan.recommended
                        ? 'border-accent bg-surface shadow-[4px_4px_0px_var(--hard-shadow)] sm:shadow-[6px_6px_0px_var(--hard-shadow)]'
                        : 'border-line bg-card'
                    }`}
                  >
                    {plan.recommended && (
                      <span className="absolute -top-3 left-6 rounded-sm bg-accent px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#0a0a0b]">
                        Recommended
                      </span>
                    )}

                    <h4 className="font-display text-xl font-extrabold tracking-[-0.02em] text-ink">
                      {plan.name}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{plan.tagline}</p>

                    <div className="mt-6 border-y border-line py-5">
                      {billing === 'monthly' ? (
                        <>
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-display text-4xl font-extrabold tracking-[-0.03em] text-ink tabular-nums">
                              {formatPrice(plan.amount)}
                            </span>
                            <span className="font-mono text-xs font-bold text-accent-3">
                              {CURRENCY}/mo
                            </span>
                          </div>
                          <p className="mt-1.5 text-xs text-ink-muted tabular-nums">
                            or {formatPrice(annualPrice(plan.amount))} {CURRENCY} a year (pay for{' '}
                            {ANNUAL_PREPAY_MONTHS} months, get {MONTHS_PER_YEAR})
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-display text-4xl font-extrabold tracking-[-0.03em] text-ink tabular-nums">
                              {formatPrice(annualPrice(plan.amount))}
                            </span>
                            <span className="font-mono text-xs font-bold text-accent-3">
                              {CURRENCY}/yr
                            </span>
                          </div>
                          <p className="mt-1.5 text-xs text-ink-muted tabular-nums">
                            Pay for {ANNUAL_PREPAY_MONTHS} months, get {MONTHS_PER_YEAR} (or{' '}
                            {formatPrice(plan.amount)} {CURRENCY}/mo month to month)
                          </p>
                        </>
                      )}
                    </div>

                    <ul className="mt-6 flex flex-col gap-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                          <Check size={15} className="mt-0.5 shrink-0 text-accent-3" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-line pt-4">
                      {plan.excludes.map((x) => (
                        <li key={x} className="flex items-start gap-2.5 text-xs text-ink-muted">
                          <X size={13} className="mt-0.5 shrink-0 opacity-70" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className={`mt-8 inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                        plan.recommended ? 'btn-accent' : 'btn-outline'
                      }`}
                    >
                      Get started
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-ink-muted">
              All prices in {CURRENCY}. Taxes extra where applicable. Paying for a year up front
              saves {ANNUAL_PREPAY_DISCOUNT_PCT}%. Care plans are month to month otherwise. Cancel
              any time, and the site is yours either way. Not sure which fits?{' '}
              <a
                href="#contact"
                className="font-semibold text-accent-3 underline-offset-4 hover:underline"
              >
                Ask me
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* About blurb */}
      <section className="relative px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="grid items-center gap-6 overflow-hidden rounded-2xl border border-line bg-card p-5 sm:gap-8 sm:p-10 md:grid-cols-[190px_1fr] md:gap-12">
              <div className="mx-auto w-44 md:mx-0 md:w-full">
                <ImageWithSkeleton
                  src="/aboutme.jpg"
                  alt="Brayden Coghill, a Canadian web developer"
                  wrapperClassName="aspect-square rounded-xl border border-line-strong"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent-3">
                  About me · Kelowna, BC
                </span>
                <h2 className="mt-2 font-display text-2xl font-extrabold tracking-[-0.025em] text-ink sm:text-3xl">
                  Built by one person, not an agency.
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft sm:text-[16px]">
                  Hi, I&apos;m Brayden Coghill, a web developer based in Kelowna, BC. I build sites
                  for small businesses of every kind, working remotely with clients across Canada or
                  in person here in the Okanagan. My goal is to build sites that are not only good
                  looking, but also fast, reliable, and straightforward for you to keep using after
                  launch.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Shared Contact section */}
      <Contact />
    </>
  )
}

function WorkCard({ item: w, index, compact = false }) {
  return (
    <article className="studio-card group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card hover:shadow-[5px_5px_0px_var(--hard-shadow)]">
      <a
        href={w.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden border-b border-line bg-base-2"
      >
        <ImageWithSkeleton
          src={w.img}
          alt={w.alt}
          wrapperClassName="aspect-video w-full"
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </a>

      <div className={`flex flex-1 flex-col ${compact ? 'p-5 sm:p-6' : 'p-5 sm:p-7'}`}>
        {/* Honest disclosure label in reading order right before title */}
        {WORK_KINDS[w.kind] && (
          <span className="mb-3 inline-flex w-fit items-center rounded-sm border border-line-strong bg-card-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
            {WORK_KINDS[w.kind]}
          </span>
        )}

        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">{w.title}</h3>
          <span className="font-mono text-xs font-bold text-ink-muted tabular-nums">
            {String(index).padStart(2, '0')}
          </span>
        </div>

        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-soft">{w.body}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {(compact ? w.tags.slice(0, 4) : w.tags).map((t) => (
            <span
              key={t}
              className="rounded-sm border border-line bg-card-2 px-2 py-0.5 font-mono text-[11px] text-ink-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 border-t border-line pt-4">
          <a
            href={w.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:text-accent-3"
          >
            {w.kind === 'concept' ? 'View prototype' : 'View Site'}
            <ArrowUpRight
              size={14}
              className="text-accent-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </article>
  )
}

export default WebDev
