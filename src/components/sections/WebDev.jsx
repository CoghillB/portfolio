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
    body: 'Improve your Google rankings and site performance across the Okanagan.',
  },
]

const work = [
  {
    title: 'Kelowna Creative',
    img: '/kelowna-creative.png',
    alt: 'Kelowna Creative website redesign for a local creative agency',
    body: 'I built a dynamic, visually immersive website for Kelowna Creative that reflects their high-end brand. The result is a fully responsive, polished platform that showcases their portfolio and positions them as a leading creative force in the Okanagan.',
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
              Kelowna Web Design
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              Web design for small businesses <span className="text-gradient">& trades</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              I build custom, affordable websites for small businesses and trades in Kelowna, Vernon, and Penticton.
              My sites are fast, mobile-friendly, and optimized to attract local customers. Whether you need a new
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
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Services" title="What I can build for you." />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
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

      {/* About blurb */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="glass flex flex-col items-center gap-8 rounded-3xl p-8 md:flex-row">
              <div className="shrink-0">
                <ImageWithSkeleton
                  src="/aboutme.jpg"
                  alt="Brayden Coghill, a web developer in Kelowna, BC"
                  className="mx-auto h-40 w-40 rounded-2xl border border-line object-cover shadow-lg"
                />
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  <span className="text-gradient">About me</span>
                </h2>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Hi, I&apos;m Brayden Coghill, a web developer based in Kelowna, BC. I specialize in modern,
                  affordable websites for small businesses and trades across the Okanagan. My goal is to build sites
                  that are not only good looking but also fast, reliable, and optimized for local search so your
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
