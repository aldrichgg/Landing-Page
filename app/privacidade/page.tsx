import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export default function PrivacidadePage() {
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

        <h1 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">Política de Privacidade</h1>
        <p className="text-zinc-500 mb-12">
          Última atualização:{" "}
          {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
        </p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8">
          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">1. Introdução e Escopo</h2>
            <p className="text-zinc-400 leading-relaxed">
              A ImpulsePay ("nós", "nossa" ou "Plataforma") valoriza a privacidade dos seus usuários. Esta Política de
              Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando
              você utiliza nossa plataforma de pagamentos digitais.
            </p>
            <p className="text-zinc-400 leading-relaxed mt-4">
              Ao utilizar nossos serviços, você concorda com as práticas descritas nesta política. Recomendamos a
              leitura integral deste documento.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">2. Dados Coletados</h2>
            <h3 className="font-heading text-lg font-medium text-zinc-200 mb-3">2.1 Dados fornecidos por você</h3>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>Nome completo e CPF/CNPJ</li>
              <li>Endereço de e-mail e telefone</li>
              <li>Dados bancários para recebimento</li>
              <li>Informações de produtos/serviços cadastrados</li>
              <li>Documentos para verificação de identidade</li>
            </ul>

            <h3 className="font-heading text-lg font-medium text-zinc-200 mb-3 mt-6">
              2.2 Dados coletados automaticamente
            </h3>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>Endereço IP e localização aproximada</li>
              <li>Tipo de dispositivo e navegador</li>
              <li>Páginas visitadas e tempo de navegação</li>
              <li>Dados de transações realizadas</li>
              <li>Logs de acesso e atividades na plataforma</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">3. Uso das Informações</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">Utilizamos seus dados para:</p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>Processar pagamentos e transferências</li>
              <li>Verificar sua identidade e prevenir fraudes</li>
              <li>Fornecer suporte ao cliente</li>
              <li>Enviar notificações sobre transações</li>
              <li>Melhorar nossos produtos e serviços</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Comunicar atualizações importantes da plataforma</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">4. Compartilhamento de Dados</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">Podemos compartilhar suas informações com:</p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>
                <strong className="text-zinc-300">Instituições financeiras:</strong> para processamento de pagamentos
              </li>
              <li>
                <strong className="text-zinc-300">Prestadores de serviço:</strong> que nos auxiliam na operação da
                plataforma
              </li>
              <li>
                <strong className="text-zinc-300">Autoridades competentes:</strong> quando exigido por lei ou ordem
                judicial
              </li>
              <li>
                <strong className="text-zinc-300">Parceiros antifraude:</strong> para verificação e segurança
              </li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mt-4">
              Não vendemos, alugamos ou comercializamos seus dados pessoais com terceiros para fins de marketing.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">
              5. Cookies e Tecnologias Similares
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">Utilizamos cookies e tecnologias similares para:</p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>Manter você conectado à sua conta</li>
              <li>Lembrar suas preferências</li>
              <li>Analisar o uso da plataforma</li>
              <li>Garantir a segurança das transações</li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mt-4">
              Você pode gerenciar as preferências de cookies através das configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">6. Segurança dos Dados</h2>
            <p className="text-zinc-400 leading-relaxed">
              Implementamos medidas técnicas e organizacionais para proteger seus dados, incluindo:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 mt-4">
              <li>Criptografia SSL/TLS em todas as comunicações</li>
              <li>Armazenamento seguro com criptografia em repouso</li>
              <li>Controle de acesso restrito aos dados</li>
              <li>Monitoramento contínuo contra ameaças</li>
              <li>Backups regulares e planos de recuperação</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">7. Seus Direitos</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>
                <strong className="text-zinc-300">Acesso:</strong> solicitar cópia dos seus dados pessoais
              </li>
              <li>
                <strong className="text-zinc-300">Correção:</strong> atualizar dados incompletos ou incorretos
              </li>
              <li>
                <strong className="text-zinc-300">Exclusão:</strong> solicitar a eliminação dos seus dados
              </li>
              <li>
                <strong className="text-zinc-300">Portabilidade:</strong> receber seus dados em formato estruturado
              </li>
              <li>
                <strong className="text-zinc-300">Revogação:</strong> retirar seu consentimento a qualquer momento
              </li>
              <li>
                <strong className="text-zinc-300">Oposição:</strong> contestar determinados tratamentos de dados
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">8. Retenção de Dados</h2>
            <p className="text-zinc-400 leading-relaxed">
              Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas nesta política, atender
              obrigações legais, resolver disputas e fazer cumprir nossos acordos. Dados de transações financeiras são
              mantidos pelo prazo mínimo exigido pela legislação aplicável.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">9. Contato</h2>
            <p className="text-zinc-400 leading-relaxed">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
            </p>
            <div className="mt-4 p-4 bg-zinc-900 rounded-lg border border-zinc-800">
              <p className="text-zinc-300">E-mail: privacidade@impulsepay.com.br</p>
              <p className="text-zinc-300 mt-2">Encarregado de Dados (DPO): dpo@impulsepay.com.br</p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-4">10. Atualizações desta Política</h2>
            <p className="text-zinc-400 leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre alterações
              significativas através do e-mail cadastrado ou por aviso destacado em nossa plataforma. Recomendamos
              revisar esta página regularmente.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
