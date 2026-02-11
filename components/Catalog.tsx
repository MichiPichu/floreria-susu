"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, Product } from "@/app/catalogo/products";

export function Catalog() {
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);

  useEffect(() => {
    const shuffled = [...products]
      .sort(() => 0.5 - Math.random())
      .slice(0, 8);

    setRandomProducts(shuffled);
  }, []);

  return (
    <section
      id="catalogo"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[color:var(--color-cream)] to-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="mb-6 text-3xl font-semibold">
            Nuestro Catálogo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Descubre algunos de nuestros arreglos más especiales.
          </p>
        </div>

        {/* Productos aleatorios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {randomProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Botón */}
        <div className="mt-16 text-center">
          <Link
            href="/catalogo"
            className="inline-block rounded-full bg-[color:var(--color-dusty-rose)] px-8 py-3 text-white font-medium hover:opacity-90 transition"
          >
            Ver catálogo completo
          </Link>
        </div>
      </div>
    </section>
  );
}
