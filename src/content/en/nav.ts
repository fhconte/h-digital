import { sections } from "@/content/en/sections";
import type { NavContent } from "@/content/types";
import { BRAND_NAME } from "@/lib/brand";

export const nav: NavContent = {
  items: [
    { label: "Solutions", href: `#${sections.solutions}` },
    { label: "Deliveries", href: `#${sections.deliveries}` },
    { label: "Contact", href: `#${sections.contact}` },
  ],
  homeAriaLabel: `${BRAND_NAME}, home`,
  mainMenuAriaLabel: "Main menu",
  mobileMenuAriaLabel: "Mobile menu",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  menuToggleOpen: "Menu",
  menuToggleClose: "Close",
};
