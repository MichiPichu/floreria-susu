import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero / Inicio */}
      <section id="inicio">
        <Hero />
      </section>

      {/* Catálogo (solo 8 productos) */}
      <section id="catalogo">
        <Catalog />
      </section>

      {/* Nosotros */}
      <section id="nosotros">
        <About />
      </section>

      {/* Contacto */}
      <section id="contacto">
        <Contact />
      </section>
    </main>
  );
}
