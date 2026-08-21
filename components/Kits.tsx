import KitGrid from "./kits/KitGrid";
import { PinkAccent } from "./ui/PinkAccent";

export default function Kits() {
  return (
    <section id="kits" className="relative overflow-hidden bg-[#fff9f6] py-16 sm:py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <div className="flex items-center justify-center gap-3">
            <PinkAccent />
            <h2 className="text-2xl font-extrabold uppercase tracking-[0.04em] text-gris sm:text-3xl">Elegí tu kit ideal</h2>
            <PinkAccent className="scale-x-[-1]" />
          </div>
          <p className="mx-auto mt-2 max-w-xl text-sm font-semibold leading-6 text-[#5b5350] sm:text-base">Opciones pensadas para cada ocasión</p>
        </header>

        <KitGrid />
      </div>
    </section>
  );
}