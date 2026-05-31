import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent, hasLocale, locales, type Locale } from "@/content";
import { DocumentLang } from "@/i18n/document-lang";
import { LocaleProvider } from "@/i18n/locale-provider";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!hasLocale(localeParam)) {
    return {};
  }

  const content = getContent(localeParam);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!hasLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const content = getContent(locale);

  return (
    <LocaleProvider locale={locale} content={content}>
      <DocumentLang locale={locale} />
      {children}
    </LocaleProvider>
  );
}
