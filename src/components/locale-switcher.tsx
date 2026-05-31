"use client";

import Link from "next/link";
import { localeLabels, locales, type Locale } from "@/content";
import { useLocale } from "@/i18n/locale-provider";

export function LocaleSwitcher() {
  const { locale: currentLocale } = useLocale();

  return (
    <div
      className="flex items-center gap-1 text-xs font-medium uppercase tracking-[0.12em] text-neutral-500"
      role="group"
      aria-label="Language"
    >
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-1">
          {index > 0 ? (
            <span className="text-neutral-300" aria-hidden>
              |
            </span>
          ) : null}
          {locale === currentLocale ? (
            <span className="text-accent" aria-current="true">
              {localeLabels[locale]}
            </span>
          ) : (
            <Link
              href={`/${locale}`}
              className="transition-colors hover:text-accent"
              hrefLang={locale}
            >
              {localeLabels[locale]}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
