import { Link } from 'react-router-dom'
import Headline from '../../components/Headline/Headline.jsx'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { ROUTES, WAITLIST_PATH } from '../../routes.js'
import photo1 from '../../assets/photos/photo-1.jpg'
import photo2 from '../../assets/photos/photo-2.jpg'
import photo3 from '../../assets/photos/photo-3.jpg'
import './HeroManifesto.css'

// Şeritte dört kutu var, elimizde üç fotoğraf: tasarımda da photo-1 tekrar ediyor.
const STRIP = [photo1, photo2, photo3, photo1]

export default function HeroManifesto() {
  const { content } = useLanguage()
  const manifesto = content.home.heroManifesto
  const hero = content.home.hero

  return (
    <section className="hero-manifesto">
      <div className="ft-container hero-manifesto__inner">
        <p className="ft-eyebrow ft-eyebrow--light">{manifesto.eyebrow}</p>
        <Headline
          as="h1"
          className="hero-manifesto__heading"
          content={manifesto.heading}
          accentClassName="ft-accent ft-accent--light"
        />

        <div className="hero-manifesto__row">
          <p className="hero-manifesto__body">{manifesto.body}</p>
          <div className="ft-btn-row hero-manifesto__actions">
            <Link className="ft-btn ft-btn--light ft-btn--lg" to={WAITLIST_PATH}>
              {hero.primaryCta}
            </Link>
            <Link className="ft-btn ft-btn--outline-light ft-btn--lg" to={ROUTES.businesses}>
              {hero.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="hero-manifesto__strip">
          {STRIP.map((photo, index) => (
            <div className="hero-manifesto__frame" key={index}>
              <img
                src={photo}
                alt={manifesto.photos[index]}
                width="1200"
                height="896"
                fetchPriority={index === 0 ? 'high' : undefined}
                loading={index === 0 ? undefined : 'lazy'}
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
