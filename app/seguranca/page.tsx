import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowLeft,
  faShieldHalved,
  faLock,
  faEye,
  faTriangleExclamation,
  faAward,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons"

export default function SegurancaPage() {
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

        <h1 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">Segurança</h1>
        <p className="text-zinc-500 mb-12">Nosso compromisso com a proteção dos seus dados e transações</p>

        <div className="space-y-12">
          {/* Compromisso com a Segurança */}
          <section className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-lg">
                <FontAwesomeIcon icon={faShieldHalved} className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-3">Compromisso com a Segurança</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Na ImpulsePay, segurança não é apenas uma funcionalidade — é a base de tudo que fazemos. Investimos
                  continuamente em tecnologia de ponta e processos rigorosos para garantir que suas transações e dados
                  estejam sempre protegidos.
                </p>
                <p className="text-zinc-400 leading-relaxed mt-4">
                  Nossa infraestrutura é projetada seguindo as melhores práticas do mercado financeiro, com múltiplas
                  camadas de proteção e monitoramento 24 horas por dia, 7 dias por semana.
                </p>
              </div>
            </div>
          </section>

          {/* Criptografia e Proteção */}
          <section className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-lg">
                <FontAwesomeIcon icon={faLock} className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-3">
                  Criptografia e Proteção de Dados
                </h2>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" />
                    <span>
                      <strong className="text-zinc-300">Criptografia SSL/TLS 256-bit:</strong> Todas as comunicações
                      entre seu navegador e nossos servidores são criptografadas com o mais alto padrão de segurança.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" />
                    <span>
                      <strong className="text-zinc-300">Dados em repouso criptografados:</strong> Informações sensíveis
                      são armazenadas com criptografia AES-256, garantindo proteção mesmo em caso de acesso não
                      autorizado ao armazenamento.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" />
                    <span>
                      <strong className="text-zinc-300">Tokenização de cartões:</strong> Dados de cartão de crédito
                      nunca são armazenados diretamente — utilizamos tokens seguros fornecidos por processadores
                      certificados PCI-DSS.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" />
                    <span>
                      <strong className="text-zinc-300">Chaves de API seguras:</strong> Suas credenciais de integração
                      são geradas com algoritmos criptográficos robustos e podem ser revogadas a qualquer momento.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Monitoramento */}
          <section className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-lg">
                <FontAwesomeIcon icon={faEye} className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-3">
                  Monitoramento de Atividades Suspeitas
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Nosso sistema de segurança opera continuamente para identificar e bloquear atividades suspeitas:
                </p>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" />
                    <span>
                      <strong className="text-zinc-300">Detecção de fraude em tempo real:</strong> Algoritmos de machine
                      learning analisam cada transação para identificar padrões suspeitos.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" />
                    <span>
                      <strong className="text-zinc-300">Alertas automáticos:</strong> Você recebe notificações imediatas
                      sobre atividades incomuns em sua conta.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" />
                    <span>
                      <strong className="text-zinc-300">Bloqueio preventivo:</strong> Transações de alto risco são
                      bloqueadas automaticamente para sua proteção.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" />
                    <span>
                      <strong className="text-zinc-300">Análise de comportamento:</strong> Monitoramos padrões de acesso
                      para detectar tentativas de invasão.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Boas Práticas */}
          <section className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/10 rounded-lg">
                <FontAwesomeIcon icon={faTriangleExclamation} className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-3">Boas Práticas de Segurança</h2>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Recomendamos que você também adote estas práticas para proteger sua conta:
                </p>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0" />
                    <span>
                      <strong className="text-zinc-300">Use senhas fortes:</strong> Combine letras maiúsculas,
                      minúsculas, números e símbolos. Evite informações pessoais óbvias.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0" />
                    <span>
                      <strong className="text-zinc-300">Ative a autenticação em duas etapas:</strong> Adicione uma
                      camada extra de proteção ao seu login.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0" />
                    <span>
                      <strong className="text-zinc-300">Não compartilhe credenciais:</strong> Nunca revele sua senha ou
                      chaves de API para terceiros.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0" />
                    <span>
                      <strong className="text-zinc-300">Verifique URLs:</strong> Sempre acesse a plataforma digitando o
                      endereço diretamente ou usando favoritos salvos.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0" />
                    <span>
                      <strong className="text-zinc-300">Mantenha dispositivos seguros:</strong> Use antivírus atualizado
                      e evite redes Wi-Fi públicas para acessar sua conta.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certificações */}
          <section className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-lg">
                <FontAwesomeIcon icon={faAward} className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-3">Certificações e Conformidade</h2>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Mantemos as mais rigorosas certificações e conformidades do mercado:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                    <h3 className="font-medium text-zinc-200 mb-2">PCI-DSS</h3>
                    <p className="text-sm text-zinc-500">
                      Conformidade com o padrão de segurança de dados da indústria de cartões de pagamento.
                    </p>
                  </div>
                  <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                    <h3 className="font-medium text-zinc-200 mb-2">LGPD</h3>
                    <p className="text-sm text-zinc-500">
                      Total conformidade com a Lei Geral de Proteção de Dados brasileira.
                    </p>
                  </div>
                  <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                    <h3 className="font-medium text-zinc-200 mb-2">SSL/TLS</h3>
                    <p className="text-sm text-zinc-500">
                      Certificado digital que garante comunicações seguras e criptografadas.
                    </p>
                  </div>
                  <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                    <h3 className="font-medium text-zinc-200 mb-2">Banco Central</h3>
                    <p className="text-sm text-zinc-500">
                      Operação em conformidade com as regulamentações do Banco Central do Brasil.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contato de Incidentes */}
          <section className="p-6 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-xl border border-emerald-500/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-lg">
                <FontAwesomeIcon icon={faCommentDots} className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-zinc-100 mb-3">Reporte de Incidentes</h2>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Identificou uma vulnerabilidade ou atividade suspeita? Entre em contato imediatamente com nossa equipe
                  de segurança:
                </p>
                <div className="space-y-3">
                  <p className="text-zinc-300">
                    <strong>E-mail de segurança:</strong> seguranca@impulsepay.com.br
                  </p>
                  <p className="text-zinc-300">
                    <strong>Canal de emergência:</strong> 0800 123 4567 (24h)
                  </p>
                </div>
                <p className="text-sm text-zinc-500 mt-4">
                  Todas as comunicações sobre segurança são tratadas com máxima prioridade e confidencialidade.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
