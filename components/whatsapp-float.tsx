"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PhoneIcon as WhatsApp } from "lucide-react"

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const whatsappNumber = "5493884338832"

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={`https://wa.me/${whatsappNumber}`}
          className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp size={24} />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
