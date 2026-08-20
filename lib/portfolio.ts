import esData from "@/data/portfolio.json"
import enData from "@/data/portfolio.en.json"

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

export type SkillCategory = {
  id: string
  label: string
}

export type Skill = {
  name: string
  category: string
}

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

export type Education = {
  title: string
  institution: string
  period: string
}

export type Certification = {
  title: string
  institution: string
  year: string
}

export type Language = {
  name: string
  level: string
}

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

const portfolioData: Record<"es" | "en", PortfolioData> = {
  es: esData as PortfolioData,
  en: enData as PortfolioData,
}

export function getPortfolio(language: "es" | "en"): PortfolioData {
  return portfolioData[language]
}
