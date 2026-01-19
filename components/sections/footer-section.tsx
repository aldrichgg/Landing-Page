import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons"

const footerLinks = {
  produto: [
    { label: "Soluções", href: "#solucoes" },
    { label: "Vantagens", href: "#vantagens" },
    { label: "Taxas", href: "#taxas" },
  ],
  empresa: [
    { label: "Sobre", href: "/sobre" },
    { label: "Blog", href: "#" },
    { label: "Contato", href: "#" },
  ],
  legal: [
    { label: "Privacidade", href: "/privacidade" },
    { label: "Termos de uso", href: "/termos" },
    { label: "Segurança", href: "/seguranca" },
  ],
}

export function FooterSection() {
  return (
    <footer className="px-4 md:px-6 py-12 md:py-16 border-t border-zinc-200 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-8 mb-12">
          {/* Logo e descrição - full width no mobile */}
          <div className="pb-6 border-b border-zinc-200 md:border-0 md:pb-0">
            <Link href="/" className="font-display text-xl font-semibold text-zinc-900">
              Impulse<span className="text-emerald-500">Pay</span>
            </Link>
            <p className="mt-3 text-sm text-zinc-500 max-w-xs">
              Pagamentos para infoprodutores que querem escalar com performance.
            </p>
          </div>

          {/* Links em grid de 3 colunas */}
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <div>
              <h4 className="font-heading text-xs md:text-sm font-semibold text-zinc-900 mb-3 md:mb-4">Produto</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.produto.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs md:text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-xs md:text-sm font-semibold text-zinc-900 mb-3 md:mb-4">Empresa</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs md:text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-xs md:text-sm font-semibold text-zinc-900 mb-3 md:mb-4">Legal</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs md:text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-zinc-500 text-center md:text-left order-2 md:order-1">
            © {new Date().getFullYear()} ImpulsePay. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5 order-1 md:order-2">
            <Link
              href="https://www.instagram.com/impulsepay.digital/"
              className="text-zinc-400 hover:text-zinc-600 transition-colors"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-zinc-600 transition-colors" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-zinc-600 transition-colors" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
