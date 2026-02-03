"use client";

import { Phone, Mail, MapPin, MessageCircle, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[color:var(--color-cream)] to-[color:var(--color-beige)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-6">Contáctanos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ¿Tienes alguna pregunta o quieres hacer un pedido? Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[color:var(--color-soft-pink)] rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-[color:var(--color-dusty-rose)]" />
              </div>
              <div>
                <h3 className="mb-1">Teléfono</h3>
                <a href="tel:+523310767254" className="text-gray-600 hover:text-[color:var(--color-dusty-rose)] transition-colors">
                  (33) 1076 7254
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[color:var(--color-soft-pink)] rounded-full flex items-center justify-center">
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
                  Enviar mensaje
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[color:var(--color-soft-pink)] rounded-full flex items-center justify-center">
                <Instagram className="w-6 h-6 text-[color:var(--color-dusty-rose)]" />
              </div>
              <div>
                <h3 className="mb-1">Instagram</h3>
                <p className="text-gray-600">@susufloreria</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[color:var(--color-soft-pink)] rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[color:var(--color-dusty-rose)]" />
              </div>
              <div>
                <h3 className="mb-1">Ubicación</h3>
                <p className="text-gray-600">Guadalajara, Jalisco, México</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-gradient-to-br from-[color:var(--color-soft-pink)] to-[color:var(--color-beige)] p-10 rounded-2xl shadow-md">
            <h3 className="mb-6">Solicita tu Cotización</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-gray-700">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-dusty-rose)]"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-700">Teléfono</label>
                <input
                  type="tel"
                  placeholder="Tu teléfono"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-dusty-rose)]"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-700">¿Qué necesitas?</label>
                <textarea
                  rows={4}
                  placeholder="Describe tu pedido o evento"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-dusty-rose)] resize-none"
                />
              </div>
              <a
                href="https://wa.me/523310767254?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[color:var(--color-dusty-rose)] text-white py-3 rounded-full hover:bg-[color:var(--color-soft-pink)] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar por WhatsApp
              </a>
              <p className="text-sm text-gray-600 text-center">
                Al hacer clic, se abrirá WhatsApp con tu mensaje
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}