import { Link } from 'react-router-dom'
import Headline from '../../components/Headline/Headline.jsx'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { ROUTES, WAITLIST_PATH } from '../../routes.js'
import heroPhoto from '../../assets/photos/photo-1.jpg'
import boxPhoto from '../../assets/photos/photo-2.jpg'
import './Hero.css'

export default function Hero() {
  const { content } = useLanguage()
  const hero = content.home.hero

  return (
    <section className="ft-container hero">
      <div className="hero__text">
        <p className="ft-eyebrow ft-eyebrow--green">{hero.eyebrow}</p>
        <Headline as="h1" className="ft-h1 hero__heading" content={hero.heading} breaks />
        <p className="ft-lede hero__lede">{hero.lede}</p>

        <div className="ft-btn-row hero__actions">
          <Link className="ft-btn ft-btn--primary ft-btn--lg" to={WAITLIST_PATH}>
            {hero.primaryCta}
          </Link>
          <Link className="ft-btn ft-btn--ghost ft-btn--lg" to={ROUTES.businesses}>
            {hero.secondaryCta}
          </Link>
        </div>

        <ul className="hero__trust">
          {hero.trust.map((item) => (
            <li key={item.value}>
              <span className="ft-serif hero__trust-value">{item.value}</span>
              <span className="hero__trust-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__media">
        <div className="hero__photo">
          <img
            src={heroPhoto}
            alt={hero.photoAlt}
            width="896"
            height="1200"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        {/* Yüzen ürün kartı — tasarımda tıklanamaz, yalnızca vitrin. */}
        <div className="hero__card">
          <div className="hero__card-photo">
            <img
              src={boxPhoto}
              alt={hero.card.alt}
              width="1200"
              height="896"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="hero__card-row">
            <span className="hero__card-title">{hero.card.title}</span>
            <span className="hero__card-countdown">{hero.card.countdown}</span>
          </div>
          <div className="hero__card-prices">
            <span className="hero__card-price">{hero.card.price}</span>
            <span className="hero__card-old">{hero.card.oldPrice}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
