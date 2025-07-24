"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { useTranslations } from "@/lib/i18n"
import type { Language } from "@/lib/i18n"

const menuItems = [
  { title: "nav.home", href: "/" },
  { title: "nav.services", href: "/servicios" },
  { title: "nav.about", href: "/nosotros" },
  { title: "nav.contact", href: "/contacto" },
  { title: "nav.blog", href: "/blog" },
]

const menuVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
}

const menuItemVariants = {
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.2,
    },
  }),
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useTranslations()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        hasScrolled && !isOpen ? "bg-black/50 backdrop-blur-md" : "transition-none"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo - Hidden when mobile menu is open */}
        <Link
          href="/"
          className={`relative z-50 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-tB2IAb0orDmcWbgZ2vH8HEhcDYV8dy.svg"
            alt="Logo"
            className="h-8"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`flex text-sm items-center space-x-2 hover:opacity-70 text-white transition-opacity tracking-wide ${
                pathname === item.href ? "font-semibold" : ""
              }`}
            >
              <span>{t(item.title)}</span>
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
            <SelectTrigger className="w-[60px] flex justify-center bg-transparent border-0 hover:bg-neutral-800/50 transition-colors [&>svg]:text-white">
              {language === "es" ? (
                <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M36 27C36 29.209 34.209 31 32 31H4C1.791 31 0 29.209 0 27V9C0 6.791 1.791 5 4 5H32C34.209 5 36 6.791 36 9V27Z"
                    fill="#C60A1D"
                  />
                  <path d="M0 12H36V24H0V12Z" fill="#FFC400" />
                  <path d="M9 17V20C9 21.657 10.343 23 12 23C13.657 23 15 21.657 15 20V17H9Z" fill="#EA596E" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 9.059V13H5.628L0 9.059ZM4.664 31H13V25.163L4.664 31ZM23 25.164V31H31.335L23 25.164ZM0 23V26.941L5.63 23H0ZM31.337 5H23V10.837L31.337 5ZM36 26.942V23H30.369L36 26.942ZM36 13V9.059L30.371 13H36ZM13 5H4.664L13 10.837V5Z"
                    fill="#00247D"
                  />
                  <path
                    d="M25.14 23.0002L34.852 29.8012C35.323 29.3222 35.66 28.7192 35.842 28.0522L28.627 23.0002H25.14ZM13 23.0002H10.859L1.14798 29.8002C1.66898 30.3302 2.33698 30.7092 3.08598 30.8852L13 23.9432V23.0002ZM23 13.0002H25.141L34.852 6.20023C34.331 5.67023 33.664 5.29123 32.915 5.11523L23 12.0572V13.0002ZM10.859 13.0002L1.14798 6.20023C0.676982 6.68023 0.339982 7.28223 0.156982 7.94923L7.37198 13.0002H10.859Z"
                    fill="#CF1B2B"
                  />
                  <path
                    d="M36 21H21V31H23V25.164L31.335 31H32C33.117 31 34.126 30.539 34.852 29.801L25.14 23H28.627L35.842 28.052C35.935 27.715 36 27.366 36 27V26.942L30.369 23H36V21ZM0 21V23H5.63L0 26.941V27C0 28.091 0.439 29.078 1.148 29.8L10.859 23H13V23.943L3.086 30.884C3.38 30.954 3.684 31 4 31H4.664L13 25.163V31H15V21H0ZM36 9C36 7.909 35.561 6.922 34.852 6.2L25.141 13H23V12.057L32.915 5.115C32.62 5.046 32.316 5 32 5H31.337L23 10.837V5H21V15H36V13H30.371L36 9.059V9ZM13 5V10.837L4.664 5H4C2.882 5 1.874 5.461 1.148 6.2L10.859 13H7.372L0.157 7.949C0.065 8.286 0 8.634 0 9V9.059L5.628 13H0V15H15V5H13Z"
                    fill="#EEEEEE"
                  />
                  <path d="M21 15V5H15V15H0V21H15V31H21V21H36V15H21Z" fill="#CF1B2B" />
                </svg>
              )}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
          <a
            href="https://wa.me/5493884338832"
            className="bg-white text-black px-6 py-2 rounded-full hover:opacity-90 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("hero.cta")}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-white" />}
        </button>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-white z-60 flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center">
              {/* Mobile Menu Items */}
              <div className="flex flex-col items-center space-y-8 mb-8">
                {menuItems.map((item, i) => (
                  <motion.div key={item.title} custom={i} variants={menuItemVariants}>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-4 text-black text-3xl hover:opacity-70 transition-opacity tracking-wide"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{t(item.title)}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Actions */}
              <motion.div
                variants={menuItemVariants}
                custom={menuItems.length}
                className="flex flex-col items-center gap-6"
              >
                <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
                  <SelectTrigger className="w-[120px] flex justify-center bg-transparent">
                    {language === "es" ? "Español" : "English"}
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
                <a
                  href="https://wa.me/5493884338832"
                  className="bg-black text-white px-8 py-3 rounded-full text-xl hover:opacity-90 transition-all"
                  onClick={() => setIsOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("hero.cta")}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
