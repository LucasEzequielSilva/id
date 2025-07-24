"use client"

import { motion } from "framer-motion"
import { TestimonialCard } from "./testimonial-card"
import { useTranslations } from "@/lib/i18n"

interface TestimonialsProps {
  title: string
  subtitle: string
}

export function Testimonials({ title, subtitle }: TestimonialsProps) {
  const { t } = useTranslations()
  const testimonials = t("servicesPage.testimonials.items") as Array<{
    name: string
    role: string
    content: string
  }>

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl mb-4">{title}</h2>
          <p className="text-neutral-600">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Array.isArray(testimonials) &&
            testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} index={index} />)}
        </div>
      </div>
    </section>
  )
}
