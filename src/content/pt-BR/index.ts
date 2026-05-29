import { contact } from "@/content/pt-BR/contact";
import { deliveries } from "@/content/pt-BR/deliveries";
import { hero } from "@/content/pt-BR/hero";
import { nav } from "@/content/pt-BR/nav";
import { site } from "@/content/pt-BR/site";
import { solutions } from "@/content/pt-BR/solutions";
import type { SiteContent } from "@/content/types";

export const ptBR: SiteContent = {
  metadata: site.metadata,
  hero,
  nav,
  solutions,
  deliveries,
  contact,
};
