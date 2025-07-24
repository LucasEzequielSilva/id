import Cookies from "js-cookie"

export const COOKIE_CONSENT_KEY = "cookie-consent"

export type CookieConsent = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export const getConsentCookie = (): CookieConsent | null => {
  const consent = Cookies.get(COOKIE_CONSENT_KEY)
  return consent ? JSON.parse(consent) : null
}

export const setConsentCookie = (consent: CookieConsent) => {
  Cookies.set(COOKIE_CONSENT_KEY, JSON.stringify(consent), { expires: 365 })
}

export const removeConsentCookie = () => {
  Cookies.remove(COOKIE_CONSENT_KEY)
}

export const setAnalyticsCookies = () => {
  // Aquí implementarías la lógica para establecer las cookies de análisis
  // Por ejemplo:
  // Cookies.set('ga', 'GA1.2.123456789.1234567890', { expires: 365 })
}

export const setMarketingCookies = () => {
  // Aquí implementarías la lógica para establecer las cookies de marketing
  // Por ejemplo:
  // Cookies.set('fbp', 'fb.1.1234567890.987654321', { expires: 365 })
}

export const removeNonEssentialCookies = () => {
  // Aquí eliminarías todas las cookies no esenciales
  // Por ejemplo:
  // Cookies.remove('ga')
  // Cookies.remove('fbp')
}
