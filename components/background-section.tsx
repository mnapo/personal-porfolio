import { GraduationCap, Award, Languages } from "lucide-react"
import { portfolio } from "@/lib/portfolio"
import { SectionHeading } from "@/components/section-heading"

export function BackgroundSection() {
  const { education, certifications, languages } = portfolio

  return (
    <section id="formacion" className="scroll-mt-20 border-t border-border py-14">
      <SectionHeading index="04" title="Formación" subtitle="Educación, certificaciones e idiomas" />

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold">
            <GraduationCap className="size-4 text-brand" />
            Educación
          </h3>
          <ul className="mt-4 space-y-4">
            {education.map((e, i) => (
              <li key={i} className="border-l border-border pl-4">
                <p className="text-sm font-medium leading-snug">{e.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{e.institution}</p>
                <p className="mt-0.5 font-mono text-xs text-muted-foreground">{e.period}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <Award className="size-4 text-brand" />
              Certificaciones
            </h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((c, i) => (
                <li key={i} className="flex items-baseline justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium leading-snug">{c.title}</p>
                    <p className="text-sm text-muted-foreground">{c.institution}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <Languages className="size-4 text-brand" />
              Idiomas
            </h3>
            <ul className="mt-4 space-y-2">
              {languages.map((l, i) => (
                <li key={i} className="flex flex-wrap items-baseline gap-x-2 text-sm">
                  <span className="font-medium">{l.name}</span>
                  <span className="text-muted-foreground">| {l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
