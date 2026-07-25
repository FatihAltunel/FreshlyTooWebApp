import { useState } from 'react'
import Button from '../../components/Button/Button.jsx'
import useRevealOnScroll from '../../hooks/useRevealOnScroll.js'
import './ContactWaitlist.css'

export default function ContactWaitlist({ id, content }) {
  const { ref, isVisible } = useRevealOnScroll()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section
      id={id}
      ref={ref}
      className={`section section--alt fade-in-section ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="contact-heading"
    >
      <article className="container contact__layout">
        <section className="contact__content">
          <header className="section-header">
            <h2 id="contact-heading">{content.heading}</h2>
            <p className="contact__intro">{content.intro}</p>
          </header>
          <ul className="feature-bullet-list">
            {content.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </section>
        <section className="feature-card contact__form-card" aria-label={content.formAriaLabel}>
          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="contact__label" htmlFor="waitlist-name">
              {content.form.nameLabel}
            </label>
            <input
              className="contact__input"
              id="waitlist-name"
              name="name"
              type="text"
              required
              placeholder={content.form.namePlaceholder}
            />

            <label className="contact__label" htmlFor="waitlist-email">
              {content.form.emailLabel}
            </label>
            <input
              className="contact__input"
              id="waitlist-email"
              name="email"
              type="email"
              required
              placeholder={content.form.emailPlaceholder}
            />

            <label className="contact__label" htmlFor="waitlist-role">
              {content.form.roleLabel}
            </label>
            <select className="contact__input" id="waitlist-role" name="role" defaultValue="">
              <option value="" disabled>
                {content.form.rolePlaceholder}
              </option>
              {content.form.roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>

            <Button type="submit" ariaLabel={content.form.submitAriaLabel}>
              {content.form.submitLabel}
            </Button>
          </form>
          {isSubmitted ? <p className="contact__success">{content.form.success}</p> : null}
        </section>
      </article>
    </section>
  )
}
