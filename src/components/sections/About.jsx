import { GraduationCap, ArrowUpRight } from 'lucide-react'
import Reveal, { SectionHeading } from '../Reveal'
import Counter from '../fx/Counter'
import TiltCard from '../fx/TiltCard'
import { about, education } from '../../data/content'

// '20+' -> { value: 20, suffix: '+' } for the count-up stat.
const parseStat = (raw) => {
  const match = raw.match(/^(\d+)(.*)$/)
  return match ? { value: Number(match[1]), suffix: match[2] } : null
}

export const About = () => {
  return (
    <section id="about" className="relative border-t border-line px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="From the deep end to"
          accent="full stack."
        />

        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          {/* Bio & stats */}
          <div>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p
                    className={
                      i === 0
                        ? 'text-lg leading-relaxed text-ink sm:text-xl sm:leading-relaxed'
                        : 'text-[16px] leading-relaxed text-ink-soft sm:text-[17px]'
                    }
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* Stats bar */}
            <Reveal delay={0.14}>
              <div className="mt-10 grid grid-cols-3 divide-x divide-line overflow-hidden rounded-xl border border-line bg-card">
                {about.stats.map((s) => {
                  const stat = parseStat(s.value)
                  return (
                    <div key={s.label} className="px-4 py-6 text-center sm:px-6">
                      <div className="font-display text-3xl font-extrabold tracking-[-0.03em] text-accent-3 tabular-nums sm:text-4xl">
                        {stat ? <Counter value={stat.value} suffix={stat.suffix} /> : s.value}
                      </div>
                      <div className="mt-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-ink-muted sm:text-[11px]">
                        {s.label}
                      </div>
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </div>

          {/* Education cards */}
          <div>
            <Reveal>
              <h3 className="mb-5 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-ink-muted">
                <GraduationCap size={16} className="text-accent-3" />
                Education &amp; Credentials
              </h3>
            </Reveal>
            <div className="space-y-4">
              {education.map((e, i) => (
                <Reveal key={e.credential} delay={i * 0.08}>
                  <TiltCard max={4}>
                    <div className="studio-card rounded-xl border border-line bg-card p-6 hover:shadow-[4px_4px_0px_var(--hard-shadow)]">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-display text-[17px] font-bold text-ink">
                          {e.org}
                        </span>
                        <span className="shrink-0 font-mono text-xs font-bold text-accent-3 tabular-nums">
                          {e.period}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm font-medium text-ink-soft">{e.credential}</p>
                      {e.href ? (
                        <a
                          href={e.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:text-accent-3"
                        >
                          {e.note}
                          <ArrowUpRight size={13} className="text-accent-3" />
                        </a>
                      ) : (
                        <p className="mt-3 border-t border-line pt-3 text-xs leading-relaxed text-ink-muted">
                          {e.note}
                        </p>
                      )}
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
