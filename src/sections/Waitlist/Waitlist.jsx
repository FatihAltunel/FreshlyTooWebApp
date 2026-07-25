import { useId, useState } from 'react'
import Headline from '../../components/Headline/Headline.jsx'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { EMAIL_PATTERN, submitWaitlist } from '../../lib/actions.js'
import './Waitlist.css'

export default function Waitlist() {
  const { content, language } = useLanguage()
  const copy = content.home.waitlist
  const fieldId = useId()

  const [email, setEmail] = useState('')
  const [role, setRole] = useState('customer')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const roles = [
    { value: 'customer', label: copy.roleCustomer },
    { value: 'business', label: copy.roleBusiness },
  ]

  async function handleSubmit(event) {
    event.preventDefault()
    if (status === 'submitting') return

    if (!EMAIL_PATTERN.test(email)) {
      setError(copy.errorEmail)
      return
    }

    setError('')
    setStatus('submitting')
    const result = await submitWaitlist({ email, role, language })

    if (result.ok) {
      setStatus('done')
      return
    }

    setStatus('idle')
    setError(copy.errorSubmit)
  }

  return (
    <section className="waitlist" id="waitlist">
      <div className="ft-container waitlist__grid">
        <div>
          <p className="ft-eyebrow ft-eyebrow--green">{copy.eyebrow}</p>
          <Headline className="ft-h2 waitlist__heading" content={copy.heading} />
          <p className="waitlist__body">{copy.body}</p>
        </div>

        <div>
          {status === 'done' ? (
            <div className="waitlist__success" role="status">
              <p className="waitlist__success-title">{copy.successTitle}</p>
              <p className="waitlist__success-body">
                {role === 'business' ? copy.successBusiness : copy.successCustomer}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="waitlist__field">
                <label className="sr-only" htmlFor={`${fieldId}-email`}>
                  {copy.emailLabel}
                </label>
                <input
                  id={`${fieldId}-email`}
                  className="waitlist__input"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder={copy.emailPlaceholder}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-invalid={error ? 'true' : undefined}
                />
                <button
                  className="ft-btn ft-btn--primary ft-btn--lg"
                  type="submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? copy.submitting : copy.submit}
                </button>
              </div>

              <fieldset className="waitlist__roles">
                <legend className="sr-only">{copy.roleLegend}</legend>
                {roles.map((option) => (
                  <span className="waitlist__role" key={option.value}>
                    <input
                      type="radio"
                      id={`${fieldId}-${option.value}`}
                      name="role"
                      value={option.value}
                      checked={role === option.value}
                      onChange={() => setRole(option.value)}
                    />
                    <label htmlFor={`${fieldId}-${option.value}`}>{option.label}</label>
                  </span>
                ))}
              </fieldset>

              {error ? (
                <p className="waitlist__error" role="alert">
                  {error}
                </p>
              ) : null}

              <p className="ft-note waitlist__kvkk">{copy.kvkk}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
