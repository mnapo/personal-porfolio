import { Briefcase } from "lucide-react"
import { portfolio } from "@/lib/portfolio"
import { SectionHeading } from "@/components/section-heading"

export function ExperienceSection() {
  const { experience } = portfolio

  return (
    <section id="experiencia" className="scroll-mt-20 border-t border-border py-14">
      <SectionHeading index="02" title="Experiencia" subtitle="Trayectoria profesional" />

      <ol className="mt-8 space-y-10">
        {experience.map((job, i) => (
          <li key={`${job.company}-${i}`} className="relative pl-8">
            {i !== experience.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute left-[7px] top-6 h-[calc(100%+2.5rem)] w-px bg-border"
              />
            ) : null}
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 flex size-3.5 items-center justify-center rounded-full border-2 border-brand bg-background"
            >
              {job.current ? <span className="size-1.5 rounded-full bg-brand" /> : null}
            </span>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-base font-semibold tracking-tight">{job.role}</h3>
              {job.current ? (
                <span className="rounded-full bg-brand/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-brand">
                  Actual
                </span>
              ) : null}
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-x-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Briefcase className="size-3.5" />
                {job.company}
              </span>
              <span className="font-mono text-xs">{job.period}</span>
            </div>

            <ul className="mt-4 space-y-2">
              {job.description.map((d, j) => (
                <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-foreground/80">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>

            {job.clients.length > 0 ? (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                  Clientes
                </span>
                {job.clients.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-border bg-card px-2 py-1 text-xs text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  )
}
