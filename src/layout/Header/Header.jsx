import { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { ROUTES, WAITLIST_PATH } from '../../routes.js'
import icon from '../../assets/icon.png'
import './Header.css'

export function Wordmark({ className = 'wordmark' }) {
  return (
    <span className={className}>
      Freshly<span className="wordmark__soft">Too</span>
    </span>
  )
}

export default function Header() {
  const { content, language, toggleLanguage } = useLanguage()
  const { nav } = content.header
  const progressRef = useRef(null)

  // İlerleme çubuğu her scroll'da render tetiklemesin diye genişliği doğrudan yazılıyor.
  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const bar = progressRef.current
      if (!bar) return
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const ratio = scrollable > 8 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0
      bar.style.width = `${ratio}%`
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const links = [
    { to: ROUTES.home, label: nav.home, end: true },
    { to: ROUTES.businesses, label: nav.businesses },
    { to: ROUTES.pricing, label: nav.pricing },
    { to: ROUTES.story, label: nav.story },
    { to: ROUTES.faq, label: nav.faq },
    { to: ROUTES.contact, label: nav.contact },
  ]

  return (
    <header className="site-header">
      <div className="site-header__progress" ref={progressRef} aria-hidden="true" />
      <div className="ft-container site-header__inner">
        <Link className="site-header__logo" to={ROUTES.home}>
          <img src={icon} alt="" width="36" height="36" />
          <Wordmark />
          <span className="sr-only">{content.header.home}</span>
        </Link>

        <nav className="site-header__nav" aria-label={content.header.navAriaLabel}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `site-header__link${isActive ? ' is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="site-header__lang"
            onClick={toggleLanguage}
            aria-label={content.header.languageAriaLabel}
            lang={language === 'tr' ? 'en' : 'tr'}
          >
            {content.header.languageLabel}
          </button>
          <Link className="ft-btn ft-btn--primary ft-btn--sm" to={WAITLIST_PATH}>
            {content.header.cta}
          </Link>
        </div>
      </div>
    </header>
  )
}
