"use client";

import Link from "next/link";
import {
  Heart,
  Instagram,
  Phone,
  Facebook,
  MapPin,
  Truck,
  Clock,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[color:var(--color-soft-pink)] via-[color:var(--color-cream)] to-[color:var(--color-beige)] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-[color:var(--colorVerde)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Logo */}
          <div>
            <img
              src="/logo.png"
              alt="Florería Susu"
              className="h-45 w-auto mb-4 transition-transform duration-300 hover:scale-105"
            />
            <p className="text-sm max-w-xs">
              Flores para quien nos hace florecer 🌷
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-xl font-medium mb-4 text-[color:var(--colorVerdeHover)]">
              Explorar
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 hover:text-[color:var(--colorVerdeHover)] hover:translate-x-1 inline-block"
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  href="/catalogo"
                  className="transition-all duration-300 hover:text-[color:var(--colorVerdeHover)] hover:translate-x-1 inline-block"
                >
                  Catálogo
                </Link>
              </li>

              <li>
                <Link
                  href="/#contacto"
                  className="transition-all duration-300 hover:text-[color:var(--colorVerdeHover)] hover:translate-x-1 inline-block"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h3 className="text-xl font-medium mb-4 text-[color:var(--colorVerdeHover)]">
              Información
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+523310767254">(33) 1076 7254</a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  San Isidro 61, entre Av. Las Torres <br />
                  C.P. 45694
                </span>
              </li>

              <li className="flex items-start gap-2">
                <Truck className="w-4 h-4 mt-0.5" />
                <span>
                  Envíos en Guadalajara Centro, Tlaquepaque, Tonalá y El Salto
                </span>
              </li>

              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5" />
                <span>
                  Lunes a Sábado <br />
                  9:00 a.m. – 7:00 p.m.
                </span>
              </li>

              <li className="flex gap-4 pt-2">
                <a
                  href="https://www.instagram.com/susufloreria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[color:var(--color-dusty-rose)] transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61565660023805"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[color:var(--color-facebook)] transition"
                >
                  <Facebook className="w-5 h-5" />
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
