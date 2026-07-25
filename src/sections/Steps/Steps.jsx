import Reveal from '../../components/Reveal/Reveal.jsx'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import mapShot from '../../assets/shots/map.png'
import detailShot from '../../assets/shots/detail.png'
import pickupShot from '../../assets/shots/pickup-qr.png'
import './Steps.css'

const SHOTS = [mapShot, detailShot, pickupShot]
const DELAYS = [0.05, 0.14, 0.23]

export default function Steps() {
  const { content } = useLanguage()
  const { eyebrow, heading, items } = content.home.steps

  return (
    <section className="ft-container steps">
      <Reveal className="steps__intro">
        <p className="ft-eyebrow">{eyebrow}</p>
        <h2 className="ft-h2 steps__heading">{heading}</h2>
      </Reveal>

      <div className="steps__grid">
        {items.map((item, index) => (
          <Reveal key={item.number} delay={DELAYS[index]} distance={30}>
            <div className="steps__frame">
              <img src={SHOTS[index]} alt={item.alt} loading="lazy" decoding="async" />
            </div>
            <div className="steps__caption">
              <span className="ft-serif steps__number">{item.number}</span>
              <div>
                <h3 className="steps__title">{item.title}</h3>
                <p className="steps__description">{item.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
