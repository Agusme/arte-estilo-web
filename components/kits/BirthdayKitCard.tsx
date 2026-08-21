import Image from "next/image";
import { LuHeart, LuMessageCircle, LuUsersRound } from "react-icons/lu";

export default function BirthdayKitCard() {
  return (
    <article className="group overflow-hidden rounded-[26px] border border-dashed border-rosa/70 bg-white shadow-[0_10px_28px_rgba(219,130,152,0.07)]">
      <div className="relative aspect-[2.55/1] overflow-hidden">
        <Image src="/images/workshops/ador.webp" alt="Kits para cumpleaños" fill sizes="(max-width: 1024px) 90vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute right-3 top-3 max-w-16 rotate-12 rounded-full bg-rosa px-2 py-3 text-center text-[9px] font-extrabold leading-3 text-white shadow-sm">¡El más elegido para cumpleaños!</span>
      </div>

      <div className="relative flex min-h-[226px] flex-col px-6 pb-5 pt-8 text-center">
        <div className="absolute -top-5 left-1/2 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-[#f6d8e1] bg-white text-rosa shadow-sm"><LuHeart className="size-5" /></div>
        <h3 className="text-base font-extrabold text-gris">Kits para Cumpleaños</h3>
        <p className="mx-auto mt-2 max-w-sm text-xs font-medium leading-5 text-[#6d6662]">Ideal para festejos y eventos. Vos elegís la cantidad de kits.</p>
        <div className="mx-auto mt-4 flex max-w-sm items-start gap-2 rounded-xl bg-rosa-claro/60 px-3 py-3 text-left text-[10px] leading-4 text-[#6d6662]">
          <LuUsersRound className="mt-0.5 size-5 shrink-0 text-rosa" />
          <p>Elegí totes, yesitos o bastidores. Consultá por cantidades y opciones personalizadas.</p>
        </div>
        <a href="https://wa.me/" target="_blank" rel="noreferrer" className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-rosa px-4 py-2.5 text-[10px] font-extrabold text-white transition hover:bg-[#ff81b8]">PEDIR COTIZACIÓN <LuMessageCircle className="size-4" /></a>
      </div>
    </article>
  );
}