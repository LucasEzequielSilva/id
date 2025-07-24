"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "@/lib/i18n"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  index: number
  href: string
  image?: string
  translationKey?: string
}

// Imágenes específicas para cada servicio
const defaultImages = {
  virtual:
    "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Videollamada profesional moderna
  inPerson: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&auto=format&fit=crop&q=60", // Sesión terapeuta-paciente (mantener)
  evaluation:
    "https://sinapsys.news/wp-content/uploads/2023/03/Os-desafios-na-carreira-do-psicologo-perito-na-Vara-de-Familia-Pexels.com-Timur-Weber-scaled.jpeg", // Evaluación psicológica profesional
  psychodiagnostics: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&auto=format&fit=crop&q=60", // Tests y diagnósticos
  career: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60", // Orientación vocacional (mantener)
  legal: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=60", // Asesoría legal (mantener)
}

const getDefaultImage = (key?: string) => {
  if (!key) return defaultImages.virtual
  // Extract the service type from the translation key (e.g., "services.items.virtual" -> "virtual")
  const serviceType = key.split(".")[2]
  // Map specific service types to their corresponding image keys
  const imageKeyMap: Record<string, keyof typeof defaultImages> = {
    virtual: "virtual",
    inPerson: "inPerson",
    evaluations: "evaluation",
    diagnostics: "psychodiagnostics",
    career: "career",
    legal: "legal",
  }
  // Get the correct image key or fallback to virtual if not found
  const imageKey = imageKeyMap[serviceType] || "virtual"
  return defaultImages[imageKey]
}

export function ServiceCard({ translationKey = "services.items.virtual", icon, index, href, image }: ServiceCardProps) {
  const { t } = useTranslations()

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-neutral-200/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url(${getDefaultImage(translationKey)})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 transition-opacity duration-300 group-hover:opacity-75" />
      </div>
      <div className="relative z-10 p-8">
        <div className="text-white mb-4">{icon}</div>
        <h3 className="text-xl font-medium mb-3 text-white">{t(`${translationKey}.title`)}</h3>
        <p className="text-neutral-200 mb-6 text-sm leading-relaxed">{t(`${translationKey}.description`)}</p>
        <Link
          href={href}
          className="inline-flex items-center text-sm font-medium text-white opacity-80 hover:opacity-100 transition-opacity group/link"
        >
          {t("common.learnMore")}
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}
