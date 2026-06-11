// Infinite marquee. The track holds two identical halves and loops a
// translate3d(-50%) keyframe, so it never touches the main thread.
// Pauses on hover; collapses to a static row under prefers-reduced-motion.
export default function Marquee({ children, reverse = false, duration = 40, className = '' }) {
  return (
    <div className={`marquee ${className}`}>
      <div
        className={`marquee-track ${reverse ? 'reverse' : ''}`}
        style={{ '--marquee-duration': `${duration}s` }}
      >
        <div className="flex shrink-0 gap-3 pr-3">{children}</div>
        <div className="flex shrink-0 gap-3 pr-3" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
