import { contact } from "@/content/en/contact";
import { deliveries } from "@/content/en/deliveries";
import { hero } from "@/content/en/hero";
import { nav } from "@/content/en/nav";
import { sections } from "@/content/en/sections";
import { site } from "@/content/en/site";
import { solutions } from "@/content/en/solutions";
import type { SiteContent } from "@/content/types";

export const en: SiteContent = {
  metadata: site.metadata,
  sections,
  hero,
  nav,
  solutions,
  deliveries,
  contact,
};
