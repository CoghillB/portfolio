import { useEffect, useState } from 'react'

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState('')
  const fullText = '< Coghill.dev />'

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setText(fullText.substring(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(interval)
        setTimeout(() => onComplete(), 900)
      }
    }, 90)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base">
      <div className="mb-5 font-mono text-3xl font-bold text-gradient sm:text-4xl">
        {text}
        <span className="ml-1 animate-pulse text-accent">|</span>
      </div>

      <div className="relative h-[2px] w-[220px] overflow-hidden rounded bg-line-strong">
        <div className="absolute inset-y-0 left-0 w-1/3 animate-[loadingbar_0.9s_ease_infinite] rounded bg-accent shadow-[0_0_15px_var(--color-accent-glow)]" />
      </div>

      <style>{`@keyframes loadingbar{0%{transform:translateX(-100%)}100%{transform:translateX(360%)}}`}</style>
    </div>
  )
}

export default LoadingScreen
