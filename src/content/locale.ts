export const defaultLocale = "pt-BR" as const;

export type Locale = typeof defaultLocale | "en";

export const locales: Locale[] = [defaultLocale];
