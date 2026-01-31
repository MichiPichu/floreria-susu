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
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm shadow-md
      bg-gradient-to-br
      from-[color:var(--color-soft-pink)]
      via-[color:var(--color-cream)]
      to-[color:var(--color-beige)]
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          {/* <img src="/logo.jpeg" alt="Florería Susu" className="h-16 w-auto" /> */}
          <Link href="/" aria-label="Ir al inicio">
            <img
              src="/logo.jpeg"
              alt="Florería Susu"
              width={120}
              height={60}
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection("inicio")} className={navItem}>Inicio</button>
            {/* <Link href="/">
              <span className={navItem}>Inicio</span>
            </Link> */}
            <button onClick={() => scrollToSection("catalogo")} className={navItem}>Catálogo</button>
            <button onClick={() => scrollToSection("nosotros")} className={navItem}>Nosotros</button>
            <button onClick={() => scrollToSection("contacto")} className={navItem}>Contacto</button>
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden text-[color:var(--color-dark-sage)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-4 py-4 border-t border-[color:var(--color-beige)]">
            <button onClick={() => scrollToSection("inicio")}>Inicio</button>
            <button onClick={() => scrollToSection("catalogo")}>Catálogo</button>
            <button onClick={() => scrollToSection("nosotros")}>Nosotros</button>
            <button onClick={() => scrollToSection("contacto")}>Contacto</button>
          </div>
        )}
      </div>
    </header>
  );
}
