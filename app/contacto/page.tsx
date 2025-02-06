"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { FloatingFooter } from "@/components/floating-footer"
import { useTranslations } from "@/lib/i18n"
import { MapPin, Phone, Mail } from "lucide-react"
import type React from "react" // Added import for React

export default function ContactPage() {
  const { t } = useTranslations()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl font-medium text-white mb-4">¿Listo para dar el primer paso?</h1>
              <p className="text-neutral-400 mb-8">
                Agenda una consulta y conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder={t("contact.form.name")}
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-neutral-700 text-white placeholder:text-neutral-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder={t("contact.form.email")}
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-neutral-700 text-white placeholder:text-neutral-500"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder={t("contact.form.message")}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-neutral-700 text-white placeholder:text-neutral-500 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black font-medium py-3 px-4 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
                >
                  {t("contact.form.submit")}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-neutral-900 rounded-xl p-6 space-y-6">
                <h2 className="text-xl font-medium text-white mb-6">{t("contact.info.title")}</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 text-neutral-300">
                    <MapPin className="w-5 h-5 mt-1 text-neutral-500" />
                    <p className="text-sm">
                      Dr. Siufi 115, Barrio Bajo la Viña, San Salvador de Jujuy, Jujuy, Argentina
                    </p>
                  </div>
                  <div className="flex items-center space-x-3 text-neutral-300">
                    <Phone className="w-5 h-5 text-neutral-500" />
                    <p className="text-sm">+54 (388) 123-4567</p>
                  </div>
                  <div className="flex items-center space-x-3 text-neutral-300">
                    <Mail className="w-5 h-5 text-neutral-500" />
                    <p className="text-sm">info@idtherapy.com</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden bg-neutral-900">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.4751563577746!2d-65.30359372576685!3d-24.186843977813776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f44e6fb1a8d%3A0x8f0c2e14cfbb871f!2sDr.%20Siufi%20115%2C%20San%20Salvador%20de%20Jujuy%2C%20Jujuy!5e0!3m2!1sen!2sar!4v1707201234567!5m2!1sen!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale contrast-75 brightness-75"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <FloatingFooter />
    </div>
  )
}

