import Reveal, { SectionHeading } from '../Reveal'
import { skillGroups } from '../../data/content'

export const Skills = () => {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          eyebrow="Toolkit"
          title="Technologies I"
          accent="build with."
          kicker="A full-stack toolkit, from polished interfaces to the APIs and databases behind them."
        />

        <div className="divide-y divide-line border-y border-line">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.06}>
              <div className="grid gap-6 py-8 md:grid-cols-[260px_1fr] md:items-start md:py-10">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-accent-3 tabular-nums">
                    0{gi + 1}
                  </span>
                  <h3 className="font-display text-lg font-extrabold tracking-[-0.02em] text-ink">
                    {group.title}
                  </h3>
                  <span className="font-mono text-xs text-ink-muted tabular-nums">
                    [{group.items.length}]
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="cursor-default rounded-md border border-line bg-card px-3.5 py-2 font-mono text-xs font-medium text-ink-soft transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-[#0a0a0b]"
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
