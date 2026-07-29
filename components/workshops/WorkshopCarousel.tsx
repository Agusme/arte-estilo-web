"use client";

import useEmblaCarousel from "embla-carousel-react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import { Workshop } from "../types/workshop";
import WorkshopCard from "./WorkshopCard";

interface WorkshopCarouselProps {
  workshops: Workshop[];
}

export default function WorkshopCarousel({ workshops }: WorkshopCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    loop: false,
  });

  return (
    <div className="relative">
      {/* Flecha izquierda */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-rosa text-white shadow-lg transition hover:scale-105"
      >
        <LuChevronLeft className="h-5 w-5" />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-rosa text-white shadow-lg transition hover:scale-105"
      >
        <LuChevronRight className="h-5 w-5" />
      </button>

      {/* Carrusel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5 px-3 py-2">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="min-w-[88%] flex-[0_0_88%] px-1 sm:min-w-[48%] sm:flex-[0_0_48%] md:min-w-[34%] md:flex-[0_0_34%] lg:min-w-[24%] lg:flex-[0_0_24%]"
            >
              <WorkshopCard workshop={workshop} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
