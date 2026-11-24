import VelocityMarquee from './fx/VelocityMarquee'

const defaultItems = [
  'React',
  'TypeScript',
  'Next.js',
  'C# / .NET',
  'Node.js',
  'PostgreSQL',
  'Tailwind CSS',
  'Fastify',
  'Supabase',
  'Framer Motion',
  'Kelowna BC',
]

// High-energy scroll-reactive acid-lime ribbon — flick the page and it kicks.
export default function MarqueeBand({ items = defaultItems }) {
  return (
    <div className="overflow-hidden border-y border-ink/20 bg-accent py-3.5 text-[#0a0a0b]">
      <VelocityMarquee
        items={items}
        sep="✦"
        baseVelocity={3.8}
        itemClassName="font-mono text-xs font-bold uppercase tracking-[0.2em] sm:text-sm"
      />
    </div>
  )
}
