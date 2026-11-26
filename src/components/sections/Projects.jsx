import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowUpRight, Lock, ShieldCheck, Sparkles, Wallet } from 'lucide-react'
import { Github } from '../BrandIcons'
import Reveal, { SectionHeading } from '../Reveal'
import ImageWithSkeleton from '../ImageWithSkeleton'
import { projects } from '../../data/content'
import apeOffsideImg from '../../assets/ApeOffside.jpg'
import travelPlannerImg from '../../assets/TravelPlanner.jpg'

// Real project screenshots mapped directly to portfolio items.
const projectMedia = {
  EdgeFinder: { src: '/edgefinder.png', alt: 'EdgeFinder web application preview' },
  'Cyan Analytics': { src: '/cyan-analytics.png', alt: 'Cyan Analytics marketing website preview' },
  ApeOffside: { src: apeOffsideImg, alt: 'ApeOffside sports prop platform preview' },
  'The Daily Edit': { src: '/dailyedit.png', alt: 'The Daily Edit concierge website preview' },
  'M&B Capital': { src: '/mb-capital.png', alt: 'M&B Capital investment firm website preview' },
  Kerion: { src: '/kerion.png', alt: 'Kerion creator landing page preview' },
  'Travel Planner': { src: travelPlannerImg, alt: 'Travel Planner web application preview' },
}

// Bespoke dark UI schematics for private / mobile-native builds without web screenshots.
function SchematicPreview({ title }) {
  if (title === 'SeaTrace') {
    return (
      <div className="flex h-full w-full flex-col justify-between bg-[#0e0f12] p-4 text-[#ede9e0] sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#c6ff00] sm:text-[11px] sm:tracking-[0.14em]">
            <ShieldCheck size={14} className="shrink-0" />
            <span>Multi-Tenant Custody Ledger</span>
          </div>
          <span className="shrink-0 rounded-sm bg-[#c6ff00] px-2 py-0.5 font-mono text-[10px] font-bold text-[#0a0a0b]">
            RLS Enforced
          </span>
        </div>

        <div className="my-4 space-y-2 font-mono text-xs sm:my-5 sm:space-y-2.5">
          {[
            { stage: '01 HARVEST', detail: 'Vessel #FV-409 · Zone 23B', status: 'Verified' },
            { stage: '02 GRADING', detail: 'Lot #ST-8821 · Grade A', status: 'Logged' },
            { stage: '03 EXPORT', detail: 'Tenant Portal · Isolated', status: 'Cleared' },
          ].map((row) => (
            <div
              key={row.stage}
              className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2.5 sm:px-3.5"
            >
              <div className="min-w-0">
                <span className="block text-[10px] font-bold tracking-[0.14em] text-[#c6ff00]">
                  {row.stage}
                </span>
                <p className="mt-0.5 text-[11px] text-white/85">{row.detail}</p>
              </div>
              <span className="shrink-0 text-[10px] text-white/55">{row.status}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/50 sm:tracking-[0.14em]">
          <span>Buyers · Exporters · Superadmin</span>
          <span>Postgres RLS</span>
        </div>
      </div>
    )
  }

  if (title === 'PantryPal') {
    return (
      <div className="flex h-full w-full flex-col justify-between bg-[#0e0f12] p-4 text-[#ede9e0] sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#c6ff00] sm:text-[11px] sm:tracking-[0.14em]">
            <Sparkles size={14} className="shrink-0" />
            <span>Mobile Recipe Engine</span>
          </div>
          <span className="shrink-0 rounded-sm border border-white/15 bg-white/5 px-2 py-0.5 font-mono text-[10px] font-bold text-white/80">
            iOS &amp; Android
          </span>
        </div>

        <div className="my-4 grid gap-2.5 sm:my-5 sm:grid-cols-2">
          <div className="rounded-md border border-white/10 bg-white/[0.03] p-3.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
              Pantry Input
            </span>
            <p className="mt-1.5 text-xs text-white/85">
              Salmon, jasmine rice, miso, bok choy, lime
            </p>
          </div>
          <div className="rounded-md border border-[#c6ff00]/35 bg-[#c6ff00]/[0.08] p-3.5">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#c6ff00]">
              Generated Meal
            </span>
            <p className="mt-1.5 text-xs text-white/95">
              Miso-Glazed Salmon Bowls · 25 min · Serves 4
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/50 sm:tracking-[0.14em]">
          <span>React Native · Expo</span>
          <span>Fastify + OpenAI</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[#0e0f12] p-6 text-center text-[#ede9e0]">
      <span className="grid h-11 w-11 place-items-center rounded-md bg-[#c6ff00] text-[#0a0a0b]">
        <Wallet size={18} />
      </span>
      <p className="mt-3 font-display text-[17px] font-extrabold text-[#ede9e0]">{title}</p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
        Installable Offline-First PWA
      </p>
    </div>
  )
}

function FeaturedRow({ project, i, total }) {
  const cardRef = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const onMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  const spotlight = useMotionTemplate`radial-gradient(500px circle at ${mx}px ${my}px, rgba(198,255,0,0.08), transparent 70%)`

  const isPrivate = !project.href
  const isGithub = project.cta.includes('GitHub')
  const media = projectMedia[project.title]
  const reversed = i % 2 === 1

  const previewNode = (
    <div
      className={`relative overflow-hidden rounded-xl border border-line bg-base-2 ${
        media ? 'aspect-[16/10]' : 'lg:aspect-[16/10]'
      }`}
    >
      {media ? (
        <ImageWithSkeleton
          src={media.src}
          alt={media.alt}
          wrapperClassName="h-full w-full"
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <SchematicPreview title={project.title} />
      )}
    </div>
  )

  return (
    <Reveal y={20}>
      <article
        ref={cardRef}
        onMouseMove={onMove}
        className="studio-card group relative overflow-hidden rounded-2xl border border-line bg-card p-5 hover:shadow-[6px_6px_0px_var(--hard-shadow)] sm:p-8 lg:p-10"
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />

        <div className="relative grid items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Copy column */}
          <div className={`min-w-0 lg:col-span-5 ${reversed ? 'lg:order-2' : ''}`}>
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em]">
              <span className="rounded-sm bg-accent px-2 py-0.5 text-[#0a0a0b] tabular-nums">
                {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <span className="text-accent-3">{project.subtitle}</span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-extrabold tracking-[-0.025em] text-ink sm:text-3xl">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-sm border border-line bg-card-2 px-2.5 py-0.5 font-mono text-[11px] text-ink-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {isPrivate ? (
                <span className="inline-flex items-center gap-2 rounded-md border border-line-strong bg-card-2 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-ink-soft">
                  <Lock size={13} className="text-accent-3" />
                  Private client platform
                </span>
              ) : (
                <>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider"
                  >
                    {isGithub ? <Github size={14} /> : null}
                    {project.cta}
                    <ArrowUpRight
                      size={14}
                      className="text-accent-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                  {project.secondaryHref && (
                    <a
                      href={project.secondaryHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-line bg-card-2 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
                    >
                      {project.secondaryCta?.includes('GitHub') ? <Github size={14} /> : null}
                      {project.secondaryCta}
                      <ArrowUpRight size={13} className="text-accent-3" />
                    </a>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Preview column */}
          <div className={`min-w-0 lg:col-span-7 ${reversed ? 'lg:order-1' : ''}`}>
            {isPrivate ? (
              previewNode
            ) : (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title}`}
                className="block"
              >
                {previewNode}
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function ArchiveCard({ project }) {
  const isGithub = project.cta.includes('GitHub')
  const media = projectMedia[project.title]

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="studio-card group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card hover:-translate-y-1 hover:shadow-[5px_5px_0px_var(--hard-shadow)]"
    >
      <div className="aspect-[16/10] w-full overflow-hidden border-b border-line bg-base-2">
        {media ? (
          <ImageWithSkeleton
            src={media.src}
            alt={media.alt}
            wrapperClassName="h-full w-full"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <SchematicPreview title={project.title} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-accent-3">
            {project.subtitle}
          </span>
          <span className="shrink-0 text-ink-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-3">
            {isGithub ? <Github size={15} /> : <ArrowUpRight size={15} />}
          </span>
        </div>

        <h3 className="mt-2.5 font-display text-xl font-extrabold tracking-[-0.02em] text-ink">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-sm border border-line bg-card-2 px-2 py-0.5 font-mono text-[10px] text-ink-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export const Projects = () => {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="relative px-4 py-16 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          eyebrow="Selected work"
          title="Things I've designed"
          accent="& shipped."
          kicker="Client sites, team products, and personal builds, from full-stack platforms to fast, polished web apps."
        />

        {/* Featured showcase rows */}
        <div className="space-y-8">
          {featured.map((p, i) => (
            <FeaturedRow key={p.title} project={p} i={i} total={featured.length} />
          ))}
        </div>

        {/* More work archive grid */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-baseline justify-between border-t border-line pt-8">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent-3">
                  More work
                </span>
                <span className="font-mono text-xs text-ink-muted tabular-nums">
                  [{rest.length}]
                </span>
              </div>
              <span className="hidden font-mono text-xs text-ink-muted sm:inline">
                Client builds &amp; side projects
              </span>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.06} className="h-full">
                <ArchiveCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
