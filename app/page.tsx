import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { BackgroundSection } from "@/components/background-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div id="top" className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <BackgroundSection />
        <SiteFooter />
      </main>
    </div>
  )
}
