"use client";

import { Heart, Flower2, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="nosotros" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[--color-beige] via-[--color-soft-pink] to-[--color-beige]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-6">Sobre Florería Susu</h2>
          <p className="text-lg text-[--color-dark-sage] max-w-2xl mx-auto leading-relaxed">
            Flores para quien nos hace florecer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[--color-soft-pink] rounded-full mb-6">
              <Heart className="w-8 h-8 text-[--color-dusty-rose]" />
            </div>
            <h3 className="mb-3">Hecho con Amor</h3>
            <p className="text-gray-600 leading-relaxed">
              Cada arreglo es diseñado con dedicación y cuidado para transmitir tus emociones.
            </p>
          </div>

          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[--color-soft-pink] rounded-full mb-6">
              <Flower2 className="w-8 h-8 text-[--color-dusty-rose]" />
            </div>
            <h3 className="mb-3">Flores Frescas</h3>
            <p className="text-gray-600 leading-relaxed">
              Trabajamos con las flores más frescas para garantizar la calidad de cada entrega.
            </p>
          </div>

          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[--color-soft-pink] rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-[--color-dusty-rose]" />
            </div>
            <h3 className="mb-3">Eventos Especiales</h3>
            <p className="text-gray-600 leading-relaxed">
              Transformamos tus momentos especiales en recuerdos inolvidables con nuestros diseños.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center bg-white/60 backdrop-blur-sm p-10 rounded-2xl">
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            En Florería Susu creemos que cada flor cuenta una historia. Nos especializamos en crear 
            arreglos únicos que reflejan la personalidad y el amor de nuestros clientes. Desde bodas 
            hasta celebraciones íntimas, estamos aquí para hacer florecer tus momentos especiales.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            También ofrecemos productos personalizados como playeras, gorras y bolsas con nuestro 
            diseño exclusivo, perfectos para regalos o para llevar un pedacito de Susu contigo.
          </p>
        </div>
      </div>
    </section>
  );
}