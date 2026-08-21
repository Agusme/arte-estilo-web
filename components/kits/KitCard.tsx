import Image from "next/image";
import { LuHeart, LuMessageCircle, LuShoppingBag, LuUsersRound } from "react-icons/lu";

import { Kit } from "./data";

type KitCardProps = {
  kit: Kit;
  featured?: boolean;
};

export default function KitCard({ kit, featured = false }: KitCardProps) {
  const isQuote = kit.actionType === "quote";

  return (
    <article className={`group relative h-full overflow-hidden rounded-[28px] border border-[#f6d8e1] bg-white shadow-[0_12px_34px_rgba(219,130,152,0.08)] ${featured ? "border-rosa/60" : ""}`}>
      <div className={`relative overflow-hidden ${featured ? "aspect-[1.45/1]" : "aspect-[1.03/1]"}`}>
        <Image src={kit.image} alt={kit.title} fill sizes="(max-width: 640px) 86vw, (max-width: 1024px) 46vw, 31vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-extrabold tracking-wide text-white ${kit.badgeClass}`}>{kit.badge}</span>
      </div>

      <div className="relative flex min-h-[266px] flex-col px-6 pb-7 pt-8 text-center">
        <div className="absolute -top-5 left-1/2 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-[#f6d8e1] bg-white text-rosa shadow-sm"><LuHeart className="size-5" /></div>
        <h3 className="text-lg font-extrabold text-gris">{kit.title}</h3>
        <p className="mx-auto mt-2 max-w-[255px] text-sm font-medium leading-5 text-[#6d6662]">{kit.description}</p>
        {kit.note && <div className="mt-4 flex items-start gap-2 rounded-xl bg-rosa-claro/60 px-3 py-3 text-left text-xs leading-4 text-[#6d6662]"><LuUsersRound className="mt-0.5 size-5 shrink-0 text-rosa" /><p>{kit.note}</p></div>}
        {kit.price && <p className="mt-auto pt-5 text-xl font-extrabold text-celeste">{kit.price}</p>}
        <a href="https://wa.me/" target="_blank" rel="noreferrer" className="mt-auto inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full bg-rosa px-4 py-2.5 text-xs font-extrabold tracking-wide text-white transition hover:bg-[#ff81b8]">
          {kit.action} {isQuote ? <LuMessageCircle className="size-4" /> : <LuShoppingBag className="size-4" />}
        </a>
      </div>
    </article>
  );
}