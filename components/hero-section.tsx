"use client"

import Image from "next/image"
import { Mail, MapPin, ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { getPortfolio } from "@/lib/portfolio"
import { getTranslations } from "@/lib/translations"
import { useLanguage } from "@/components/language-provider"

export function HeroSection() {
  const { language } = useLanguage()
  const { profile } = getPortfolio(language)
  const t = getTranslations(language)

  return (
    <section id="sobre-mi" className="scroll-mt-20 pt-14 pb-16 md:pt-20">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10">
        <div className="relative shrink-0">
          <div className="size-24 overflow-hidden rounded-2xl border border-border md:size-28">
            <Image
              src={profile.avatar || "/notebook.png"}
              alt={`Foto de ${profile.name}`}
              width={112}
              height={112}
              className="size-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            <span className="font-mono text-xs text-muted-foreground">{profile.status}</span>
          </div>

          <h1 className="text-pretty text-3xl font-semibold tracking-tight md:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-lg text-foreground/80">
            {profile.role} <span className="text-muted-foreground">·</span>{" "}
            <span className="text-muted-foreground">{profile.subrole}</span>
          </p>
        </div>
      </div>

      <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
        {profile.summary}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="size-4" />
          {profile.location}
        </span>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          <Mail className="size-4" />
          {profile.email}
        </a>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <GithubIcon className="size-4" />
          {t.hero.github}
          <ArrowUpRight className="size-4" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
        >
          <Mail className="size-4" />
          {t.hero.contact}
        </a>
      </div>
    </section>
  )
}
