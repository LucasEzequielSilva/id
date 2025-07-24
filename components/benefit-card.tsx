"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface BenefitCardProps {
  title: string
  description: string
  icon: ReactNode
  index: number
}

export function BenefitCard({ title, description, icon, index }: BenefitCardProps) {
  return (
    <motion.div
      className="p-6 bg-white rounded-xl border border-neutral-100 hover:border-neutral-200 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{ y: -5 }}
    >
      <div className="text-black mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  )
}
