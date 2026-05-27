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
    "Holanda Digital: Vue, React, Next.js, Node.js, deploy na Vercel e CI com GitHub Actions.",
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
