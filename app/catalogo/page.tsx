import ProductCard from "@/components/ProductCard";

const placeholderImage =
  "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80";

const products = [
  {
    id: 1,
    name: "Ramo de Rosas Pastel",
    description:
      "Delicado ramo de rosas en tonos pastel, perfecto para cualquier ocasión especial.",
    price: "$450",
    category: "Ramos",
    image:
      "https://images.unsplash.com/photo-1560113406-36a33855c51e?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: 2,
    name: "Arreglo para Boda",
    description:
      "Elegante arreglo floral diseñado especialmente para ceremonias y eventos nupciales.",
    price: "$850",
    category: "Bodas",
    image:
      "https://images.unsplash.com/photo-1706741921974-967b3590743c?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: 3,
    name: "Bouquet de Novia",
    description:
      "Hermoso bouquet romántico con flores suaves y delicadas para el día más especial.",
    price: "$650",
    category: "Bodas",
    image:
      "https://images.unsplash.com/photo-1538404104467-04371edc7796?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: 4,
    name: "Ramo Silvestre",
    description:
      "Composición natural con flores silvestres en tonos crema y beige.",
    price: "$380",
    category: "Ramos",
    image:
      "https://images.unsplash.com/photo-1682297898983-e9b62d752dbb?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: 5,
    name: "Centro de Mesa Elegante",
    description:
      "Sofisticado centro de mesa ideal para eventos y celebraciones especiales.",
    price: "$550",
    category: "Eventos",
    image:
      "https://images.unsplash.com/photo-1759932713423-733d36e415d5?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: 6,
    name: "Arreglo de Cumpleaños",
    description:
      "Alegre arreglo floral perfecto para celebrar un día especial.",
    price: "$420",
    category: "Eventos",
    image:
      "https://images.unsplash.com/photo-1689061732262-2f8a68fa99cb?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: 7,
    name: "Kit Personalizado Susu",
    description:
      "Playera, gorra y bolsa personalizadas con el logo de Florería Susu.",
    price: "$580",
    category: "Productos",
    image: placeholderImage,
  },
  {
    id: 8,
    name: "Playera Susu",
    description:
      "Playera de algodón premium con diseño exclusivo de Florería Susu.",
    price: "$280",
    category: "Productos",
    image: placeholderImage,
  },
  {
    id: 9,
    name: "Gorra Susu",
    description:
      "Gorra ajustable en color beige con bordado del logo Susu.",
    price: "$220",
    category: "Productos",
    image: placeholderImage,
  },
];


export default function CatalogoPage() {
  return (
    <main className="pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold mb-10 text-center">
          Catálogo
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </main>
  );
}
