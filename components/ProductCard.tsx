"use client";

import { MessageCircle } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

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
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[--color-beige]">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-[--color-dusty-rose] text-white px-3 py-1 rounded-full text-xs">
            {category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 text-xs mb-3 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-xl text-[--color-dusty-rose]">
            {price}
          </span>
        </div>

        <a
          href={`https://wa.me/523310767254?text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[--color-dusty-rose] text-white py-2.5 rounded-full hover:bg-[--color-soft-pink] transition-colors text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          Pedir por WhatsApp
        </a>
      </div>
    </div>
  );
}
