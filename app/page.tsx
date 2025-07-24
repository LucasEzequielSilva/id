"use client"

import { useEffect } from "react"
import Spline from "@splinetool/react-spline"
import { motion, useAnimation } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ServiceCard } from "@/components/service-card"
import { useTranslations } from "@/lib/i18n"
import {
  MonitorSmartphone,
  Building,
  Gavel,
  FileText,
  Compass,
  Briefcase,
  Scale,
  Shield,
  GraduationCap,
  Globe2,
} from "lucide-react"
import { FloatingFooter } from "@/components/floating-footer"
import { FaqSection } from "@/components/faq-section"
import { WhyChooseUs } from "@/components/why-choose-us"

export default function Home() {
  const controls = useAnimation()
  const { t, language } = useTranslations()

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  const services = [
    {
      title: t("services.items.virtual.title"),
      description: t("services.items.virtual.description"),
      icon: <MonitorSmartphone className="w-8 h-8" />,
      href: "/services/virtual-therapy",
      translationKey: "services.items.virtual",
    },
    {
      title: t("services.items.inPerson.title"),
      description: t("services.items.inPerson.description"),
      icon: <Building className="w-8 h-8" />,
      href: "/services/in-person-therapy",
      translationKey: "services.items.inPerson",
    },
    {
      title: t("services.items.evaluations.title"),
      description: t("services.items.evaluations.description"),
      icon: <Gavel className="w-8 h-8" />,
      href: "/services/evaluations",
      translationKey: "services.items.evaluations",
    },
    {
      title: t("services.items.diagnostics.title"),
      description: t("services.items.diagnostics.description"),
      icon: <FileText className="w-8 h-8" />,
      href: "/services/psychodiagnostics",
      translationKey: "services.items.diagnostics",
    },
    {
      title: t("services.items.career.title"),
      description: t("services.items.career.description"),
      icon: <Compass className="w-8 h-8" />,
      href: "/services/career-guidance",
      translationKey: "services.items.career",
    },
    {
      title: t("services.items.legal.title"),
      description: t("services.items.legal.description"),
      icon: <Briefcase className="w-8 h-8" />,
      href: "/services/legal-consulting",
      translationKey: "services.items.legal",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/NDTjUXErnOcTh-qJ/scene.splinecode" />
        </div>

        <motion.div
          className="relative container mx-auto px-4 pt-20"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              },
            },
          }}
        >
          <div className="text-white flex gap-2 items-center">
            <div className="w-1 h-1 bg-white"></div>
            {t("hero.schedule")}{" "}
            {language === "es"
              ? new Date().toLocaleString("es-ES", { month: "long" }).toUpperCase()
              : new Date().toLocaleString("en-US", { month: "long" }).toUpperCase()}{" "}
            {t("hero.open")}
          </div>

          <h1 className="text-5xl md:text-7xl font-regular tracking-tighter mb-6 max-w-3xl text-white">
            {t("hero.title")}
          </h1>
          <p className="text-zinc-100 mb-8 max-w-[400px]">{t("hero.subtitle")}</p>
          <WhatsAppButton />
        </motion.div>
      </section>

      {/* About section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-regular tracking-tighter mb-6">{t("about.title")}</h2>
              <p className="text-neutral-600 mb-8 max-w-xl">{t("about.description")}</p>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-4xl font-semibold mb-2">35+</p>
                  <p className="text-sm text-neutral-600">{t("about.stats.years")}</p>
                </div>
                <div className="w-px h-12 bg-neutral-200" />
                <div>
                  <p className="text-4xl font-semibold mb-2">500+</p>
                  <p className="text-sm text-neutral-600">{t("about.stats.cases")}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-4">
                <div className="aspect-square relative overflow-hidden group rounded-lg">
                  <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/matheus-ferrero-yfmjALh1S6s-unsplash.jpg-A86DEpyeQrS2OFPvqdqEXFOzsSqY47.jpeg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    <Scale className="w-8 h-8 text-white" />
                    <p className="text-sm font-medium text-white">{t("about.features.legal")}</p>
                  </div>
                </div>
                <div className="aspect-square relative overflow-hidden group rounded-lg">
                  <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/priscilla-du-preez-3gAiajAfjXI-unsplash.jpg-C8FVnUDcpmeeNJ89rT6GT0igoEkjzB.jpeg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    <Shield className="w-8 h-8 text-white" />
                    <p className="text-sm font-medium text-white">{t("about.features.confidentiality")}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-square relative overflow-hidden group rounded-lg">
                  <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mark-williams-5hvWQ5Xuji4-unsplash.jpg-DkKRLn6efVi0T3pHEpPFQiprvH5Tnc.jpeg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    <GraduationCap className="w-8 h-8 text-white" />
                    <p className="text-sm font-medium text-white">{t("about.features.certified")}</p>
                  </div>
                </div>
                <div className="aspect-square relative overflow-hidden group rounded-lg">
                  <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gQDino1q7fS8aQHAn5qQehpPduJmgM.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    <Globe2 className="w-8 h-8 text-white" />
                    <p className="text-sm font-medium text-white">{t("about.features.global")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-neutral-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-regular tracking-tighter mb-6">{t("services.title")}</h2>
            <p className="text-neutral-600 mb-16">{t("services.description")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} href="/servicios" />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Contact Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-regular tracking-tighter mb-6">{t("contact.title")}</h2>
            <p className="text-zinc-400 mb-8">{t("contact.description")}</p>
            <WhatsAppButton size="lg" />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <FloatingFooter />
    </div>
  )
}
