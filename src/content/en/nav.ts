import { sections } from "@/content/en/sections";
import type { NavContent } from "@/content/types";
import { NAME } from "@/lib/brand";

export const nav: NavContent = {
  items: [
    { label: "Stack", href: `#${sections.stack}` },
    { label: "Experience", href: `#${sections.experience}` },
    { label: "Contact", href: `#${sections.contact}` },
  ],
  homeAriaLabel: `${NAME}, home`,
  mainMenuAriaLabel: "Main menu",
  mobileMenuAriaLabel: "Mobile menu",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  menuToggleOpen: "Menu",
  menuToggleClose: "Close",
};
