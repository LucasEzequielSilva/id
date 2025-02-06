"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTranslations } from "@/lib/i18n"

export function HorizontalScroll() {
  const { t } = useTranslations()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const slides = [
    {
      titleKey: "whyChooseUs.slides.professional.title",
      descriptionKey: "whyChooseUs.slides.professional.description",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1000&auto=format&fit=crop",
    },
    {
      titleKey: "whyChooseUs.slides.personalized.title",
      descriptionKey: "whyChooseUs.slides.personalized.description",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1000&auto=format&fit=crop",
    },
    {
      titleKey: "whyChooseUs.slides.global.title",
      descriptionKey: "whyChooseUs.slides.global.description",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1000&auto=format&fit=crop",
    },
    {
      titleKey: "whyChooseUs.slides.results.title",
      descriptionKey: "whyChooseUs.slides.results.description",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
    },
  ]

  const progressTransforms = slides.map((_, i) => {
    return useTransform(scrollYProgress, [i * 0.2, 0.2 + i * 0.2], [0, 1])
  })

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-neutral-950 flex flex-col items-center">
      <div className="sticky top-0 h-screen flex overflow-hidden w-full">
        <div className="w-full mt-24">
          <motion.h2
            className="text-white text-3xl md:text-4xl font-regular tracking-tighter mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t("whyChooseUs.title")}
          </motion.h2>

          {slides.map((slide, i) => {
            const progress = progressTransforms[i]
            const x = useTransform(progress, [0, 1], ["100%", "0%"])
            const opacity = useTransform(progress, [0, 0.5, 1], [0, 1, 1])

            return (
              <motion.div
                key={i}
                className="absolute w-full px-4 md:px-8"
                style={{
                  opacity,
                  x,
                }}
              >
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 md:px-8">
                  <div className="relative group overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-zinc-500/10 via-zinc-50/10 to-zinc-700/10 rounded-2xl blur-xl"
                      style={{
                        maskImage: "radial-gradient(circle at center, black, transparent)",
                        WebkitMaskImage: "radial-gradient(circle at center, black, transparent)",
                      }}
                    />
                    <div className="relative bg-neutral-900 rounded-2xl p-8 md:p-12 min-h-[328px]">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/0" />
                      <div className="relative">
                        <h3 className="text-4xl md:text-5xl lg:text-7xl text-white mb-4 md:mb-8 tracking-tight">
                          {t(slide.titleKey)}
                        </h3>
                        <p className="text-lg md:text-xl text-neutral-300 max-w-xl">{t(slide.descriptionKey)}</p>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-zinc-500/10 to-zinc-500/10 blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-zinc-500/10 to-zinc-500/10 blur-3xl" />
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-[1px]">
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <img
                          src={slide.image || "/placeholder.svg"}
                          alt={t(slide.titleKey)}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

