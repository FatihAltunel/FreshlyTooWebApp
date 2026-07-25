import { Route, Routes } from 'react-router-dom'
import Header from './layout/Header/Header.jsx'
import Footer from './layout/Footer/Footer.jsx'
import ScrollManager from './components/ScrollManager/ScrollManager.jsx'
import Home from './pages/Home/Home.jsx'
import Businesses from './pages/Businesses/Businesses.jsx'
import Pricing from './pages/Pricing/Pricing.jsx'
import Story from './pages/Story/Story.jsx'
import Faq from './pages/Faq/Faq.jsx'
import Contact from './pages/Contact/Contact.jsx'
import { ROUTES } from './routes.js'

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.businesses} element={<Businesses />} />
          <Route path={ROUTES.pricing} element={<Pricing />} />
          <Route path={ROUTES.story} element={<Story />} />
          <Route path={ROUTES.faq} element={<Faq />} />
          <Route path={ROUTES.contact} element={<Contact />} />
          {/* Bilinmeyen yol ana sayfayı gösterir — ayrı bir 404 tasarımı yok. */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
