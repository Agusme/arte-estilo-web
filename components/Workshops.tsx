"use client";

import { useState } from "react";
import {
  LuHeart,
  LuPalette,
  LuSparkles,
  LuLayoutGrid,
  LuStar,
  LuFlower2,
} from "react-icons/lu";

import { PinkAccent } from "./ui/PinkAccent";

const tabs = [
  {
    id: "todos",
    label: "Todos",
    icon: LuLayoutGrid,
  },
  {
    id: "ediciones",
    label: "Ediciones",
    icon: LuHeart,
  },
  {
    id: "proximas",
    label: "Próximamente",
    icon: LuStar,
  },
  {
    id: "especiales",
    label: "Especiales",
    icon: LuSparkles,
  },
];

const workshops = [
  {
    title: "Vacaciones de Invierno",
    description: "Tote Bags · Yesitos · Bastidores",
    icon: LuPalette,
    category: "ediciones",
  },
  {
    title: "Campamento de Verano",
    description: "Muy pronto...",
    icon: LuSparkles,
    category: "proximas",
  },
  {
    title: "Halloween Creativo",
    description: "Próximamente",
    icon: LuStar,
    category: "especiales",
  },
];

export default function Workshops() {
  const [activeTab, setActiveTab] = useState("todos");

  const filteredWorkshops =
    activeTab === "todos"
      ? workshops
      : workshops.filter((item) => item.category === activeTab);

  return (
    <section
      id="talleres"
      className="relative overflow-hidden bg-[#fff9f6] py-14"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* ===== TÍTULO ===== */}

        <div className="relative mb-8 flex items-center justify-center gap-3 text-center">
          <PinkAccent />

          <h2 className="text-xl font-bold text-gris md:text-2xl">TALLERES</h2>

          <PinkAccent className="scale-x-[-1]" />
        </div>

        {/* ================= TABS ================= */}

<div className="mb-10 overflow-x-auto">
  <div className="flex w-max min-w-full justify-start gap-3 px-1 md:w-auto md:min-w-0 md:justify-center">
    {tabs.map((tab) => {
      const Icon = tab.icon;
      const isActive = activeTab === tab.id;

      const colorClass = isActive
        ? "text-white"
        : tab.id === "ediciones"
        ? "tab-icon-ediciones"
        : tab.id === "proximas"
        ? "tab-icon-proximas"
        : tab.id === "especiales"
        ? "tab-icon-especiales"
        : "tab-icon-todos";

      return (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
            isActive
              ? "border-rosa bg-rosa text-white shadow-md"
              : "border-[#F5CDD9] bg-white text-gris hover:border-rosa hover:bg-rosa/5"
          }`}
        >
          <Icon className={`h-4 w-4 ${colorClass}`} />
          <span>{tab.label}</span>
        </button>
      );
    })}
  </div>
</div>

        {/* ACÁ SIGUEN LAS CARDS */}

        <div className="grid gap-6 md:grid-cols-3">
          {filteredWorkshops.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[28px] border border-[#F5CDD9] bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rosa/10 text-rosa">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-3 text-lg font-bold text-rosa">
                  {item.title}
                </h3>

                <p className="text-gris-claro">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
