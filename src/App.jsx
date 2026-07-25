import { useEffect, useState } from 'react'
import Header from './layout/Header/Header.jsx'
import Footer from './layout/Footer/Footer.jsx'
import Hero from './sections/Hero/Hero.jsx'
import Businesses from './sections/Businesses/Businesses.jsx'
import Pricing from './sections/Pricing/Pricing.jsx'
import OurStory from './sections/OurStory/OurStory.jsx'
import FAQ from './sections/FAQ/FAQ.jsx'
import ContactWaitlist from './sections/ContactWaitlist/ContactWaitlist.jsx'
import { landingContent } from './i18n/content.js'

function App() {
  const [language, setLanguage] = useState('en')
  const content = landingContent[language]

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <>
      <Header
        language={language}
        setLanguage={setLanguage}
        content={content.header}
      />
      <main>
        <Hero id="hero" content={content.hero} />
        <Businesses id="businesses" content={content.businesses} />
        <Pricing id="pricing" content={content.pricing} />
        <OurStory id="our-story" content={content.ourStory} />
        <FAQ id="faq" content={content.faq} />
        <ContactWaitlist id="contact" content={content.contactWaitlist} />
      </main>
      <Footer content={content.footer} navContent={content.header.nav} />
    </>
  )
}

export default App
