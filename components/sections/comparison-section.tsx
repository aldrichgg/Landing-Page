"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"

const comparisons = [
  { common: "Processos longos", impulse: "Fluxo direto" },
  { common: "Interface genérica", impulse: "Design focado em conversão" },
  { common: "Taxas confusas", impulse: "Transparência total" },
  { common: "Pouca flexibilidade", impulse: "Estrutura modular" },
]

export function ComparisonSection() {
  return (
    <section id="vantagens" className="px-4 md:px-6 py-16 md:py-24 bg-zinc-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-xs md:text-sm font-medium text-emerald-600 uppercase tracking-wider mb-3 md:mb-4">
            Vantagens
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 mb-3 md:mb-4">
            Por que escolher a ImpulsePay
          </h2>
          <p className="text-sm md:text-base text-zinc-600 max-w-xl mx-auto text-balance px-2">
            Veja como nos diferenciamos das plataformas tradicionais.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-zinc-200 overflow-hidden bg-white shadow-sm"
        >
          {/* Table Header */}
          <div className="grid grid-cols-2 bg-zinc-100">
            <div className="p-3 md:p-4 text-center border-r border-zinc-200">
              <span className="text-xs md:text-sm font-medium text-zinc-500">Plataformas comuns</span>
            </div>
            <div className="p-3 md:p-4 text-center bg-emerald-50">
              <span className="text-xs md:text-sm font-medium text-emerald-700">ImpulsePay</span>
            </div>
          </div>

          {/* Table Rows */}
          {comparisons.map((row, index) => (
            <motion.div
              key={row.impulse}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="grid grid-cols-2 border-t border-zinc-200"
            >
              <div className="p-3 md:p-4 flex items-center justify-center gap-1.5 md:gap-2 border-r border-zinc-200">
                <FontAwesomeIcon icon={faXmark} className="w-3.5 h-3.5 md:w-4 md:h-4 text-zinc-400 shrink-0" />
                <span className="text-xs md:text-sm text-zinc-500 text-center">{row.common}</span>
              </div>
              <div className="p-3 md:p-4 flex items-center justify-center gap-1.5 md:gap-2 bg-emerald-50/50">
                <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-600 shrink-0" />
                <span className="text-xs md:text-sm text-zinc-700 text-center">{row.impulse}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
