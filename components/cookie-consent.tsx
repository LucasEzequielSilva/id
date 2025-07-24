"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "@/lib/i18n"
import {
  getConsentCookie,
  setConsentCookie,
  setAnalyticsCookies,
  setMarketingCookies,
  removeNonEssentialCookies,
  type CookieConsent as CookieConsentType,
} from "@/utils/cookieManager"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [consent, setConsent] = useState<CookieConsentType>({
    necessary: true,
    analytics: false,
    marketing: false,
  })
  const { t } = useTranslations()

  useEffect(() => {
    const storedConsent = getConsentCookie()
    if (!storedConsent) {
      setShowBanner(true)
    } else {
      setConsent(storedConsent)
      applyConsent(storedConsent)
    }
  }, [])

  const applyConsent = (consentSettings: CookieConsentType) => {
    if (consentSettings.analytics) {
      setAnalyticsCookies()
    }
    if (consentSettings.marketing) {
      setMarketingCookies()
    }
    if (!consentSettings.analytics && !consentSettings.marketing) {
      removeNonEssentialCookies()
    }
  }

  const acceptAll = () => {
    const newConsent = { necessary: true, analytics: true, marketing: true }
    setConsent(newConsent)
    setConsentCookie(newConsent)
    applyConsent(newConsent)
    setShowBanner(false)
  }

  const savePreferences = () => {
    setConsentCookie(consent)
    applyConsent(consent)
    setShowBanner(false)
    setShowPreferences(false)
  }

  const handleToggle = (key: keyof CookieConsentType) => {
    setConsent((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-neutral-800"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-neutral-300">
                <p>
                  {t("cookies.message")}{" "}
                  <button onClick={() => setShowPreferences(true)} className="underline hover:text-white">
                    {t("cookies.learnMore")}
                  </button>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={acceptAll}
                  className="bg-white text-black px-6 py-2 rounded-full text-sm hover:bg-neutral-200 transition-colors"
                >
                  {t("cookies.acceptAll")}
                </button>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="text-white px-6 py-2 rounded-full text-sm hover:bg-neutral-800 transition-colors"
                >
                  {t("cookies.preferences")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {showPreferences && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">{t("cookies.preferences")}</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>{t("cookies.necessary")}</span>
                <input type="checkbox" checked disabled />
              </div>
              <div className="flex items-center justify-between">
                <span>{t("cookies.analytics")}</span>
                <input type="checkbox" checked={consent.analytics} onChange={() => handleToggle("analytics")} />
              </div>
              <div className="flex items-center justify-between">
                <span>{t("cookies.marketing")}</span>
                <input type="checkbox" checked={consent.marketing} onChange={() => handleToggle("marketing")} />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
              >
                {t("common.cancel")}
              </button>
              <button
                onClick={savePreferences}
                className="px-4 py-2 text-sm bg-black text-white rounded hover:bg-gray-800"
              >
                {t("common.save")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
