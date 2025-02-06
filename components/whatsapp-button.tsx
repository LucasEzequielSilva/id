"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "@/lib/i18n"
interface WhatsAppButtonProps {
  size?: "default" | "lg"
}

export function WhatsAppButton({ size = "default" }: WhatsAppButtonProps) {
  const { t } = useTranslations()
  return (
    <motion.a
      href="https://wa.me/YOUR_WHATSAPP_NUMBER"
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
    >
      {t("hero.cta")}
      <ArrowRight className="w-4 h-4 ml-2" />
    </motion.a>
  )
}

