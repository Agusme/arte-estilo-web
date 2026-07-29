export interface Workshop {
  id: number;
  title: string;
  edition: string;
  image: string;
  status: "realizado" | "proximamente" | "abierto";
  category: "ediciones" | "proximas" | "especiales";
}
