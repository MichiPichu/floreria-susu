import { products } from "./products";
import ProductCard from "@/components/ProductCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function CatalogoPage() {
  return (
    <>
      <Header />

      <main className="pt-32 px-4">
        <h1 className="text-center text-4xl font-semibold mb-16">
          Catálogo
        </h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-24">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </>
  );
}
