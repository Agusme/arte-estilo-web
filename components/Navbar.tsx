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
  if (variant === "desktop") {
    return (
      <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-4 py-2 text-sm font-semibold text-[#6f6159] transition hover:bg-white hover:text-[#e85f88]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    );
  }

  if (!isMobileOpen) {
    return null;
  }

  return (
    <div className="border-t border-rose-100 bg-[#fff7f3] px-4 pb-4 md:hidden">
      <nav
        className="mx-auto flex max-w-7xl flex-col gap-1 py-3"
        aria-label="Mobile"
      >
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-2xl px-4 py-3 text-base font-bold text-[#6f6159] transition hover:bg-white hover:text-[#e85f88]"
            onClick={onMobileLinkClick}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noreferrer"
        className="mx-auto block max-w-7xl rounded-full bg-[#f4c45f] px-5 py-3 text-center text-sm font-black text-[#5b4636] shadow-sm"
      >
        Inscribite por WhatsApp
      </a>
    </div>
  );
}
