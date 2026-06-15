import { sections } from "@/content/pt-BR/sections";
import type { NavContent } from "@/content/types";
import { NAME } from "@/lib/brand";

export const nav: NavContent = {
  items: [
    { label: "Stack", href: `#${sections.stack}` },
    { label: "Experiência", href: `#${sections.experience}` },
    { label: "Contato", href: `#${sections.contact}` },
  ],
  homeAriaLabel: `${NAME}, início`,
  mainMenuAriaLabel: "Menu principal",
  mobileMenuAriaLabel: "Menu mobile",
  openMenu: "Abrir menu",
  closeMenu: "Fechar menu",
  menuToggleOpen: "Menu",
  menuToggleClose: "Fechar",
};
