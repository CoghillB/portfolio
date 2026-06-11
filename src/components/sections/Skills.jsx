import Reveal, { SectionHeading } from '../Reveal'
import Marquee from '../fx/Marquee'
import { skillGroups } from '../../data/content'

const rowConfig = [
  { reverse: false, duration: 36 },
  { reverse: true, duration: 30 },
  { reverse: false, duration: 26 },
]

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Toolkit"
          title="Technologies I build with."
          kicker="A modern frontend-leaning stack, backed by solid fundamentals across the full web pipeline. Hover a row to pause it."
        />
      </div>

      <div className="space-y-8">
        {skillGroups.map((group, gi) => {
          const { reverse, duration } = rowConfig[gi % rowConfig.length]
          return (
            <Reveal key={group.title} delay={gi * 0.08}>
              <div className="mx-auto mb-3 flex max-w-5xl items-center gap-2 px-6">
                <span className="font-mono text-xs text-accent-3">0{gi + 1}</span>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink-soft">
                  {group.title}
                </h3>
              </div>
              <Marquee reverse={reverse} duration={duration}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="whitespace-nowrap rounded-xl border border-line bg-card px-5 py-3 font-display text-base text-ink-soft transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-ink sm:text-lg"
                  >
                    {item}
                  </span>
                ))}
              </Marquee>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
