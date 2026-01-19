"use client"

import { useState } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

const navLinks = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#vantagens", label: "Vantagens" },
  { href: "#confianca", label: "Confiança" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-12 px-4 md:px-6 rounded-full bg-white/80 border border-zinc-200 backdrop-blur-md shadow-sm">
        <Link href="/" className="font-display text-lg font-semibold text-zinc-900">
          Impulse<span className="text-emerald-500">Pay</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm rounded-full transition-colors text-zinc-600 hover:text-zinc-900"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://app.impulsepay.online/register"
            className="ml-2 px-4 py-1.5 text-sm rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors"
          >
            Criar conta grátis
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="w-5 h-5" />
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-5xl rounded-2xl bg-white/95 border border-zinc-200 backdrop-blur-md p-4 shadow-lg">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-sm rounded-xl transition-colors text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://app.impulsepay.online/register"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 py-3 text-sm text-center rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors"
            >
              Criar conta grátis
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
