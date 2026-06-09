import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Github } from '../BrandIcons'
import Reveal, { SectionHeading } from '../Reveal'
import { projects } from '../../data/content'

function ProjectCard({ project }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const ref = useRef(null)

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(139,92,246,0.12), transparent 70%)`
  const isGithub = project.cta.includes('GitHub')

  return (
    <motion.a
      ref={ref}
      href={project.href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={onMove}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="glow-border group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card p-7 sm:p-8"
    >
      {/* spotlight */}
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: spotlight }} />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-accent-3">{project.subtitle}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
            {project.title}
          </h3>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-card-2 text-ink-soft transition-all group-hover:border-accent/50 group-hover:bg-accent/10 group-hover:text-ink">
          {isGithub ? <Github size={18} /> : <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
        </span>
      </div>

      <p className="relative mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">
        {project.description}
      </p>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-line bg-card-2 px-2.5 py-1 font-mono text-xs text-ink-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
        {project.cta}
        <ArrowUpRight size={15} className="text-accent-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </motion.a>
  )
}

export const Projects = () => {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've designed & shipped."
          kicker="A mix of client sites and personal builds, from immersive marketing pages to AI-assisted data platforms."
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:auto-rows-fr">
          {[...featured, ...rest].map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
