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

const defaultImages = {
  virtual: "/images/centro-id/services/virtual.png",
  inPerson: "/images/centro-id/services/in-person.png",
  evaluation: "/images/centro-id/services/evaluations.png",
  psychodiagnostics: "/images/centro-id/services/diagnostics.png",
  career: "/images/centro-id/services/career.png",
  legal: "/images/centro-id/services/legal.png",
}

const getDefaultImage = (key?: string) => {
  if (!key) return defaultImages.virtual
  const serviceType = key.split(".")[2]
  const map: Record<string, keyof typeof defaultImages> = {
    virtual: "virtual", inPerson: "inPerson", evaluations: "evaluation",
    diagnostics: "psychodiagnostics", career: "career", legal: "legal",
  }
  return defaultImages[map[serviceType] || "virtual"]
}

export function ServiceCard({ translationKey = "services.items.virtual", icon, index, href }: ServiceCardProps) {
  const { t } = useTranslations()

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl"
      style={{ border: "1px solid rgba(255,248,230,0.06)" }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          style={{ backgroundImage: `url(${getDefaultImage(translationKey)})` }}
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, rgba(12,11,9,0.75) 0%, rgba(12,11,9,0.5) 40%, rgba(12,11,9,0.85) 100%)"
        }} />
      </div>

      <div className="relative z-10 p-7 md:p-8 min-h-[280px] flex flex-col justify-end">
        <div className="mb-auto pt-1">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white/70" style={{
            background: "rgba(255,248,230,0.06)",
            border: "1px solid rgba(255,248,230,0.06)",
          }}>
            {icon}
          </div>
        </div>

        <h3 className="text-lg font-medium mb-2 text-white tracking-tight">{t(`${translationKey}.title`)}</h3>
        <p className="text-white/70 mb-5 text-sm leading-relaxed">{t(`${translationKey}.description`)}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-200 group/link"
        >
          {t("common.learnMore")}
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
        </Link>
      </div>
    </motion.div>
  )
}
