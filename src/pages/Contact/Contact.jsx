import { useId, useState } from 'react'
import usePageTitle from '../../hooks/usePageTitle.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { EMAIL_PATTERN, submitContact } from '../../lib/actions.js'
import './Contact.css'

export default function Contact() {
  const { content, language } = useLanguage()
  const page = content.contact
  const form = page.form
  const fieldId = useId()

  usePageTitle(page.meta)

  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: form.subjects[0],
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  function update(field) {
    return (event) => setValues((current) => ({ ...current, [field]: event.target.value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (status === 'submitting') return

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setError(form.errorRequired)
      return
    }

    if (!EMAIL_PATTERN.test(values.email)) {
      setError(form.errorEmail)
      return
    }

    setError('')
    setStatus('submitting')
    const result = await submitContact({ ...values, language })

    if (result.ok) {
      setStatus('done')
      return
    }

    setStatus('idle')
    setError(form.errorSubmit)
  }

  return (
    <section className="ft-container contact">
      <div>
        <p className="ft-eyebrow">{page.eyebrow}</p>
        <h1 className="ft-page-h1 contact__heading">{page.heading}</h1>

        <ul className="contact__channels">
          {page.channels.map((channel) => (
            <li key={channel.email}>
              <span className="contact__channel-label">{channel.label}</span>
              <a className="contact__channel-email" href={`mailto:${channel.email}`}>
                {channel.email}
              </a>
            </li>
          ))}
        </ul>

        <div className="contact__press">
          <h2 className="contact__press-title">{page.pressKit.title}</h2>
          <p className="contact__press-body">{page.pressKit.description}</p>
          {/* Basın kiti dosyası henüz hazır değil; yüklenince href bağlanacak. */}
          <a className="contact__press-link" href="#">
            {page.pressKit.link}
          </a>
        </div>
      </div>

      <div className="ft-card contact__card">
        <h2 className="contact__form-title">{form.title}</h2>
        <p className="contact__form-note">{form.note}</p>

        {status === 'done' ? (
          <div className="contact__success" role="status">
            <p className="contact__success-title">{form.successTitle}</p>
            <p className="contact__success-body">{form.successBody}</p>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="ft-label" htmlFor={`${fieldId}-name`}>
                {form.nameLabel}
              </label>
              <input
                id={`${fieldId}-name`}
                className="ft-input"
                type="text"
                name="name"
                autoComplete="name"
                placeholder={form.namePlaceholder}
                value={values.name}
                onChange={update('name')}
              />
            </div>

            <div>
              <label className="ft-label" htmlFor={`${fieldId}-email`}>
                {form.emailLabel}
              </label>
              <input
                id={`${fieldId}-email`}
                className="ft-input"
                type="email"
                name="email"
                autoComplete="email"
                placeholder={form.emailPlaceholder}
                value={values.email}
                onChange={update('email')}
              />
            </div>

            <div>
              <label className="ft-label" htmlFor={`${fieldId}-subject`}>
                {form.subjectLabel}
              </label>
              <select
                id={`${fieldId}-subject`}
                className="ft-input"
                name="subject"
                value={values.subject}
                onChange={update('subject')}
              >
                {form.subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="ft-label" htmlFor={`${fieldId}-message`}>
                {form.messageLabel}
              </label>
              <textarea
                id={`${fieldId}-message`}
                className="ft-input"
                name="message"
                rows="4"
                placeholder={form.messagePlaceholder}
                value={values.message}
                onChange={update('message')}
              />
            </div>

            {error ? (
              <p className="contact__error" role="alert">
                {error}
              </p>
            ) : null}

            <button
              className="ft-btn ft-btn--primary contact__submit"
              type="submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? form.submitting : form.submit}
            </button>

            <p className="ft-note">{form.kvkk}</p>
          </form>
        )}
      </div>
    </section>
  )
}
