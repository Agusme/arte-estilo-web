import {
  LuHeart,
  LuLightbulb,
  LuPalette,
  LuSmile,
  LuUsers,
} from "react-icons/lu";

import { PinkAccent } from "./ui/PinkAccent";
import { BenefitIcon } from "./ui/BenefitIcon";

const items = [
  {
    title: "GRUPOS CHIQUITOS",
    description: "Máximo 6 niñas por turno para que todas disfruten.",
    icon: LuUsers,
    iconClass: "bg-rosa",
    titleColor: "text-rosa",
  },
  {
    title: "MATERIALES INCLUIDOS",
    description:
      "Usamos materiales de calidad. Vos solo traés las ganas de crear.",
    icon: LuPalette,
    iconClass: "bg-naranja",
    titleColor: "text-naranja",
  },
  {
    title: "ACTIVIDADES CREATIVAS",
    description:
      "Proyectos únicos y originales pensados para estimular la imaginación.",
    icon: LuLightbulb,
    iconClass: "bg-lila",
    titleColor: "text-lila",
  },
  {
    title: "AMBIENTE CÁLIDO",
    description:
      "Un espacio pensado para que se sientan cómodas, inspiradas y felices.",
    icon: LuHeart,
    iconClass: "bg-celeste",
    titleColor: "text-celeste",
  },
  {
    title: "PARA TODAS",
    description:
      "Para niñas de 4 a 12 años que les encanta crear.",
    icon: LuSmile,
    iconClass: "bg-rosa",
    titleColor: "text-rosa",
  },
];

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative overflow-hidden bg-[#fff9f6] py-12"
    >
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-center justify-center gap-3 text-center">
          <PinkAccent />

          <h2 className="text-xl font-bold text-gris md:text-2xl">
            ACÁ CREÁS, TE DIVERTÍS Y TE LLEVÁS ALGO ÚNICO
          </h2>

          <PinkAccent className="scale-x-[-1]" />
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  w-full
                  max-w-[205px]
                  rounded-[32px]
                  border
                  border-[#F5CDD9]
                  bg-white
                  px-5
                  py-7
                  text-center
                  transition-all
                  duration-300
                  hover:shadow-lg
                "
              >
                <BenefitIcon
                  icon={Icon}
                  className={item.iconClass}
                />

                <h3
                  className={`mb-3 text-[17px] font-extrabold uppercase leading-5 ${item.titleColor}`}
                >
                  {item.title}
                </h3>

                <p className="mx-auto max-w-[155px] text-[15px] leading-8 text-gris-claro">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}