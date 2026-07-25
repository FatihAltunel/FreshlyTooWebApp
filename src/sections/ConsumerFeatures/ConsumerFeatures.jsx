import FeatureCard from '../../components/FeatureCard/FeatureCard.jsx'
import PhoneMockup from '../../components/PhoneMockup/PhoneMockup.jsx'
import useRevealOnScroll from '../../hooks/useRevealOnScroll.js'
import walletBadgesMockup from '../../assets/mockups/wallet-badges.svg'
import mapViewMockup from '../../assets/mockups/map-view.svg'
import listingFeedMockup from '../../assets/mockups/listing-feed.svg'
import './ConsumerFeatures.css'

const featureMockups = [walletBadgesMockup, mapViewMockup, listingFeedMockup]

export default function ConsumerFeatures({ id, content }) {
  const { ref, isVisible } = useRevealOnScroll()

  return (
    <section
      id={id}
      ref={ref}
      className={`section fade-in-section ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="consumer-features-heading"
    >
      <header className="container section-header">
        <h2 id="consumer-features-heading">{content.heading}</h2>
        <p className="consumer-features__intro">{content.intro}</p>
      </header>
      <section
        className="container card-grid consumer-features__grid"
        aria-label="Consumer feature highlights"
      >
        {content.items.map((item, index) => (
          <FeatureCard
            key={item.title}
            className="consumer-features__card"
            title={item.title}
            description={item.bullets[0]}
          >
            <ul className="feature-bullet-list">
              {item.bullets.slice(1).map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <PhoneMockup
              imageSrc={featureMockups[index]}
              imageAlt={item.mockup.alt}
              title={item.mockup.title}
              caption={item.mockup.caption}
            />
          </FeatureCard>
        ))}
      </section>
    </section>
  )
}
