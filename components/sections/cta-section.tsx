import Link from "next/link"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"

export function CtaSection() {
  return (
    <section id="cta" className="px-4 md:px-6 py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4 md:mb-6">
          Comece a converter mais hoje.
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-zinc-600 mb-8 md:mb-10 text-balance px-2">
          Crie sua conta grátis e descubra como a ImpulsePay pode transformar suas vendas.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="https://impulsepay.online/register">
            <LiquidCtaButton theme="light">Criar conta grátis</LiquidCtaButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
