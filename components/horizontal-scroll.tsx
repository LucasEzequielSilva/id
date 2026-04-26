"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslations } from "@/lib/i18n"
import { Award, Fingerprint, Globe, TrendingUp } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const slideIcons = [Award, Fingerprint, Globe, TrendingUp]

export function HorizontalScroll() {
  const { t, language } = useTranslations()
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  const slides = [
    { titleKey: "whyChooseUs.slides.professional.title", descriptionKey: "whyChooseUs.slides.professional.description", image: "/images/centro-id/why-us/professional.png" },
    { titleKey: "whyChooseUs.slides.personalized.title", descriptionKey: "whyChooseUs.slides.personalized.description", image: "/images/centro-id/why-us/personalized.png" },
    { titleKey: "whyChooseUs.slides.global.title", descriptionKey: "whyChooseUs.slides.global.description", image: "/images/centro-id/why-us/global.png" },
    { titleKey: "whyChooseUs.slides.results.title", descriptionKey: "whyChooseUs.slides.results.description", image: "/images/centro-id/why-us/results.png" },
  ]

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return
    const track = trackRef.current

    const ctx = gsap.context(() => {
      const totalScroll = track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 0.5,
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`
            }
          },
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#F5F4F0]">
      <div ref={trackRef} className="flex items-center h-screen">
        {/* Intro */}
        <div className="flex-shrink-0 w-[85vw] md:w-[40vw] lg:w-[35vw] h-full flex flex-col justify-center pl-4 md:pl-8 pr-12 md:pr-20">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[#1A1A18] leading-[1.15]">
            {t("whyChooseUs.title")}
          </h2>
          <div className="w-10 h-px bg-[#D4D3CE] mt-6" />
        </div>

        {/* Cards */}
        {slides.map((slide, i) => {
          const Icon = slideIcons[i]
          return (
            <div key={i} className="flex-shrink-0 w-[82vw] md:w-[42vw] lg:w-[30vw] px-2 md:px-3">
              <div className="relative h-[60vh] md:h-[65vh] rounded-2xl overflow-hidden group transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(to bottom, rgba(12,11,9,0.55) 0%, rgba(12,11,9,0.35) 40%, rgba(12,11,9,0.9) 100%)"
                }} />

                <div className="relative h-full p-8 md:p-10 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="text-[5rem] md:text-[6rem] font-bold leading-none tracking-tighter text-white/[0.12] select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white/80 bg-white/10 backdrop-blur-sm border border-white/15 transition-colors duration-200 group-hover:text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl text-white font-medium tracking-tight mb-3 leading-tight">
                      {t(slide.titleKey)}
                    </h3>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {t(slide.descriptionKey)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        <div className="flex-shrink-0 w-[15vw]" />
      </div>

    </section>
  )
}
