import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Briefcase, Check } from 'lucide-react'
import Reveal, { SectionHeading } from '../Reveal'
import { experience } from '../../data/content'

export const Experience = () => {
  const railRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 0.85', 'end 0.5'],
  })
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 28, restDelta: 0.001 })

  return (
    <section id="experience" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Where I'm building"
          accent="right now."
        />

        <div
          ref={railRef}
          className="relative grid grid-cols-[18px_1fr] gap-5 sm:grid-cols-[24px_1fr] sm:gap-8"
        >
          {/* Scroll-drawn acid timeline rail */}
          <div className="relative">
            <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-line-strong" />
            <motion.div
              style={{ scaleY: lineScale }}
              className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 origin-top bg-accent"
            />
            <span className="absolute left-1/2 top-9 h-3 w-3 -translate-x-1/2 rounded-sm bg-accent ring-4 ring-base" />
          </div>

          <div className="space-y-6">
            {experience.map((job) => (
              <Reveal key={job.company}>
                <article className="studio-card rounded-2xl border border-line bg-card p-7 sm:p-10">
                  {/* Header */}
                  <div className="flex flex-col gap-4 border-b border-line pb-7 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-accent text-[#0a0a0b]">
                        <Briefcase size={20} strokeWidth={2} />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-extrabold tracking-[-0.02em] text-ink sm:text-2xl">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-sm text-ink-soft sm:text-[16px]">
                          {job.company}{' '}
                          <span className="text-ink-muted">· {job.location}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 sm:flex-col sm:items-end">
                      <span className="font-mono text-xs font-bold text-ink-soft tabular-nums">
                        {job.period}
                      </span>
                      {job.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-sm bg-accent px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#0a0a0b]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#0a0a0b]" />
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Summary + stack */}
                  <p className="mt-7 max-w-3xl text-[15px] leading-relaxed text-ink-soft sm:text-[16px]">
                    {job.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-sm border border-line bg-card-2 px-3 py-1 font-mono text-xs text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Strengths */}
                  <div className="mt-8 grid gap-2.5 border-t border-line pt-7 sm:grid-cols-2 lg:grid-cols-4">
                    {job.strengths.map((s) => (
                      <div
                        key={s}
                        className="flex items-center gap-2 rounded-lg border border-line bg-card-2/70 px-3.5 py-2.5 text-sm font-medium text-ink-soft"
                      >
                        <Check size={14} className="shrink-0 text-accent-3" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
