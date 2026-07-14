import data from "@/data/portfolio.json"

export type Profile = {
  name: string
  role: string
  subrole: string
  tagline: string
  summary: string
  location: string
  email: string
  phone: string
  github: string
  githubUser: string
  avatar: string
  status: string
}

export type SkillCategory = { id: string; label: string }
export type Skill = { name: string; category: string }
export type Experience = {
  role: string
  company: string
  period: string
  current: boolean
  description: string[]
  clients: string[]
}
export type Project = {
  name: string
  description: string
  url: string
  tags: string[]
}
export type Education = { title: string; institution: string; period: string }
export type Certification = { title: string; institution: string; year: string }
export type Language = { name: string; level: string }

export type PortfolioData = {
  profile: Profile
  skillCategories: SkillCategory[]
  skills: Skill[]
  experience: Experience[]
  projects: Project[]
  education: Education[]
  certifications: Certification[]
  languages: Language[]
}

export const portfolio = data as PortfolioData
