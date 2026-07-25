import useRevealOnScroll from '../../hooks/useRevealOnScroll.js'
import './Pricing.css'

export default function Pricing({ id, content }) {
  const { ref, isVisible } = useRevealOnScroll()

  return (
    <section
      id={id}
      ref={ref}
      className={`section fade-in-section ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="pricing-heading"
    >
      <header className="container section-header">
        <h2 id="pricing-heading">{content.heading}</h2>
        <p className="pricing__intro">{content.intro}</p>
      </header>
      <section className="container pricing__grid" aria-label={content.gridAriaLabel}>
        {content.plans.map((plan) => (
          <article
            key={plan.name}
            className={`feature-card pricing__card ${plan.featured ? 'pricing__card--featured' : ''}`.trim()}
          >
            <p className="pricing__plan">{plan.name}</p>
            <h3>{plan.price}</h3>
            <p>{plan.summary}</p>
            <ul className="feature-bullet-list">
              {plan.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </section>
  )
}
