import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { ROUTES } from '../../routes.js'
import { Wordmark } from '../Header/Header.jsx'
import icon from '../../assets/icon.png'
import './Footer.css'

export default function Footer() {
  const { content } = useLanguage()
  const { footer, header } = content

  const columns = [
    {
      title: footer.discover,
      links: [
        { to: ROUTES.home, label: header.home },
        { to: ROUTES.businesses, label: header.nav.businesses },
        { to: ROUTES.pricing, label: header.nav.pricing },
      ],
    },
    {
      title: footer.corporate,
      links: [
        { to: ROUTES.story, label: header.nav.story },
        { to: ROUTES.faq, label: header.nav.faq },
        { to: ROUTES.contact, label: header.nav.contact },
      ],
    },
  ]

  return (
    <footer className="site-footer">
      <div className="ft-container site-footer__grid">
        <div className="site-footer__brand">
          <div className="site-footer__logo">
            <img src={icon} alt="" width="34" height="34" />
            <Wordmark className="wordmark site-footer__wordmark" />
          </div>
          <p className="site-footer__tagline">{footer.tagline}</p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <div className="site-footer__heading">{column.title}</div>
            <ul className="site-footer__links">
              {column.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <div className="site-footer__heading">{footer.legal}</div>
          <ul className="site-footer__links">
            {footer.legalLinks.map((label) => (
              <li key={label}>
                {/* Yasal metinler henüz yazılmadı; sayfalar hazır olunca route bağlanacak. */}
                <a href="#">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ft-container site-footer__bottom">
        <span>{footer.copyright}</span>
        <span>{footer.location}</span>
      </div>
    </footer>
  )
}
