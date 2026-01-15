import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export default function TermosPage() {
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

        <h1 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">Termos de Uso</h1>
        <p className="text-zinc-500 mb-12">
          Última atualização:{" "}
          {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
        </p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8">
          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-zinc-400 leading-relaxed">
              Ao acessar ou utilizar a plataforma ImpulsePay, você declara ter lido, compreendido e concordado com estes
              Termos de Uso. Se você não concordar com alguma disposição, não utilize nossos serviços.
            </p>
            <p className="text-zinc-400 leading-relaxed mt-4">
              Estes termos constituem um acordo legal entre você ("Usuário" ou "Vendedor") e a ImpulsePay ("Plataforma",
              "nós" ou "nossa").
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">2. Descrição dos Serviços</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              A ImpulsePay é uma plataforma de pagamentos digitais que oferece:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>Processamento de pagamentos via Pix, cartão de crédito e boleto</li>
              <li>Checkout otimizado para vendas de produtos digitais</li>
              <li>Gestão de assinaturas e pagamentos recorrentes</li>
              <li>Dashboard para acompanhamento de vendas e métricas</li>
              <li>Ferramentas de gestão de produtos e clientes</li>
              <li>API para integração com sistemas externos</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">3. Cadastro e Conta</h2>
            <h3 className="font-heading text-lg font-medium text-zinc-200 mb-3">3.1 Requisitos</h3>
            <p className="text-zinc-400 leading-relaxed">
              Para utilizar nossos serviços, você deve: ser maior de 18 anos ou emancipado; possuir CPF ou CNPJ válido;
              fornecer informações verdadeiras e atualizadas; manter a confidencialidade de suas credenciais de acesso.
            </p>

            <h3 className="font-heading text-lg font-medium text-zinc-200 mb-3 mt-6">3.2 Verificação</h3>
            <p className="text-zinc-400 leading-relaxed">
              Reservamo-nos o direito de solicitar documentos adicionais para verificação de identidade e atividade
              comercial. O não fornecimento pode resultar em limitações ou suspensão da conta.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">4. Responsabilidades do Usuário</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">Ao utilizar a ImpulsePay, você se compromete a:</p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>Comercializar apenas produtos/serviços lícitos e em conformidade com a legislação</li>
              <li>Não utilizar a plataforma para atividades fraudulentas ou ilegais</li>
              <li>Responder por todas as transações realizadas em sua conta</li>
              <li>Manter dados cadastrais e bancários atualizados</li>
              <li>Cumprir com obrigações fiscais decorrentes de suas vendas</li>
              <li>Fornecer suporte adequado aos seus clientes</li>
              <li>Respeitar direitos de propriedade intelectual de terceiros</li>
              <li>Não realizar práticas de spam ou comunicações não autorizadas</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">5. Produtos e Serviços Proibidos</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">É expressamente proibida a comercialização de:</p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>Produtos falsificados ou que violem propriedade intelectual</li>
              <li>Substâncias ilegais ou controladas</li>
              <li>Armas de fogo e munições</li>
              <li>Conteúdo adulto não regulamentado</li>
              <li>Esquemas de pirâmide ou fraudes financeiras</li>
              <li>Produtos que incentivem discriminação ou violência</li>
              <li>Qualquer item proibido pela legislação brasileira</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">6. Taxas e Pagamentos</h2>
            <h3 className="font-heading text-lg font-medium text-zinc-200 mb-3">6.1 Taxas</h3>
            <p className="text-zinc-400 leading-relaxed">
              As taxas aplicáveis estão disponíveis em nossa página de preços e podem ser alteradas mediante aviso
              prévio de 30 dias. As taxas são descontadas automaticamente no momento do repasse.
            </p>

            <h3 className="font-heading text-lg font-medium text-zinc-200 mb-3 mt-6">6.2 Repasses</h3>
            <p className="text-zinc-400 leading-relaxed">
              Os valores das vendas são repassados conforme o prazo estabelecido para cada modalidade de pagamento, após
              dedução das taxas aplicáveis. Reservamo-nos o direito de reter valores em caso de suspeita de fraude ou
              disputas.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">7. Propriedade Intelectual</h2>
            <p className="text-zinc-400 leading-relaxed">
              Todos os direitos de propriedade intelectual relacionados à plataforma ImpulsePay, incluindo marca,
              logotipo, design, código-fonte e documentação, pertencem exclusivamente à ImpulsePay ou seus
              licenciadores.
            </p>
            <p className="text-zinc-400 leading-relaxed mt-4">
              É proibida a reprodução, distribuição ou modificação de qualquer conteúdo da plataforma sem autorização
              prévia por escrito.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">8. Cancelamento e Suspensão</h2>
            <h3 className="font-heading text-lg font-medium text-zinc-200 mb-3">8.1 Pelo Usuário</h3>
            <p className="text-zinc-400 leading-relaxed">
              Você pode solicitar o cancelamento da sua conta a qualquer momento. Pendências financeiras devem ser
              resolvidas antes do encerramento definitivo.
            </p>

            <h3 className="font-heading text-lg font-medium text-zinc-200 mb-3 mt-6">8.2 Pela ImpulsePay</h3>
            <p className="text-zinc-400 leading-relaxed">
              Podemos suspender ou cancelar sua conta imediatamente em caso de: violação destes termos; atividades
              fraudulentas; alto índice de chargebacks; descumprimento de obrigações legais; ou por determinação
              judicial.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">9. Limitação de Responsabilidade</h2>
            <p className="text-zinc-400 leading-relaxed">
              A ImpulsePay não se responsabiliza por: danos indiretos, incidentais ou consequenciais; lucros cessantes;
              falhas decorrentes de terceiros; indisponibilidade temporária dos serviços; atos praticados pelos usuários
              vendedores junto a seus clientes.
            </p>
            <p className="text-zinc-400 leading-relaxed mt-4">
              Nossa responsabilidade total está limitada ao valor das taxas pagas pelo usuário nos últimos 12 meses.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">10. Alterações nos Termos</h2>
            <p className="text-zinc-400 leading-relaxed">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão
              comunicadas com antecedência mínima de 30 dias através do e-mail cadastrado ou aviso na plataforma. O uso
              continuado dos serviços após a entrada em vigor das alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">11. Foro e Legislação Aplicável</h2>
            <p className="text-zinc-400 leading-relaxed">
              Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de
              São Paulo/SP para dirimir quaisquer controvérsias decorrentes deste instrumento, com renúncia expressa a
              qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">12. Contato</h2>
            <p className="text-zinc-400 leading-relaxed">Para dúvidas sobre estes Termos de Uso:</p>
            <div className="mt-4 p-4 bg-zinc-900 rounded-lg border border-zinc-800">
              <p className="text-zinc-300">E-mail: suporte@impulsepay.com.br</p>
              <p className="text-zinc-300 mt-2">Central de Ajuda: ajuda.impulsepay.com.br</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
