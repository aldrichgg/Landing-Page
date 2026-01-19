"use client"

import Link from "next/link"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt, faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons"

export function HeroSection() {
  return (
    <section className="min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center px-4 md:px-6 pt-20 md:pt-24 pb-16 md:pb-20 relative bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6 md:mb-8">
          <FontAwesomeIcon icon={faBolt} className="w-4 h-4 text-emerald-600" />
          <span className="text-xs md:text-sm text-emerald-700">Pagamentos para infoprodutores</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6">
          <span className="text-zinc-900 block">Transforme intenção</span>
          <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
            em pagamento instantâneo.
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-zinc-600 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed text-balance px-2">
          Uma plataforma de pagamentos criada para quem vende infoprodutos e quer escalar com performance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <Link href="https://app.impulsepay.online/register">
            <LiquidCtaButton theme="light">Criar conta grátis</LiquidCtaButton>
          </Link>
          <Link
            href="#solucoes"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <span>Ver como funciona</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex -space-x-3">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="Infoprodutor"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white hover:-translate-y-1 transition object-cover z-[1] shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="Infoprodutor"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white hover:-translate-y-1 transition object-cover z-[2] shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
                alt="Infoprodutor"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white hover:-translate-y-1 transition object-cover z-[3] shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
                alt="Infoprodutor"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white hover:-translate-y-1 transition object-cover z-[4] shadow-sm"
              />
            </div>
            <div className="hidden sm:block h-8 w-px bg-zinc-200" />
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="w-3.5 h-3.5 text-emerald-500" />
                ))}
                <span className="text-zinc-600 font-medium ml-1 text-xs md:text-sm">5.0</span>
              </div>
              <p className="text-xs md:text-sm text-zinc-500">
                Usado por <span className="text-zinc-700 font-medium">2.500+</span> infoprodutores
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
