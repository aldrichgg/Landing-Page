import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowLeft,
  faRocket,
  faBullseye,
  faHeart,
  faBolt,
  faUsers,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors mb-8"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
          Voltar ao início
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">Sobre a ImpulsePay</h1>
        <p className="text-zinc-500 mb-12">Transformando decisões em ações de compra no mercado digital</p>

        <div className="space-y-12">
          {/* Nossa História */}
          <section className="space-y-6">
            <h2 className="font-heading text-2xl font-semibold text-zinc-100">Nossa História</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>A ImpulsePay nasceu da necessidade de transformar o momento de decisão em ação.</p>
              <p>
                No digital, o desejo é instantâneo. O pagamento não pode ser lento, confuso ou inseguro. Vimos
                infoprodutores perdendo vendas todos os dias por causa de checkouts travados, páginas lentas e
                experiências de pagamento que mais afastavam do que convertiam.
              </p>
              <p>
                Criamos uma plataforma focada em conversão, experiência e performance, onde cada detalhe foi pensado
                para não interromper o fluxo de venda. Cada botão, cada tela, cada segundo foi otimizado para uma única
                coisa: transformar visitantes em compradores.
              </p>
              <p className="text-zinc-300 font-medium">
                ImpulsePay não é só pagamento. É estratégia aplicada ao momento mais importante da venda: o clique
                final.
              </p>
            </div>
          </section>

          {/* Nosso Propósito */}
          <section className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-lg">
                <FontAwesomeIcon icon={faRocket} className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-3">Nosso Propósito</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Acelerar os resultados de quem vende online com uma experiência de pagamento fluida e estratégica.
                  Acreditamos que cada segundo conta, cada clique importa e cada venda representa um sonho de quem
                  empreende no digital. Nosso propósito é ser o parceiro invisível que trabalha nos bastidores para que
                  você brilhe na linha de frente.
                </p>
              </div>
            </div>
          </section>

          {/* Missão e Visão */}
          <div className="grid sm:grid-cols-2 gap-6">
            <section className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <FontAwesomeIcon icon={faBullseye} className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h2 className="font-heading text-lg font-semibold text-zinc-100 mb-3">Missão</h2>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Oferecer a infraestrutura de pagamentos mais rápida, confiável e orientada à conversão para
                    criadores digitais que querem escalar sem complicação.
                  </p>
                </div>
              </div>
            </section>

            <section className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <FontAwesomeIcon icon={faBolt} className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h2 className="font-heading text-lg font-semibold text-zinc-100 mb-3">Visão</h2>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Ser referência em soluções de pagamento pensadas para infoprodutores e negócios digitais de alta
                    performance no Brasil e na América Latina.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* O que nos move - Valores */}
          <section className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-lg">
                <FontAwesomeIcon icon={faHeart} className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="flex-1">
                <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">O Que Nos Move</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                    <h3 className="font-medium text-zinc-200 mb-2">Simplicidade</h3>
                    <p className="text-sm text-zinc-500">
                      Complexidade mata conversão. Fazemos o difícil parecer fácil.
                    </p>
                  </div>
                  <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                    <h3 className="font-medium text-zinc-200 mb-2">Performance</h3>
                    <p className="text-sm text-zinc-500">
                      Cada milissegundo importa. Obsessão por velocidade está no nosso DNA.
                    </p>
                  </div>
                  <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                    <h3 className="font-medium text-zinc-200 mb-2">Confiabilidade</h3>
                    <p className="text-sm text-zinc-500">
                      Quando sua venda acontece, estamos lá. Sempre. Sem desculpas.
                    </p>
                  </div>
                  <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                    <h3 className="font-medium text-zinc-200 mb-2">Inovação</h3>
                    <p className="text-sm text-zinc-500">
                      O mercado muda. Nós mudamos antes. Antecipamos o que você vai precisar.
                    </p>
                  </div>
                  <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700 sm:col-span-2">
                    <h3 className="font-medium text-zinc-200 mb-2">Foco no Cliente</h3>
                    <p className="text-sm text-zinc-500">
                      Seu sucesso é o nosso. Construímos cada funcionalidade pensando em quem vai usar, não em quem vai
                      vender.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* O que nos diferencia */}
          <section className="space-y-6">
            <h2 className="font-heading text-2xl font-semibold text-zinc-100">O Que Nos Diferencia</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" />
                <p className="text-zinc-400">
                  <strong className="text-zinc-300">Plataforma desenvolvida com foco em conversão:</strong> Não somos um
                  gateway genérico. Cada linha de código foi escrita pensando em aumentar suas vendas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" />
                <p className="text-zinc-400">
                  <strong className="text-zinc-300">Design orientado à experiência:</strong> Checkout bonito que
                  funciona. Sem atrito, sem confusão, sem abandono.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" />
                <p className="text-zinc-400">
                  <strong className="text-zinc-300">Velocidade como premissa:</strong> Pix confirmado em segundos.
                  Checkout que carrega antes do cliente pensar em desistir.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" />
                <p className="text-zinc-400">
                  <strong className="text-zinc-300">Integração inteligente:</strong> API documentada, webhooks
                  confiáveis e integrações prontas com as ferramentas que você já usa.
                </p>
              </div>
            </div>
          </section>

          {/* Por trás da plataforma */}
          <section className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-lg">
                <FontAwesomeIcon icon={faUsers} className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-3">Por Trás da Plataforma</h2>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  A ImpulsePay foi criada por quem vive o mercado digital na prática. Nosso time é formado por
                  especialistas em tecnologia, performance digital e negócios online que já enfrentaram — e resolveram —
                  os mesmos desafios que você enfrenta hoje.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Desenvolvedores que entendem de funil. Gestores de tráfego que sabem o que significa perder uma venda
                  por checkout lento. Empreendedores que construíram negócios digitais do zero. Essa experiência está em
                  cada funcionalidade que entregamos.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="p-8 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-xl border border-emerald-500/20 text-center">
            <h2 className="font-heading text-2xl font-semibold text-zinc-100 mb-4">Vamos Juntos?</h2>
            <p className="text-zinc-400 leading-relaxed mb-6 max-w-lg mx-auto">
              Estamos aqui para impulsionar suas vendas com inteligência e confiança. Seja você um infoprodutor
              iniciante ou um negócio digital de alta performance, temos a solução certa para o seu momento.
            </p>
            <Link
              href="/#taxas"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-colors"
            >
              Conhecer a ImpulsePay
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </div>
    </main>
  )
}
