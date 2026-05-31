import { en } from "@/content/en";
import {
  defaultLocale,
  hasLocale,
  localeLabels,
  locales,
  type Locale,
} from "@/content/locale";
import { ptBR } from "@/content/pt-BR";
import type { SiteContent } from "@/content/types";

const catalogs: Record<Locale, SiteContent> = {
  "pt-BR": ptBR,
  en,
};

export function getContent(locale: Locale): SiteContent {
  return catalogs[locale];
}

export type { Locale, SiteContent };
export { defaultLocale, hasLocale, localeLabels, locales };
