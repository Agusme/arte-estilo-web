import Image from "next/image";
import { LuHeart, LuImages } from "react-icons/lu";

import { Workshop } from "../types/workshop";

interface WorkshopCardProps {
  workshop: Workshop;
}

export default function WorkshopCard({ workshop }: WorkshopCardProps) {
  const badge = {
    realizado: {
      text: "¡REALIZADO!",
      className: "bg-celeste text-white",
    },
    abierto: {
      text: "¡INSCRIPCIONES ABIERTAS!",
      className: "bg-rosa text-white",
    },
    proximamente: {
      text: "¡MUY PRONTO!",
      className: "bg-naranja text-white",
    },
  };

  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#F6D8E1] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300  hover:shadow-2xl">
      {/* Imagen */}
      <div className="relative aspect-4/3 overflow-hidden rounded-t-[28px]">
        <Image
          src={workshop.image}
          alt={workshop.title}
          fill
          sizes="(max-width: 640px) 88vw, (max-width: 768px) 48vw, (max-width: 1024px) 34vw, 24vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-extrabold tracking-wide ${badge[workshop.status].className}`}
        >
          {badge[workshop.status].text}
        </span>
      </div>

      {/* Contenido */}
      <div className="space-y-3 px-5 py-5 text-center">
        <div>
          <h3 className="text-[18px] font-bold text-gris">{workshop.title}</h3>
          <p className="mt-1 text-sm text-gris-claro  ">{workshop.edition}</p>
        </div>

        <LuHeart className="mx-auto h-4 w-4 text-rosa" />

        <button className="mx-auto flex w-full max-w-50 items-center justify-center gap-2 rounded-full bg-rosa-claro px-4 py-2 text-xs font-bold uppercase tracking-wide text-rosa transition-all duration-300 hover:bg-rosa hover:text-white">
          VER FOTOS
          <LuImages className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
