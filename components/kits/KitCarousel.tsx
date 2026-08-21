"use client";

import useEmblaCarousel from "embla-carousel-react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import { Kit } from "./data";
import KitCard from "./KitCard";

type KitCarouselProps = {
  kits: Kit[];
};

export default function KitCarousel({ kits }: KitCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", dragFree: true, loop: false });
  const hasMultipleKits = kits.length > 1;

  return (
    <div className="relative">
      {hasMultipleKits && <button type="button" onClick={() => emblaApi?.scrollPrev()} aria-label="Ver kits anteriores" className="absolute -left-3 top-1/2 z-10 hidden size-10 -translate-y-1/2 place-items-center rounded-full border-2 border-rosa bg-white text-rosa shadow-sm transition hover:bg-rosa hover:text-white lg:grid"><LuChevronLeft className="size-5" /></button>}
      {hasMultipleKits && <button type="button" onClick={() => emblaApi?.scrollNext()} aria-label="Ver más kits" className="absolute -right-3 top-1/2 z-10 hidden size-10 -translate-y-1/2 place-items-center rounded-full border-2 border-rosa bg-white text-rosa shadow-sm transition hover:bg-rosa hover:text-white lg:grid"><LuChevronRight className="size-5" /></button>}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5 px-1 py-2 lg:px-3">
          {kits.map((kit) => <div key={kit.id} className="w-[86%] shrink-0 sm:w-[46%] lg:w-[calc((100%-3.75rem)/4)]"><KitCard kit={kit} /></div>)}
        </div>
      </div>
    </div>
  );
}