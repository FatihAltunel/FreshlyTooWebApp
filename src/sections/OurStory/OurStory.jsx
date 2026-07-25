import PhoneMockup from '../../components/PhoneMockup/PhoneMockup.jsx'
import useRevealOnScroll from '../../hooks/useRevealOnScroll.js'
import homeShot from '../../assets/shots/home.png'
import detailShot from '../../assets/shots/detail.png'
import './OurStory.css'

export default function OurStory({ id, content }) {
  const { ref, isVisible } = useRevealOnScroll()

  return (
    <section
      id={id}
      ref={ref}
      className={`section section--alt fade-in-section ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="our-story-heading"
    >
      <article className="container our-story__layout">
        <section className="our-story__content">
          <header className="section-header">
            <h2 id="our-story-heading">{content.heading}</h2>
            <p className="our-story__intro">{content.intro}</p>
          </header>
          <ul className="feature-bullet-list">
            {content.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </section>
        <section className="our-story__visuals" aria-label={content.visualAriaLabel}>
          <PhoneMockup
            imageSrc={homeShot}
            imageAlt={content.mockups.home.alt}
            title={content.mockups.home.title}
            caption={content.mockups.home.caption}
            tone="green"
          />
          <PhoneMockup
            imageSrc={detailShot}
            imageAlt={content.mockups.detail.alt}
            title={content.mockups.detail.title}
            caption={content.mockups.detail.caption}
          />
        </section>
      </article>
    </section>
  )
}
