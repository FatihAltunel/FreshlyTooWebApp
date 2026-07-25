import { Link } from 'react-router-dom'
import Headline from '../../components/Headline/Headline.jsx'
import usePageTitle from '../../hooks/usePageTitle.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { ROUTES } from '../../routes.js'
import storyPhoto from '../../assets/photos/photo-1.jpg'
import './Story.css'

export default function Story() {
  const { content } = useLanguage()
  const page = content.story
  usePageTitle(page.meta)

  return (
    <>
      <section className="ft-container story-intro">
        <div className="story-intro__head">
          <p className="ft-eyebrow">{page.eyebrow}</p>
          <Headline as="h1" className="story-intro__heading" content={page.heading} />
        </div>
        <div className="story-intro__columns">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="ft-container story-photo">
        <div className="story-photo__frame">
          <img
            src={storyPhoto}
            alt={page.photoAlt}
            width="896"
            height="1200"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="story-values">
        <div className="ft-container story-values__grid">
          {page.values.map((value) => (
            <article className="ft-panel story-value" key={value.title}>
              <h2 className="ft-serif story-value__title">{value.title}</h2>
              <p className="story-value__body">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ft-container story-roadmap">
        <p className="ft-eyebrow story-roadmap__eyebrow">{page.roadmapEyebrow}</p>
        <ul className="story-roadmap__list">
          {page.roadmap.map((item) => (
            <li key={item.title}>
              <span className={`story-roadmap__status story-roadmap__status--${item.tone}`}>
                {item.status}
              </span>
              <div>
                <h2 className="story-roadmap__title">{item.title}</h2>
                <p className="story-roadmap__body">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="story-invest">
          <p className="ft-serif story-invest__text">{page.invest.text}</p>
          <Link className="ft-btn ft-btn--primary" to={ROUTES.contact}>
            {page.invest.cta}
          </Link>
        </div>
      </section>
    </>
  )
}
