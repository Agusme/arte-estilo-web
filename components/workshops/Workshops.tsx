"use client";

import { useState } from "react";
import {
  LuHeart,
  LuSparkles,
  LuLayoutGrid,
  LuStar,
} from "react-icons/lu";

import { PinkAccent } from "../ui/PinkAccent";
import WorkshopCarousel from "./WorkshopCarousel";
import { workshops } from "../data/workshop";
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

   <WorkshopCarousel workshops={filteredWorkshops} />
      </div>
    </section>
  );
}
