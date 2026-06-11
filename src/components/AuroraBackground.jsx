import { useTheme } from '../context/ThemeContext'

// Site-wide ambient backdrop: slowly drifting glow blobs + grid + noise.
// The blobs are plain radial gradients (already soft, no blur filter) driven
// by CSS transform keyframes, so the whole layer runs on the compositor and
// costs nothing on the main thread.
const blobs = [
  {
    drift: 'blob-a',
    className: 'top-[-12%] left-[8%] h-[65vh] w-[65vh] opacity-50',
    background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(139,92,246,0.18) 38%, transparent 68%)',
  },
  {
    drift: 'blob-b',
    className: 'top-[6%] right-[2%] h-[75vh] w-[75vh] opacity-45',
    background: 'radial-gradient(circle, rgba(99,102,241,0.45) 0%, rgba(99,102,241,0.16) 38%, transparent 68%)',
  },
  {
    drift: 'blob-c',
    className: 'bottom-[2%] left-[22%] h-[58vh] w-[58vh] opacity-35',
    background: 'radial-gradient(circle, rgba(34,211,238,0.4) 0%, rgba(34,211,238,0.14) 38%, transparent 68%)',
  },
  {
    drift: 'blob-b',
    className: 'top-[45%] right-[28%] h-[50vh] w-[50vh] opacity-30',
    background: 'radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(168,85,247,0.12) 38%, transparent 68%)',
  },
]

export default function AuroraBackground() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base">
      {/* Blobs are softer in light mode so they read as gentle color washes. */}
      <div className={`absolute inset-0 ${isDark ? 'opacity-100' : 'opacity-55'}`}>
        {blobs.map((b, i) => (
          <div
            key={i}
            className={`blob ${b.drift} ${b.className}`}
            style={{ background: b.background }}
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
