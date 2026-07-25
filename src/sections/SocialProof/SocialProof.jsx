import StatBadge from '../../components/StatBadge/StatBadge.jsx'
import useRevealOnScroll from '../../hooks/useRevealOnScroll.js'
import './SocialProof.css'

export default function SocialProof({ id, content }) {
  const { ref, isVisible } = useRevealOnScroll()

  return (
    <section
      id={id}
      ref={ref}
      className={`section fade-in-section ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="social-proof-heading"
    >
      <header className="container section-header">
        <h2 id="social-proof-heading">{content.heading}</h2>
        <p className="social-proof__intro">{content.intro}</p>
      </header>
      <section
        className="container stat-grid social-proof__grid"
        aria-label="Environmental impact statistics"
      >
        {content.stats.map((stat) => (
          <StatBadge
            key={stat.label}
            className="social-proof__badge"
            value={stat.value}
            label={stat.label}
            detail={stat.detail}
          />
        ))}
      </section>
    </section>
  )
}
