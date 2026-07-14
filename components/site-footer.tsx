import { Mail, ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { portfolio } from "@/lib/portfolio"

export function SiteFooter() {
  const { profile } = portfolio

  return (
    <footer id="contacto" className="scroll-mt-20 border-t border-border py-14">
      <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
        <p className="font-mono text-xs text-brand">Contacto</p>
        <h2 className="mt-3 text-pretty text-2xl font-semibold tracking-tight md:text-3xl">
          ¿Trabajamos juntos?
        </h2>
        <p className="mt-3 max-w-md text-pretty text-muted-foreground">
          {profile.tagline}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" />
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
          >
            <GithubIcon className="size-4" />
            GitHub
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="font-mono text-xs">{profile.location}</span>
      </div>
    </footer>
  )
}
