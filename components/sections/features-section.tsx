"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt, faQrcode, faArrowsRotate, faBoxOpen, faChartColumn, faCode } from "@fortawesome/free-solid-svg-icons"
import { Card, CardContent } from "@/components/ui/card"

const solutions = [
  {
    icon: faBolt,
    title: "Checkout otimizado",
    description: "Página de pagamento focada em conversão máxima.",
  },
  {
    icon: faQrcode,
    title: "Pix instantâneo",
    description: "Receba em segundos com confirmação automática.",
  },
  {
    icon: faArrowsRotate,
    title: "Pagamentos recorrentes",
    description: "Assinaturas e cobranças automáticas simplificadas.",
  },
  {
    icon: faBoxOpen,
    title: "Gestão de produtos",
    description: "Organize seus infoprodutos em um só lugar.",
  },
  {
    icon: faChartColumn,
    title: "Relatórios claros",
    description: "Métricas de vendas e conversão em tempo real.",
  },
  {
    icon: faCode,
    title: "API pronta para escalar",
    description: "Integre com suas ferramentas e automatize tudo.",
  },
]

export function FeaturesSection() {
  return (
    <section id="solucoes" className="px-4 md:px-6 py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-xs md:text-sm font-medium text-emerald-600 uppercase tracking-wider mb-3 md:mb-4">
            A Solução
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 mb-3 md:mb-4">
            Tudo que você precisa para vender mais
          </h2>
          <p className="text-sm md:text-base text-zinc-600 max-w-xl mx-auto text-balance px-2">
            Cada recurso foi pensado para aumentar sua conversão e simplificar sua operação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-zinc-200 bg-white hover:border-emerald-300 transition-all duration-300 rounded-2xl shadow-sm hover:shadow-md">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-zinc-100 flex items-center justify-center group-hover:bg-emerald-100 transition-colors shrink-0"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FontAwesomeIcon
                        icon={solution.icon}
                        className="w-4 h-4 md:w-5 md:h-5 text-zinc-500 group-hover:text-emerald-600 transition-colors"
                      />
                    </motion.div>
                    <p className="font-heading font-semibold text-zinc-900 text-sm md:text-base">{solution.title}</p>
                  </div>
                  <p className="text-zinc-600 text-xs md:text-sm">{solution.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
