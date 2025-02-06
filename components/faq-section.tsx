"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTranslations } from "@/lib/i18n"

export function FaqSection() {
  const { t } = useTranslations()

  const faqs = [
    {
      question: t("faq.booking.question"),
      answer: t("faq.booking.answer"),
    },
    {
      question: t("faq.online.question"),
      answer: t("faq.online.answer"),
    },
    {
      question: t("faq.duration.question"),
      answer: t("faq.duration.answer"),
    },
    {
      question: t("faq.payment.question"),
      answer: t("faq.payment.answer"),
    },
    {
      question: t("faq.confidentiality.question"),
      answer: t("faq.confidentiality.answer"),
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-regular tracking-tighter mb-6 text-white">{t("faq.title")}{" "}</h2>
            <p className="text-neutral-400">
              {t("faq.subtitle")}{" "}
              <button className="text-white underline underline-offset-4 hover:text-zinc-400 transition-colors">
                {t("faq.contact")}
              </button>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-neutral-800 rounded-lg px-6 py-4 transition-all duration-200"
                >
                  <AccordionTrigger className="text-white hover:text-zinc-400 text-left transition-colors duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-400 transition-all duration-200">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

