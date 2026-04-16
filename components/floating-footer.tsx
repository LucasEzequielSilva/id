"use client"

import Link from "next/link"
import { useTranslations } from "@/lib/i18n"
import { Phone } from "lucide-react"

export function FloatingFooter({ language: languageProp, bgColor = "#f5f4f0" }: { language?: string; bgColor?: string }) {
  const { t, language: contextLanguage } = useTranslations()
  const language = languageProp || contextLanguage

  return (
    <footer className="relative z-10 px-4 md:px-6 pb-6" style={{ backgroundColor: bgColor }}>
      <div className="mx-auto max-w-6xl bg-[#0C0B09] rounded-3xl overflow-hidden">
        {/* Top row — logo + links */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-10 p-8 md:p-10 pb-0 md:pb-0">
          <div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-tB2IAb0orDmcWbgZ2vH8HEhcDYV8dy.svg"
              alt="Centro ID"
              className="h-6 opacity-60 mb-4"
            />
            <p className="text-white/30 max-w-xs text-sm leading-relaxed">{t("footer.description")}</p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <h3 className="text-white/40 text-[11px] font-medium tracking-widest uppercase mb-3">{t("footer.company")}</h3>
              <ul className="space-y-2">
                {[
                  { href: language === "en" ? "/about" : "/nosotros", label: t("footer.about") },
                  { href: language === "en" ? "/services" : "/servicios", label: t("footer.services") },
                  { href: "/blog", label: t("footer.blog") },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-white/35 hover:text-white/60 text-sm transition-colors duration-200">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white/40 text-[11px] font-medium tracking-widest uppercase mb-3">{t("footer.resources")}</h3>
              <ul className="space-y-2">
                {[
                  { href: "/privacy", label: t("footer.privacy") },
                  { href: "/terms", label: t("footer.terms") },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-white/35 hover:text-white/60 text-sm transition-colors duration-200">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white/40 text-[11px] font-medium tracking-widest uppercase mb-3">{t("footer.contact")}</h3>
              <p className="text-white/30 text-sm leading-relaxed mb-4">
                Dr. Siufi 115<br />
                Jujuy, Argentina
              </p>
              <a href="https://wa.me/5493885171841" aria-label="WhatsApp" className="inline-flex items-center gap-2 text-white/35 hover:text-white/60 text-sm transition-colors duration-200">
                <Phone className="w-4 h-4" />
                +54 9 3885 17-1841
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 mx-8 md:mx-10 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-white/20">© {new Date().getFullYear()} {t("footer.rights")}</p>
          <div className="text-[11px] text-white/20">Made by 0800WEB</div>
        </div>

        {/* Brand name oversized — desfasado */}
        <div className="mt-6 -mb-5 select-none overflow-hidden">
          <span className="block text-center whitespace-nowrap text-[clamp(5rem,18vw,14rem)] font-bold tracking-tighter leading-none text-white/[0.04] translate-y-[30%]" aria-hidden="true">
            CENTRO ID
          </span>
        </div>
      </div>
    </footer>
  )
}
