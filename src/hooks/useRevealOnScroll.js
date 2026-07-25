import { useEffect, useRef, useState } from 'react'

export default function useRevealOnScroll() {
  const ref = useRef(null)
  
  // Başlangıçta kullanıcının hareket azaltma tercihini doğrudan kontrol ediyoruz (useEffect gerektirmez)
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [isVisible, setIsVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion) return

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [prefersReducedMotion])

  return { ref, isVisible }
}