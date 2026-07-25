import Counter from '../../components/Counter/Counter.jsx'
import Headline from '../../components/Headline/Headline.jsx'
import Reveal from '../../components/Reveal/Reveal.jsx'
import StatBar from '../../components/StatBar/StatBar.jsx'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import './Impact.css'

export default function Impact() {
  const { content } = useLanguage()
  const impact = content.home.impact

  return (
    <section className="impact">
      <div className="ft-container impact__grid">
        <div>
          <p className="ft-eyebrow ft-eyebrow--light">{impact.eyebrow}</p>
          <Headline
            className="ft-h2 impact__heading"
            content={impact.heading}
            accentClassName="ft-accent ft-accent--light"
          />
          <p className="impact__body">{impact.body}</p>
          <p className="impact__source">{impact.source}</p>
        </div>

        <div className="impact__stats">
          {impact.rows.map((row, index) => (
            <div key={row.label}>
              <Reveal className="impact__row" delay={index * 0.08} distance={18}>
                <span className="impact__label">{row.label}</span>
                <span className="ft-serif impact__value">
                  <Counter
                    value={row.value}
                    decimals={row.decimals ?? 0}
                    suffix={row.suffix}
                    locale={content.locale}
                  />
                </span>
              </Reveal>
              <StatBar percent={row.bar} delay={index * 120} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
