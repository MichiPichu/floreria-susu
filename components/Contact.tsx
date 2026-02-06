"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  Truck,
} from "lucide-react";

export function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const whatsappMessage = encodeURIComponent(
    `Hola, mi nombre es ${name || "—"}.\n\nMe gustaría solicitar una cotización.\n\nDetalles:\n${message || "—"}`
  );

  const whatsappLink = `https://wa.me/523310767254?text=${whatsappMessage}`;

  return (
    <section
      id="contacto"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[color:var(--color-cream)] to-[color:var(--color-beige)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="mb-6">Contáctanos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ¿Tienes alguna pregunta o quieres hacer un pedido? Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* INFO */}
          <div className="space-y-10">
            {/* Teléfono */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[color:var(--color-soft-pink)] rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-[color:var(--color-dusty-rose)]" />
              </div>
              <div>
                <h3 className="mb-1">Teléfono</h3>
                <a
                  href="tel:+523310767254"
                  className="text-gray-600 hover:text-[color:var(--color-dusty-rose)] transition-colors"
                >
                  (33) 1076 7254
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[color:var(--color-soft-pink)] rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[color:var(--color-dusty-rose)]" />
              </div>
              <div>
                <h3 className="mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/523310767254?text=Hola,%20me%20gustaría%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[color:var(--color-dusty-rose)] transition-colors"
                >
                  Enviar mensaje directo
                </a>
              </div>
            </div>

            {/* Redes */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[color:var(--color-soft-pink)] rounded-full flex items-center justify-center">
                <Instagram className="w-6 h-6 text-[color:var(--color-dusty-rose)]" />
              </div>
              <div>
                <h3 className="mb-1">Instagram</h3>
                <a
                  href="https://www.instagram.com/susufloreria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[color:var(--color-dusty-rose)] transition-colors"
                >
                  @susufloreria
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[color:var(--color-soft-pink)] rounded-full flex items-center justify-center">
                <Facebook className="w-6 h-6 text-[color:var(--color-dusty-rose)]" />
              </div>
              <div>
                <h3 className="mb-1">Facebook</h3>
                <a
                  href="https://www.facebook.com/profile.php?id=61565660023805"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[color:var(--color-dusty-rose)] transition-colors"
                >
                  Susu Florería
                </a>
              </div>
            </div>

            {/* Zonas de envío */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[color:var(--color-soft-pink)] rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-[color:var(--color-dusty-rose)]" />
              </div>
              <div>
                <h3 className="mb-2">Zonas de envío</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• El Salto</li>
                  <li>• Tonalá (Centro)</li>
                  <li>• Tlaquepaque</li>
                  <li>• Guadalajara Centro</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-gradient-to-br from-[color:var(--color-soft-pink)] to-[color:var(--color-beige)] p-10 rounded-2xl shadow-md">
            <h3 className="mb-6">Solicita tu Cotización</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Nombre</label>
                <input
                  type="text"
                  placeholder="¿Cómo te llamas?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[color:var(--color-dusty-rose)]"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">¿Qué necesitas?</label>
                <textarea
                  rows={4}
                  placeholder="Ej. Ramo para cumpleaños, fecha, presupuesto aproximado…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[color:var(--color-dusty-rose)] resize-none"
                />
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[color:var(--color-dusty-rose)] text-white py-3 rounded-full hover:bg-[color:var(--color-soft-pink)] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar por WhatsApp
              </a>

              <p className="text-sm text-gray-600 text-center">
                Se abrirá WhatsApp con tu mensaje listo para enviar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
