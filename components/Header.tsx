"use client";

import { useState } from "react";
import Navbar from "./Navbar";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Talleres", href: "#talleres" },
  { label: "Galeria", href: "#galeria" },
  { label: "Eventos", href: "#eventos" },
  { label: "Ubicacion", href: "#ubicacion" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rose-100 bg-[#fff7f3]/95 backdrop-blur">
      <div className="bg-[#ffc4cf] text-[#4f403c]">
        <div className="mx-auto grid min-h-10 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 text-xs font-semibold sm:px-6 lg:px-8">
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="grid size-7 place-items-center rounded-full text-[11px] transition hover:bg-white/55"
              aria-label="Instagram de Arte y Estilo"
            >
              IG
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="grid size-7 place-items-center rounded-full text-[11px] transition hover:bg-white/55"
              aria-label="WhatsApp de Arte y Estilo"
            >
              WA
            </a>
          </div>

          <p className="font-[var(--font-nunito-sans)] text-center  uppercase tracking-[0.16em]">
            Talleres creativos para ni&ntilde;as en Tucum&aacute;n ❤️
          </p>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="ml-auto hidden items-center gap-3 rounded-full px-2 py-1 text-[11px] transition hover:bg-white/40 sm:flex"
          >
            <span className="font-semibold">Reservá tu lugar</span>
            <span
              className="grid size-9 place-items-center rounded-full border border-[#f09aaa] bg-[#ffb0bf] text-[#d95778] shadow-sm"
              aria-hidden="true"
            >
              &#10047;
            </span>
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="group flex items-center gap-3"
          aria-label="Arte y Estilo, ir al inicio"
        >
          <span className="grid size-11 place-items-center rounded-full bg-[#f7b6c6] text-lg font-black text-white shadow-sm">
            ae
          </span>
          <span className="leading-none">
            <span className="block text-xl font-black text-[#e85f88]">
              arte & estilo
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-[#98ad6f]">
              art room
            </span>
          </span>
        </a>

        <Navbar
          items={navItems}
          variant="desktop"
        />

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-[#e85f88] transition hover:text-[#c94972]"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#f4c45f] px-5 py-2.5 text-sm font-black text-[#5b4636] shadow-sm transition hover:bg-[#efb43f]"
          >
            Inscribite
          </a>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-rose-100 bg-white text-[#e85f88] md:hidden"
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className="h-0.5 rounded-full bg-current" />
            <span className="h-0.5 rounded-full bg-current" />
            <span className="h-0.5 rounded-full bg-current" />
          </span>
        </button>
      </div>

      <Navbar
        items={navItems}
        variant="mobile"
        isMobileOpen={isMenuOpen}
        onMobileLinkClick={() => setIsMenuOpen(false)}
      />
    </header>
  );
}
