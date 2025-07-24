"use client"

import { motion } from "framer-motion"
import { Brain, Heart, Shield, Lightbulb } from "lucide-react"
import { useTranslations } from "@/lib/i18n"

export function WhyChooseUs() {
  const { t } = useTranslations()

  const features = [
    {
      icon: Brain,
      title: t("whyChooseUs.features.professional.title"),
      description: t("whyChooseUs.features.professional.description"),
    },
    {
      icon: Heart,
      title: t("whyChooseUs.features.personalized.title"),
      description: t("whyChooseUs.features.personalized.description"),
    },
    {
      icon: Shield,
      title: t("whyChooseUs.features.confidentiality.title"),
      description: t("whyChooseUs.features.confidentiality.description"),
    },
    {
      icon: Lightbulb,
      title: t("whyChooseUs.features.innovation.title"),
      description: t("whyChooseUs.features.innovation.description"),
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-regular tracking-tighter text-black mb-6">
            {t("whyChooseUs.title")}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">{t("whyChooseUs.description")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-6 rounded-full bg-neutral-100 flex items-center justify-center transition-colors duration-300 group-hover:bg-neutral-200">
                    <Icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-medium text-black mb-3">{feature.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
