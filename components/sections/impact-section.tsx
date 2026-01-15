"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faShieldHalved, faLayerGroup, faCircleXmark } from "@fortawesome/free-solid-svg-icons"

const painPoints = [
  {
    icon: faClock,
    label: "Checkout lento",
    description: "Processos demorados que afastam compradores",
  },
  {
    icon: faShieldHalved,
    label: "Falta de confiança",
    description: "Páginas genéricas que não geram credibilidade",
  },
  {
    icon: faLayerGroup,
    label: "Muitas etapas",
    description: "Fluxos complexos que aumentam o atrito",
  },
  {
    icon: faCircleXmark,
    label: "Abandono no pagamento",
    description: "Vendas perdidas na última hora",
  },
]

export function ImpactSection() {
  return (
    <section className="px-4 md:px-6 py-16 md:py-24 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 mb-3 md:mb-4">
            Seu tráfego está caro.
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-lg mx-auto text-balance">
            Sua conversão precisa ser mais inteligente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-5 md:p-6 rounded-2xl bg-white border border-zinc-200 hover:border-red-200 hover:bg-red-50/30 transition-all duration-300 group text-center relative overflow-hidden shadow-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zinc-100 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-red-100 transition-colors">
                  <FontAwesomeIcon
                    icon={point.icon}
                    className="w-5 h-5 md:w-6 md:h-6 text-zinc-500 group-hover:text-red-500 transition-colors"
                  />
                </div>
                <p className="font-heading text-base md:text-lg font-semibold text-zinc-900 mb-2 group-hover:text-zinc-900 transition-colors">
                  {point.label}
                </p>
                <p className="text-xs md:text-sm text-zinc-500">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
