import { contact } from "@/content/pt-BR/contact";
import { experience } from "@/content/pt-BR/experience";
import { hero } from "@/content/pt-BR/hero";
import { nav } from "@/content/pt-BR/nav";
import { sections } from "@/content/pt-BR/sections";
import { site } from "@/content/pt-BR/site";
import { stack } from "@/content/pt-BR/stack";
import type { SiteContent } from "@/content/types";

export const ptBR: SiteContent = {
  metadata: site.metadata,
  sections,
  hero,
  nav,
  stack,
  experience,
  contact,
};
