import { Check, Clock, FileText, MapPin, User, X } from 'lucide-react'
import Reveal, { SectionHeading } from '../Reveal'
import ImageWithSkeleton from '../ImageWithSkeleton'
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

// Ordered for the visitor this page is for: a local small-business or trades
// owner deciding whether this person builds sites for people like them. Real
// local business first, then small-business-facing work, then B2B marketing
// sites. The betting app and the YouTube channel are the least relatable proof
// for that buyer, so they sit at the bottom.
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
    title: 'Factum',
    img: '/factum.png',
    alt: 'Factum, an escrow-style payment protection platform for clients and small businesses',
    body: 'A payment-protection platform that holds funds in escrow between a client and the business they hired, releasing the money only on approval. A clean, editorial design built to earn trust, so both sides stay protected from deposit to final sign-off.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    href: 'https://coghillb.github.io/demo/',
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
    title: 'M&B Capital',
    img: '/mb-capital.png',
    alt: 'M&B Capital, a marketing and investor site for a private investment firm',
    body: 'A refined marketing and investor site for a private investment firm. An elegant, editorial design that walks investors and business owners through their acquire, build, and realize model with clear calls to action.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    href: 'https://coghillb.github.io/MB-Capital/',
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
    title: 'Kerion',
    img: '/kerion.png',
    alt: 'Kerion, a landing page for a RimWorld YouTube channel',
    body: 'A punchy landing page for a RimWorld YouTube channel, designed to showcase story-driven let’s-plays and challenge series and funnel viewers straight to the videos.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    href: 'https://coghillb.github.io/kerion-youtube/',
  },
]

// Trust signals for a risk-reduction-driven buyer: a contractor or shop owner
// deciding whether hiring this person is safe. Every line is a promise Brayden
// confirmed he will actually hold to — don't add to this list without asking
// him first, and don't soften one without telling him it changed.
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
    // Deliberately not framed as a quote request: the price is published above,
    // so there is nothing to quote. The call confirms which tier fits and what
    // the site needs to do, then that same published price goes in writing.
    title: 'First call',
    body: 'A short call about your business and what the site actually needs to do. You get the price in writing, no obligation.',
  },
  {
    title: 'Content',
    body: "I tell you exactly what I need from you — photos, services, logo — and chase it up so the project doesn't stall.",
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
      {/* First screen. Four things have to be answerable above the fold: who
          this is for, what they get, why it's credible, and what to do next.
          A contractor should be able to say who it's for after five seconds —
          which is why the trades are named outright rather than implied by
          "small business".

          Every line here is either a description of the product, a fact about
          Brayden's own pricing, or a promise about his own conduct. There are no
          performance claims and there is nothing about results, because there is
          no completed client work to substantiate any of it. The conduct
          promises are the four from the `promises` list below — don't add a
          fifth here without asking him first.

          Top padding is deliberately tighter on mobile than desktop: the whole
          screen has to clear the fold on a phone, which is where a contractor
          will actually open it. */}
      <section id="webdev" className="relative px-6 pt-28 pb-12 sm:pt-40">
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent-3">
              <span className="h-px w-8 bg-accent-3/60" />
              Kelowna &amp; the Central Okanagan
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              Websites for Kelowna <span className="text-gradient">trades</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Roofing, HVAC, electrical, plumbing. A {BUILD_STANDARD.pages}-page site with a quote
              form, for one fixed price:{' '}
              <span className="whitespace-nowrap font-semibold text-ink">
                {formatPrice(BUILD_STANDARD.amount)} {CURRENCY}
              </span>
              . Published, not quoted.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
              You deal with me, not an account manager. You get the price in writing before I start,
              and a reply to every message within one business day.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-[#0a0a0a] shadow-[0_0_30px_-6px_var(--color-accent-glow)] transition-all hover:brightness-110"
              >
                Start your project
              </a>
              <a href="#pricing" className="text-sm font-medium text-accent-3 hover:underline">
                See exactly what&apos;s included →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Services"
            title="What I can build for you."
            kicker="Whatever you need built, I can help. If you can describe it, I can build it. Here's a sample of the work I take on."
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
      <section id="recent-work" className="relative px-6 py-16">
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

      {/* Working with me: trust signals, then the process. Sits between the work
          and the prices deliberately — this is the de-risking a cautious buyer
          needs before a number is put in front of them. */}
      <section id="how-it-works" className="relative px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Working with me"
            title="No agency runaround."
            kicker="You're hiring one person who answers his own phone, quotes a real number before starting, and builds the thing himself. Here's exactly how that goes."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={(i % 4) * 0.08} className="h-full">
                <div className="glow-border h-full rounded-2xl border border-line bg-card p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent-3">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* How a project actually runs */}
          <div className="mt-16">
            <Reveal>
              <div className="mx-auto mb-10 max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent-3">
                  <span className="h-px w-8 bg-accent-3/60" />
                  How it works
                  <span className="h-px w-8 bg-accent-3/60" />
                </span>
                <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  Five steps, start to finish.
                </h3>
              </div>
            </Reveal>

            <ol className="mx-auto max-w-3xl">
              {process.map((step, i) => (
                <Reveal
                  as="li"
                  key={step.title}
                  delay={i * 0.06}
                  className="relative flex gap-5 pb-8 last:pb-0"
                >
                  {/* Connector between step markers; the last step has none. */}
                  {i < process.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-5 top-12 h-[calc(100%-3rem)] w-px bg-line"
                    />
                  )}
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-accent/40 bg-card font-display text-sm font-bold text-accent-3">
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <h4 className="font-display text-lg font-semibold text-ink">{step.title}</h4>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section id="pricing" className="relative px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Pricing"
            title="Here's what it costs."
            kicker="Fixed scope, fixed price, published on this page. You'll know what you're paying before you contact me, and the number doesn't change once we start."
          />
          <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
            {BUILD_TIERS.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1} className="h-full">
                <div
                  className={`glow-border relative flex h-full flex-col rounded-2xl border bg-card p-6 ${
                    tier.featured
                      ? 'border-accent/60 shadow-[0_0_40px_-12px_var(--color-accent-glow)]'
                      : 'border-line'
                  }`}
                >
                  {/* Deliberately no popularity badge on the build tiers. Any wording
                      that ranks a tier by how many people chose it asserts a fact about
                      sales volume, and nothing has sold yet. The accent border and glow
                      from `tier.featured` carry the emphasis instead — visual weight
                      isn't a representation. The care plans below do carry a
                      "Recommended" pill, which is different: it states Brayden's own
                      advice rather than a fact about what other buyers did. */}
                  <h3 className="font-display text-xl font-semibold text-ink">{tier.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{tier.tagline}</p>

                  <div className="mt-5 border-t border-line pt-5">
                    <div className="flex items-baseline gap-2">
                      {/* pb/-mb keeps gradient descenders (e.g. the 'q') from clipping */}
                      <span className="text-gradient pb-[0.1em] -mb-[0.1em] font-display text-4xl font-bold">
                        {formatPrice(tier.amount)}
                      </span>
                      <span className="text-sm text-ink-muted">
                        {CURRENCY} {tier.priceNote}
                      </span>
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
                    Start your project
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Ongoing care plans (monthly) */}
          <div className="mt-16">
            <Reveal>
              <div className="mx-auto mb-8 max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent-3">
                  <span className="h-px w-8 bg-accent-3/60" />
                  Ongoing care
                  <span className="h-px w-8 bg-accent-3/60" />
                </span>
                <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  Keep it running.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  A launched site still needs upkeep, and things change — prices, hours, a new
                  service, photos of last week&apos;s job. Pick a plan and send them over. Cancel
                  any time.
                </p>
              </div>
            </Reveal>

            {/* Care sits in the middle column on purpose: it's the recommended
                default, and most people should end up on it. Essentials is the floor
                for a site that genuinely never changes, not the starting point.

                DOM order is Essentials, Care, Growth so Care lands centre on desktop.
                The `-order-1 sm:order-none` on the recommended plan pulls it to the
                top when the grid stacks on a phone, so the default is what a
                contractor sees first there too. */}
            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3 sm:items-stretch">
              {CARE_PLANS.map((plan, i) => (
                <Reveal
                  key={plan.name}
                  delay={i * 0.1}
                  className={`h-full ${plan.recommended ? '-order-1 sm:order-none' : ''}`}
                >
                  <div
                    className={`glow-border relative flex h-full flex-col rounded-2xl border bg-card p-6 ${
                      plan.recommended
                        ? 'border-accent/60 shadow-[0_0_40px_-12px_var(--color-accent-glow)]'
                        : 'border-line'
                    }`}
                  >
                    {/* "Recommended" states Brayden's own advice, which he can stand
                        behind. That is why it's allowed here where popularity or
                        best-in-class wording is not: those assert facts about sales
                        volume and comparisons that nothing yet substantiates. */}
                    {plan.recommended && (
                      <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]">
                        Recommended
                      </span>
                    )}
                    <h4 className="font-display text-xl font-semibold text-ink">{plan.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{plan.tagline}</p>

                    <div className="mt-5 border-t border-line pt-5">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-gradient font-display text-4xl font-bold">
                          {formatPrice(plan.amount)}
                        </span>
                        <span className="text-sm text-ink-muted">{CURRENCY}/mo</span>
                      </div>
                      <p className="mt-1.5 text-xs text-ink-muted">
                        or {formatPrice(annualPrice(plan.amount))} {CURRENCY} a year — pay for{' '}
                        {ANNUAL_PREPAY_MONTHS}
                        {' months, get '}
                        {MONTHS_PER_YEAR}
                      </p>
                    </div>

                    <ul className="mt-6 flex flex-col gap-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                          <Check size={16} className="mt-0.5 shrink-0 text-accent-3" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Exclusions are shown to the visitor, not just tracked internally.
                        Enforcing a boundary the client was never told about is how a
                        fixed-price plan turns into an argument. */}
                    <ul className="mt-4 flex flex-1 flex-col gap-2 border-t border-line pt-4">
                      {plan.excludes.map((x) => (
                        <li key={x} className="flex items-start gap-2.5 text-xs text-ink-muted">
                          <X size={14} className="mt-0.5 shrink-0 opacity-70" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className={`mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all ${
                        plan.recommended
                          ? 'bg-accent text-[#0a0a0a] shadow-[0_0_30px_-6px_var(--color-accent-glow)] hover:brightness-110'
                          : 'border border-line-strong bg-card text-ink hover:bg-card-hover'
                      }`}
                    >
                      Get started
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <p className="mt-8 text-center text-sm leading-relaxed text-ink-muted">
              All prices in {CURRENCY}. Taxes extra where applicable. Paying for a year up front
              saves {ANNUAL_PREPAY_DISCOUNT_PCT}%. Care plans are month to month otherwise — cancel
              any time, and the site is yours either way. Not sure which fits?{' '}
              <a href="#contact" className="font-medium text-accent-3 hover:underline">
                Ask me
              </a>
              .
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
                {/* The first screen commits to Kelowna trades deliberately. This is
                    where the wider reach lives instead — below the fold, so it can't
                    dilute who the page is for, but still there for the out-of-town
                    enquiries and existing ad traffic that already land here. */}
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Hi, I&apos;m Brayden Coghill, a web developer in Kelowna, BC. I build sites for
                  local trades and contractors across the Central Okanagan — and I work remotely
                  with clients elsewhere in Canada too. My goal is to build sites that are not only
                  good looking but also fast, reliable, and straightforward for you to keep using
                  after launch.
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
