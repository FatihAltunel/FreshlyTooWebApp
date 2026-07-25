import Button from '../../components/Button/Button.jsx'
import PhoneMockup from '../../components/PhoneMockup/PhoneMockup.jsx'
import useRevealOnScroll from '../../hooks/useRevealOnScroll.js'
import homeShot from '../../assets/shots/home.png'
import mapShot from '../../assets/shots/map.png'
import './Hero.css'

export default function Hero({ id, content }) {
  const { ref, isVisible } = useRevealOnScroll()

  return (
    <section
      id={id}
      ref={ref}
      className={`section hero-section fade-in-section ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="hero-heading"
    >
      <article className="container hero-layout">
        <section className="hero-content">
          <p className="hero-eyebrow">{content.eyebrow}</p>
          <h1 id="hero-heading">{content.heading}</h1>
          <p className="hero-subheadline">{content.subheadline}</p>
          <ul className="hero-bullet-list" aria-label="Key benefits">
            {content.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <section className="hero-cta-group" aria-label="Mobile app download options">
            <Button
              href="#contact"
              ariaLabel={content.ctaAppStoreAriaLabel}
            >
              {content.primaryCta}
            </Button>
            <Button
              href="#businesses"
              variant="secondary"
              ariaLabel={content.ctaGooglePlayAriaLabel}
            >
              {content.secondaryCta}
            </Button>
          </section>
        </section>
        <section className="hero-visuals" aria-label={content.mockupAriaLabel}>
          <PhoneMockup
            imageSrc={homeShot}
            imageAlt={content.mockups.home.alt}
            title={content.mockups.home.title}
            caption={content.mockups.home.caption}
            tone="green"
          />
          <PhoneMockup
            imageSrc={mapShot}
            imageAlt={content.mockups.map.alt}
            title={content.mockups.map.title}
            caption={content.mockups.map.caption}
            tone="orange"
          />
        </section>
      </article>
    </section>
  )
}
