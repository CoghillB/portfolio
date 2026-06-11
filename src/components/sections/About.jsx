import { GraduationCap, ExternalLink } from 'lucide-react'
import Reveal, { SectionHeading } from '../Reveal'
import TextReveal from '../fx/TextReveal'
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
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="About"
          title="From the deep end to the front end."
        />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Bio: words brighten as you scroll through them */}
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <TextReveal key={i} text={p} className="text-lg leading-relaxed text-ink" />
            ))}

            {/* Stats: count up the first time they enter the viewport */}
            <Reveal delay={0.1}>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {about.stats.map((s) => {
                  const stat = parseStat(s.value)
                  return (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-line bg-card p-5 text-center"
                    >
                      <div className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                        {stat ? <Counter value={stat.value} suffix={stat.suffix} /> : s.value}
                      </div>
                      <div className="mt-1 text-xs text-ink-muted sm:text-sm">{s.label}</div>
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </div>

          {/* Education */}
          <div>
            <Reveal>
              <h3 className="mb-5 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-ink-soft">
                <GraduationCap size={18} className="text-accent-3" />
                Education
              </h3>
            </Reveal>
            <div className="space-y-4">
              {education.map((e, i) => (
                <Reveal key={e.credential} delay={i * 0.08}>
                  <TiltCard max={5} className="glow-border rounded-2xl border border-line bg-card p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-display font-semibold text-ink">{e.org}</span>
                      <span className="shrink-0 font-mono text-xs text-ink-muted">{e.period}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-ink-soft">{e.credential}</p>
                    {e.href ? (
                      <a
                        href={e.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm text-accent-3 hover:underline"
                      >
                        {e.note}
                        <ExternalLink size={13} />
                      </a>
                    ) : (
                      <p className="mt-2 text-xs leading-relaxed text-ink-muted">{e.note}</p>
                    )}
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
