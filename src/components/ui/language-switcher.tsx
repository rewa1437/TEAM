'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

const LANGS = [
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'th', label: 'TH', full: 'ภาษาไทย' },
] as const

export type LangCode = (typeof LANGS)[number]['code']

type LanguageContextValue = {
  lang: LangCode
  isChanging: boolean
  setLang: (code: LangCode) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  isChanging: false,
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>('en')
  const [isChanging, setIsChanging] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('lang') as LangCode | null
    if (stored && LANGS.some((l) => l.code === stored)) {
      setLangState(stored)
      document.documentElement.lang = stored
    }
  }, [])

  const setLang = (code: LangCode) => {
    if (code === lang) return

    // 1. Fade out (130ms)
    setIsChanging(true)

    setTimeout(() => {
      // 2. Swap content while invisible
      setLangState(code)
      localStorage.setItem('lang', code)
      document.documentElement.lang = code

      // 3. Let React render the new content, then fade in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsChanging(false)
        })
      })
    }, 130)
  }

  return (
    <LanguageContext.Provider value={{ lang, isChanging, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

/** Wrap any section whose text changes with language to get a blur-fade transition */
export function LangTransition({ children, className }: { children: ReactNode; className?: string }) {
  const { isChanging } = useLanguage()

  return (
    <div
      className={className}
      style={{
        opacity: isChanging ? 0 : 1,
        filter: isChanging ? 'blur(6px)' : 'blur(0px)',
        transform: isChanging ? 'translateY(-5px)' : 'translateY(0)',
        transition: isChanging
          ? 'opacity 130ms cubic-bezier(0.4,0,1,1), filter 130ms cubic-bezier(0.4,0,1,1), transform 130ms cubic-bezier(0.4,0,1,1)'
          : 'opacity 300ms cubic-bezier(0.16,1,0.3,1), filter 300ms cubic-bezier(0.16,1,0.3,1), transform 300ms cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {children}
    </div>
  )
}

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-0.5">
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          title={l.full}
          className={`rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            lang === l.code
              ? 'bg-zinc-900 text-white shadow-[0_1px_4px_rgba(0,0,0,0.2)]'
              : 'text-zinc-500 hover:text-zinc-800'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
