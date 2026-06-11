import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Github } from '../BrandIcons'
import { SectionHeading } from '../Reveal'
import { projects } from '../../data/content'

// Per-card preview art (presentation only, copy stays in content.js).
const gradients = [
  'linear-gradient(135deg, rgba(139,92,246,0.55), rgba(99,102,241,0.35) 50%, rgba(34,211,238,0.3))',
  'linear-gradient(135deg, rgba(34,211,238,0.45), rgba(99,102,241,0.4) 55%, rgba(139,92,246,0.35))',
  'linear-gradient(135deg, rgba(168,85,247,0.5), rgba(139,92,246,0.3) 55%, rgba(99,102,241,0.3))',
  'linear-gradient(135deg, rgba(99,102,241,0.5), rgba(34,211,238,0.35) 55%, rgba(168,85,247,0.3))',
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
  const spotlight = useMotionTemplate`radial-gradient(480px circle at ${mx}px ${my}px, rgba(139,92,246,0.1), transparent 70%)`

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

export const Projects = () => {
  const stackRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ['start start', 'end end'],
  })

  const ordered = [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured)]

  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-5xl px-6 pt-24 sm:pt-32">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've designed & shipped."
          kicker="A mix of client sites and personal builds, from immersive marketing pages to AI-assisted data platforms. Keep scrolling, the deck stacks."
        />
      </div>

      <div ref={stackRef} className="relative">
        {ordered.map((p, i) => (
          <StackCard key={p.title} project={p} i={i} total={ordered.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  )
}

export default Projects
