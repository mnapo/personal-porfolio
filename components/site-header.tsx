"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { getPortfolio } from "@/lib/portfolio"
import { getTranslations } from "@/lib/translations"
import { useLanguage } from "@/components/language-provider"
import { LanguageToggle } from "@/components/language-toggle"

export function SiteHeader() {
  const { language } = useLanguage()
  const { profile } = getPortfolio(language)
  const t = getTranslations(language)
  
  const nav = [
    { href: "#sobre-mi", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#experiencia", label: t.nav.experience },
    { href: "#proyectos", label: t.nav.projects },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between gap-4 px-5">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
          <span className="font-mono text-[11px] text-muted-foreground">{profile.role}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label={t.header.navigation}>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {t.header.contact}
          </a>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
