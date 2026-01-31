"use client";

import { Heart, Instagram, Phone, Facebook } from "lucide-react";


export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[color:var(--color-soft-pink)] via-[color:var(--color-cream)] to-[color:var(--color-beige)] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-[color:var(--colorVerde)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Logo and Tagline */}
          <div>
            <img
              src="/logo.jpeg"
              alt="Florería Susu"
              className="h-20 w-auto mb-4 transition-transform duration-300 hover:scale-105"
            />
            <p className="text-sm">
              Flores para quien nos hace florecer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium mb-4 text-[color:var(--colorVerdeHover)]">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "catalogo", label: "Catálogo" },
                { id: "nosotros", label: "Nosotros" },
                { id: "contacto", label: "Contacto" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="
                      text-sm
                      transition-all duration-300
                      hover:text-[color:var(--colorVerdeHover)]
                      hover:translate-x-1
                    "
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-medium mb-4 text-[color:var(--colorVerdeHover)]">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm transition-all duration-300 hover:text-[color:var(--colorVerdeHover)] hover:translate-x-1">
                <Phone className="w-4 h-4" />
                <a href="tel:+523310767254">
                  (33) 1076 7254
                </a>
              </li>

              <li className="group">
                <a
                  href="https://www.instagram.com/susufloreria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 text-sm
                    transition-all duration-300
                    hover:scale-105 hover:-translate-y-0.5
                    hover:text-[color:var(--color-dusty-rose)]
                  "
                >
                  <Instagram className="w-4 h-4 transition-colors duration-300 group-hover:text-[color:var(--color-dusty-rose)]" />
                  @susufloreria
                </a>
              </li>

              {/* Facebook */}
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61565660023805"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    text-[color:var(--colorVerde)]
                    text-sm
                    transition-all duration-300
                    hover:text-[color:var(--color-facebook)]
                    hover:translate-x-1
                  "
                >
                  <Facebook className="w-4 h-4" />
                  Susu Florería
                </a>
              </li>



            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[color:var(--colorVerde)]/30 pt-10 text-center">
          <p className="text-sm flex items-center justify-center gap-2">
            Hecho con{" "}
            <Heart className="w-4 h-4 text-[color:var(--color-dusty-rose)] fill-[color:var(--color-soft-pink)]" />

            por Susu Florería © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
