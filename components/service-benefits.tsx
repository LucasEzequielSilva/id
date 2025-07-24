"use client"

import { motion } from "framer-motion"
import { Brain, Heart, Users, Shield } from "lucide-react"

interface ServiceBenefitsProps {
  title: string
  subtitle: string
  benefits: Array<{
    title: string
    description: string
  }>
}

const icons = [Brain, Heart, Users, Shield]

export function ServiceBenefits({ title, subtitle, benefits }: ServiceBenefitsProps) {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl tracking-tight text-white mb-4">{title}</h2>
          <p className="text-neutral-400">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={i}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl blur-xl transition-opacity group-hover:opacity-100 opacity-0" />
                <div className="relative">
                  <div className="bg-neutral-900 rounded-2xl p-8 min-h-[280px] border border-white/5 backdrop-blur-3xl transition-colors group-hover:bg-neutral-800/50">
                    <div className="relative w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Icon className="h-6 w-6 text-white relative z-10" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">{benefit.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
