import type { ReactNode } from "react"
import { LanguageProvider } from "@/components/language-provider"
import "@/app/globals.css"
import { Toaster } from "sonner"
import dynamic from "next/dynamic"

const ScrollToTop = dynamic(() => import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop), { ssr: false })

export const metadata = {
  title: "ID - Terapia y Pericias",
  description: "Servicios psicológicos profesionales y pericias",
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
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'