"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { portfolio } from "@/lib/portfolio"

const nav = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#skills", label: "Skills" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
]

export function SiteHeader() {
  const { profile } = portfolio

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between gap-4 px-5">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
          <span className="font-mono text-[11px] text-muted-foreground">{profile.role}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegación principal">
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
            Contacto
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
