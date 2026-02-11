"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/app/catalogo/products";

const categories = ["Todos", "Ramos", "Bodas", "Eventos", "Productos"];

export function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [randomProducts, setRandomProducts] = useState<typeof products>([]);

  useEffect(() => {
    const shuffled = [...products]
      .sort(() => 0.5 - Math.random())
      .slice(0, 8);

    setRandomProducts(shuffled);
  }, []);

  const filteredProducts =
    selectedCategory === "Todos"
      ? randomProducts
      : randomProducts.filter(
          (p) => p.category === selectedCategory
        );

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
            Descubre nuestra selección de arreglos florales y productos personalizados.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-[color:var(--color-dusty-rose)] text-black"
                  : "bg-[color:var(--color-cream)] text-[color:var(--color-dark-sage)] hover:bg-[color:var(--color-beige)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Botón */}
        <div className="mt-12 text-center">
          <Link
            href="/catalogo"
            className="inline-block rounded-full bg-[color:var(--color-dusty-rose)] px-8 py-3 text-black font-medium hover:opacity-90 transition"
          >
            Ver catálogo completo
          </Link>
        </div>
      </div>
    </section>
  );
}
