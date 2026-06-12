import { contact } from "@/content/en/contact";
import { experience } from "@/content/en/experience";
import { hero } from "@/content/en/hero";
import { nav } from "@/content/en/nav";
import { sections } from "@/content/en/sections";
import { site } from "@/content/en/site";
import { stack } from "@/content/en/stack";
import type { SiteContent } from "@/content/types";

export const en: SiteContent = {
  metadata: site.metadata,
  sections,
  hero,
  nav,
  stack,
  experience,
  contact,
};
