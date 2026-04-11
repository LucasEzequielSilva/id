"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, Check, Copy, Menu } from "lucide-react"
import { toast } from "sonner"

const colors = {
  primary: {
    name: "Primario",
    value: "#FEFEFE",
    hex: "#FEFEFE",
  },
  secondary: {
    name: "Secundario",
    value: "#0A0D12",
    hex: "#0A0D12",
  },
  accent: {
    name: "Acento",
    value: "#1C1C1C",
    hex: "#1C1C1C",
  },
  backgroundLight: {
    name: "Fondo Claro",
    value: "#FFFFFF",
    hex: "#FFFFFF",
  },
  backgroundDark: {
    name: "Fondo Oscuro",
    value: "#000000",
    hex: "#000000",
  },
  foreground: {
    name: "Texto",
    value: "#0A0A0A",
    hex: "#0A0A0A",
  },
}

const grays = {
  100: "#F5F5F5",
  200: "#E5E5E5",
  300: "#D4D4D4",
  400: "#A3A3A3",
  500: "#737373",
  600: "#525252",
  700: "#404040",
  800: "#262626",
  900: "#171717",
}

export default function BrandPage() {
  const [activeSection, setActiveSection] = useState("logo")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success("¡Copiado al portapapeles!")
    } catch (err) {
      toast.error("Error al copiar")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 border-b">
        <div className="flex items-center justify-between p-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%205-rSOsqsF4JJoHfJOQiKJ2fLeKdtsq3u.svg"
            alt="Centro ID Logo"
            className="h-8"
          />
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <nav
        className={`fixed top-0 left-0 h-screen bg-zinc-100 transition-transform duration-300 z-40
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:w-64 lg:p-8`}
      >
        <div className="mb-8 p-8 lg:p-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%205-rSOsqsF4JJoHfJOQiKJ2fLeKdtsq3u.svg"
            alt="Centro ID Logo"
            className="h-8 hidden lg:block"
          />
        </div>
        <ul className="space-y-2 px-4 lg:px-0">
          {[
            ["logo", "Logo"],
            ["colors", "Colores"],
            ["typography", "Tipografía"],
            ["iconography", "Iconografía"],
            ["spacing", "Espaciado"],
          ].map(([key, label]) => (
            <li key={key}>
              <button
                onClick={() => {
                  setActiveSection(key)
                  setIsSidebarOpen(false)
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === key ? "bg-white text-black" : "text-neutral-400 hover:bg-neutral-800"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/20 z-30 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <main className="lg:ml-64 p-4 lg:p-12 mt-16 lg:mt-0">
        <div className="max-w-4xl mx-auto">
          {/* Logo Section */}
          {activeSection === "logo" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl lg:text-4xl font-medium mb-6">Guía del Logo</h1>
              <p className="text-neutral-600 mb-12 text-base lg:text-lg">
                Nuestro logo representa nuestro compromiso con los servicios psicológicos profesionales. Debe utilizarse
                de manera consistente en todas las plataformas para mantener el reconocimiento de la marca.
              </p>

              <div className="space-y-12">
                {/* Logo Completo */}
                <div>
                  <h2 className="text-xl lg:text-2xl font-medium mb-6">Logo Completo</h2>
                  <p className="text-neutral-600 mb-6">
                    El logotipo principal debe utilizarse siempre que sea posible. La versión primaria es el logo blanco
                    con fondo negro.
                  </p>
                  <div className="grid gap-8">
                    <div className="p-6 lg:p-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%205-rSOsqsF4JJoHfJOQiKJ2fLeKdtsq3u.svg"
                        alt="Logo Completo - Versión Primaria"
                        className="h-8 lg:h-12"
                      />
                    </div>
                    <div className="p-6 lg:p-12 bg-black rounded-xl flex items-center justify-center">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%204-ux5AJhSTg7aZhJhiK0i4PPXSg58zkg.svg"
                        alt="Logo Completo - Versión Secundaria"
                        className="h-8 lg:h-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Isotipos */}
                <div>
                  <h2 className="text-xl lg:text-2xl font-medium mb-6">Isotipo</h2>
                  <p className="text-neutral-600 mb-6">
                    El isotipo puede utilizarse de forma independiente en espacios reducidos o cuando el logo completo
                    no sea apropiado. Al igual que el logotipo completo, la versión primaria es el isotipo blanco con
                    fondo negro.
                  </p>
                  <div className="grid gap-8">
                    <div className="p-6 lg:p-12 bg-white border border-neutral-200 rounded-xl flex items-center justify-center">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame-1-4vqEL9b6IPTJdEygrOFu6SQn0lFhFT.svg"
                        alt="Isotipo - Versión Primaria"
                        className="h-12 lg:h-16"
                      />
                    </div>
                    <div className="p-6 lg:p-12 bg-black rounded-xl flex items-center justify-center">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame-zj4p6Vh4CjMCjI2YX5YGHZHplajz4h.svg"
                        alt="Isotipo - Versión Secundaria"
                        className="h-12 lg:h-16"
                      />
                    </div>
                  </div>
                </div>

                {/* Área de protección y uso */}
                <div className="mb-12">
                  <h2 className="text-xl lg:text-2xl font-medium mb-6">Uso del Logo</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="font-medium">Hacer</h3>
                      <ul className="space-y-2">
                        {[
                          "Mantener el espacio mínimo alrededor del logo",
                          "Usar las variaciones de color aprobadas",
                          "Escalar proporcionalmente",
                          "Usar archivos de alta resolución",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-neutral-600">
                            <Check className="w-5 h-5 text-green-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-medium">No Hacer</h3>
                      <ul className="space-y-2">
                        {[
                          "Modificar los colores del logo",
                          "Distorsionar o estirar",
                          "Agregar efectos o sombras",
                          "Usar sobre fondos ocupados",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-neutral-600">
                            <div className="w-5 h-5 relative">
                              <div className="absolute inset-0 border-2 border-red-500 rounded-full" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-3 h-0.5 bg-red-500 rotate-45" />
                              </div>
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <a
                  href="https://drive.google.com/drive/folders/1agX033ixDPSpPBPFMuf3FRT307P3SiuJ?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black text-white px-4 lg:px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm lg:text-base">Descargar Paquete de Logo</span>
                </a>
              </div>
            </motion.div>
          )}

          {/* Colors Section */}
          {activeSection === "colors" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl lg:text-4xl font-medium mb-6">Sistema de Colores</h1>
              <p className="text-neutral-400 mb-12 text-base lg:text-lg">
                Nuestra paleta de colores está diseñada para reflejar profesionalismo, confianza y accesibilidad. Estos
                colores deben usarse consistentemente en todos los puntos de contacto de la marca.
              </p>

              <div className="space-y-12">
                {/* Primary Colors */}
                <div>
                  <h2 className="text-xl lg:text-2xl font-medium mb-6">Colores de Marca</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(colors).map(([key, color]) => (
                      <div key={key} className="space-y-4">
                        <div className="h-24 rounded-lg" style={{ backgroundColor: color.hex }} />
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-medium">{color.name}</h3>
                            <button
                              onClick={() => copyToClipboard(color.hex)}
                              className="text-neutral-500 hover:text-neutral-400"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-sm text-neutral-500">{color.hex}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grayscale */}
                <div className="overflow-x-auto">
                  <h2 className="text-xl lg:text-2xl font-medium mb-6">Escala de Grises</h2>
                  <div className="grid grid-cols-9 gap-2 min-w-[600px]">
                    {Object.entries(grays).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="h-20 rounded-lg mb-2" style={{ backgroundColor: value }} />
                        <p className="text-xs text-neutral-500">{key}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Typography Section */}
          {activeSection === "typography" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl lg:text-4xl font-medium mb-6">Tipografía</h1>
              <p className="text-neutral-400 mb-12 text-base lg:text-lg">
                Utilizamos DM Sans como nuestra tipografía principal. Su diseño moderno y limpio se alinea perfectamente
                con nuestros valores de marca y asegura una excelente legibilidad en todas las plataformas.
              </p>

              <div className="space-y-12">
                <div className="overflow-x-auto">
                  <h2 className="text-xl lg:text-2xl font-medium mb-6">Escala Tipográfica</h2>
                  <div className="space-y-8 min-w-[600px]">
                    <div>
                      <p className="text-7xl">Display</p>
                      <p className="text-neutral-500 mt-2">7xl / 4.5rem / 72px</p>
                    </div>
                    <div>
                      <p className="text-6xl">Título 1</p>
                      <p className="text-neutral-500 mt-2">6xl / 3.75rem / 60px</p>
                    </div>
                    <div>
                      <p className="text-5xl">Título 2</p>
                      <p className="text-neutral-500 mt-2">5xl / 3rem / 48px</p>
                    </div>
                    <div>
                      <p className="text-4xl">Título 3</p>
                      <p className="text-neutral-500 mt-2">4xl / 2.25rem / 36px</p>
                    </div>
                    <div>
                      <p className="text-2xl">Título 4</p>
                      <p className="text-neutral-500 mt-2">2xl / 1.5rem / 24px</p>
                    </div>
                    <div>
                      <p className="text-base">Cuerpo</p>
                      <p className="text-neutral-500 mt-2">base / 1rem / 16px</p>
                    </div>
                    <div>
                      <p className="text-sm">Pequeño</p>
                      <p className="text-neutral-500 mt-2">sm / 0.875rem / 14px</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-medium mb-6">Pesos</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="font-normal text-2xl">Regular 400</p>
                      <p className="text-neutral-500">Peso principal para texto de cuerpo</p>
                    </div>
                    <div>
                      <p className="font-medium text-2xl">Medium 500</p>
                      <p className="text-neutral-500">Usado para énfasis y subtítulos</p>
                    </div>
                    <div>
                      <p className="font-bold text-2xl">Bold 700</p>
                      <p className="text-neutral-500">Usado para títulos principales</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Spacing Section */}
          {activeSection === "spacing" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl lg:text-4xl font-medium mb-6">Sistema de Espaciado</h1>
              <p className="text-neutral-400 mb-12 text-base lg:text-lg">
                Nuestro sistema de espaciado está basado en una cuadrícula de 4px. Esto asegura un espaciado consistente
                en todos los componentes y diseños.
              </p>

              <div className="space-y-8">
                {[2, 4, 6, 8, 12, 16].map((space) => (
                  <div key={space} className="flex items-center gap-4">
                    <div className="w-24">
                      <div className={`h-8 bg-zinc-950 rounded-lg w-${space}`} />
                    </div>
                    <div>
                      <p className="font-medium">{space * 4}px</p>
                      <p className="text-sm text-neutral-500">w-{space}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Iconography Section */}
          {activeSection === "iconography" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl lg:text-4xl font-medium mb-6">Iconografía</h1>
              <p className="text-neutral-400 mb-12 text-base lg:text-lg">
                Utilizamos los íconos de Lucide en toda nuestra interfaz. Los íconos deben ser simples, consistentes y
                significativos.
              </p>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-xl lg:text-2xl font-medium mb-6">Tamaños de Íconos</h2>
                  <div className="space-y-8">
                    {[16, 20, 24, 32].map((size) => (
                      <div key={size} className="flex items-center gap-4">
                        <Download style={{ width: size, height: size }} className="text-black" />
                        <p className="text-neutral-400">{size}px</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl lg:text-2xl font-medium mb-6">Colores de Íconos</h2>
                  <div className="space-y-8">
                    {[
                      ["Primario", "primary"],
                      ["Secundario", "secondary"],
                      ["Acento", "accent"],
                    ].map(([label, key]) => (
                      <div key={label} className="flex items-center gap-4">
                        <Download className="w-6 h-6" style={{ color: colors[key as keyof typeof colors].value }} />
                        <p className="text-neutral-400">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  )
}

