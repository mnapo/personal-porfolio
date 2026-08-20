"use client"

import { ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { portfolio } from "@/lib/portfolio"
import { SectionHeading } from "@/components/section-heading"

export function ProjectsSection() {
  const { projects, profile } = portfolio

  return (
    <section id="proyectos" className="scroll-mt-20 border-t border-border py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading index="03" title="Proyectos" subtitle="Plataformas y herramientas" />
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <GithubIcon className="size-4" />
          github.com/{profile.githubUser}
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/30"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-medium tracking-tight">{project.name}</h3>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
