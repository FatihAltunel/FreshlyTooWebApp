export default function Footer({ content, navContent }) {
  return (
    <footer className="site-footer" id="footer-contact">
      <section className="container footer-grid" aria-label="Footer content">
        <article className="footer-column">
          <h3>FreshlyToo</h3>
          <p>{content.mission}</p>
          <p className="footer-note">{content.legalPlaceholder}</p>
        </article>
        <article className="footer-column">
          <h3>{content.quickLinks}</h3>
          <ul>
            <li>
              <a href="#hero">{navContent.home}</a>
            </li>
            <li>
              <a href="#businesses">{navContent.businesses}</a>
            </li>
            <li>
              <a href="#pricing">{navContent.pricing}</a>
            </li>
            <li>
              <a href="#our-story">{navContent.ourStory}</a>
            </li>
            <li>
              <a href="#faq">{navContent.faq}</a>
            </li>
          </ul>
        </article>
        <article className="footer-column">
          <h3>{content.legal}</h3>
          <ul>
            <li>
              <a href="#privacy">{content.privacy}</a>
            </li>
            <li>
              <a href="#terms">{content.terms}</a>
            </li>
            <li>
              <a href="#cookies">{content.cookies}</a>
            </li>
          </ul>
          <p className="footer-note">{content.legalPlaceholder}</p>
        </article>
        <article className="footer-column">
          <h3>{content.contact}</h3>
          <ul>
            <li>
              <a href="mailto:hello@freshlytoo.com">hello@freshlytoo.com</a>
            </li>
            <li>
              <a href="tel:+900000000000">+90 (000) 000 00 00</a>
            </li>
            <li>
              <a href="#contact">{navContent.contact}</a>
            </li>
          </ul>
          <p className="footer-note">{content.socialPlaceholder}</p>
        </article>
      </section>
      <section className="container footer-bottom" aria-label="Copyright notice">
        <p>{content.copyright}</p>
      </section>
    </footer>
  )
}
