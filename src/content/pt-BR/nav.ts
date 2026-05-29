import type { NavContent } from "@/content/types";
import { BRAND_NAME } from "@/lib/brand";

export const nav: NavContent = {
  items: [
    { label: "Soluções", href: "#solucoes" },
    { label: "Entregas", href: "#entregas" },
    { label: "Contato", href: "#contato" },
  ],
  homeAriaLabel: `${BRAND_NAME}, início`,
  mainMenuAriaLabel: "Menu principal",
  mobileMenuAriaLabel: "Menu mobile",
  openMenu: "Abrir menu",
  closeMenu: "Fechar menu",
  menuToggleOpen: "Menu",
  menuToggleClose: "Fechar",
};
