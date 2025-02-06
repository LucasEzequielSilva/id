"use client"

import { createContext, useContext } from "react"

export const languages = {
  en: "English",
  es: "Español",
} as const

export type Language = keyof typeof languages

export const defaultLanguage: Language = "es"

// Agregar la estructura de blog posts
export const blogPosts = {
  es: [
    {
      id: 1,
      slug: "la-importancia-de-la-terapia",
      title: "La importancia de la terapia en tiempos de cambio",
      excerpt: "Descubre cómo la terapia puede ayudarte a navegar períodos de transición y cambio en tu vida.",
      content: `
        <p>En un mundo en constante evolución, los períodos de cambio y transición son inevitables. Ya sea un cambio de carrera, una mudanza, el fin de una relación o cualquier otra transformación significativa en nuestras vidas, estos momentos pueden ser tanto emocionantes como abrumadores. Es en estos períodos cruciales donde la terapia puede desempeñar un papel fundamental en nuestro bienestar mental y emocional.</p>

        <h2>¿Por qué es importante la terapia durante los cambios?</h2>

        <p>La terapia proporciona un espacio seguro y de apoyo para procesar nuestras emociones y pensamientos durante tiempos de incertidumbre. Un terapeuta capacitado puede ayudarnos a:</p>

        <ul>
          <li>Desarrollar estrategias de afrontamiento saludables</li>
          <li>Identificar y desafiar pensamientos negativos o limitantes</li>
          <li>Mejorar nuestra autoconciencia y comprensión personal</li>
          <li>Establecer metas realistas y alcanzables</li>
          <li>Fortalecer nuestra resiliencia emocional</li>
        </ul>

        <h2>Beneficios de la terapia en tiempos de cambio</h2>

        <p>Buscar apoyo terapéutico durante períodos de transición puede ofrecer numerosos beneficios:</p>

        <ol>
          <li><strong>Reducción del estrés y la ansiedad:</strong> La terapia proporciona herramientas para manejar el estrés asociado con el cambio.</li>
          <li><strong>Claridad mental:</strong> Ayuda a organizar pensamientos y prioridades en momentos de confusión.</li>
          <li><strong>Mejora en la toma de decisiones:</strong> Ofrece perspectivas nuevas que pueden ayudar en la toma de decisiones importantes.</li>
          <li><strong>Aumento de la autoestima:</strong> Fortalece la confianza en uno mismo para enfrentar nuevos desafíos.</li>
          <li><strong>Desarrollo de habilidades de adaptación:</strong> Enseña técnicas para adaptarse más fácilmente a nuevas situaciones.</li>
        </ol>

        <h2>Conclusión</h2>

        <p>El cambio es una parte natural e inevitable de la vida. Aunque puede ser desafiante, también ofrece oportunidades de crecimiento y desarrollo personal. La terapia puede ser una herramienta invaluable para navegar estos períodos de transición con mayor facilidad y confianza.</p>

        <p>Si estás atravesando un período de cambio significativo en tu vida, considera la posibilidad de buscar apoyo terapéutico. Recuerda, pedir ayuda no es un signo de debilidad, sino un paso valiente hacia el crecimiento personal y el bienestar emocional.</p>
      `,
      category: "Terapia",
      date: "2024-02-05",
      image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&auto=format&fit=crop&q=60",
      author: {
        name: "Dra. María González",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
        bio: "Psicóloga clínica con más de 15 años de experiencia en terapia individual y de pareja.",
      },
    },
    // ... (agregar más posts en español)
  ],
  en: [
    {
      id: 1,
      slug: "importance-of-therapy",
      title: "The Importance of Therapy in Times of Change",
      excerpt: "Discover how therapy can help you navigate periods of transition and change in your life.",
      content: `
        <p>In an ever-evolving world, periods of change and transition are inevitable. Whether it's a career change, moving to a new place, the end of a relationship, or any other significant transformation in our lives, these moments can be both exciting and overwhelming. It's during these crucial periods that therapy can play a fundamental role in our mental and emotional well-being.</p>

        <h2>Why is therapy important during changes?</h2>

        <p>Therapy provides a safe and supportive space to process our emotions and thoughts during times of uncertainty. A trained therapist can help us:</p>

        <ul>
          <li>Develop healthy coping strategies</li>
          <li>Identify and challenge negative or limiting thoughts</li>
          <li>Improve our self-awareness and personal understanding</li>
          <li>Set realistic and achievable goals</li>
          <li>Strengthen our emotional resilience</li>
        </ul>

        <h2>Benefits of therapy in times of change</h2>

        <p>Seeking therapeutic support during periods of transition can offer numerous benefits:</p>

        <ol>
          <li><strong>Stress and anxiety reduction:</strong> Therapy provides tools to manage stress associated with change.</li>
          <li><strong>Mental clarity:</strong> Helps organize thoughts and priorities in moments of confusion.</li>
          <li><strong>Improved decision-making:</strong> Offers new perspectives that can help in making important decisions.</li>
          <li><strong>Increased self-esteem:</strong> Strengthens self-confidence to face new challenges.</li>
          <li><strong>Development of adaptation skills:</strong> Teaches techniques to adapt more easily to new situations.</li>
        </ol>

        <h2>Conclusion</h2>

        <p>Change is a natural and inevitable part of life. Although it can be challenging, it also offers opportunities for growth and personal development. Therapy can be an invaluable tool for navigating these periods of transition with greater ease and confidence.</p>

        <p>If you're going through a period of significant change in your life, consider seeking therapeutic support. Remember, asking for help is not a sign of weakness, but a brave step toward personal growth and emotional well-being.</p>
      `,
      category: "Therapy",
      date: "2024-02-05",
      image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&auto=format&fit=crop&q=60",
      author: {
        name: "Dr. Maria Gonzalez",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
        bio: "Clinical psychologist with over 15 years of experience in individual and couple therapy.",
      },
    },
    // ... (agregar más posts en inglés)
  ],
}

// Agregar traducciones relacionadas con el blog
export const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Sobre Nosotros",
      contact: "Contacto",
      blog: "Blog",
    },
    hero: {
      schedule: "AGENDA DE",
      open: "ABIERTA",
      title: "Tu espacio para el bienestar psicológico.",
      subtitle: "Brindamos terapia y evaluaciones psicológicas adaptadas a tus necesidades, estés donde estés.",
      cta: "Agendar una cita",
    },
    about: {
      title: "Servicios psicológicos profesionales con enfoque en la precisión y la confianza",
      description:
        "Nuestro enfoque combina el rigor científico con la comprensión empática, brindando tanto apoyo terapéutico como evaluaciones psicológicas expertas. Ya sea que busques crecimiento personal o requieras una evaluación profesional, nuestro equipo garantiza los más altos estándares de atención.",
      stats: {
        years: "Años de Experiencia",
        cases: "Casos Atendidos",
      },
      features: {
        legal: "Experiencia Legal",
        confidentiality: "Confidencialidad",
        certified: "Profesionales Certificados",
        global: "Acceso Global",
      },
    },
    services: {
      title: "Servicios psicológicos integrales para cada necesidad",
      description:
        "Desde sesiones de terapia virtual hasta evaluaciones psicológicas expertas, nuestros servicios están diseñados para brindar apoyo profesional en todas las áreas.",
      items: {
        virtual: {
          title: "Terapia Virtual",
          description: "Apoyo psicológico profesional desde cualquier parte del mundo.",
        },
        inPerson: {
          title: "Terapia Presencial",
          description: "Sesiones presenciales en nuestra oficina de Jujuy.",
        },
        evaluations: {
          title: "Evaluaciones Psicológicas",
          description: "Evaluaciones expertas para propósitos legales y profesionales.",
        },
        diagnostics: {
          title: "Psicodiagnóstico",
          description: "Informes clínicos y laborales completos.",
        },
        career: {
          title: "Orientación Vocacional",
          description: "Guía profesional para tu desarrollo de carrera.",
        },
        legal: {
          title: "Asesoría Legal",
          description: "Apoyo especializado para estudios jurídicos y abogados.",
        },
      },
    },
    contact: {
      title: "Contáctanos",
      description:
        "Estamos aquí para ayudarte. Comunícate con nosotros para cualquier pregunta o para agendar una cita.",
      form: {
        name: "Tu Nombre",
        email: "Tu Correo Electrónico",
        message: "Tu Mensaje",
        submit: "Enviar Mensaje",
      },
      info: {
        title: "Información de Contacto",
      },
    },
    footer: {
      company: "Compañía",
      resources: "Recursos",
      about: "Sobre nosotros",
      services: "Servicios",
      works: "Trabajos",
      blog: "Blog",
      contact: "Contáctanos",
      privacy: "Política de privacidad",
      terms: "Términos de servicio",
      rights: "Todos los derechos reservados.",
      description: "Servicios psicológicos profesionales centrados en la precisión y la confianza.",
    },
    faq: {
      title: "Preguntas frecuentes",
      subtitle: "¿No encuentra lo que busca?",
      contact: "Contáctenos",
      booking: {
        question: "¿Cómo puedo agendar una consulta?",
        answer:
          "Puede agendar una consulta a través de nuestro botón de WhatsApp, disponible 24/7. Responderemos en menos de 24 horas para coordinar el mejor horario para usted.",
      },
      online: {
        question: "¿Realizan terapia online?",
        answer:
          "Sí, ofrecemos sesiones de terapia online a través de plataformas seguras y confidenciales. Esto permite acceder a nuestros servicios desde cualquier lugar del mundo.",
      },
      duration: {
        question: "¿Cuánto dura cada sesión?",
        answer:
          "Las sesiones tienen una duración de 50 minutos, siendo este el tiempo óptimo recomendado para el proceso terapéutico.",
      },
      payment: {
        question: "¿Qué métodos de pago aceptan?",
        answer:
          "Aceptamos transferencias bancarias, tarjetas de crédito/débito y efectivo. Para sesiones online, el pago se realiza antes de la consulta.",
      },
      confidentiality: {
        question: "¿Las sesiones son confidenciales?",
        answer:
          "Absolutamente. Mantenemos los más altos estándares de confidencialidad profesional, protegiendo su privacidad según las normativas vigentes.",
      },
    },
    common: {
      learnMore: "Saber más",
    },
    whyChooseUs: {
      title: "Por qué elegirnos",
      slides: {
        professional: {
          title: "Excelencia Profesional",
          description: "Nuestro equipo aporta años de experiencia y educación continua para brindar la mejor atención.",
        },
        personalized: {
          title: "Enfoque Personalizado",
          description: "Cada individuo es único, y así es nuestro enfoque hacia su viaje de salud mental.",
        },
        global: {
          title: "Accesibilidad Global",
          description: "Accede a apoyo psicológico profesional desde cualquier parte del mundo.",
        },
        results: {
          title: "Resultados Comprobados",
          description:
            "Nuestros métodos están respaldados por la investigación y demostrados a través de resultados exitosos.",
        },
      },
    },
    videoSection: {
      title: "Nuestra Historia",
      description:
        "Conoce nuestra trayectoria y compromiso en brindar atención psicológica excepcional y servicios periciales.",
    },
    servicesPage: {
      hero: {
        title: "Servicios Psicológicos Profesionales",
        subtitle:
          "Ofrecemos una gama completa de servicios psicológicos adaptados a tus necesidades, con un enfoque profesional y humano.",
      },
      cta: {
        title: "¿Listo para comenzar tu proceso?",
        subtitle: "Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos.",
      },
      services: [
        {
          title: "Terapia Virtual",
          description:
            "Ofrecemos sesiones de terapia en línea accesibles desde cualquier lugar del mundo, manteniendo la misma calidad y profesionalismo que las sesiones presenciales.",
          features: [
            "Sesiones flexibles adaptadas a tu horario",
            "Plataforma segura y confidencial",
            "Seguimiento personalizado entre sesiones",
            "Acceso desde cualquier dispositivo",
          ],
        },
        {
          title: "Evaluaciones Psicológicas",
          description:
            "Realizamos evaluaciones psicológicas completas utilizando métodos validados y herramientas profesionales para proporcionar informes detallados y precisos.",
          features: [
            "Evaluaciones cognitivas y de personalidad",
            "Informes detallados con validez legal",
            "Metodología actualizada y validada",
            "Resultados en tiempo óptimo",
          ],
        },
        {
          title: "Orientación Vocacional",
          description:
            "Ayudamos a identificar el camino profesional más adecuado mediante un proceso estructurado de evaluación y orientación personalizada.",
          features: [
            "Tests vocacionales especializados",
            "Análisis de habilidades y preferencias",
            "Plan de desarrollo personalizado",
            "Seguimiento post-orientación",
          ],
        },
      ],
      benefits: {
        title: "Beneficios de Nuestros Servicios",
        subtitle: "Ofrecemos un servicio integral que combina experiencia profesional con un enfoque humano y cercano.",
        items: [
          {
            title: "Experiencia Especializada",
            description: "Años de experiencia en psicología clínica y evaluación psicológica.",
          },
          {
            title: "Atención Personalizada",
            description: "Enfoque individualizado adaptado a las necesidades específicas de cada cliente.",
          },
          {
            title: "Equipo Profesional",
            description: "Profesionales certificados con formación continua y actualización constante.",
          },
          {
            title: "Confidencialidad Total",
            description: "Garantizamos la privacidad y seguridad de toda la información compartida.",
          },
        ],
      },
      testimonials: {
        title: "Lo que dicen nuestros clientes",
        subtitle: "Testimonios de personas que han experimentado nuestros servicios y han logrado sus objetivos.",
        items: [
          {
            name: "María G.",
            role: "Paciente de Terapia Virtual",
            content:
              "El servicio de terapia virtual ha sido una experiencia transformadora. La flexibilidad y profesionalismo del equipo superaron mis expectativas.",
          },
          {
            name: "Carlos R.",
            role: "Cliente de Evaluación Psicológica",
            content:
              "El proceso de evaluación fue muy profesional y detallado. El informe final fue de gran ayuda para mi caso legal.",
          },
          {
            name: "Ana P.",
            role: "Estudiante de Orientación Vocacional",
            content:
              "La orientación vocacional me ayudó a tomar una decisión informada sobre mi carrera. Estoy muy agradecida por el apoyo recibido.",
          },
        ],
      },
      cta: {
        title: "¿Listo para comenzar tu proceso?",
        subtitle: "Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos.",
      },
    },
    aboutPage: {
      hero: {
        title: "Sobre ID Therapy",
        subtitle: "Servicios psicológicos profesionales con enfoque en la precisión y la confianza",
      },
      mission: {
        title: "Nuestra Misión",
        description:
          "En ID Therapy, estamos comprometidos a brindar servicios psicológicos de alta calidad que empoderen a las personas a superar desafíos, lograr crecimiento personal y mejorar su bienestar general. Nuestro enfoque combina el rigor científico con la comprensión empática, asegurando que cada cliente reciba atención personalizada adaptada a sus necesidades únicas.",
      },
      team: {
        title: "Nuestro Equipo",
        description:
          "Nuestro equipo de profesionales certificados aporta años de experiencia y educación continua para brindar la mejor atención posible.",
      },
      values: {
        title: "Nuestros Valores",
        items: [
          {
            title: "Excelencia",
            description:
              "Nos esforzamos por la excelencia en todos los aspectos de nuestro trabajo, desde las interacciones con los clientes hasta las técnicas terapéuticas.",
          },
          {
            title: "Empatía",
            description:
              "Abordamos a cada cliente con un cuidado y comprensión genuinos, creando un entorno seguro y de apoyo.",
          },
          {
            title: "Integridad",
            description:
              "Mantenemos los más altos estándares éticos, asegurando la confidencialidad y la confianza en todas nuestras relaciones profesionales.",
          },
          {
            title: "Innovación",
            description:
              "Buscamos continuamente mejorar e innovar nuestros servicios, incorporando las últimas investigaciones y tecnologías.",
          },
        ],
      },
      stats: {
        title: "Nuestro Impacto",
        items: [
          { value: "15+", label: "Años de Experiencia" },
          { value: "500+", label: "Clientes Atendidos" },
          { value: "95%", label: "Satisfacción del Cliente" },
          { value: "24/7", label: "Soporte Disponible" },
        ],
      },
      cta: {
        title: "¿Listo para Comenzar tu Proceso?",
        subtitle: "Agenda una consulta y descubre cómo podemos ayudarte a alcanzar tus objetivos.",
      },
    },
    blog: {
      title: "Blog y Recursos",
      subtitle: "Explora nuestros artículos sobre psicología, bienestar mental y desarrollo personal.",
      categories: {
        all: "Todos",
        therapy: "Terapia",
        wellbeing: "Bienestar",
        legal: "Legal",
        development: "Desarrollo",
        work: "Laboral",
      },
      readMore: "Leer más",
      backToBlog: "Volver al blog",
      share: "Compartir artículo",
      notFound: {
        title: "Post no encontrado",
        description: "El artículo que buscas no existe o ha sido movido.",
      },
      shareSuccess: "¡Enlace copiado al portapapeles!",
      shareError: "No se pudo compartir el artículo",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About Us",
      contact: "Contact",
      blog: "Blog",
    },
    hero: {
      schedule: "SCHEDULE FOR",
      open: "OPEN",
      title: "Your space for psychological well-being.",
      subtitle: "We provide therapy and psychological evaluations tailored to your needs, no matter where you are.",
      cta: "Schedule appointment",
    },
    about: {
      title: "Professional psychological services with a focus on precision and trust",
      description:
        "Our approach combines scientific rigor with empathetic understanding, providing both therapeutic support and expert psychological evaluations. Whether you're seeking personal growth or require professional assessment, our team ensures the highest standards of care.",
      stats: {
        years: "Years of Experience",
        cases: "Cases Handled",
      },
      features: {
        legal: "Legal Expertise",
        confidentiality: "Confidentiality",
        certified: "Certified Professionals",
        global: "Global Access",
      },
    },
    services: {
      title: "Comprehensive psychological services for every need",
      description:
        "From virtual therapy sessions to expert psychological evaluations, our services are designed to provide professional support across all areas.",
      items: {
        virtual: {
          title: "Virtual Therapy",
          description: "Professional psychological support from anywhere in the world.",
        },
        inPerson: {
          title: "In-Person Therapy",
          description: "Face-to-face sessions in our Jujuy office.",
        },
        evaluations: {
          title: "Psychological Evaluations",
          description: "Expert assessments for legal and professional purposes.",
        },
        diagnostics: {
          title: "Psychodiagnostics",
          description: "Comprehensive clinical and occupational reports.",
        },
        career: {
          title: "Career Guidance",
          description: "Professional guidance for your career development.",
        },
        legal: {
          title: "Legal Consulting",
          description: "Specialized support for law firms and attorneys.",
        },
      },
    },
    contact: {
      title: "Get in Touch",
      description: "We're here to help. Reach out to us for any questions or to schedule an appointment.",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        submit: "Send Message",
      },
      info: {
        title: "Contact Information",
      },
    },
    footer: {
      company: "Company",
      resources: "Resources",
      about: "About us",
      services: "Services",
      works: "Works",
      blog: "Blog",
      contact: "Contact us",
      privacy: "Privacy Policy",
      terms: "Terms of service",
      rights: "All rights reserved.",
      description: "Professional psychological services with a focus on precision and trust.",
    },
    faq: {
      title: "Frequently asked questions",
      subtitle: "Can't find what you're looking for?",
      contact: "Contact us",
      booking: {
        question: "How can I schedule a consultation?",
        answer:
          "You can schedule a consultation through our WhatsApp button, available 24/7. We'll respond within 24 hours to coordinate the best time for you.",
      },
      online: {
        question: "Do you offer online therapy?",
        answer:
          "Yes, we offer online therapy sessions through secure and confidential platforms. This allows you to access our services from anywhere in the world.",
      },
      duration: {
        question: "How long is each session?",
        answer: "Sessions last 50 minutes, which is the optimal recommended time for the therapeutic process.",
      },
      payment: {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank transfers, credit/debit cards, and cash. For online sessions, payment is made before the consultation.",
      },
      confidentiality: {
        question: "Are the sessions confidential?",
        answer:
          "Absolutely. We maintain the highest standards of professional confidentiality, protecting your privacy according to current regulations.",
      },
    },
    common: {
      learnMore: "Learn more",
    },
    whyChooseUs: {
      title: "Why choose us",
      slides: {
        professional: {
          title: "Professional Excellence",
          description: "Our team brings years of experience and continuous education to provide the best care.",
        },
        personalized: {
          title: "Personalized Approach",
          description: "Every individual is unique, and so is our approach to their mental health journey.",
        },
        global: {
          title: "Global Accessibility",
          description: "Access professional psychological support from anywhere in the world.",
        },
        results: {
          title: "Proven Results",
          description: "Our methods are backed by research and proven through successful outcomes.",
        },
      },
    },
    videoSection: {
      title: "Our Story",
      description:
        "Learn about our journey and commitment to providing exceptional psychological care and expert witness services.",
    },
    servicesPage: {
      hero: {
        title: "Professional Psychological Services",
        subtitle:
          "We offer a complete range of psychological services tailored to your needs, with a professional and human approach.",
      },
      cta: {
        title: "Ready to start your process?",
        subtitle: "Schedule a free consultation and discover how we can help you achieve your goals.",
      },
      services: [
        {
          title: "Virtual Therapy",
          description:
            "We offer online therapy sessions accessible from anywhere in the world, maintaining the same quality and professionalism as face-to-face sessions.",
          features: [
            "Flexible sessions adapted to your schedule",
            "Secure and confidential platform",
            "Personalized follow-up between sessions",
            "Access from any device",
          ],
        },
        {
          title: "Psychological Evaluations",
          description:
            "We conduct comprehensive psychological evaluations using validated methods and professional tools to provide detailed and accurate reports.",
          features: [
            "Cognitive and personality assessments",
            "Detailed reports with legal validity",
            "Updated and validated methodology",
            "Optimal turnaround time",
          ],
        },
        {
          title: "Career Guidance",
          description:
            "We help identify the most suitable professional path through a structured process of evaluation and personalized guidance.",
          features: [
            "Specialized vocational tests",
            "Analysis of skills and preferences",
            "Personalized development plan",
            "Post-guidance follow-up",
          ],
        },
      ],
      benefits: {
        title: "Benefits of Our Services",
        subtitle:
          "We offer a comprehensive service that combines professional expertise with a human and close approach.",
        items: [
          {
            title: "Specialized Experience",
            description: "Years of experience in clinical psychology and psychological evaluation.",
          },
          {
            title: "Personalized Attention",
            description: "Individualized approach adapted to each client's specific needs.",
          },
          {
            title: "Professional Team",
            description: "Certified professionals with continuous training and constant updates.",
          },
          {
            title: "Total Confidentiality",
            description: "We guarantee the privacy and security of all shared information.",
          },
        ],
      },
      testimonials: {
        title: "What Our Clients Say",
        subtitle: "Testimonials from people who have experienced our services and achieved their goals.",
        items: [
          {
            name: "Maria G.",
            role: "Virtual Therapy Patient",
            content:
              "The virtual therapy service has been a transformative experience. The team's flexibility and professionalism exceeded my expectations.",
          },
          {
            name: "Carlos R.",
            role: "Psychological Evaluation Client",
            content:
              "The evaluation process was very professional and detailed. The final report was very helpful for my legal case.",
          },
          {
            name: "Ana P.",
            role: "Career Guidance Student",
            content:
              "Career guidance helped me make an informed decision about my career. I am very grateful for the support received.",
          },
        ],
      },
      cta: {
        title: "Ready to start your process?",
        subtitle: "Schedule a free consultation and discover how we can help you achieve your goals.",
      },
    },
    aboutPage: {
      hero: {
        title: "About ID Therapy",
        subtitle: "Professional psychological services with a focus on precision and trust",
      },
      mission: {
        title: "Our Mission",
        description:
          "At ID Therapy, we are committed to providing high-quality psychological services that empower individuals to overcome challenges, achieve personal growth, and improve their overall well-being. Our approach combines scientific rigor with empathetic understanding, ensuring that each client receives personalized care tailored to their unique needs.",
      },
      team: {
        title: "Our Team",
        description:
          "Our team of certified professionals brings years of experience and continuous education to provide the best care possible.",
      },
      values: {
        title: "Our Values",
        items: [
          {
            title: "Excellence",
            description:
              "We strive for excellence in all aspects of our work, from client interactions to therapeutic techniques.",
          },
          {
            title: "Empathy",
            description:
              "We approach each client with genuine care and understanding, creating a safe and supportive environment.",
          },
          {
            title: "Integrity",
            description:
              "We uphold the highest ethical standards, ensuring confidentiality and trust in all professional relationships.",
          },
          {
            title: "Innovation",
            description:
              "We continuously seek to improve and innovate our services, incorporating the latest research and technologies.",
          },
        ],
      },
      stats: {
        title: "Our Impact",
        items: [
          { value: "15+", label: "Years of Experience" },
          { value: "500+", label: "Clients Served" },
          { value: "95%", label: "Client Satisfaction" },
          { value: "24/7", label: "Support Available" },
        ],
      },
      cta: {
        title: "Ready to Start Your Journey?",
        subtitle: "Schedule a consultation and discover how we can help you achieve your goals.",
      },
    },
    blog: {
      title: "Blog & Resources",
      subtitle: "Explore our articles about psychology, mental well-being, and personal development.",
      categories: {
        all: "All",
        therapy: "Therapy",
        wellbeing: "Well-being",
        legal: "Legal",
        development: "Development",
        work: "Work",
      },
      readMore: "Read more",
      backToBlog: "Back to blog",
      share: "Share article",
      notFound: {
        title: "Post not found",
        description: "The article you're looking for doesn't exist or has been moved.",
      },
      shareSuccess: "Link copied to clipboard!",
      shareError: "Couldn't share the article",
    },
  },
}

export type TranslationKey = keyof typeof translations.en

// Create a type-safe context
type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useTranslations() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useTranslations must be used within a LanguageProvider")
  }
  return context
}

export function getTranslation(language: Language, key: string): string {
  const keys = key.split(".")
  let value: any = translations[language]

  for (const k of keys) {
    if (value === undefined) return key
    value = value[k]
  }

  return value || key
}

