"use client";

import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export default function ProductCard({
  name,
  description,
  price,
  image,
  category,
}: ProductCardProps) {
  const whatsappMessage = `Hola, me interesa el producto: ${name} - ${price}`;
  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <a
      href={`https://wa.me/523310767254?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[--color-beige] hover:-translate-y-1"
    >
      {/* Imagen */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Categoría */}
        <div className="absolute top-3 left-3">
          <span className="bg-[--color-dusty-rose] text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
            {category}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col justify-between h-[180px]">
        <div>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-[--color-dusty-rose] transition-colors">
            {name}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Precio + acción */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-semibold text-[--color-dusty-rose]">
            {price}
          </span>

          <div className="flex items-center gap-1 text-sm text-[--color-dark-sage] opacity-0 group-hover:opacity-100 transition">
            <MessageCircle className="w-4 h-4" />
            Pedir
          </div>
        </div>
      </div>
    </a>
  );
}
