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

const LOGO_LIGHT = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-tB2IAb0orDmcWbgZ2vH8HEhcDYV8dy.svg"
const LOGO_DARK = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dark%20logo-E60Ij7KTKR3YEOzHBXtXfiJvLji4tN.svg"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useTranslations()

  // Home page has dark hero, other pages are light
  const isHome = pathname === "/"
  const isDarkHeader = false

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="fixed w-full z-50 px-4 md:px-6 pt-4 transition-all duration-500"
    >
      <nav className={`mx-auto max-w-4xl px-6 md:px-8 py-2.5 flex justify-between items-center rounded-full transition-all duration-500 ${
        hasScrolled && !isOpen
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-black/[0.04]"
          : ""
      }`}>
        <Link
          href="/"
          className={`relative z-50 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
        >
          <img
            src={isDarkHeader ? LOGO_LIGHT : LOGO_DARK}
            alt="Centro ID"
            className="h-7"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`
                text-[13px] px-4 py-2 rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-sky-500/50 focus-visible:outline-none
                ${isDarkHeader
                  ? pathname === item.href ? "text-white font-medium" : "text-white/40 hover:text-white/70"
                  : pathname === item.href ? "text-[#1A1A18] font-medium" : "text-[#1A1A18]/40 hover:text-[#1A1A18]/70"
                }
              `}
            >
              {t(item.title)}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
            <SelectTrigger className={`w-[56px] flex justify-center bg-transparent border-0 transition-colors ${isDarkHeader ? "text-white/40 [&>svg]:text-white/40" : "text-[#1A1A18]/40 [&>svg]:text-[#1A1A18]/40"}`}>
              {language === "es" ? (
                <svg width="20" height="20" viewBox="0 0 36 36" fill="none"><path d="M36 27C36 29.209 34.209 31 32 31H4C1.791 31 0 29.209 0 27V9C0 6.791 1.791 5 4 5H32C34.209 5 36 6.791 36 9V27Z" fill="#C60A1D"/><path d="M0 12H36V24H0V12Z" fill="#FFC400"/><path d="M9 17V20C9 21.657 10.343 23 12 23C13.657 23 15 21.657 15 20V17H9Z" fill="#EA596E"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 36 36" fill="none"><path d="M0 9.059V13H5.628L0 9.059ZM4.664 31H13V25.163L4.664 31ZM23 25.164V31H31.335L23 25.164ZM0 23V26.941L5.63 23H0ZM31.337 5H23V10.837L31.337 5ZM36 26.942V23H30.369L36 26.942ZM36 13V9.059L30.371 13H36ZM13 5H4.664L13 10.837V5Z" fill="#00247D"/><path d="M25.14 23L34.852 29.801C35.323 29.322 35.66 28.719 35.842 28.052L28.627 23H25.14ZM13 23H10.859L1.148 29.8C1.669 30.33 2.337 30.709 3.086 30.885L13 23.943V23ZM23 13H25.141L34.852 6.2C34.331 5.67 33.664 5.291 32.915 5.115L23 12.057V13ZM10.859 13L1.148 6.2C0.677 6.68 0.34 7.282 0.157 7.949L7.372 13H10.859Z" fill="#CF1B2B"/><path d="M36 21H21V31H23V25.164L31.335 31H32C33.117 31 34.126 30.539 34.852 29.801L25.14 23H28.627L35.842 28.052C35.935 27.715 36 27.366 36 27V26.942L30.369 23H36V21ZM0 21V23H5.63L0 26.941V27C0 28.091 0.439 29.078 1.148 29.8L10.859 23H13V23.943L3.086 30.884C3.38 30.954 3.684 31 4 31H4.664L13 25.163V31H15V21H0ZM36 9C36 7.909 35.561 6.922 34.852 6.2L25.141 13H23V12.057L32.915 5.115C32.62 5.046 32.316 5 32 5H31.337L23 10.837V5H21V15H36V13H30.371L36 9.059V9ZM13 5V10.837L4.664 5H4C2.882 5 1.874 5.461 1.148 6.2L10.859 13H7.372L0.157 7.949C0.065 8.286 0 8.634 0 9V9.059L5.628 13H0V15H15V5H13Z" fill="#EEE"/><path d="M21 15V5H15V15H0V21H15V31H21V21H36V15H21Z" fill="#CF1B2B"/></svg>
              )}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
          <a
            href="https://wa.me/5493885171841"
            className="px-5 py-2.5 rounded-full text-[13px] font-medium active:scale-[0.98] transition-all duration-200 bg-sky-500 text-white border border-sky-400/20 [border-top-color:rgba(255,255,255,0.18)] [border-left-color:rgba(255,255,255,0.10)] [border-bottom-color:rgba(0,0,0,0.10)] [border-right-color:rgba(0,0,0,0.06)] shadow-[inset_0_4px_12px_0_rgba(255,255,255,0.5),inset_0_-4px_12px_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.15),0_2px_4px_rgba(0,0,0,0.12)] hover:bg-sky-600 hover:shadow-[inset_0_4px_14px_0_rgba(255,255,255,0.45),inset_0_-4px_14px_0_rgba(255,255,255,0.18),0_4px_16px_rgba(14,165,233,0.35)] brightness-105 hover:brightness-100 focus-visible:ring-2 focus-visible:ring-sky-500/50 focus-visible:outline-none"
          >
            {t("hero.cta")}
          </a>
        </div>

        <button
          className="lg:hidden relative z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen
            ? <X size={22} className="text-[#1A1A18]" />
            : <Menu size={22} className={isDarkHeader ? "text-white" : "text-[#1A1A18]"} />
          }
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#F5F4F0]"
          >
            <div className="flex-1 flex flex-col items-start justify-center container mx-auto px-8">
              <div className="flex flex-col gap-3 mb-10">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <Link
                      href={item.href}
                      className="text-[2rem] font-medium tracking-tight text-[#1A1A18] hover:text-[#6B6B66] transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {t(item.title)}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex items-center gap-5">
                <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
                  <SelectTrigger className="w-[100px] bg-transparent border-[#D4D3CE]">{language === "es" ? "Español" : "English"}</SelectTrigger>
                  <SelectContent>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
                <a
                  href="https://wa.me/5493885171841"
                  className="bg-sky-500 text-white px-7 py-3 rounded-full text-base font-medium active:scale-[0.98] transition-all duration-200 border border-sky-400/20 [border-top-color:rgba(255,255,255,0.18)] [border-left-color:rgba(255,255,255,0.10)] [border-bottom-color:rgba(0,0,0,0.10)] [border-right-color:rgba(0,0,0,0.06)] shadow-[inset_0_4px_12px_0_rgba(255,255,255,0.5),inset_0_-4px_12px_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.15)] hover:bg-sky-600 brightness-105 hover:brightness-100"
                  onClick={() => setIsOpen(false)}
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
