import FeatureCard from '../../components/FeatureCard/FeatureCard.jsx'
import PhoneMockup from '../../components/PhoneMockup/PhoneMockup.jsx'
import useRevealOnScroll from '../../hooks/useRevealOnScroll.js'
import detailShot from '../../assets/shots/detail.png'
import pickupQrShot from '../../assets/shots/pickup-qr.png'
import './Businesses.css'

export default function Businesses({ id, content }) {
  const { ref, isVisible } = useRevealOnScroll()

  return (
    <section
      id={id}
      ref={ref}
      className={`section section--alt fade-in-section ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="businesses-heading"
    >
      <header className="container section-header">
        <h2 id="businesses-heading">{content.heading}</h2>
        <p className="businesses__intro">{content.intro}</p>
      </header>
      <section className="container businesses__layout" aria-label={content.layoutAriaLabel}>
        <section className="businesses__cards">
          {content.items.map((item) => (
            <FeatureCard
              key={item.title}
              className="businesses__card"
              title={item.title}
              description={item.bullets[0]}
            >
              <ul className="feature-bullet-list">
                {item.bullets.slice(1).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </FeatureCard>
          ))}
        </section>
        <section className="businesses__shots" aria-label={content.shotsAriaLabel}>
          <PhoneMockup
            imageSrc={detailShot}
            imageAlt={content.mockups.detail.alt}
            title={content.mockups.detail.title}
            caption={content.mockups.detail.caption}
            tone="green"
          />
          <PhoneMockup
            imageSrc={pickupQrShot}
            imageAlt={content.mockups.qr.alt}
            title={content.mockups.qr.title}
            caption={content.mockups.qr.caption}
            tone="orange"
          />
        </section>
      </section>
    </section>
  )
}
