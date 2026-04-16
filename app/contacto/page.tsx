"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { FloatingFooter } from "@/components/floating-footer"
import { useTranslations } from "@/lib/i18n"
import { MapPin, Phone, Mail } from "lucide-react"
import type React from "react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
}

export default function ContactPage() {
  const { t, language } = useTranslations()
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    setFormState({ name: "", email: "", message: "" })
  }

  const inputClass = `
    w-full px-4 py-3.5 rounded-xl text-sm
    bg-white text-[#1A1A18]
    border border-[#E5E4DF]
    placeholder:text-[#B5B4AF]
    focus:outline-none focus:border-[#D4D3CE] focus:shadow-[0_0_0_3px_rgba(122,139,111,0.08)]
    transition-all duration-200
  `

  return (
    <div className="min-h-screen bg-[#F5F4F0]">
      <Navbar />

      <main className="container mx-auto px-4 md:px-8 pt-36 pb-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Form */}
            <motion.div className="lg:col-span-7" initial="hidden" animate="visible" variants={fadeIn}>
              <p className="text-sm font-medium tracking-widest uppercase mb-4 text-[#7A8B6F]">
                {language === "es" ? "Contacto" : "Contact"}
              </p>
              <h1 className="text-2xl md:text-[2rem] font-medium text-[#1A1A18] mb-4 tracking-tight leading-tight">
                {language === "es" ? "¿Listo para dar el primer paso?" : "Ready to take the first step?"}
              </h1>
              <p className="text-[#6B6B66] mb-10 text-base leading-relaxed">
                {language === "es"
                  ? "Agenda una consulta y conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos."
                  : "Schedule a consultation and let's talk about how we can help you achieve your goals."}
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" aria-label={t("contact.form.name")} value={formState.name} onChange={handleInputChange} placeholder={t("contact.form.name")} required className={inputClass} />
                <input type="email" name="email" aria-label={t("contact.form.email")} value={formState.email} onChange={handleInputChange} placeholder={t("contact.form.email")} required className={inputClass} />
                <textarea name="message" aria-label={t("contact.form.message")} value={formState.message} onChange={handleInputChange} placeholder={t("contact.form.message")} required rows={5} className={`${inputClass} resize-none`} />
                <button
                  type="submit"
                  className="
                    w-full bg-sky-500 text-white font-medium py-3.5 px-4 rounded-xl
                    text-sm border border-sky-400/20 [border-top-color:rgba(255,255,255,0.18)] [border-left-color:rgba(255,255,255,0.10)] [border-bottom-color:rgba(0,0,0,0.10)] [border-right-color:rgba(0,0,0,0.06)]
                    shadow-[inset_0_4px_12px_0_rgba(255,255,255,0.5),inset_0_-4px_12px_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.15),0_2px_4px_rgba(0,0,0,0.12)]
                    hover:bg-sky-600 hover:shadow-[inset_0_4px_14px_0_rgba(255,255,255,0.45),inset_0_-4px_14px_0_rgba(255,255,255,0.18),0_4px_16px_rgba(14,165,233,0.35)]
                    brightness-105 hover:brightness-100
                    active:scale-[0.99] transition-all duration-200
                  "
                >
                  {t("contact.form.submit")}
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              className="lg:col-span-5 space-y-5"
              initial="hidden"
              animate="visible"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.15, ease: [0.25, 1, 0.5, 1] } } }}
            >
              <div className="rounded-2xl p-7 space-y-5 bg-white border border-[#E5E4DF]">
                <h2 className="text-base font-medium text-[#1A1A18] mb-2">{t("contact.info.title")}</h2>
                {[
                  { icon: MapPin, text: "Dr. Siufi 115, Barrio Bajo la Viña, San Salvador de Jujuy, Jujuy, Argentina" },
                  { icon: Phone, text: "+54 9 3885 17-1841" },
                  { icon: Mail, text: "info@centroid.com.ar" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 mt-0.5 text-[#1A1A18]/40" />
                    <p className="text-sm text-[#6B6B66] leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <div className="relative h-[280px] rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,248,230,0.04)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.4751563577746!2d-65.30359372576685!3d-24.186843977813776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f44e6fb1a8d%3A0x8f0c2e14cfbb871f!2sDr.%20Siufi%20115%2C%20San%20Salvador%20de%20Jujuy%2C%20Jujuy!5e0!3m2!1sen!2sar!4v1707201234567!5m2!1sen!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Centro ID en Google Maps"
                  className="grayscale contrast-90 brightness-75"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <FloatingFooter />
    </div>
  )
}
