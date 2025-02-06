"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { FloatingFooter } from "@/components/floating-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useTranslations } from "@/lib/i18n"
import { Brain, Heart, Shield, Lightbulb } from "lucide-react"

export default function AboutPage() {
  const { t } = useTranslations()

  const fadeInUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  }

  // Updated team data with proper information and new images
  const team = [
    {
      name: "Sarah Johnson",
      role: "CLINICAL DIRECTOR",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AyqswlAp6ubY05GMEFuofBsRucxPip.png",
    },
    {
      name: "Michael Anderson",
      role: "SENIOR PSYCHOLOGIST",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1D9UOH76g7XR0LRRir1zQlMdmk8qkw.png",
    },
    {
      name: "David Miller",
      role: "FORENSIC PSYCHOLOGIST",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rtPD8bqBnxbVuCrlAIjriXZkJ00TVL.png",
    },
    {
      name: "James Wilson",
      role: "CLINICAL PSYCHOLOGIST",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GxdRO1d6wozOpGxMHcwW2TYysUOAaj.png",
    },
  ]

  const valueIcons = [Brain, Heart, Shield, Lightbulb]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6EQZ5xJD9n2w3sHE8ygv65ZP4WuoA3.png"
            alt="Our facility"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-20 mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={fadeInUpVariants}
          >
            <h1 className="text-4xl md:text-6xl tracking-tight mb-6 text-white">{t("aboutPage.hero.title")}</h1>
            <p className="text-xl text-neutral-300 mb-8">{t("aboutPage.hero.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1551836022-8b2858c9c69b?auto=format&fit=crop&q=80"
                  alt="Our mission"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
            >
              <h2 className="text-3xl md:text-4xl mb-6 text-white">{t("aboutPage.mission.title")}</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">{t("aboutPage.mission.description")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-white">{t("aboutPage.team.title")}</h2>
            <p className="text-lg text-neutral-400">{t("aboutPage.team.description")}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className="overflow-hidden rounded-2xl aspect-square relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-white">{member.name}</h3>
                  <p className="text-sm text-neutral-400 mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl mb-12 text-center text-white"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            {t("aboutPage.values.title")}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t("aboutPage.values.items").map((value, index) => {
              const Icon = valueIcons[index]
              return (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-neutral-900/50 p-8 transition-all duration-300"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUpVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="relative w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Icon className="h-6 w-6 text-white relative z-10" />
                    </div>
                    <h3 className="text-xl mb-3 text-white">{value.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-neutral-950 to-black relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-light text-center text-white mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            {t("aboutPage.stats.title")}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {t("aboutPage.stats.items").map((stat, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-radial from-yellow-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative">
                    <div className="text-6xl md:text-7xl font-extralight mb-4 text-white">{stat.value}</div>
                    <div className="text-neutral-400 text-sm uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-white">{t("aboutPage.cta.title")}</h2>
            <p className="text-lg text-neutral-400 mb-8">{t("aboutPage.cta.subtitle")}</p>
            <WhatsAppButton size="lg" />
          </motion.div>
        </div>
      </section>

      <FloatingFooter />
    </div>
  )
}

