"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItem = `
    relative pb-1
    transition-colors duration-300
    text-[color:var(--color-dark-sage)]
    hover:text-[color:var(--color-dusty-rose)]
    after:content-['']
    after:absolute after:left-0 after:bottom-0
    after:h-[2px] after:w-0
    after:bg-[color:var(--color-dusty-rose)]
    after:transition-all after:duration-300
    hover:after:w-full
    cursor-pointer
  `;

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-sm shadow-md
        bg-gradient-to-br
        from-[color:var(--color-soft-pink)]
        via-[color:var(--color-cream)]
        to-[color:var(--color-beige)]
      ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/" aria-label="Ir al inicio">
              <img
                src="/logo.png"
                alt="Florería Susu"
                // width={120}
                // height={60}
                className="h-29 w-auto object-contain cursor-pointer"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex gap-8">
              <Link href="/" className={navItem}>Inicio</Link>
              <Link href="/catalogo" className={navItem}>Catálogo</Link>
              <Link href="/#nosotros" className={navItem}>Nosotros</Link>
              <Link href="/#contacto" className={navItem}>Contacto</Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-[color:var(--color-dark-sage)]"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* MOBILE DRAWER */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-72
          bg-gradient-to-b
          from-[color:var(--color-cream)]
          to-[color:var(--color-soft-pink)]
          shadow-2xl
          transform transition-transform duration-300
          md:hidden
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b">
          <span className="font-semibold text-lg text-[color:var(--color-dark-sage)]">
            Menú
          </span>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <X />
          </button>
        </div>

        <nav className="flex flex-col gap-6 p-6">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          <Link href="/catalogo" onClick={() => setIsMenuOpen(false)}>Catálogo</Link>
          <Link href="/#nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
          <Link href="/#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
        </nav>
      </aside>
    </>
  );
}
