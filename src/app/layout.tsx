import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { BRAND_NAME } from "@/lib/brand";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${BRAND_NAME} | Incubadora de soluções digitais`,
  description:
    "Incubadora de soluções digitais — React, Next.js, SSR e Node.js. MVPs, automações, dashboards e produtos sob medida com escopo definido e entrega previsível.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-sans"
        suppressHydrationWarning
      >{children}</body>
    </html>
  );
}
