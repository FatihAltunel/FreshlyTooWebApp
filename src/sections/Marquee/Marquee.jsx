import { useLanguage } from '../../i18n/LanguageContext.jsx'
import './Marquee.css'

function Words({ items }) {
  return items.map((item) => (
    <span className="marquee__group" key={item}>
      <span className="marquee__word">{item}</span>
      <span className="marquee__dot" aria-hidden="true" />
    </span>
  ))
}

export default function Marquee() {
  const { content } = useLanguage()
  const { label, items } = content.home.marquee

  return (
    <section className="marquee">
      <div className="marquee__row">
        <p className="ft-eyebrow marquee__label">{label}</p>
        <div className="marquee__viewport">
          <div className="marquee__track">
            <Words items={items} />
            {/* Kesintisiz döngü için ikinci kopya; ekran okuyucuya tekrar etmesin. */}
            <span className="marquee__clone" aria-hidden="true">
              <Words items={items} />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
