import Reveal, { SectionHeading } from '../Reveal'
import { skillGroups } from '../../data/content'

export const Skills = () => {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="Technologies I build with."
          kicker="A modern frontend-leaning stack, backed by solid fundamentals across the full web pipeline."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.1}>
              <div className="glow-border h-full rounded-2xl border border-line bg-card p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="font-mono text-xs text-accent-3">0{gi + 1}</span>
                  <h3 className="font-display font-semibold text-ink">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-line bg-card-2 px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
