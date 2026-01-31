import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Catalog } from "../components/Catalog";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      {/* Header fijo */}
      <Header />

      {/* Contenido principal */}
      <main>
        {/* Hero / Inicio */}
        <section id="inicio">
          <Hero />
        </section>

        {/* Catálogo */}
        <section id="catalogo">
          <Catalog />
        </section>

        {/* About */}
        <section id="nosotros">
          <About />
        </section> 

        {/* Contacto */}
        <section id="contacto">
          <Contact />
        </section>
      </main>

      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </>
  );
}
