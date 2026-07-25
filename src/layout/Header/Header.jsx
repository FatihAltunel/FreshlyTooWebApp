import Button from '../../components/Button/Button.jsx'
import './Header.css'

export default function Header({ language, setLanguage, content }) {
  const handleLanguageToggle = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'en' ? 'tr' : 'en'))
  }

  return (
    <header className="site-header">
      <nav className="container header-nav" aria-label="Main navigation">
        <a className="header-logo" href="#hero" aria-label={content.logoAriaLabel}>
          <span className="header-logo__mark" aria-hidden="true"></span>
          <span className="header-logo__text">{content.logo}</span>
        </a>
        <ul className="header-nav__links">
          <li>
            <a href="#hero">{content.nav.home}</a>
          </li>
          <li>
            <a href="#businesses">{content.nav.businesses}</a>
          </li>
          <li>
            <a href="#pricing">{content.nav.pricing}</a>
          </li>
          <li>
            <a href="#our-story">{content.nav.ourStory}</a>
          </li>
          <li>
            <a href="#faq">{content.nav.faq}</a>
          </li>
          <li>
            <a href="#contact">{content.nav.contact}</a>
          </li>
        </ul>
        <section className="header-nav__actions" aria-label="Header actions">
          <Button
            variant="secondary"
            className="header-language-toggle"
            ariaLabel={content.languageAriaLabel}
            title={content.languageToggleHint}
            onClick={handleLanguageToggle}
            ariaPressed={language === 'tr'}
          >
            {content.languageToggleLabel}
          </Button>
          <Button href="#contact" ariaLabel={content.downloadAriaLabel}>
            {content.download}
          </Button>
        </section>
      </nav>
    </header>
  )
}
