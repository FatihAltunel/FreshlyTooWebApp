import useRevealOnScroll from '../../hooks/useRevealOnScroll.js'
import './FAQ.css'

export default function FAQ({ id, content }) {
  const { ref, isVisible } = useRevealOnScroll()

  return (
    <section
      id={id}
      ref={ref}
      className={`section fade-in-section ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="faq-heading"
    >
      <header className="container section-header">
        <h2 id="faq-heading">{content.heading}</h2>
        <p className="faq__intro">{content.intro}</p>
      </header>
      <section className="container faq__list" aria-label={content.listAriaLabel}>
        {content.items.map((item) => (
          <article key={item.question} className="feature-card faq__item">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </section>
    </section>
  )
}
