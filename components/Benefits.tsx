import {
  LuHeart,
  LuLightbulb,
  LuPalette,
  LuSmile,
  LuUsers,
} from "react-icons/lu";
import { PinkAccent } from "./ui/PinkAccent";
const items = [
  {
    title: "Grupos chiquitos",
    description: "Máximo 6 niñas por turno para que todas disfruten.",
    icon: LuUsers,
    badgeClass: "bg-rosa/10 text-rosa",
    cardClass: "border-rose-200/80 bg-[#fff8fb]",
  },
  {
    title: "Materiales incluidos",
    description:
      "Usamos materiales de calidad, vos solo traes las ganas de crear.",
    icon: LuPalette,
    badgeClass: "bg-amber-100 text-amber-500",
    cardClass: "border-rose-200/80 bg-[#fff8fb]",
  },
  {
    title: "Actividades creativas",
    description:
      "Proyectos unicos y originales pensados para estimular la imaginación.",
    icon: LuLightbulb,
    badgeClass: "bg-violet-100 text-violet-500",
    cardClass: "border-rose-200/80 bg-[#fff8fb]",
  },
  {
    title: "Ambiente cálido",
    description:
      "Un espacio pensado para que se sientan comodas, inspiradas y felices.",
    icon: LuHeart,
    badgeClass: "bg-emerald-100 text-emerald-600",
    cardClass: "border-rose-200/80 bg-[#fff8fb]",
  },
  {
    title: "Para todas",
    description: " Para niñas de 4 a 12 años que les encanta crear.",
    icon: LuSmile,
    badgeClass: "bg-pink-100 text-pink-500",
    cardClass: "border-rose-200/80 bg-[#fff8fb]",
  },
];

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative overflow-hidden bg-[#fff9f6] py-6"
    >
      <div className="absolute inset-x-0 top-0 h-8 bg-linear-to-b from-white to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-center flex justify-center ">
          <PinkAccent />
          <h2 className="mt-0 text-xl font-bold text-gris ">
            ACÁ CREÁS, TE DIVERTÍS Y TE LLEVÁS ALGO ÚNICO{" "}
          </h2>
          <PinkAccent className="scale-x-[-1]" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`group rounded-[1.75rem] border p-5 shadow-[0_18px_35px_rgba(80,48,53,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(80,48,53,0.12)] ${item.cardClass}`}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${item.badgeClass}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-gris">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-gris-claro">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
