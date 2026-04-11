"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTranslations } from "@/lib/i18n"

gsap.registerPlugin(ScrollTrigger)

export function FaqSection() {
  const { t, language } = useTranslations()
  const sectionRef = useRef<HTMLElement>(null)

  const faqs = [
    { question: t("faq.booking.question"), answer: t("faq.booking.answer") },
    { question: t("faq.online.question"), answer: t("faq.online.answer") },
    { question: t("faq.duration.question"), answer: t("faq.duration.answer") },
    { question: t("faq.payment.question"), answer: t("faq.payment.answer") },
    { question: t("faq.confidentiality.question"), answer: t("faq.confidentiality.answer") },
  ]

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-item", { opacity: 0, y: 16 }, {
        opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-28 md:py-36 bg-[#ECEAE4]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-[#7A8B6F]">FAQ</p>
            <h2 className="text-2xl md:text-[2rem] leading-[1.15] font-medium text-[#1A1A18] mb-4">
              {t("faq.title")}
            </h2>
            <p className="text-[#8A8A84] text-sm leading-relaxed">
              {t("faq.subtitle")}{" "}
              <button className="text-[#1A1A18] underline underline-offset-4 hover:text-[#6B6B66] transition-colors duration-200">
                {t("faq.contact")}
              </button>
            </p>
          </div>

          <div className="md:col-span-8">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="faq-item rounded-xl px-6 py-1 bg-white border border-[#E5E4DF] transition-all duration-200 data-[state=open]:border-[#D4D3CE] data-[state=open]:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                >
                  <AccordionTrigger className="text-[#1A1A18] hover:text-[#6B6B66] text-left transition-colors duration-200 text-[15px] font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#8A8A84] text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
