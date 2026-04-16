import type { ReactNode } from "react"
import { LanguageProvider } from "@/components/language-provider"
import "@/app/globals.css"
import { Toaster } from "sonner"
import dynamic from "next/dynamic"

const ScrollToTop = dynamic(() => import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop), { ssr: false })
const SmoothScroll = dynamic(() => import("@/components/smooth-scroll").then((mod) => mod.SmoothScroll), { ssr: false })

export const metadata = {
  title: "Centro ID - Psicología y Pericias",
  description: "Centro ID: servicios psicológicos profesionales, terapia y pericias en Jujuy, Argentina.",
  openGraph: {
    title: "Centro ID - Psicología y Pericias",
    description: "Tu espacio para el bienestar psicológico. Servicios profesionales en Jujuy.",
    url: "https://www.centroid.com.ar",
    siteName: "Centro ID",
    images: [
      {
        url: "/thumbnail.html",
        width: 1200,
        height: 630,
        alt: "Centro ID - Psicología y Pericias",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centro ID - Psicología y Pericias",
    description: "Tu espacio para el bienestar psicológico. Servicios profesionales en Jujuy.",
  },
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
        <noscript><style>{`.hero-title, .hero-sub, .hero-badge, .hero-cta, .faq-item { opacity: 1 !important; }`}</style></noscript>
      </head>
      <body>
        <LanguageProvider>
          <SmoothScroll>
            <ScrollToTop />
            {children}
            <Toaster />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  )
}