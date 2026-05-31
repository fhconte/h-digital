"use client";

import { createContext, useContext } from "react";
import type { Locale, SiteContent } from "@/content";

type LocaleContextValue = {
  locale: Locale;
  content: SiteContent;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type LocaleProviderProps = LocaleContextValue & {
  children: React.ReactNode;
};

export function LocaleProvider({
  locale,
  content,
  children,
}: LocaleProviderProps) {
  return (
    <LocaleContext.Provider value={{ locale, content }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const value = useContext(LocaleContext);

  if (!value) {
    throw new Error("useLocale must be used within LocaleProvider.");
  }

  return value;
}

export function useContent(): SiteContent {
  return useLocale().content;
}
