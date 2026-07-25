/* Sayfadaki tüm reveal / sayaç / bar animasyonları tek bir IntersectionObserver
   üstünden tetiklenir. Her bileşen kendi observer'ını açsaydı uzun sayfalarda
   onlarca observer birikirdi. */

const callbacks = new Map()
let observer = null

function getObserver() {
  if (observer) return observer
  if (typeof IntersectionObserver === 'undefined') return null

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const callback = callbacks.get(entry.target)
        unobserve(entry.target)
        callback?.()
      }
    },
    // Tasarım "viewport'un %90'ına girince" diyor: alt kenardan %10 kırpıyoruz.
    { rootMargin: '0px 0px -10% 0px', threshold: 0 },
  )
  return observer
}

export function observe(element, callback) {
  const io = getObserver()
  // IntersectionObserver yoksa içerik gizli kalmasın, hemen açılsın.
  if (!io) {
    callback()
    return
  }
  callbacks.set(element, callback)
  io.observe(element)
}

export function unobserve(element) {
  callbacks.delete(element)
  observer?.unobserve(element)
}
