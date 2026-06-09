import { motion, useReducedMotion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

// Site-wide ambient backdrop: slowly drifting glow blobs + grid + noise.
// Adapted from a 21st.dev "Aurora" component, retuned to the project tokens.
const blobs = [
  {
    color: 'rgba(139, 92, 246, 0.85)', // violet
    className: 'top-[-12%] left-[8%] h-[65vh] w-[65vh] opacity-50',
    animate: { x: [0, 90, -40, 0], y: [0, -70, 90, 0], scale: [1, 1.15, 0.95, 1] },
    duration: 22,
  },
  {
    color: 'rgba(99, 102, 241, 0.8)', // indigo
    className: 'top-[6%] right-[2%] h-[75vh] w-[75vh] opacity-45',
    animate: { x: [0, -110, 70, 0], y: [0, 90, -50, 0], scale: [1, 0.9, 1.1, 1] },
    duration: 27,
  },
  {
    color: 'rgba(34, 211, 238, 0.7)', // cyan
    className: 'bottom-[2%] left-[22%] h-[58vh] w-[58vh] opacity-35',
    animate: { x: [0, 80, -90, 0], y: [0, -80, 60, 0], scale: [1, 1.1, 0.92, 1] },
    duration: 25,
  },
  {
    color: 'rgba(168, 85, 247, 0.6)', // fuchsia-violet, mid-page warmth
    className: 'top-[45%] right-[28%] h-[50vh] w-[50vh] opacity-30',
    animate: { x: [0, -60, 80, 0], y: [0, 70, -60, 0], scale: [1, 1.1, 0.9, 1] },
    duration: 30,
  },
]

export default function AuroraBackground() {
  const reduce = useReducedMotion()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base">
      {/* Blobs are softer in light mode so they read as gentle color washes. */}
      <div className={`absolute inset-0 ${isDark ? 'opacity-100' : 'opacity-55'}`}>
        {blobs.map((b, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-[110px] ${b.className}`}
            style={{ background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)` }}
            animate={reduce ? undefined : b.animate}
            transition={{ duration: b.duration, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* faint blueprint grid */}
      <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* film grain for depth (dark only; it muddies light surfaces) */}
      {isDark && (
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      )}

      {/* vignette so content stays readable */}
      <div className="aurora-vignette absolute inset-0" />
    </div>
  )
}
