"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { FloatingFooter } from "@/components/floating-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useTranslations } from "@/lib/i18n"
import { Brain, Heart, Shield, Lightbulb } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
}

export default function AboutPage() {
  const { t, language } = useTranslations()

  const team = [
    { name: "Sarah Johnson", role: "CLINICAL DIRECTOR", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AyqswlAp6ubY05GMEFuofBsRucxPip.png" },
    { name: "Michael Anderson", role: "SENIOR PSYCHOLOGIST", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1D9UOH76g7XR0LRRir1zQlMdmk8qkw.png" },
    { name: "David Miller", role: "FORENSIC PSYCHOLOGIST", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rtPD8bqBnxbVuCrlAIjriXZkJ00TVL.png" },
    { name: "James Wilson", role: "CLINICAL PSYCHOLOGIST", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GxdRO1d6wozOpGxMHcwW2TYysUOAaj.png" },
  ]

  const valueIcons = [Brain, Heart, Shield, Lightbulb]

  return (
    <div className="min-h-screen bg-[#F5F4F0]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0C0B09]/70 z-10" />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6EQZ5xJD9n2w3sHE8ygv65ZP4WuoA3.png"
            alt="Our facility"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-20 mx-auto px-4 md:px-8">
          <motion.div className="max-w-2xl" initial="hidden" animate="visible" variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-white/50">
              {language === "es" ? "Sobre nosotros" : "About us"}
            </p>
            <h1 className="text-2xl md:text-3xl tracking-tight mb-6 text-white font-medium leading-[1.1]">
              {t("aboutPage.hero.title")}
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">{t("aboutPage.hero.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div className="order-2 lg:order-1" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1551836022-8b2858c9c69b?auto=format&fit=crop&q=80" alt="Sesión de terapia profesional en Centro ID" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div className="order-1 lg:order-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <p className="text-sm font-medium tracking-widest uppercase mb-4 text-[#7A8B6F]">
                {language === "es" ? "Nuestra misión" : "Our mission"}
              </p>
              <h2 className="text-2xl md:text-[2rem] mb-6 text-[#1A1A18] font-medium">{t("aboutPage.mission.title")}</h2>
              <p className="text-base text-[#6B6B66] leading-[1.7]">{t("aboutPage.mission.description")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 bg-[#ECEAE4]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div className="max-w-xl mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-[#7A8B6F]">
              {language === "es" ? "Equipo" : "Team"}
            </p>
            <h2 className="text-2xl md:text-[2rem] mb-4 text-[#1A1A18] font-medium">{t("aboutPage.team.title")}</h2>
            <p className="text-[#6B6B66]">{t("aboutPage.team.description")}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.08, ease: [0.25, 1, 0.5, 1] } } }}
              >
                <div className="overflow-hidden rounded-2xl aspect-square relative" style={{ border: "1px solid rgba(255,248,230,0.04)" }}>
                  <img src={member.image} alt={member.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="mt-4">
                  <h3 className="text-base font-medium text-[#1A1A18]">{member.name}</h3>
                  <p className="text-xs text-[#6B6B66] mt-1 tracking-wide">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div className="max-w-xl mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-2xl md:text-[2rem] text-[#1A1A18] font-medium">{t("aboutPage.values.title")}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {t("aboutPage.values.items").map((value: { title: string; description: string }, index: number) => {
              const Icon = valueIcons[index]
              return (
                <motion.div
                  key={index}
                  className="group rounded-2xl p-7 transition-all duration-300"
                  style={{ background: "#fff", border: "1px solid #E5E4DF" }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.08, ease: [0.25, 1, 0.5, 1] } } }}
                >
                  <div className="w-10 h-10 mb-5 rounded-xl bg-[#F5F4F0] flex items-center justify-center" style={{ border: "1px solid rgba(255,248,230,0.04)" }}>
                    <Icon className="h-5 w-5 text-[#6B6B66]" />
                  </div>
                  <h3 className="text-base font-medium mb-2 text-[#1A1A18]">{value.title}</h3>
                  <p className="text-[#6B6B66] text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-28 bg-[#ECEAE4]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2 className="text-2xl md:text-[2rem] font-medium text-[#1A1A18] mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            {t("aboutPage.stats.title")}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {t("aboutPage.stats.items").map((stat: { value: string; label: string }, index: number) => (
              <motion.div
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] } } }}
              >
                <div className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-[#1A1A18]">{stat.value}</div>
                <div className="text-[#6B6B66] text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div className="max-w-xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-2xl md:text-[2rem] mb-5 text-[#1A1A18] font-medium">{t("aboutPage.cta.title")}</h2>
            <p className="text-[#6B6B66] mb-8">{t("aboutPage.cta.subtitle")}</p>
            <WhatsAppButton size="lg" />
          </motion.div>
        </div>
      </section>

      <FloatingFooter />
    </div>
  )
}
