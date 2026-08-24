import type { Language } from "@/components/language-provider"

export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Skills",
      experience: "Experiencia",
      projects: "Proyectos",
    },
    header: {
      contact: "Contacto",
      navigation: "Navegación principal",
    },
    hero: {
      github: "Ver GitHub",
      contact: "Escribime",
    },
    skills: {
      title: "Skills",
      subtitle: "Conocimientos técnicos",
      all: "Todas",
      filterLabel: "Filtrar skills",
    },
    experience: {
      title: "Experiencia",
      subtitle: "Trayectoria profesional",
      current: "Actual",
      clients: "Clientes",
    },
    projects: {
      title: "Proyectos",
      subtitle: "Plataformas y herramientas",
    },
    background: {
      title: "Formación",
      subtitle: "Educación, certificaciones e idiomas",
      education: "Educación",
      certifications: "Certificaciones",
      languages: "Idiomas",
    },
    footer: {
      contact: "Contacto",
      title: "¿Trabajamos juntos?",
      github: "GitHub",
      emailAction: "Escribime",
    },
  },

  en: {
    nav: {
      about: "About me",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
    },
    header: {
      contact: "Contact",
      navigation: "Main navigation",
    },
    hero: {
      github: "View GitHub",
      contact: "Get in touch",
    },
    skills: {
      title: "Skills",
      subtitle: "Technical expertise",
      all: "All",
      filterLabel: "Filter skills",
    },
    experience: {
      title: "Experience",
      subtitle: "Professional background",
      current: "Current",
      clients: "Clients",
    },
    projects: {
      title: "Projects",
      subtitle: "Platforms and tools",
    },
    background: {
      title: "Background",
      subtitle: "Education, certifications and languages",
      education: "Education",
      certifications: "Certifications",
      languages: "Languages",
    },
    footer: {
      contact: "Contact",
      title: "Shall we work together?",
      github: "GitHub",
      emailAction: "Get in touch",
    },
  },
} satisfies Record<Language, unknown>

export function getTranslations(language: Language) {
  return translations[language]
}
