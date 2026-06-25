import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff7f3] text-[#5b4636]">
      <Header />
      <main id="inicio" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <section className="max-w-2xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-[#98ad6f]">
            Taller de arte
          </p>
          <h1 className="text-4xl font-black leading-tight text-[#e85f88] sm:text-6xl">
            Tu lugar favorito para crear, jugar y desconectar.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#7a6a61]">
            Estamos armando la web de Arte y Estilo. Primero dejamos listo el
            navbar y despues sumamos las secciones del taller.
          </p>
        </section>
      </main>
    </div>
  );
}
