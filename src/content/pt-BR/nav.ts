import { sections } from "@/content/pt-BR/sections";
import type { NavContent } from "@/content/types";
import { BRAND_NAME } from "@/lib/brand";

export const nav: NavContent = {
  items: [
    { label: "Soluções", href: `#${sections.solutions}` },
    { label: "Entregas", href: `#${sections.deliveries}` },
    { label: "Contato", href: `#${sections.contact}` },
  ],
  homeAriaLabel: `${BRAND_NAME}, início`,
  mainMenuAriaLabel: "Menu principal",
  mobileMenuAriaLabel: "Menu mobile",
  openMenu: "Abrir menu",
  closeMenu: "Fechar menu",
  menuToggleOpen: "Menu",
  menuToggleClose: "Fechar",
};
