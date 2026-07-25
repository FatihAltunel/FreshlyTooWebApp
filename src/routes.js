/* Gerçek URL'ler — prototipteki `page` state'inin yerini alır. */
export const ROUTES = {
  home: '/',
  businesses: '/isletmeler',
  pricing: '/fiyatlandirma',
  story: '/hikayemiz',
  faq: '/sss',
  contact: '/iletisim',
}

export const WAITLIST_HASH = '#waitlist'
export const WAITLIST_PATH = `${ROUTES.home}${WAITLIST_HASH}`

/* Sticky header yüksekliği (74px) + biraz nefes payı. */
export const HEADER_OFFSET = 90
