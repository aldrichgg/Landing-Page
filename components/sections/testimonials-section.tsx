"use client"

import { motion } from "motion/react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShieldHalved, faLock, faCreditCard } from "@fortawesome/free-solid-svg-icons"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"

const testimonials = [
  {
    text: "Migrei da Hotmart e não me arrependo. O checkout é muito mais limpo e minhas vendas aumentaram 30% no primeiro mês.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Fernanda Oliveira",
    role: "Infoprodutora",
  },
  {
    text: "O Pix cai na hora, sem enrolação. Isso mudou completamente meu fluxo de caixa. Recomendo demais!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Lucas Mendes",
    role: "Criador de Curso",
  },
  {
    text: "Finalmente uma plataforma que entende o mercado brasileiro. Suporte rápido e taxa justa.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Amanda Costa",
    role: "Mentora de Negócios",
  },
  {
    text: "Estava perdendo muita venda por causa de checkout complicado. Com a ImpulsePay, a conversão disparou.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Rafael Santos",
    role: "Dono de E-commerce",
  },
  {
    text: "O dashboard é muito intuitivo. Consigo ver tudo que preciso sem ficar perdida em mil relatórios.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Juliana Almeida",
    role: "Gestora de Tráfego",
  },
  {
    text: "A API é muito bem documentada. Integrei no meu sistema em menos de um dia. Parabéns ao time técnico!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Thiago Ribeiro",
    role: "Desenvolvedor",
  },
  {
    text: "Usei outras plataformas e nenhuma tem esse nível de transparência nas taxas. Aqui sei exatamente quanto vou receber.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Carolina Ferreira",
    role: "Empreendedora Digital",
  },
  {
    text: "Meus alunos elogiam demais a experiência de compra. Checkout rápido e sem fricção.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Pedro Augusto",
    role: "Professor Online",
  },
  {
    text: "O suporte me respondeu em 5 minutos num domingo. Nunca vi isso em outra plataforma!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Mariana Lima",
    role: "Consultora de Vendas",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const paymentMethods = ["Pix", "Visa", "Mastercard", "Elo", "Boleto", "American Express"]

const securityFeatures: { icon: IconDefinition; label: string }[] = [
  { icon: faShieldHalved, label: "SSL Certificado" },
  { icon: faLock, label: "Dados Protegidos" },
  { icon: faCreditCard, label: "PCI Compliant" },
]

export function TestimonialsSection() {
  return (
    <section id="confianca" className="px-4 md:px-6 py-16 md:py-24 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-8 md:mb-12"
        >
          <div className="border border-zinc-200 py-1.5 px-4 rounded-full text-xs md:text-sm text-zinc-600">
            Confiança
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mt-4 md:mt-6 text-center tracking-tight">
            Prova de Confiança
          </h2>
          <p className="text-center mt-3 md:mt-4 text-sm md:text-base lg:text-lg text-zinc-600 text-balance px-2">
            Criada para o mercado digital. Pensada por quem vende online.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-2 md:gap-4 mb-8 md:mb-12"
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="p-4 md:p-6 rounded-2xl bg-white border border-zinc-200 text-center group hover:border-emerald-300 transition-all shadow-sm"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zinc-100 flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-emerald-100 transition-colors">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="w-5 h-5 md:w-6 md:h-6 text-zinc-500 group-hover:text-emerald-600 transition-colors"
                />
              </div>
              <p className="text-xs md:text-sm font-medium text-zinc-700">{feature.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center gap-3 md:gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[500px] md:max-h-[740px] overflow-hidden mb-8 md:mb-12">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden sm:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="pt-6 md:pt-8 border-t border-zinc-200">
          <p className="text-center text-xs md:text-sm text-zinc-500 mb-6 md:mb-8">Meios de pagamento aceitos</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-6 md:gap-12 lg:gap-16 justify-center"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
              }}
            >
              {[...paymentMethods, ...paymentMethods].map((method, index) => (
                <div
                  key={`${method}-${index}`}
                  className="flex items-center justify-center px-4 md:px-6 py-2 md:py-3 rounded-lg bg-white border border-zinc-200 whitespace-nowrap flex-shrink-0 shadow-sm"
                >
                  <span className="text-xs md:text-sm font-medium text-zinc-600">{method}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
