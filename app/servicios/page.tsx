"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { FloatingFooter } from "@/components/floating-footer"
import { ServiceFeature } from "@/components/service-features"
import { ServiceBenefits } from "@/components/service-benefits"
import { Testimonials } from "@/components/testimonials"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useTranslations } from "@/lib/i18n"

export default function ServiciosPage() {
  const { t, language } = useTranslations()

  const services = [
    {
      title: t("servicesPage.services.0.title"),
      description: t("servicesPage.services.0.description"),
      features: t("servicesPage.services.0.features"),
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80",
    },
    {
      title: t("servicesPage.services.1.title"),
      description: t("servicesPage.services.1.description"),
      features: t("servicesPage.services.1.features"),
      image: "https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&q=80",
    },
    {
      title: t("servicesPage.services.2.title"),
      description: t("servicesPage.services.2.description"),
      features: t("servicesPage.services.2.features"),
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl tracking-tight text-white mb-6">
              {t("servicesPage.hero.title")}
            </h1>
            <p className="text-xl text-neutral-400 mb-8">{t("servicesPage.hero.subtitle")}</p>
            <WhatsAppButton size="lg" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <ServiceFeature key={index} {...service} index={index} />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <ServiceBenefits
        title={t("servicesPage.benefits.title")}
        subtitle={t("servicesPage.benefits.subtitle")}
        benefits={t("servicesPage.benefits.items")}
      />

      {/* Testimonials Section */}
      <Testimonials title={t("servicesPage.testimonials.title")} subtitle={t("servicesPage.testimonials.subtitle")} />

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl tracking-tight text-white mb-4">{t("servicesPage.cta.title")}</h2>
            <p className="text-neutral-400 mb-8">{t("servicesPage.cta.subtitle")}</p>
            <WhatsAppButton size="lg" />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <FloatingFooter />
    </div>
  )
}

