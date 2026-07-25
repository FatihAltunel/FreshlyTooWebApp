import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js'
import { HEADER_OFFSET } from '../../routes.js'

/* Rota değişince sayfa başına döner; hash varsa (örn. /#waitlist) hedefe kaydırır.
   location.key bağımlılığı aynı adrese tekrar tıklamayı da yakalar. */
export default function ScrollManager() {
  const location = useLocation()
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const behavior = prefersReducedMotion ? 'auto' : 'smooth'

    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
        window.scrollTo({ top, behavior })
        return
      }
    }

    window.scrollTo({ top: 0, behavior })
  }, [location.key, location.hash, prefersReducedMotion])

  return null
}
