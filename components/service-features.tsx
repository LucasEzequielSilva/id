"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface ServiceFeatureProps {
  title: string
  description: string
  features: string[]
  image: string
  index: number
}

export function ServiceFeature({ title, description, features, image, index }: ServiceFeatureProps) {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-12 items-center py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className={`space-y-8 ${index % 2 === 0 ? "md:order-1" : ""}`}>
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <div className="bg-white/5 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium border border-white/10">
              Servicio {index + 1}
            </div>
          </motion.div>
          <h3 className="text-4xl tracking-tight text-white">{title}</h3>
          <p className="text-neutral-400 text-lg leading-relaxed">{description}</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 rounded-2xl blur-2xl opacity-50" />
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="relative mt-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-full blur-sm opacity-50" />
                    <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-400 p-1 rounded-full">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <span className="text-neutral-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <motion.div
        className={`overflow-hidden relative aspect-[4/3] ${index % 2 === 0 ? "md:order-2" : ""}`}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 rounded-2xl blur-3xl opacity-30" />
        <div className="relative h-full rounded-2xl overflow-hidden border border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-[2px]" />
        </div>
      </motion.div>
    </motion.div>
  )
}
