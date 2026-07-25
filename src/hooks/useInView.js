import { useEffect, useRef, useState } from 'react'
import { observe, unobserve } from '../lib/scrollObserver.js'
import usePrefersReducedMotion from './usePrefersReducedMotion.js'

/* Elemanın viewport'a girip girmediğini paylaşılan observer üstünden bildirir.
   Bir kez tetiklenir; hareket azaltma açıksa observer hiç kurulmaz ve eleman
   en baştan görünür sayılır. */
export default function useInView() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return

    const node = ref.current
    if (!node) return

    observe(node, () => setHasIntersected(true))
    return () => unobserve(node)
  }, [prefersReducedMotion])

  return [ref, prefersReducedMotion || hasIntersected]
}
