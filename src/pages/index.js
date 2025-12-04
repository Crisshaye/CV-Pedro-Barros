import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Mail, Phone, MapPin, Truck, Target, Calendar, Award, Mountain, Users, Globe, Package } from "lucide-react"

const IndexPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* HEADER */}
        <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-10 text-center relative">
          <div className="absolute top-6 right-6 bg-yellow-400 text-black font-bold px-5 py-2 rounded-full text-sm">
            Disponible
          </div>
          <StaticImage
            src="../images/foto_principal.jpg"
            alt="Pedro Barros"
            width={160}
            height={160}
            className="rounded-full ring-8 ring-white/30 mx-auto mb-6"
            placeholder="blurred"
          />
          <h1 className="text-4xl md:text-5xl font-black mb-2">Pedro Barros Correa</h1>
          <p className="text-xl md:text-2xl opacity-90">Jefe de Transporte y Distribución</p>
          <div className="flex justify-center gap-8 mt-6 text-lg">
            <a href="mailto:pbarroscorrea@gmail.com" className="flex items-center gap-2 hover:scale-110 transition">
              <Mail className="w-5 h-5" /> pbarroscorrea@gmail.com
            </a>
            <a href="tel:+56977297414" className="flex items-center gap-2 hover:scale-110 transition">
              <Phone className="w-5 h-5" /> +56 9 7729 7414
            </a>
            <div className="flex items-center gap-2 opacity-90">
              <MapPin className="w-5 h-5" /> Santiago, Chile
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8 p-10">
          {/* COLUMNA IZQUIERDA - EXPERIENCIA RECIENTE */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Truck className="w-7 h-7 text-blue-700" /> Experiencia Clave
            </h2>
            <div className="space-y-5 text-sm">
              <div>
                <p className="font-bold text-gray-900">Jefe de Transporte y Distribución RM</p>
                <p className="text-blue-700">Chilexpress · may 2024 – Presente</p>
                <p className="text-gray-600 text-xs mt-1">Gestión flota, KPI, S&OP, presupuesto anual</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Jefe Productos Courier Internacional</p>
                <p className="text-blue-700">Chilexpress · 2023 – 2024</p>
                <p className="text-gray-600 text-xs mt-1">Cross Border Latam, Fulfillment Miami, productos bancarios</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Jefe Ingeniería y Mejora Continua</p>
                <p className="text-blue-700">Chilexpress · 2021 – 2023</p>
              </div>
            </div>
          </section>

          {/* COLUMNA CENTRAL - FORMACIÓN Y CERTIFICACIONES */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Award className="w-7 h-7 text-indigo-700" /> Formación
            </h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-bold text-gray-900">Ingeniero Civil Industrial</p>
                <p className="text-indigo-700">U. Técnica Federico Santa María</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Ingeniero Mecánico</p>
                <p className="text-indigo-700">INACAP</p>
              </div>
              <div className="pt-4">
                <p className="font-bold text-gray-900 text-xs uppercase tracking-wider">Certificaciones LinkedIn 2025</p>
                <p className="text-gray-600 text-xs">Fundamentos de Logística • Liderazgo y Trabajo en Equipo</p>
              </div>
            </div>
          </section>

          {/* COLUMNA DERECHA - COMPETENCIAS */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Target className="w-7 h-7 text-purple-700" /> Competencias Clave
            </h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {["Gestión de Flotas", "KPI & SLA", "S&OP / Forecast", "Cross Border", "Mejora Continua", "Presupuestos", "Negociación", "Liderazgo de Equipos", "Aduanas", "P&L"].map(skill => (
                <span key={skill} className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-3 py-2 rounded-full text-xs font-medium text-center">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* FOOTER PERSONAL + CTA */}
        <footer className="bg-gray-900 text-white p-8 text-center">
          <div className="flex justify-center gap-12 text-5xl mb-4">
            <Mountain className="hover:animate-bounce transition" />
            <Users className="hover:animate-pulse transition" />
          </div>
          <p className="text-lg mb-6 italic">
            Papá y ciclista apasionado. Si no estoy optimizando rutas, estoy con mis hijos o en el cerro.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:pbarroscorrea@gmail.com" className="bg-white text-blue-700 font-bold py-4 px-10 rounded-full hover:scale-105 transition shadow-xl">
              Enviar Correo
            </a>
            <a href="https://wa.me/56977297414" className="bg-green-500 text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition shadow-xl">
              WhatsApp +56 9 7729 7414
            </a>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Pedro Barros Correa - Jefe de Transporte y Logística</title>
    <meta name="description" content="Jefe de Transporte RM en Chilexpress. +10 años en logística, flotas y supply chain. Ingeniero Civil Industrial USM." />
  </>
)