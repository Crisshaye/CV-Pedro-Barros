import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { 
  Mail, Phone, MapPin, Calendar, Truck, Target, Users, Mountain, 
  Briefcase, Award, TrendingUp, Package, Globe
} from "lucide-react"

const IndexPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
              Pedro Barros Correa
            </h1>
            <p className="text-2xl md:text-4xl font-light mb-8 opacity-90">
              Jefe de Transporte y Distribución | Logística & Supply Chain
            </p>

            <div className="flex flex-wrap gap-6 justify-center md:justify-start text-lg mb-10">
              <a href="mailto:pbarroscorrea@gmail.com" className="flex items-center gap-3 hover:scale-105 transition">
                <Mail className="w-6 h-6" /> pbarroscorrea@gmail.com
              </a>
              <a href="tel:+56977297414" className="flex items-center gap-3 hover:scale-105 transition">
                <Phone className="w-6 h-6" /> +56 9 7729 7414
              </a>
              <div className="flex items-center gap-3 opacity-90">
                <MapPin className="w-6 h-6" /> Santiago, Chile
              </div>
            </div>

            <p className="text-xl italic opacity-90 max-w-2xl mx-auto md:mx-0">
              "Cuando no estoy optimizando rutas o liderando equipos, estoy con mis hijos o pedaleando en el cerro."
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="ring-12 ring-white/40 rounded-full overflow-hidden shadow-2xl">
              <StaticImage
                src="../images/foto_principal.jpg"
                alt="Pedro Barros Correa"
                width={420}
                height={420}
                className="rounded-full"
                placeholder="blurred"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black font-bold px-8 py-4 rounded-full text-xl shadow-2xl">
              Disponible
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-black text-center mb-16 text-gray-900">
          Experiencia Profesional
        </h2>

        <div className="space-y-12">
          {/* Chilexpress - Actual */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-blue-700 hover:shadow-2xl transition">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Jefe de Transporte, Distribución Primera y Última Milla RM</h3>
                <p className="text-2xl text-blue-700 font-semibold">Chilexpress</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <p className="text-lg font-medium flex items-center gap-2"><Calendar className="w-5 h-5" /> may. 2024 – nov. 2024 · 1 año 3 meses</p>
                <p className="text-gray-600">Pudahuel, Región Metropolitana</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start gap-3"><Truck className="w-6 h-6 text-blue-700 mt-1" /> Administración de contratos de flota y dimensionamiento según forecast y S&OP</li>
              <li className="flex items-start gap-3"><Target className="w-6 h-6 text-blue-700 mt-1" /> Gestión por KPIs: SLA, efectividad, CMU, ventanas horarias</li>
              <li className="flex items-start gap-3"><TrendingUp className="w-6 h-6 text-blue-700 mt-1" /> Optimización de modelos operativos y planificación presupuestaria</li>
            </ul>
          </div>

          {/* Chilexpress - Productos Internacionales */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-indigo-600">
            <h3 className="text-3xl font-bold text-gray-900">Jefe de Productos y Servicios Courier Internacional</h3>
            <p className="text-2xl text-indigo-600 font-semibold">Chilexpress · oct. 2023 – abr. 2024</p>
            <ul className="mt-4 space-y-3 text-gray-700 text-lg">
              <li className="flex items-start gap-3"><Globe className="w-6 h-6 text-indigo-600 mt-1" /> Habilitación Cross Border Trade Latam (Perú, Colombia, Ecuador)</li>
              <li className="flex items-start gap-3"><Package className="w-6 h-6 text-indigo-600 mt-1" /> Fulfillment HUB Miami y distribución productos bancarios valorados</li>
              <li className="flex items-start gap-3"><Briefcase className="w-6 h-6 text-indigo-600 mt-1" /> Product Owner cuentas internacionales y cierre técnico-operativo</li>
            </ul>
          </div>

          {/* Chilexpress - Ingeniería */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-purple-600">
            <h3 className="text-3xl font-bold text-gray-900">Jefe de Ingeniería y Mejora Continua Courier Internacional</h3>
            <p className="text-2xl text-purple-600 font-semibold">Chilexpress · mar. 2021 – oct. 2023</p>
            <ul className="mt-4 space-y-3 text-gray-700 text-lg">
              <li>Diseño e implementación de nuevos proyectos y negocios</li>
              <li>Optimización de procesos y desarrollo de cadenas logísticas 3PL</li>
              <li>Gestión aduanera y comercio internacional Courier</li>
            </ul>
          </div>

          {/* Disal + Montenbaik */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-green-600">
              <h3 className="text-2xl font-bold text-gray-900">Jefe de Operaciones Sanitarios Portables RM</h3>
              <p className="text-xl text-green-600 font-semibold">Disal Chile · 2018 – 2021</p>
              <p className="text-gray-700 mt-3">Responsable P&L unidad de negocio, flota propia y eventos</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-orange-600">
              <h3 className="text-2xl font-bold text-gray-900">Jefe de Operaciones Eventos</h3>
              <p className="text-xl text-orange-600 font-semibold">Montenbaik · 2015 – 2017</p>
              <p className="text-gray-700 mt-3">Ejecución EWS, Andes Pacífico y campeonato nacional MTB</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMACIÓN Y CERTIFICACIONES */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-black mb-10 text-gray-900">Formación</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900">Ingeniero Civil Industrial</h3>
                <p className="text-xl text-blue-700 font-semibold">Universidad Técnica Federico Santa María</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900">Ingeniero Mecánico</h3>
                <p className="text-xl text-blue-700 font-semibold">INACAP</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-black mb-10 text-gray-900">Certificaciones</h2>
            <div className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
              <div className="flex items-center gap-4">
                <Award className="w-12 h-12 text-yellow-600" />
                <div>
                  <p className="font-bold text-lg">Fundamentos de la Logística</p>
                  <p className="text-gray-600">LinkedIn · 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Award className="w-12 h-12 text-yellow-600" />
                <div>
                  <p className="font-bold text-lg">Liderazgo y Trabajo en Equipo</p>
                  <p className="text-gray-600">LinkedIn · 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOQUE PERSONAL */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-center gap-20 text-8xl mb-10">
            <Mountain className="hover:animate-bounce transition" />
            <Users className="hover:animate-pulse transition" />
          </div>
          <p className="text-3xl md:text-4xl font-light leading-relaxed">
            Papá full-time y ciclista apasionado.<br />
            Si no estoy optimizando rutas, estoy en el cerro o jugando con mis hijos.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-700 to-indigo-800 text-white text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-8">¿Conversamos?</h2>
        <p className="text-2xl mb-12 opacity-90">Estoy abierto a nuevos desafíos en logística, supply chain y operaciones</p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <a href="mailto:pbarroscorrea@gmail.com" className="bg-white text-blue-700 font-bold text-xl py-6 px-14 rounded-full hover:scale-105 transition shadow-2xl">
            Enviar correo
          </a>
          <a href="https://wa.me/56977297414" target="_blank" rel="noopener" className="bg-green-500 text-white font-bold text-xl py-6 px-14 rounded-full hover:scale-105 transition shadow-2xl">
            WhatsApp +56 9 7729 7414
          </a>
        </div>
      </section>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Pedro Barros Correa - Jefe de Transporte y Logística | Chilexpress</title>
    <meta name="description" content="Jefe de Transporte y Distribución en Chilexpress. +10 años liderando operaciones logísticas, flotas y proyectos internacionales. Ingeniero Civil Industrial USM." />
  </>
)