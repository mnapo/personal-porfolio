"use client"

import { useMemo, useState } from "react"
import { getPortfolio } from "@/lib/portfolio"
import { getTranslations } from "@/lib/translations"
import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"

export function SkillsSection() {
  const { language } = useLanguage()
  const { skills, skillCategories } = getPortfolio(language)
  const t = getTranslations(language)
  const [active, setActive] = useState<string>("all")

  const filters = useMemo(
    () => [{ id: "all", label: "Todas" }, ...skillCategories],
    [skillCategories],
  )

  const visible = useMemo(
    () => (active === "all" ? skills : skills.filter((s) => s.category === active)),
    [active, skills],
  )

  function labelFor(id: string) {
    return skillCategories.find((c) => c.id === id)?.label ?? id
  }

  return (
    <section id="skills" className="scroll-mt-20 border-t border-border py-14">
      <SectionHeading index="01" title={t.skills.title} subtitle={t.skills.subtitle} />

      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar skills">
        {filters.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={active === f.id}
            onClick={() => setActive(f.id)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors",
              active === f.id
                ? "border-brand bg-brand text-brand-foreground"
                : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {visible.map((skill) => (
          <span
            key={skill.name}
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm transition-colors hover:border-foreground/30"
          >
            <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
            {skill.name}
            <span className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
              {labelFor(skill.category)}
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
