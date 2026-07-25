import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { ROUTES } from '../../routes.js'
import './Faq.css'

export default function Faq() {
  const { content } = useLanguage()
  const page = content.faq
  const baseId = useId()
  // Tasarımda ilk soru açık geliyor; açık olana tekrar basılırsa hepsi kapanır.
  const [openIndex, setOpenIndex] = useState(0)

  usePageTitle(page.meta)

  return (
    <section className="ft-container ft-container--narrow faq">
      <p className="ft-eyebrow">{page.eyebrow}</p>
      <h1 className="ft-page-h1 faq__heading">{page.heading}</h1>

      <div className="faq__list">
        {page.items.map((item, index) => {
          const isOpen = openIndex === index
          const panelId = `${baseId}-panel-${index}`
          const buttonId = `${baseId}-button-${index}`

          return (
            <div className="faq__item" key={item.question}>
              <h2 className="faq__question">
                <button
                  type="button"
                  id={buttonId}
                  className="faq__trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span className="ft-serif faq__sign" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
              </h2>
              <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
                <p className="faq__answer">{item.answer}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="faq__footer">
        <p className="faq__footer-text">{page.footerText}</p>
        <Link className="ft-btn ft-btn--primary" to={ROUTES.contact}>
          {page.footerCta}
        </Link>
      </div>
    </section>
  )
}
