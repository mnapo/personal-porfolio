"use client"

import { Languages } from "lucide-react"
import { useEffect, useState } from "react"

export type Language = "es" | "en"

const STORAGE_KEY = "portfolio-language"

export function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)

    if (stored === "es" || stored === "en") {
      setLanguage(stored)
    }
  }, [])

  function toggleLanguage() {
    const nextLanguage: Language = language === "es" ? "en" : "es"

    setLanguage(nextLanguage)
    window.localStorage.setItem(STORAGE_KEY, nextLanguage)

    window.dispatchEvent(
      new CustomEvent("portfolio-language-change", {
        detail: nextLanguage,
      }),
    )
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`Cambiar idioma a ${language === "es" ? "inglés" : "español"}`}
      title={`Cambiar a ${language === "es" ? "English" : "Español"}`}
      className="inline-flex size-9 items-center justify-center gap-1.5 rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
    >
      <Languages className="size-4" />
      <span className="sr-only">{language.toUpperCase()}</span>
    </button>
  )
}
