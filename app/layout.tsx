import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import { LanguageProvider } from "@/components/language-provider"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Matías Nápoli • Desarrollador Full Stack",
  description:
    "Portfolio de Matías Nápoli, Desarrollador Full Stack y estudiante de Ciencia de Datos e IA. Experiencia, skills y proyectos.",
  openGraph: {
    title: "Matías Nápoli • Desarrollador Full Stack",
    description:
      "Portfolio de Matías Nápoli, Desarrollador Full Stack y estudiante de Ciencia de Datos e IA.",
    type: "website",
  },
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfd" },
    { media: "(prefers-color-scheme: dark)", color: "#242629" },
  ],
}

const themeScript = `
(function() {
  try {
    var t = localStorage.getItem('theme');
    var d = document.documentElement;
    if (t === 'dark') { d.classList.add('dark'); }
    else if (t === 'light') { d.classList.add('light'); }
  } catch (e) {}
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`bg-background ${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
          {children}
          {process.env.NODE_ENV === "production" && <Analytics />}
        </LanguageProvider>
      </body>
    </html>
  )
}
