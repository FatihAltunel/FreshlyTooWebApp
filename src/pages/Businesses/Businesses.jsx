import { Link } from 'react-router-dom'
import Headline from '../../components/Headline/Headline.jsx'
import usePageTitle from '../../hooks/usePageTitle.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { ROUTES } from '../../routes.js'
import bizPhoto from '../../assets/photos/photo-3.jpg'
import './Businesses.css'

// Temsili saatlik talep grafiği — CSS ile çiziliyor, görsel değil.
const DEMAND_BARS = [
  { height: 26, tone: 'low' },
  { height: 40, tone: 'low' },
  { height: 34, tone: 'low' },
  { height: 58, tone: 'mid' },
  { height: 82, tone: 'high' },
  { height: 100, tone: 'peak' },
  { height: 63, tone: 'mid' },
  { height: 30, tone: 'low' },
]

export default function Businesses() {
  const { content } = useLanguage()
  const page = content.businesses
  usePageTitle(page.meta)

  return (
    <>
      <section className="ft-container biz-hero">
        <div className="biz-hero__text">
          <p className="ft-eyebrow ft-eyebrow--warn">{page.hero.eyebrow}</p>
          <Headline as="h1" className="biz-hero__heading" content={page.hero.heading} />
          <p className="biz-hero__body">{page.hero.body}</p>
          <div className="ft-btn-row biz-hero__actions">
            <Link className="ft-btn ft-btn--primary ft-btn--lg" to={ROUTES.contact}>
              {page.hero.primaryCta}
            </Link>
            <Link className="ft-btn ft-btn--ghost ft-btn--lg" to={ROUTES.pricing}>
              {page.hero.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="biz-hero__photo">
          <img
            src={bizPhoto}
            alt={page.hero.photoAlt}
            width="1200"
            height="896"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </section>

      <section className="biz-how">
        <div className="ft-container biz-how__inner">
          <div className="biz-how__grid">
            <div>
              <p className="ft-eyebrow">{page.how.eyebrow}</p>
              <h2 className="biz-how__heading">{page.how.heading}</h2>
              <ul className="biz-how__steps">
                {page.how.steps.map((step) => (
                  <li key={step.number}>
                    <span className="ft-serif biz-how__number">{step.number}</span>
                    <div>
                      <h3 className="biz-how__step-title">{step.title}</h3>
                      <p className="biz-how__step-body">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="biz-calc">
              <p className="ft-eyebrow">{page.calculator.eyebrow}</p>
              <dl className="biz-calc__rows">
                {page.calculator.rows.map((row) => (
                  <div className="biz-calc__row" key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
                <div className="biz-calc__total">
                  <dt>{page.calculator.totalLabel}</dt>
                  <dd className="ft-serif">{page.calculator.totalValue}</dd>
                </div>
              </dl>
              <p className="ft-note biz-calc__note">{page.calculator.note}</p>
            </div>
          </div>

          <div className="biz-cards">
            <article className="biz-card">
              <div className="biz-card__band biz-card__band--summary">
                <span className="ft-serif biz-card__value">{page.features.summary.value}</span>
                <span className="biz-card__caption">{page.features.summary.caption}</span>
              </div>
              <div className="biz-card__body">
                <h3 className="biz-card__title">{page.features.summary.title}</h3>
                <p className="biz-card__text">{page.features.summary.description}</p>
              </div>
            </article>

            <article className="biz-card">
              <div
                className="biz-card__band biz-card__band--chart"
                role="img"
                aria-label={page.features.demand.chartAlt}
              >
                {DEMAND_BARS.map((bar, index) => (
                  <span
                    key={index}
                    className={`biz-card__bar biz-card__bar--${bar.tone}`}
                    style={{ height: `${bar.height}%` }}
                  />
                ))}
              </div>
              <div className="biz-card__body">
                <h3 className="biz-card__title">{page.features.demand.title}</h3>
                <p className="biz-card__text">{page.features.demand.description}</p>
              </div>
            </article>

            <article className="biz-card">
              <div className="biz-card__band biz-card__band--scan">
                <p className="ft-serif biz-card__quote">
                  {page.features.scan.quote[0]}
                  <br />
                  {page.features.scan.quote[1]}
                </p>
              </div>
              <div className="biz-card__body">
                <h3 className="biz-card__title">{page.features.scan.title}</h3>
                <p className="biz-card__text">{page.features.scan.description}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="ft-container biz-cta">
        <div className="biz-cta__block">
          <div>
            <h2 className="biz-cta__heading">{page.cta.heading}</h2>
            <p className="biz-cta__body">{page.cta.body}</p>
          </div>
          <Link className="ft-btn ft-btn--light ft-btn--lg" to={ROUTES.contact}>
            {page.cta.button}
          </Link>
        </div>
      </section>
    </>
  )
}
