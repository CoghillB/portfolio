import Reveal, { SectionHeading } from '../Reveal'
import { skillGroups } from '../../data/content'

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Toolkit"
          title="Technologies I build with."
          kicker="A full-stack toolkit, from polished interfaces to the APIs and databases behind them."
        />

        {/* Every group laid out in full so the whole stack is visible at a glance. */}
        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.06}>
              <div className="border-t-2 border-line pt-6">
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-accent-3">0{gi + 1}</span>
                  <h3 className="font-display text-lg uppercase tracking-wide text-ink sm:text-xl">
                    {group.title}
                  </h3>
                  <span className="font-mono text-xs text-ink-muted">[{group.items.length}]</span>
                </div>
                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-line bg-card px-4 py-2 font-mono text-sm text-ink-soft transition-colors hover:border-accent hover:bg-accent hover:text-[#0a0a0a]"
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
