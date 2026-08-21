export type Kit = {
  id: string;
  badge: string;
  badgeClass: string;
  image: string;
  title: string;
  description: string;
  price?: string;
  note?: string;
  action: string;
  actionType: "buy" | "quote";
};

export const individualKits: Kit[] = [
  {
    id: "yesitos",
    badge: "INDIVIDUAL",
    badgeClass: "bg-celeste",
    image: "/images/venta/kitYesitos.webp",
    title: "Kits Yesitos",
    description: "Incluye 6 yesitos, 1 pincel y 5 potecitos de pintura.",
    price: "$5.000",
    action: "LO QUIERO",
    actionType: "buy",
  },
  {
    id: "tote-potecitos",
    badge: "INDIVIDUAL",
    badgeClass: "bg-naranja",
    image: "/images/venta/kitTote.webp",
    title: "Kits Tote",
    description: "Incluye tote, 5 potecitos de pintura, pinceles.",
    price: "$6.000",
    action: "LO QUIERO",
    actionType: "buy",
  },
];

export const groupKits: Kit[] = [
  {
    id: "eventos",
    badge: "PARA CELEBRAR JUNTOS",
    badgeClass: "bg-lila",
    image: "/images/venta/kitEvento.webp",
    title: "Kit Eventos",
    description: "Ideal para festejos. Vos elegís la cantidad de kits.",
    note: "Consultá por cantidades y opciones personalizadas.",
    action: "PEDIR COTIZACIÓN",
    actionType: "quote",
  },
];

export const kits = [...individualKits, ...groupKits];