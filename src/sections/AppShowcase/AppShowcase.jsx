import Headline from '../../components/Headline/Headline.jsx'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import homeShot from '../../assets/shots/home.png'
import './AppShowcase.css'

export default function AppShowcase() {
  const { content } = useLanguage()
  const app = content.home.app

  return (
    <section className="ft-container app-showcase">
      <div className="app-showcase__media">
        <div className="app-showcase__phone">
          <img src={homeShot} alt={app.shotAlt} loading="lazy" decoding="async" />
        </div>
        <div className="app-showcase__fade" aria-hidden="true" />
      </div>

      <div>
        <p className="ft-eyebrow">{app.eyebrow}</p>
        <Headline
          className="ft-h2 app-showcase__heading"
          content={app.heading}
          accentClassName="ft-accent ft-accent--plain"
        />
        <ul className="app-showcase__list">
          {app.rows.map((row) => (
            <li key={row.title}>
              <strong>{row.title}</strong>
              <span> {row.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
