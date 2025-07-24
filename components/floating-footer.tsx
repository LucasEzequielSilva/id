"use client"

import Link from "next/link"
import { useTranslations } from "@/lib/i18n"
import { Instagram, Linkedin, Facebook } from "lucide-react"

export function FloatingFooter({ language }: { language: string }) {
  const { t } = useTranslations()

  return (
    <footer className="relative z-10">
      <div className="container mx-auto px-4 pb-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex justify-start mb-12">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dark%20logo-E60Ij7KTKR3YEOzHBXtXfiJvLji4tN.svg"
              alt="CENTRO PERICIAL PSICOLOGICO ID Logo"
              className="h-8"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <p className="text-neutral-600 max-w-xs">{t("footer.description")}</p>
            </div>

            <div>
              <h3 className="font-medium mb-4">{t("footer.company")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={language === "en" ? "/about" : "/nosotros"}
                    className="text-neutral-600 hover:text-black transition-colors"
                  >
                    {t("footer.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={language === "en" ? "/services" : "/servicios"}
                    className="text-neutral-600 hover:text-black transition-colors"
                  >
                    {t("footer.services")}
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-neutral-600 hover:text-black transition-colors">
                    {t("footer.blog")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">{t("footer.resources")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-neutral-600 hover:text-black transition-colors">
                    {t("footer.privacy")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">
                <Link
                  href={language === "en" ? "/contact" : "/contacto"}
                  className="text-neutral-600 hover:text-black transition-colors"
                >
                  {t("footer.contact")}
                </Link>
              </h3>
              <p className="text-neutral-600">
                Dr. Siufi 115, Barrio Bajo la Viña
                <br />
                San Salvador de Jujuy, Jujuy
                <br />
                Argentina
                <br />
                <a href="mailto:centropericialid@hotmail.com" className="hover:text-black transition-colors">
                  centropericialid@hotmail.com
                </a>
                <br />
                <a href="tel:+543884338832" className="hover:text-black transition-colors">
                  +54 388 433-8832
                </a>
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.instagram.com/pericias.psicologicas.arg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-black transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/1ETpndnz8J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-black transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/centro-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-black transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-neutral-600">
                © {new Date().getFullYear()} {t("footer.rights")}
              </p>
              <div className="text-sm text-neutral-600">Made by 0800WEB</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
