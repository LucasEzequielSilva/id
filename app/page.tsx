"use client"

import { useEffect, useRef } from "react"
import { Application } from "@splinetool/runtime"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ServiceCard } from "@/components/service-card"
import { useTranslations } from "@/lib/i18n"
import {
  MonitorSmartphone,
  Building,
  Gavel,
  FileText,
  Compass,
  Briefcase,
  Scale,
  Shield,
  GraduationCap,
  Globe2,
} from "lucide-react"
import { HorizontalScroll } from "@/components/horizontal-scroll"
import { FloatingFooter } from "@/components/floating-footer"
import { FaqSection } from "@/components/faq-section"

gsap.registerPlugin(ScrollTrigger)

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
}

export default function Home() {
  const { t, language } = useTranslations()
  const splineCanvasRef = useRef<HTMLCanvasElement>(null)
  const splineMobileRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Detect mobile
    const isMobile = window.innerWidth < 768
    const canvas = isMobile ? splineMobileRef.current : splineCanvasRef.current
    if (!canvas) return
    const app = new Application(canvas)
    app.load("/scene-clean.splinecode")
    return () => { app.dispose() }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-badge", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.3, ease: "power4.out" })
      gsap.fromTo(".hero-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power4.out" })
      gsap.fromTo(".hero-sub", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.8, ease: "power3.out" })
      gsap.fromTo(".hero-cta", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, delay: 1, ease: "power3.out" })
    })
    return () => ctx.revert()
  }, [])

  const services = [
    { title: t("services.items.virtual.title"), description: t("services.items.virtual.description"), icon: <MonitorSmartphone className="w-5 h-5" />, href: "/servicios", translationKey: "services.items.virtual" },
    { title: t("services.items.inPerson.title"), description: t("services.items.inPerson.description"), icon: <Building className="w-5 h-5" />, href: "/servicios", translationKey: "services.items.inPerson" },
    { title: t("services.items.evaluations.title"), description: t("services.items.evaluations.description"), icon: <Gavel className="w-5 h-5" />, href: "/servicios", translationKey: "services.items.evaluations" },
    { title: t("services.items.diagnostics.title"), description: t("services.items.diagnostics.description"), icon: <FileText className="w-5 h-5" />, href: "/servicios", translationKey: "services.items.diagnostics" },
    { title: t("services.items.career.title"), description: t("services.items.career.description"), icon: <Compass className="w-5 h-5" />, href: "/servicios", translationKey: "services.items.career" },
    { title: t("services.items.legal.title"), description: t("services.items.legal.description"), icon: <Briefcase className="w-5 h-5" />, href: "/servicios", translationKey: "services.items.legal" },
  ]

  const features = [
    { icon: Scale, label: t("about.features.legal"), image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60" },
    { icon: Shield, label: t("about.features.confidentiality"), image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&auto=format&fit=crop&q=60" },
    { icon: GraduationCap, label: t("about.features.certified"), image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&auto=format&fit=crop&q=60" },
    { icon: Globe2, label: t("about.features.global"), image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&auto=format&fit=crop&q=60" },
  ]

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen bg-[#fafaf8] overflow-hidden">
        {/* Desktop: Spline as absolute background (canvas shared, positioned via CSS) */}
        <div className="absolute inset-0 z-[0] pointer-events-none hidden md:block">
          <canvas ref={splineCanvasRef} className="w-full h-full" aria-hidden="true" style={{ background: "#fafaf8" }} />
        </div>

        {/* Desktop fade overlay */}
        <div className="absolute inset-0 z-[1] pointer-events-none hidden md:block bg-[#fafaf8]/20" />

        {/* Sky gradient top → transparent bottom */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(56,189,248,0.08) 0%, rgba(56,189,248,0.03) 30%, transparent 60%)",
          }}
        />

        {/* Diagonal light rays */}
        <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
          <div
            className="absolute -top-[20%] -left-[10%] w-[50%] h-[140%] opacity-[0.07]"
            style={{
              background: "linear-gradient(115deg, transparent 25%, rgba(56,189,248,0.8) 46%, rgba(255,255,255,0.6) 50%, rgba(56,189,248,0.8) 54%, transparent 75%)",
              transform: "rotate(-15deg)",
            }}
          />
          <div
            className="absolute -top-[20%] left-[15%] w-[40%] h-[140%] opacity-[0.055]"
            style={{
              background: "linear-gradient(115deg, transparent 25%, rgba(56,189,248,0.6) 46%, rgba(255,255,255,0.5) 50%, rgba(56,189,248,0.6) 54%, transparent 75%)",
              transform: "rotate(-15deg)",
            }}
          />
          <div
            className="absolute -top-[20%] left-[40%] w-[35%] h-[140%] opacity-[0.045]"
            style={{
              background: "linear-gradient(115deg, transparent 25%, rgba(56,189,248,0.5) 46%, rgba(255,255,255,0.4) 50%, rgba(56,189,248,0.5) 54%, transparent 75%)",
              transform: "rotate(-15deg)",
            }}
          />
          <div
            className="absolute -top-[20%] left-[60%] w-[45%] h-[140%] opacity-[0.035]"
            style={{
              background: "linear-gradient(115deg, transparent 25%, rgba(56,189,248,0.4) 46%, rgba(255,255,255,0.3) 50%, rgba(56,189,248,0.4) 54%, transparent 75%)",
              transform: "rotate(-15deg)",
            }}
          />
        </div>

        {/* Spline watermark cover — desktop only */}
        <div className="absolute bottom-0 right-0 z-[10] w-[220px] h-[60px] pointer-events-none select-none hidden md:block" style={{ background: "#fafaf8" }} aria-hidden="true" />

        {/* Hero content: text top + spline bottom on mobile, text left on desktop */}
        <div className="relative z-[20] flex flex-col min-h-screen">
          {/* Text */}
          <div className="flex-1 flex items-center pt-24 md:pt-0">
            <div className="container mx-auto px-4 md:px-8">
              <div className="hero-badge opacity-0 mb-4">
                <span className="inline-flex items-center gap-2 text-[13px] text-[#8A8A84] tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  {t("hero.schedule")}{" "}
                  {language === "es"
                    ? new Date().toLocaleString("es-ES", { month: "long" }).toUpperCase()
                    : new Date().toLocaleString("en-US", { month: "long" }).toUpperCase()}{" "}
                  {t("hero.open")}
                </span>
              </div>

              <h1
                className="hero-title opacity-0 text-[clamp(2rem,4.5vw,3rem)] font-medium tracking-tighter leading-[1.2] mb-3 max-w-2xl text-[#1A1A18]"
                style={{
                  maskImage: "repeating-linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 100%)",
                  maskSize: "100% 1.2em",
                  WebkitMaskImage: "repeating-linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 100%)",
                  WebkitMaskSize: "100% 1.2em",
                }}
              >
                {t("hero.title")}
              </h1>
              <p className="hero-sub opacity-0 text-[#6B6B66] mb-8 max-w-md text-base leading-relaxed">
                {t("hero.subtitle")}
              </p>
              <div className="hero-cta opacity-0">
                <WhatsAppButton variant="hero" />
              </div>
            </div>
          </div>

          {/* Mobile Spline cube — below text */}
          <div className="relative w-full h-[300px] md:hidden">
            <canvas ref={splineMobileRef} className="w-full h-full" aria-hidden="true" style={{ background: "#fafaf8" }} />
            {/* Watermark cover mobile */}
            <div className="absolute bottom-0 right-0 w-[180px] h-[50px] pointer-events-none select-none" style={{ background: "#fafaf8" }} aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="py-28 md:py-36 bg-[#fafaf8]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-7">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}>
                <p className="text-sm font-medium tracking-widest uppercase mb-4 text-[#7A8B6F]">
                  {language === "es" ? "Sobre nosotros" : "About us"}
                </p>
                <h2 className="text-2xl md:text-[2rem] leading-[1.15] font-medium mb-6 text-[#1A1A18]">
                  {t("about.title")}
                </h2>
                <p className="text-base leading-[1.7] max-w-xl text-[#6B6B66]">
                  {t("about.description")}
                </p>
              </motion.div>

              <motion.div
                className="flex items-center gap-10 mt-10"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
              >
                {[
                  { value: "15+", label: t("about.stats.years") },
                  null,
                  { value: "500+", label: t("about.stats.cases") },
                ].map((item, i) =>
                  item === null ? (
                    <div key={i} className="w-px h-14 bg-[#D4D3CE]" />
                  ) : (
                    <motion.div key={i} variants={fadeIn}>
                      <p className="text-4xl font-semibold tracking-tight text-[#1A1A18]">{item.value}</p>
                      <p className="text-sm mt-1 text-[#8A8A84]">{item.label}</p>
                    </motion.div>
                  )
                )}
              </motion.div>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-3">
              {features.map(({ icon: Icon, label, image }, i) => (
                <motion.div
                  key={i}
                  className={`
                    group aspect-square relative overflow-hidden rounded-2xl
                    transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                    ${i === 1 ? "mt-8" : ""} ${i === 2 ? "-mt-4" : ""}
                  `}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
                >
                  <img src={image} alt={label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
                  <div className="relative h-full p-5 md:p-6 flex flex-col justify-between">
                    <Icon className="w-7 h-7 text-white/80" />
                    <p className="text-[13px] font-medium text-white leading-snug">{label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-28 md:py-36 bg-[#ECEAE4]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div className="max-w-xl mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-[#7A8B6F]">
              {language === "es" ? "Servicios" : "Services"}
            </p>
            <h2 className="text-2xl md:text-[2rem] leading-[1.15] font-medium mb-5 text-[#1A1A18]">
              {t("services.title")}
            </h2>
            <p className="text-base leading-[1.7] text-[#6B6B66]">
              {t("services.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <HorizontalScroll />

      {/* ═══ CONTACT CTA ═══ */}
      <section className="py-28 md:py-36 bg-[#fafaf8]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div className="max-w-xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-[#7A8B6F]">
              {language === "es" ? "Contacto" : "Contact"}
            </p>
            <h2 className="text-2xl md:text-[2rem] leading-[1.15] font-medium mb-5 text-[#1A1A18]">
              {t("contact.title")}
            </h2>
            <p className="text-[#6B6B66] mb-10 text-base leading-relaxed">{t("contact.description")}</p>
            <WhatsAppButton size="lg" />
          </motion.div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FaqSection />

      {/* ═══ FOOTER ═══ */}
      <FloatingFooter language={language} bgColor="#ECEAE4" />
    </div>
  )
}
