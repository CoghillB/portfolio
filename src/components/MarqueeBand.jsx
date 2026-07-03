import VelocityMarquee from './fx/VelocityMarquee'

const tech = [
  'React', 'TypeScript', 'Next.js', 'Node.js', '.NET', 'C#', 'PostgreSQL', 'Tailwind', 'Framer Motion', 'Three.js',
]
const words = [
  'Software Developer', 'Full-stack', 'End to end', 'Kelowna BC', 'Available for work', 'Let’s build',
]

// Two scroll-reactive tickers running opposite directions. Jet text on the
// bright acid/magenta fills reads in both themes.
export default function MarqueeBand() {
  return (
    <div className="overflow-hidden border-y-2 border-ink">
      <div className="bg-accent py-3.5 text-[#0a0a0a] sm:py-4">
        <VelocityMarquee
          items={tech}
          sep="✦"
          baseVelocity={4}
          itemClassName="font-mono text-sm font-bold uppercase tracking-widest sm:text-base"
        />
      </div>
      <div className="border-t-2 border-ink bg-accent-2 py-3.5 text-[#0a0a0a] sm:py-4">
        <VelocityMarquee
          items={words}
          sep="✶"
          baseVelocity={-4}
          itemClassName="font-mono text-sm font-bold uppercase tracking-widest sm:text-base"
        />
      </div>
    </div>
  )
}
