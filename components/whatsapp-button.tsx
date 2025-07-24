"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "@/lib/i18n"

interface WhatsAppButtonProps {
  size?: "default" | "lg"
}

export function WhatsAppButton({ size = "default" }: WhatsAppButtonProps) {
  const { t } = useTranslations()

  // Número de WhatsApp formateado para el enlace
  const whatsappNumber = "5493884338832"

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}`}
      className={`
        inline-flex items-center justify-center
        bg-white text-black
        rounded-md font-medium
        transition-all duration-300
        hover:opacity-90
        ${size === "lg" ? "text-base px-8 py-4" : "text-sm px-6 py-3"}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("hero.cta")}
      <ArrowRight className="w-4 h-4 ml-2" />
    </motion.a>
  )
}
