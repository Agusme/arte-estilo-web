"use client";

import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Navbar from "./Navbar";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Talleres", href: "#talleres" },
  { label: "Galeria", href: "#galeria" },
  { label: "Eventos", href: "#eventos" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rose-100 bg-[#fff7f3]/95 backdrop-blur">
      <div className="bg-[#ffc4cf] text-[#4f403c]">
        <div className="mx-auto grid min-h-10 max-w-7xl grid-cols-1 sm:grid-cols-[1fr_6fr] items-center gap-3 px-4 text-xs font-semibold sm:px-6 lg:px-8">
          <div className=" hidden items-center gap-3 sm:flex">
            <a
              href="https://www.instagram.com/arteyestiloam/"
              target="_blank"
              rel="noreferrer"
              className="grid size-7 place-items-center rounded-full text-[11px] transition hover:bg-white/55"
              aria-label="Instagram de Arte y Estilo"
            >
              <FaInstagram className="size-5" aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="grid size-7 place-items-center rounded-full text-[11px] transition hover:bg-white/55"
              aria-label="WhatsApp de Arte y Estilo"
            >
              <FaWhatsapp className="size-5" aria-hidden="true" />
            </a>
          </div>
          <div className="w-full overflow-hidden">
            <div className="slide-horizontal inline-flex items-center whitespace-nowrap">
              <span className="text-center uppercase tracking-[0.16em] mr-[3cm]">
                Talleres creativos para ni&ntilde;as en Tucum&aacute;n <span aria-hidden="true">&hearts;</span>
              </span>
              <span className="text-center uppercase tracking-[0.16em] mr-[3cm]">
                Talleres creativos para ni&ntilde;as en Tucum&aacute;n <span aria-hidden="true">&hearts;</span>
              </span>
              <span className="text-center uppercase tracking-[0.16em] mr-[3cm]">
                Talleres creativos para ni&ntilde;as en Tucum&aacute;n <span aria-hidden="true">&hearts;</span>
              </span>
              <span className="text-center uppercase tracking-[0.16em]">
                Talleres creativos para ni&ntilde;as en Tucum&aacute;n <span aria-hidden="true">&hearts;</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="group flex items-center gap-3"
          aria-label="Arte y Estilo, ir al inicio"
        >
          <span className="relative block pr-9 leading-none">
            <span className="block logo-font whitespace-nowrap text-[1.9rem] font-normal leading-none text-[#ff7b1f] drop-shadow-[0_1px_0_rgba(255,255,255,0.9)] sm:text-[2.25rem] lg:text-[2rem]">
              arte{" "}
              <span
                className="inline-block align-middle text-[1.2rem] sm:text-[1.6rem] lg:text-[1.45rem] font-semibold leading-none"
                style={{ transform: "scale(0.95)", transformOrigin: "center" }}
              >
                &amp;
              </span>{" "}
              estilo
            </span>
            <span
              className="absolute right-1 top-0 -translate-y-1 text-[1rem] text-rosa"
              aria-hidden="true"
            >
              ♡
            </span>
            <span className="mt-1 block text-center by-agus-mena-font text-[0.78rem] font-bold uppercase tracking-[0.18em] text-rosa">
              BY AGUS MENA
            </span>
          </span>
        </a>

        <Navbar items={navItems} variant="desktop" />

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="ml-auto hidden items-center gap-2 rounded-full bg-rosa px-4 py-2 text-sm text-white shadow-sm transition hover:bg-[#ff81b8] sm:flex by-agus-mena-font"
          >
            <span>Reserv&aacute; tu lugar</span>
            <span className="text-2xl leading-none" aria-hidden="true">
              ♡
            </span>
          </a>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-rose-100 bg-white text-[#e85f88] lg:hidden"
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
