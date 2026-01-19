"use client"

import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCheck,
  faCommentDots,
  faBolt,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const taxas = [
  {
    name: "Pix",
    taxa: "4,99% + R$ 2,00",
    descricao: "Pagamento instantâneo",
    icon: faBolt,
    destaque: true,
  },
]

const beneficios = [
  "Sem taxa de adesão",
  "Sem mensalidade",
  "Saque em D+0",
  "Suporte 7 dias por semana",
  "Dashboard completo grátis",
  "API e Webhooks inclusos",
  "Sistema de clonagem de ofertas grátis",
]

export function PricingSection() {
  const whatsappNumber = "5512981743663"
  const whatsappMessage = encodeURIComponent(
    "Olá! Faturo mais de R$100k/mês e gostaria de conhecer as condições especiais da ImpulsePay.",
  )

  return (
    <section id="taxas" className="px-4 md:px-6 py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-block border border-zinc-200 py-1.5 px-4 rounded-full text-xs md:text-sm text-zinc-600 mb-4 md:mb-6">
            Taxas
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-3 md:mb-4 tracking-tight">
            Taxas transparentes, sem surpresas
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-zinc-600 max-w-xl mx-auto text-balance px-2">
            Você sabe exatamente quanto vai receber. Sem taxas escondidas, sem letras miúdas.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8 md:mb-12">
          {taxas.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`p-6 md:p-8 rounded-2xl border flex flex-col items-center text-center shadow-sm max-w-md w-full ${item.destaque ? "bg-emerald-50 border-emerald-200" : "bg-white border-zinc-200"
                }`}
            >
              {item.destaque && (
                <span className="text-xs font-medium text-emerald-600 uppercase tracking-wider mb-3 md:mb-4">
                  Mais popular
                </span>
              )}
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-4 ${item.destaque ? "bg-emerald-100" : "bg-zinc-100"
                  }`}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`w-6 h-6 md:w-7 md:h-7 ${item.destaque ? "text-emerald-600" : "text-zinc-500"}`}
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-zinc-900 mb-1">{item.name}</h3>
              <p className="text-xs md:text-sm text-zinc-500 mb-3 md:mb-4">{item.descricao}</p>
              <span
                className={`font-display text-3xl md:text-4xl font-bold ${item.destaque ? "text-emerald-600" : "text-zinc-900"}`}
              >
                {item.taxa}
              </span>
              <p className="text-xs text-zinc-500 mt-2 max-w-[200px]">
                *Taxas negociáveis de acordo com o volume de vendas
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefícios inclusos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 md:p-8 rounded-2xl bg-zinc-50 border border-zinc-200 mb-6 md:mb-8"
        >
          <h3 className="text-base md:text-lg font-semibold text-zinc-900 mb-4 md:mb-6 text-center">
            Incluso em todas as contas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {beneficios.map((beneficio) => (
              <div key={beneficio} className="flex items-center gap-2 md:gap-3">
                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 shrink-0" />
                <span className="text-xs md:text-sm text-zinc-600">{beneficio}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA para alto faturamento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 text-center shadow-sm"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 md:mb-4">
            <FontAwesomeIcon icon={faChartLine} className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
            <h3 className="text-lg md:text-xl font-semibold text-zinc-900">Fatura mais de R$ 100k/mês?</h3>
          </div>
          <p className="text-sm md:text-base text-zinc-600 mb-4 md:mb-6 max-w-lg mx-auto px-2">
            Temos condições especiais e atendimento exclusivo para grandes operações. Fale direto com nosso gerente
            comercial.
          </p>
          <Link
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-sm md:text-base font-medium rounded-full transition-colors shadow-md"
          >
            <FontAwesomeIcon icon={faCommentDots} className="w-4 h-4 md:w-5 md:h-5" />
            Falar com gerente no WhatsApp
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
