// Hero varyantı: manifesto kullanılıyor. Editoryal düzene dönmek için bu iki
// satırı ve aşağıdaki <HeroManifesto /> kullanımını Hero ile değiştirmek yeterli.
import HeroManifesto from '../../sections/HeroManifesto/HeroManifesto.jsx'
import Marquee from '../../sections/Marquee/Marquee.jsx'
import Steps from '../../sections/Steps/Steps.jsx'
import Impact from '../../sections/Impact/Impact.jsx'
import AppShowcase from '../../sections/AppShowcase/AppShowcase.jsx'
import Waitlist from '../../sections/Waitlist/Waitlist.jsx'
import usePageTitle from '../../hooks/usePageTitle.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function Home() {
  const { content } = useLanguage()
  usePageTitle(content.home.meta)

  return (
    <>
      <HeroManifesto />
      <Marquee />
      <Steps />
      <Impact />
      <AppShowcase />
      <Waitlist />
    </>
  )
}
