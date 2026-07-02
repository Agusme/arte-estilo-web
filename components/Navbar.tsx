"use client";

import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  items: NavItem[];
  variant?: "desktop" | "mobile";
  isMobileOpen?: boolean;
  onMobileLinkClick?: () => void;
};

export default function Navbar({
  items,
  variant = "desktop",
  isMobileOpen = false,
  onMobileLinkClick,
}: NavbarProps) {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash || "#inicio");

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  if (variant === "desktop") {
    return (
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
        {items.map((item) => {
          const isActive = item.href === activeHash;
          return (
            <a
              key={item.href}
              href={item.href}
              className={`px-4 pb-1 text-sm by-agus-mena-font transition hover:text-rosa ${isActive ? "text-rosa border-b-2 border-rosa" : "text-[#4B5352]"}`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    );
  }

  if (!isMobileOpen) {
    return null;
  }

  return (
    <div className="border-t border-rose-100 bg-[#fff7f3] px-4 pb-4 lg:hidden">
      <nav
        className="mx-auto flex max-w-7xl flex-col gap-1 py-3"
        aria-label="Mobile"
      >
        {items.map((item) => {
          const isActive = item.href === activeHash;
          return (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-2xl px-4 py-3 text-base font-bold transition hover:bg-white hover:text-rosa ${isActive ? "bg-white text-rosa" : "text-[#6f6159]"}`}
              onClick={onMobileLinkClick}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noreferrer"
        className="ml-auto hidden items-center gap-2 rounded-full bg-rosa px-4 py-2 text-sm  text-white shadow-sm transition hover:bg-[#ff81b8] sm:flex by-agus-mena-font"
      >
        <span>Reserv&aacute; tu lugar</span>
        <span className="text-2xl leading-none" aria-hidden="true">
          ♡
        </span>
      </a>
    </div>
  );
}
