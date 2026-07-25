import { Link } from 'react-router-dom'
import Headline from '../../components/Headline/Headline.jsx'
import usePageTitle from '../../hooks/usePageTitle.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { ROUTES, WAITLIST_PATH } from '../../routes.js'
import './Pricing.css'

export default function Pricing() {
  const { content } = useLanguage()
  const page = content.pricing
  usePageTitle(page.meta)

  return (
    <>
      <section className="ft-container pricing-intro">
        <p className="ft-eyebrow">{page.eyebrow}</p>
        <Headline as="h1" className="pricing-intro__heading" content={page.heading} />
        <p className="pricing-intro__body">{page.body}</p>
      </section>

      <section className="ft-container pricing-plans">
        {page.plans.map((plan) => (
          <article
            className={`pricing-card${plan.featured ? ' pricing-card--featured' : ''}`}
            key={plan.name}
          >
            {plan.featured ? (
              <span className="pricing-card__badge">{page.recommended}</span>
            ) : null}
            <h2 className="pricing-card__name">{plan.name}</h2>
            <p className="ft-serif pricing-card__price">
              {plan.price}
              {plan.period ? <span className="pricing-card__period">{plan.period}</span> : null}
            </p>
            <p className="pricing-card__description">{plan.description}</p>
            <ul className="pricing-card__features">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Link
              className={`ft-btn ft-btn--block ${
                plan.featured ? 'ft-btn--light' : 'ft-btn--soft'
              } pricing-card__cta`}
              to={plan.target === 'waitlist' ? WAITLIST_PATH : ROUTES.contact}
            >
              {plan.cta}
            </Link>
          </article>
        ))}
      </section>

      <section className="pricing-strip">
        <div className="ft-container pricing-strip__inner">
          <p className="pricing-strip__text">{page.strip.text}</p>
          <Link className="ft-btn ft-btn--primary" to={ROUTES.contact}>
            {page.strip.cta}
          </Link>
        </div>
      </section>
    </>
  )
}
