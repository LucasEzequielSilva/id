"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { FloatingFooter } from "@/components/floating-footer"
import { useTranslations } from "@/lib/i18n"

export default function PrivacyPage() {
  const { t, language } = useTranslations()

  const privacyContent = {
    es: {
      title: "Política de Privacidad – Centro Pericial ID",
      lastUpdated: "Última actualización: 7 de febrero de 2025",
      intro:
        "En el Centro Pericial ID, nos comprometemos a proteger la privacidad y confidencialidad de nuestros clientes. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos la información proporcionada por nuestros usuarios y clientes.",
      sections: [
        {
          title: "1. Información que recopilamos",
          content:
            "Al utilizar nuestros servicios, podemos solicitar ciertos datos personales para brindar una atención profesional y garantizar la calidad de nuestras pericias psicológicas. Estos datos incluyen:",
          list: [
            "Nombre y apellido",
            "Datos de contacto (correo electrónico, teléfono)",
            "Información relevante para el proceso pericial",
            "Registros de entrevistas psicológicas",
          ],
        },
        {
          title: "2. Uso de la información",
          content: "La información proporcionada se empleará para:",
          list: [
            "Realizar pericias psicológicas y emitir informes periciales.",
            "Agendar entrevistas y contacto profesional con los clientes.",
            "Cumplir con requerimientos legales en procesos judiciales.",
            "Mejorar nuestros servicios y experiencia de usuario.",
          ],
        },
        {
          title: "3. Almacenamiento y seguridad de los datos",
          content:
            "Los datos recopilados son almacenados de manera segura y solo tienen acceso a ellos los profesionales del Centro Pericial ID que participan en la evaluación y análisis pericial. Implementamos medidas de seguridad para evitar accesos no autorizados, alteraciones o divulgaciones indebidas.",
        },
        {
          title: "4. Derechos del usuario",
          content: "Los clientes tienen derecho a:",
          list: [
            "Acceder, modificar o solicitar la eliminación de su información personal.",
            "Conocer cómo se utilizan sus datos y con qué propósito.",
            "Presentar consultas o solicitudes sobre la protección de sus datos.",
          ],
        },
        {
          title: "5. Cookies y tecnologías de seguimiento",
          content:
            "Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario. El usuario puede configurar su navegador para rechazar cookies, aunque esto podría afectar algunas funcionalidades del sitio.",
        },
        {
          title: "6. Cambios en la Política de Privacidad",
          content:
            "Esta política puede actualizarse ocasionalmente para reflejar cambios en nuestras prácticas. Se recomienda revisarla periódicamente para estar informado sobre cómo protegemos su privacidad.",
        },
        {
          title: "Contacto",
          content: "Para más información o consultas, contáctenos a través de:",
          list: [
            "Email: centropericialid@hotmail.com",
            "Dirección: Dr. Siufi Nº 115 barrio Bajo la viña, San Salvador de Jujuy. Jujuy",
          ],
        },
      ],
    },
    en: {
      title: "Privacy Policy – Centro Pericial ID",
      lastUpdated: "Last updated: February 7, 2025",
      intro:
        "At Centro Pericial ID, we are committed to protecting the privacy and confidentiality of our clients. This Privacy Policy explains how we collect, use, and protect the information provided by our users and clients.",
      sections: [
        {
          title: "1. Information We Collect",
          content:
            "When using our services, we may request certain personal data to provide professional care and ensure the quality of our psychological assessments. This data includes:",
          list: [
            "Full name",
            "Contact information (email, phone)",
            "Relevant information for the assessment process",
            "Records of psychological interviews",
          ],
        },
        {
          title: "2. Use of Information",
          content: "The provided information will be used to:",
          list: [
            "Conduct psychological assessments and issue expert reports.",
            "Schedule interviews and maintain professional contact with clients.",
            "Comply with legal requirements in judicial processes.",
            "Improve our services and user experience.",
          ],
        },
        {
          title: "3. Data Storage and Security",
          content:
            "The collected data is stored securely and only accessible to Centro Pericial ID professionals involved in the evaluation and analysis process. We implement security measures to prevent unauthorized access, alterations, or improper disclosures.",
        },
        {
          title: "4. User Rights",
          content: "Clients have the right to:",
          list: [
            "Access, modify, or request the deletion of their personal information.",
            "Know how their data is used and for what purpose.",
            "Submit inquiries or requests regarding the protection of their data.",
          ],
        },
        {
          title: "5. Cookies and Tracking Technologies",
          content:
            "Our website may use cookies to improve the user experience. Users can configure their browser to reject cookies, although this may affect some site functionalities.",
        },
        {
          title: "6. Changes to the Privacy Policy",
          content:
            "This policy may be updated occasionally to reflect changes in our practices. It is recommended to review it periodically to stay informed about how we protect your privacy.",
        },
        {
          title: "Contact",
          content: "For more information or inquiries, contact us through:",
          list: [
            "Email: centropericialid@hotmail.com",
            "Address: Dr. Siufi Nº 115, Barrio Bajo la viña, San Salvador de Jujuy. Jujuy, Argentina",
          ],
        },
      ],
    },
  }

  const content = language === "en" ? privacyContent.en : privacyContent.es

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-medium text-white mb-8">{content.title}</h1>
          <div className="prose prose-lg">
            <p className="text-neutral-400">{content.lastUpdated}</p>

            <p className="text-white">{content.intro}</p>

            {content.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-white">{section.title}</h2>
                <p className="text-neutral-300">{section.content}</p>
                {section.list && (
                  <ul>
                    {section.list.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-neutral-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      <FloatingFooter />
    </div>
  )
}
