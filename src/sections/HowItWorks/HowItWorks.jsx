import PhoneMockup from '../../components/PhoneMockup/PhoneMockup.jsx'
import useRevealOnScroll from '../../hooks/useRevealOnScroll.js'
import mapViewMockup from '../../assets/mockups/map-view.svg'
import listingFeedMockup from '../../assets/mockups/listing-feed.svg'
import qrPickupMockup from '../../assets/mockups/qr-pickup.svg'
import './HowItWorks.css'

const stepMockups = [mapViewMockup, listingFeedMockup, qrPickupMockup]

export default function HowItWorks({ id, content }) {
  const { ref, isVisible } = useRevealOnScroll()

  return (
    <section
      id={id}
      ref={ref}
      className={`section section--alt fade-in-section ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="how-it-works-heading"
    >
      <header className="container section-header">
        <h2 id="how-it-works-heading">{content.heading}</h2>
        <p className="how-it-works__intro">{content.intro}</p>
      </header>
      <ol className="container card-grid how-it-works__grid">
        {content.steps.map((step, index) => (
          <li className="how-it-works__item" key={step.title}>
            <article className="feature-card how-it-works__card">
              <section className="how-it-works__content">
                <p className="how-it-works__step">{step.step}</p>
                <h3>{step.title}</h3>
                <ul className="feature-bullet-list">
                  {step.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </section>
              <PhoneMockup
                imageSrc={stepMockups[index]}
                imageAlt={step.mockup.alt}
                title={step.mockup.title}
                caption={step.mockup.caption}
              />
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
