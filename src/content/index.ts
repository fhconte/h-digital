import { defaultLocale, type Locale } from "@/content/locale";
import { ptBR } from "@/content/pt-BR";
import type { SiteContent } from "@/content/types";

const catalogs: Partial<Record<Locale, SiteContent>> = {
  "pt-BR": ptBR,
};

export function getContent(locale: Locale = defaultLocale): SiteContent {
  const content = catalogs[locale];

  if (!content) {
    throw new Error(`Content not found for locale "${locale}".`);
  }

  return content;
}

export const content = getContent();

export type { Locale, SiteContent };
export { defaultLocale, locales } from "@/content/locale";
