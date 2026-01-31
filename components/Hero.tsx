"use client";

export function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative min-h-screen px-4 sm:px-6 lg:px-8
        bg-center bg-cover
      "
      style={{
        backgroundImage: "url('/hero-flores.jpg')", 
      }}
    >
      {/* Overlay suave */}
      <div className="absolute inset-0  bg-[color:var(--background)]/65" />

      {/* Contenido */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl sm:text-6xl text-[color:var(--colorVerde)] tracking-tight mb-8">
            Flores para quien nos hace florecer
          </h1>

          <p className="text-xl text-[--color-dark-sage] leading-relaxed">
            Arreglos florales únicos y productos personalizados para tus momentos especiales.
            <br />
            Cada detalle cuenta para hacer brillar tu evento.
          </p>
        </div>
      </div>
    </section>
  );
}
