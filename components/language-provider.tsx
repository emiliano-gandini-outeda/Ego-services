"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

// English translations
const en = {
  nav: {
    home: "Home",
    products: "Products",
    about: "About",
    contact: "Contact",
    legal: "Legal",
  },
  hero: {
    title: "Custom Tools for Business Growth",
    subtitle:
      "Providing optimization tools and solutions to help organizations grow and manage their operations efficiently. We specialize in both small to medium businesses and open source projects.",
    cta: "Get Started Today",
    demo: "Contact us now",
  },
  products: {
    title: "Our Products",
    devbot: {
      title: "devBot",
      tagline: "Advanced Discord Community Management Solution",
      description:
        "A comprehensive Discord bot specifically designed for open source communities, developer teams, and project maintainers. devBot streamlines community management through intelligent automation, advanced ticketing systems, and powerful productivity tools that scale with community growth.",
      features: [
        "Advanced ticket system with privacy controls",
        "Workflow automation and custom responses",
        "GitHub integration for project management",
        "Meeting scheduler and event coordination",
        "Conversation management tools",
        "Privacy & security focused",
      ],
      upcoming: [
        "AI-Powered Features",
        "Google Calendar Integration",
        "Notion Integration",
        "Trello Integration",
        "Advanced Analytics",
        "API & Webhooks",
      ],
      cta: "Learn More About devBot",
    },
    insightgrid: {
      title: "InsightGrid",
      tagline: "Custom Data Treatment & Linking Solutions",
      description:
        "A powerful web application platform designed to host custom data treatment and linking tools tailored specifically for each client's unique needs. InsightGrid transforms raw data into actionable insights through intelligent processing, advanced analytics, and seamless data integration capabilities.",
      features: [
        "Custom data processing pipelines",
        "Advanced data linking and relationship mapping",
        "Real-time data transformation tools",
        "Interactive data visualization dashboards",
        "Multi-format data import/export",
        "Custom algorithm implementation",
      ],
      cta: "Learn More About InsightGrid",
    },
  },
  about: {
    title: "About EGOS",
    mission: "Our Mission",
    missionText:
      "At Eclipse Growth Optimization Services, we're dedicated to providing optimization tools and solutions that help organizations grow and manage their operations efficiently. We understand the unique challenges faced by small to medium businesses and open source projects, and we're committed to delivering tailored solutions that scale with your needs.",
    values: "Our Values",
    valuesItems: [
      "Customer-focused solutions",
      "Technical excellence",
      "Continuous improvement",
      "Transparency and trust",
      "Open source contribution",
      "Sustainable innovation",
    ],
    why: "Why Choose EGOS",
    whyItems: [
      "Customized solutions for your specific needs",
      "Scalable tools that grow with your organization",
      "Expert support and guidance",
      "Proven experience with small-medium businesses",
    ],
  },
  contact: {
    title: "Contact Us",
    subtitle: "Ready to optimize your operations? Get in touch with us today.",
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send Message",
    success: "Message sent successfully! We'll get back to you soon.",
    error: "There was an error sending your message. Please try again.",
    missingFields: "Please fill in all required fields.",
    formError: "There was a problem with your form submission. Please try again.",
    sending: "Sending...",
    info: "Business Information",
    social: "Connect With Us",
    formTitle: "Get in Touch",
    formDescription: "Fill out the form below and we'll get back to you as soon as possible.",
    namePlaceholder: "John Doe",
    emailPlaceholder: "john@example.com",
    messagePlaceholder: "How can we help you?",
  },
  footer: {
    rights: "All rights reserved",
    products: "Products",
    company: "Company",
    legal: "Legal",
    terms: "Terms",
    privacy: "Privacy",
    description:
      "Eclipse Growth Optimization Services (EGOS) provides custom tools for small to medium businesses and open source projects. Visit us at ego-services.com",
  },
  cta: {
    demo: "Contact us now",
    contact: "Contact Us for Custom Solutions",
    consultation: "Schedule a Consultation",
  },
  legal: {
    title: "Legal Information",
    termsTitle: "Terms of Service",
    privacyTitle: "Privacy Policy",
    lastUpdated: "Last Updated",
  },
  devbot: {
    features: "Core Features",
    upcomingFeatures: "Coming Soon",
    useCases: "Perfect For",
    useCasesItems: [
      {
        title: "Open Source Projects",
        description: "GitHub integration, contributor management, and issue tracking automation.",
      },
      {
        title: "Developer Communities",
        description: "Code review coordination, technical discussions, and knowledge sharing.",
      },
      {
        title: "Educational Servers",
        description: "Assignment reminders, study groups, and academic project coordination.",
      },
      {
        title: "Team Collaboration",
        description: "Internal project management, meeting coordination, and workflow automation.",
      },
    ],
    cta: "Ready to Transform Your Community Management?",
    ctaDescription:
      "Join the growing number of communities using devBot to streamline their operations and enhance member engagement.",
    getStarted: "Get Started Today",
    viewOnGitHub: "View on GitHub",
  },
}

// Spanish translations
const es = {
  nav: {
    home: "Inicio",
    products: "Productos",
    about: "Nosotros",
    contact: "Contacto",
    legal: "Legal",
  },
  hero: {
    title: "Herramientas Personalizadas para Crecimiento Empresarial",
    subtitle:
      "Proporcionamos herramientas y soluciones de optimización para ayudar a las organizaciones a crecer y gestionar sus operaciones de manera eficiente. Nos especializamos tanto en pequeñas y medianas empresas como en proyectos de código abierto.",
    cta: "Comienza Hoy",
    demo: "Contáctanos ahora",
  },
  products: {
    title: "Nuestros Productos",
    devbot: {
      title: "devBot",
      tagline: "Solución Avanzada de Gestión de Comunidades en Discord",
      description:
        "Un bot de Discord completo diseñado específicamente para comunidades de código abierto, equipos de desarrolladores y mantenedores de proyectos. devBot agiliza la gestión de la comunidad a través de automatización inteligente, sistemas avanzados de tickets y potentes herramientas de productividad que escalan con el crecimiento de la comunidad.",
      features: [
        "Sistema avanzado de tickets con controles de privacidad",
        "Automatización de flujos de trabajo y respuestas personalizadas",
        "Integración con GitHub para gestión de proyectos",
        "Programador de reuniones y coordinación de eventos",
        "Herramientas de gestión de conversaciones",
        "Enfocado en privacidad y seguridad",
      ],
      upcoming: [
        "Funciones impulsadas por IA",
        "Integración con Google Calendar",
        "Integración con Notion",
        "Integración con Trello",
        "Análisis avanzados",
        "API y Webhooks",
      ],
      cta: "Más Información Sobre devBot",
    },
    insightgrid: {
      title: "InsightGrid",
      tagline: "Soluciones Personalizadas de Tratamiento y Vinculación de Datos",
      description:
        "Una potente plataforma de aplicaciones web diseñada para alojar herramientas personalizadas de tratamiento y vinculación de datos adaptadas específicamente a las necesidades únicas de cada cliente. InsightGrid transforma datos sin procesar en información procesable mediante procesamiento inteligente, análisis avanzados y capacidades de integración de datos perfectas.",
      features: [
        "Canalizaciones personalizadas de procesamiento de datos",
        "Mapeo avanzado de vínculos y relaciones de datos",
        "Herramientas de transformación de datos en tiempo real",
        "Paneles interactivos de visualización de datos",
        "Importación/exportación de datos en múltiples formatos",
        "Implementación de algoritmos personalizados",
        "Evaluación automatizada de calidad de datos",
        "Implementación segura en la nube y en las instalaciones",
      ],
      cta: "Más Información Sobre InsightGrid",
    },
  },
  about: {
    title: "Sobre EGOS",
    mission: "Nuestra Misión",
    missionText:
      "En Eclipse Growth Optimization Services, nos dedicamos a proporcionar herramientas y soluciones de optimización que ayudan a las organizaciones a crecer y gestionar sus operaciones de manera eficiente. Entendemos los desafíos únicos que enfrentan las pequeñas y medianas empresas y los proyectos de código abierto, y estamos comprometidos a ofrecer soluciones personalizadas que escalan con sus necesidades.",
    values: "Nuestros Valores",
    valuesItems: [
      "Soluciones centradas en el cliente",
      "Excelencia técnica",
      "Mejora continua",
      "Transparencia y confianza",
      "Contribución al código abierto",
      "Innovación sostenible",
    ],
    why: "Por Qué Elegir EGOS",
    whyItems: [
      "Soluciones personalizadas para sus necesidades específicas",
      "Herramientas escalables que crecen con su organización",
      "Soporte y orientación de expertos",
      "Experiencia probada con pequeñas y medianas empresas",
    ],
  },
  contact: {
    title: "Contáctanos",
    subtitle: "¿Listo para optimizar sus operaciones? Póngase en contacto con nosotros hoy.",
    name: "Nombre",
    email: "Correo Electrónico",
    message: "Mensaje",
    submit: "Enviar Mensaje",
    success: "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.",
    error: "Hubo un error al enviar su mensaje. Por favor, inténtelo de nuevo.",
    missingFields: "Por favor complete todos los campos requeridos.",
    formError: "Hubo un problema con el envío del formulario. Por favor, inténtelo de nuevo.",
    sending: "Enviando...",
    info: "Información Comercial",
    social: "Conéctese Con Nosotros",
    formTitle: "Ponte en Contacto",
    formDescription: "Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.",
    namePlaceholder: "Juan Pérez",
    emailPlaceholder: "juan@ejemplo.com",
    messagePlaceholder: "¿Cómo podemos ayudarte?",
    why: "Por Qué Elegir EGOS",
    whyItems: [
      "Soluciones personalizadas para sus necesidades específicas",
      "Herramientas escalables que crecen con su organización",
      "Soporte y orientación de expertos",
      "Experiencia probada con pequeñas y medianas empresas",
    ],
  },
  footer: {
    rights: "Todos los derechos reservados",
    products: "Productos",
    company: "Empresa",
    legal: "Legal",
    terms: "Términos",
    privacy: "Privacidad",
    description:
      "Eclipse Growth Optimization Services (EGOS) proporciona herramientas personalizadas para pequeñas y medianas empresas y proyectos de código abierto. Visítenos en ego-services.com",
  },
  cta: {
    demo: "Contáctanos ahora",
    contact: "Contáctenos para Soluciones Personalizadas",
    consultation: "Programar una Consulta",
  },
  legal: {
    title: "Información Legal",
    termsTitle: "Términos de Servicio",
    privacyTitle: "Política de Privacidad",
    lastUpdated: "Última Actualización",
  },
  devbot: {
    features: "Características Principales",
    upcomingFeatures: "Próximamente",
    useCases: "Perfecto Para",
    useCasesItems: [
      {
        title: "Proyectos de Código Abierto",
        description: "Integración con GitHub, gestión de colaboradores y automatización de seguimiento de problemas.",
      },
      {
        title: "Comunidades de Desarrolladores",
        description: "Coordinación de revisión de código, discusiones técnicas y compartición de conocimientos.",
      },
      {
        title: "Servidores Educativos",
        description: "Recordatorios de tareas, grupos de estudio y coordinación de proyectos académicos.",
      },
      {
        title: "Colaboración en Equipo",
        description: "Gestión de proyectos internos, coordinación de reuniones y automatización de flujos de trabajo.",
      },
    ],
    cta: "¿Listo para Transformar la Gestión de tu Comunidad?",
    ctaDescription:
      "Únete al creciente número de comunidades que utilizan devBot para optimizar sus operaciones y mejorar la participación de los miembros.",
    getStarted: "Comienza Hoy",
    viewOnGitHub: "Ver en GitHub",
  },
  insightgrid: {
    features: "Características Poderosas",
    benefits: "Beneficios Clave",
    benefitsItems: [
      "Transformar datos sin procesar en información empresarial procesable",
      "Reducir el tiempo de procesamiento manual de datos hasta en un 90%",
      "Mejorar la precisión y consistencia de los datos en todos los sistemas",
      "Escalar operaciones de datos a medida que crece su negocio",
      "Integrar con herramientas y flujos de trabajo existentes",
      "Garantizar el cumplimiento de los estándares de gobernanza de datos",
    ],
    useCases: "Casos de Uso",
    useCasesItems: [
      {
        title: "Inteligencia Empresarial",
        description: "Crear soluciones completas de BI con capacidades personalizadas de análisis e informes.",
      },
      {
        title: "Integración de Datos",
        description: "Conectar fuentes de datos dispares y crear vistas unificadas de sus datos empresariales.",
      },
      {
        title: "Automatización de Procesos",
        description:
          "Automatizar flujos de trabajo de datos complejos y reducir la intervención manual en operaciones de datos.",
      },
      {
        title: "Análisis Personalizados",
        description:
          "Desarrollar herramientas de análisis especializadas que aborden sus desafíos empresariales únicos.",
      },
    ],
    cta: "¿Listo para Transformar sus Operaciones de Datos?",
    ctaDescription:
      "Permítanos crear una solución InsightGrid personalizada adaptada a sus desafíos de datos específicos y requisitos empresariales.",
    requestSolution: "Solicitar Solución Personalizada",
  },
}

type Translations = typeof en
type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
  children,
  defaultLanguage = "en",
}: {
  children: ReactNode
  defaultLanguage?: Language
}) {
  const [language, setLanguage] = useState<Language>(defaultLanguage)

  const translations = {
    en,
    es,
  }

  const t = (key: string) => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value === undefined) return key
      value = value[k]
    }

    return value || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useTranslation = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }
  return context
}
