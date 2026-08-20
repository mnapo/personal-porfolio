"use client"

import { Languages } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const nextLanguage = language === "es" ? "en" : "es"

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={`Cambiar idioma a ${
        nextLanguage === "en" ? "inglés" : "español"
      }`}
      title={`Cambiar a ${nextLanguage === "en" ? "English" : "Español"}`}
      className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
    >
      <Languages className="size-4" />
      <span className="sr-only">{language.toUpperCase()}</span>
    </button>
  )
}
