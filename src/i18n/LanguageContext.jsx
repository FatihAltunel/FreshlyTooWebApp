import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { LANGUAGES, siteContent } from './content.js'

const STORAGE_KEY = 'freshlytoo:lang'
const DEFAULT_LANGUAGE = 'tr'

const LanguageContext = createContext(null)

function readStoredLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return LANGUAGES.includes(stored) ? stored : DEFAULT_LANGUAGE
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(readStoredLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const toggleLanguage = useCallback(() => {
    setLanguage((current) => (current === 'tr' ? 'en' : 'tr'))
  }, [])

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, content: siteContent[language] }),
    [language, toggleLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
