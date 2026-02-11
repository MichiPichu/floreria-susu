"use client";

import { useState } from "react";
import { products } from "./products";
import ProductCard from "@/components/ProductCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const categories = ["Todos", "Ramos", "Productos"];

export default function CatalogoPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Todos" ||
      product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />

      <main className="pt-32 px-4 pb-24 bg-gradient-to-br from-white via-[color:var(--color-cream)] to-white min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* Título */}
          <h1 className="text-center text-4xl font-semibold mb-12">
            Catálogo
          </h1>

          {/* Filtros */}
          <div className="bg-white p-6 rounded-2xl shadow-sm mb-12 flex flex-col lg:flex-row gap-6 justify-between items-center">

            {/* Categorías */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === category
                      ? "bg-[color:var(--color-dusty-rose)] text-white shadow-md"
                      : "bg-[color:var(--color-cream)] text-[color:var(--color-dark-sage)] hover:bg-[color:var(--color-beige)]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Buscador */}
            <input
              type="text"
              placeholder="Buscar producto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full lg:w-72 border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--color-dusty-rose)]"
            />
          </div>

          {/* Productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Mensaje vacío */}
          {filteredProducts.length === 0 && (
            <p className="text-center mt-12 text-gray-500">
              No se encontraron productos.
            </p>
          )}
        </div>
      </main>
    </>
  );
}
