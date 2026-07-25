import FeatureCard from '../../components/FeatureCard/FeatureCard.jsx'
import PhoneMockup from '../../components/PhoneMockup/PhoneMockup.jsx'
import useRevealOnScroll from '../../hooks/useRevealOnScroll.js'
import listingFeedMockup from '../../assets/mockups/listing-feed.svg'
import qrPickupMockup from '../../assets/mockups/qr-pickup.svg'
import restaurantDashboardMockup from '../../assets/mockups/restaurant-dashboard.svg'
import './BusinessSolutions.css'

const businessMockups = [listingFeedMockup, qrPickupMockup, restaurantDashboardMockup]

export default function BusinessSolutions({ id, content }) {
  const { ref, isVisible } = useRevealOnScroll()

  return (
    <section
      id={id}
      ref={ref}
      className={`section section--alt fade-in-section ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="business-solutions-heading"
    >
      <header className="container section-header">
        <h2 id="business-solutions-heading">{content.heading}</h2>
        <p className="business-solutions__intro">{content.intro}</p>
      </header>
      <section
        className="container card-grid business-solutions__grid"
        aria-label="Business solution highlights"
      >
        {content.items.map((item, index) => (
          <FeatureCard
            key={item.title}
            className="business-solutions__card"
            title={item.title}
            description={item.bullets[0]}
          >
            <ul className="feature-bullet-list">
              {item.bullets.slice(1).map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <PhoneMockup
              imageSrc={businessMockups[index]}
              imageAlt={item.mockup.alt}
              title={item.mockup.title}
              caption={item.mockup.caption}
              tone={index === 1 ? 'orange' : 'green'}
            />
          </FeatureCard>
        ))}
      </section>
    </section>
  )
}
