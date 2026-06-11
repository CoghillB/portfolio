import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Briefcase, Check } from 'lucide-react'
import Reveal, { SectionHeading } from '../Reveal'
import { experience } from '../../data/content'

export const Experience = () => {
  const railRef = useRef(null)

  // The timeline rail draws itself (scaleY) as the section scrolls through.
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 0.8', 'end 0.5'],
  })
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25, restDelta: 0.001 })

  return (
    <section id="experience" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I'm building right now."
        />

        <div ref={railRef} className="relative grid grid-cols-[20px_1fr] gap-4 sm:grid-cols-[28px_1fr] sm:gap-6">
          {/* Rail: faint track + glowing fill driven by scroll */}
          <div className="relative">
            <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-line-strong" />
            <motion.div
              style={{ scaleY: lineScale }}
              className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 origin-top bg-gradient-to-b from-accent via-accent-2 to-accent-3 shadow-[0_0_12px_var(--color-accent-glow)]"
            />
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.2 }}
              className="absolute left-1/2 top-10 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_16px_var(--color-accent-glow)] ring-4 ring-accent/15"
            />
          </div>

          <div className="space-y-6">
            {experience.map((job) => (
              <Reveal key={job.company}>
                <article className="glow-border rounded-3xl border border-line bg-card p-7 sm:p-9">
                  {/* Header */}
                  <div className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-white shadow-[0_0_24px_-6px_var(--color-accent-glow)]">
                        <Briefcase size={20} />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                          {job.role}
                        </h3>
                        <p className="mt-0.5 text-ink-soft">
                          {job.company} <span className="text-ink-muted">· {job.location}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:flex-col sm:items-end">
                      <span className="font-mono text-sm text-ink-soft">{job.period}</span>
                      {job.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Summary + stack */}
                  <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
                    {job.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.stack.map((t, i) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i, duration: 0.35 }}
                        className="rounded-md border border-line bg-card-2 px-2.5 py-1 font-mono text-xs text-ink-muted"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>

                  {/* Strengths */}
                  <div className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6">
                    {job.strengths.map((s, i) => (
                      <motion.span
                        key={s}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.06 * i, duration: 0.35 }}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-card-2 px-3 py-1.5 text-sm text-ink-soft"
                      >
                        <Check size={14} className="text-accent-3" />
                        {s}
                      </motion.span>
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
