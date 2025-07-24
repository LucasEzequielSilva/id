'use client'
import type { ReactNode } from "react"
import { LanguageProvider } from "@/components/language-provider"
import { CookieConsent } from "@/components/cookie-consent"
import "@/app/globals.css"
import { Toaster } from "sonner"
import dynamic from "next/dynamic"

const ScrollToTop = dynamic(() => import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop), { ssr: false })

export const metadata = {
  title: "CENTRO PERICIAL PSICOLOGICO ID",
  description: "Servicios psicológicos profesionales y pericias",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iso-main-MbvhAnQubqB88QJVocdZEuO1gSSywS.svg"
          type="image/svg+xml"
        />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
          <ScrollToTop />
          {children}
          <CookieConsent />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  )
}
