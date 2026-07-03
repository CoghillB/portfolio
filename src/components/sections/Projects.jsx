import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Github } from '../BrandIcons'
import Reveal, { SectionHeading } from '../Reveal'
import { projects } from '../../data/content'

// Per-card preview art (presentation only, copy stays in content.js).
const gradients = [
  'linear-gradient(135deg, rgba(198,255,0,0.5), rgba(255,46,154,0.35) 55%, rgba(198,255,0,0.22))',
  'linear-gradient(135deg, rgba(255,46,154,0.45), rgba(198,255,0,0.38) 55%, rgba(255,46,154,0.22))',
  'linear-gradient(135deg, rgba(198,255,0,0.5), rgba(255,46,154,0.3) 55%, rgba(198,255,0,0.25))',
  'linear-gradient(135deg, rgba(255,46,154,0.45), rgba(198,255,0,0.35) 55%, rgba(255,46,154,0.22))',
]

// One card in the stack: pinned full-viewport, scales down as the next card
// scrolls over it. Scale + opacity only, so the pin stays smooth.
function StackCard({ project, i, total, progress }) {
  const targetScale = 1 - (total - i) * 0.045
  const scale = useTransform(progress, [i / total, 1], [1, targetScale])

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const cardRef = useRef(null)
  const onMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }
  const spotlight = useMotionTemplate`radial-gradient(480px circle at ${mx}px ${my}px, rgba(198,255,0,0.12), transparent 70%)`

  const isGithub = project.cta.includes('GitHub')
  const domain = project.href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/.*$/, '')

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center px-4 sm:px-6">
      <motion.div
        ref={cardRef}
        onMouseMove={onMove}
        style={{ scale, top: `calc(4vh + ${i * 18}px)` }}
        className="group relative flex w-full max-w-4xl origin-top flex-col overflow-hidden rounded-3xl border border-line-strong bg-surface p-7 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.6)] sm:p-10"
      >
        {/* spotlight follows the cursor */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />

        <div className="relative mb-6 flex items-center justify-between">
          <span className="font-mono text-xs text-ink-muted">
            {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-accent-3">
            {project.subtitle}
          </span>
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <h3 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-line bg-card-2 px-2.5 py-1 font-mono text-xs text-ink-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl border border-line-strong bg-card px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent/50 hover:bg-accent/10"
            >
              {isGithub ? <Github size={16} /> : null}
              {project.cta}
              <ArrowUpRight size={15} className="text-accent-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Stylized browser preview */}
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
            className="relative hidden overflow-hidden rounded-2xl border border-line lg:block"
          >
            <div className="flex items-center gap-1.5 border-b border-line bg-card-2 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 truncate rounded-md bg-base-2 px-2.5 py-0.5 font-mono text-[11px] text-ink-muted">
                {domain}
              </span>
            </div>
            <div
              className="relative grid aspect-video place-items-center transition-transform duration-500 group-hover:scale-[1.03]"
              style={{ background: gradients[i % gradients.length] }}
            >
              <span className="text-stroke select-none font-display text-[7rem] font-bold leading-none opacity-80">
                {project.title.slice(0, 2)}
              </span>
              <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-lg bg-black/35 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                {isGithub ? 'Open repo' : 'Visit live site'} <ArrowUpRight size={13} />
              </span>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  )
}

// Compact card for the "More work" grid below the featured stack.
function GridCard({ project }) {
  const isGithub = project.cta.includes('GitHub')
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col border border-line bg-card p-6 transition-colors hover:border-accent/60 hover:bg-card-hover"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-accent-3">{project.subtitle}</span>
        <span className="shrink-0 text-ink-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
          {isGithub ? <Github size={16} /> : <ArrowUpRight size={16} />}
        </span>
      </div>
      <h3 className="mt-3 font-display text-2xl text-ink">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((t) => (
          <span
            key={t}
            className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  )
}

export const Projects = () => {
  const stackRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ['start start', 'end end'],
  })

  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-5xl px-6 pt-24 sm:pt-32">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've designed & shipped."
          kicker="Client sites, team products, and personal builds. The featured few stack as you scroll; the rest are just below."
        />
      </div>

      <div ref={stackRef} className="relative">
        {featured.map((p, i) => (
          <StackCard key={p.title} project={p} i={i} total={featured.length} progress={scrollYProgress} />
        ))}
      </div>

      {/* More work: everything else, in a scannable grid */}
      <div className="mx-auto max-w-5xl px-6 pb-4 pt-16 sm:pt-24">
        <Reveal>
          <div className="mb-6 flex items-baseline gap-3 border-t-2 border-line pt-6">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-3">More work</span>
            <span className="font-mono text-xs text-ink-muted">[{rest.length}]</span>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05} className="h-full">
              <GridCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
