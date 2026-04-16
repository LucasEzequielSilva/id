import type { ReactNode } from "react"
import { DM_Sans } from "next/font/google"
import { LanguageProvider } from "@/components/language-provider"
import "@/app/globals.css"
import { Toaster } from "sonner"
import dynamic from "next/dynamic"

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-dm-sans" })

const ScrollToTop = dynamic(() => import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop), { ssr: false })
const SmoothScroll = dynamic(() => import("@/components/smooth-scroll").then((mod) => mod.SmoothScroll), { ssr: false })

export const metadata = {
  title: "Centro ID | Psicología, Pericias Forenses y Terapia en San Salvador de Jujuy",
  description: "Centro Pericial Psicológico ID en Jujuy: terapia virtual y presencial, pericias forenses, evaluaciones psicológicas y psicodiagnóstico. +35 años de experiencia.",
  keywords: ["psicología Jujuy", "pericias forenses Jujuy", "terapia San Salvador de Jujuy", "evaluaciones psicológicas", "psicodiagnóstico", "psicólogo Jujuy", "terapia online Argentina", "Centro ID"],
  authors: [{ name: "Centro Pericial Psicológico ID" }],
  metadataBase: new URL("https://www.centroid.com.ar"),
  alternates: {
    canonical: "https://www.centroid.com.ar",
  },
  openGraph: {
    title: "Centro ID | Psicología, Pericias Forenses y Terapia en Jujuy",
    description: "Tu espacio para el bienestar psicológico. Terapia, evaluaciones y pericias con más de 35 años de experiencia. San Salvador de Jujuy, Argentina.",
    url: "https://www.centroid.com.ar",
    siteName: "Centro Pericial Psicológico ID",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Centro Pericial Psicológico ID - Psicología y Pericias en Jujuy",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centro ID | Psicología, Pericias Forenses y Terapia en Jujuy",
    description: "Tu espacio para el bienestar psicológico. Terapia, evaluaciones y pericias con más de 35 años de experiencia. San Salvador de Jujuy, Argentina.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iso-main-MbvhAnQubqB88QJVocdZEuO1gSSywS.svg"
          type="image/svg+xml"
        />
        <noscript><style>{`.hero-title, .hero-sub, .hero-badge, .hero-cta, .faq-item { opacity: 1 !important; }`}</style></noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Centro Pericial Psicológico ID",
          "description": "Servicios psicológicos profesionales, terapia y pericias forenses en San Salvador de Jujuy",
          "url": "https://www.centroid.com.ar",
          "telephone": "+54-9-3885-17-1841",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Dr. Siufi 115, Barrio Bajo la Viña",
            "addressLocality": "San Salvador de Jujuy",
            "addressRegion": "Jujuy",
            "postalCode": "4600",
            "addressCountry": "AR"
          },
          "founder": {
            "@type": "Person",
            "name": "Lic. Alejandra del Valle Peralta",
            "jobTitle": "Psicóloga - Fundadora y Directora"
          },
          "sameAs": [],
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "09:00",
            "closes": "20:00"
          }
        }) }} />
      </head>
      <body className={dmSans.variable}>
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