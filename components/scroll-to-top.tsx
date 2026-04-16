"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Reset Lenis scroll position
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true })
    }
    // Fallback for native scroll
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
