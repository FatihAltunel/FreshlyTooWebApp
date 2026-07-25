import { useEffect, useState } from 'react'
import useInView from '../../hooks/useInView.js'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js'

const DURATION = 1000

/* Görünüme girince 0'dan hedefe sayar (1s, ease-out cubic).
   Ondalık ayırıcı dile göre: TR'de virgül, EN'de nokta. */
export default function Counter({ value, decimals = 0, suffix = '', locale = 'tr' }) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [ref, isInView] = useInView()
  const [animated, setAnimated] = useState(0)

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return

    let frame = 0
    const start = performance.now()

    const step = (now) => {
      const progress = Math.min(1, (now - start) / DURATION)
      const eased = 1 - Math.pow(1 - progress, 3)
      setAnimated(value * eased)
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [isInView, prefersReducedMotion, value])

  // Hareket azaltmada sayaç hiç çalışmaz, hedef değer doğrudan yazılır.
  const displayed = prefersReducedMotion ? value : animated

  return (
    <span ref={ref}>
      {displayed.toLocaleString(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}
