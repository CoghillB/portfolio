import { Briefcase, Check } from 'lucide-react'
import Reveal, { SectionHeading } from '../Reveal'
import { experience } from '../../data/content'

export const Experience = () => {
  return (
    <section id="experience" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I'm building right now."
        />

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
                  {job.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-line bg-card-2 px-2.5 py-1 font-mono text-xs text-ink-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Strengths */}
                <div className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6">
                  {job.strengths.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-card-2 px-3 py-1.5 text-sm text-ink-soft"
                    >
                      <Check size={14} className="text-accent-3" />
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
