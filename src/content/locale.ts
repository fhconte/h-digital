export const defaultLocale = "en" as const;

export const locales = [defaultLocale, "pt-BR"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  "pt-BR": "PT",
  en: "EN",
};

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
