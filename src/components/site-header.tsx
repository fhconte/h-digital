"use client";

import Image from "next/image";
import { useState } from "react";
import { content } from "@/content";
import { BRAND_NAME } from "@/lib/brand";

export function SiteHeader() {
  const { nav } = content;
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white">
      <div className="flex items-center justify-between gap-4 px-6 lg:px-12">
        <a
          href="#"
          className="block shrink-0 leading-none"
          aria-label={nav.homeAriaLabel}
          onClick={closeMenu}
        >
          <Image
            src="/brand/logo.png"
            alt={BRAND_NAME}
            width={944}
            height={531}
            className="block h-28 w-auto sm:h-32 md:h-36 lg:h-40 xl:h-44"
            priority
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 260px, 320px"
          />
        </a>

        <nav className="hidden lg:block" aria-label={nav.mainMenuAriaLabel}>
          <ul className="flex items-center gap-8 text-sm font-medium uppercase tracking-[0.12em] text-neutral-700 xl:gap-10 xl:text-base">
            {nav.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-neutral-200 text-neutral-700 transition-colors hover:border-accent hover:text-accent lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? nav.closeMenu : nav.openMenu}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">
            {menuOpen ? nav.menuToggleClose : nav.menuToggleOpen}
          </span>
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`border-t border-neutral-100 bg-white lg:hidden ${menuOpen ? "block" : "hidden"}`}
        aria-label={nav.mobileMenuAriaLabel}
      >
        <ul className="flex flex-col px-6 lg:px-12">
          {nav.items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block border-b border-neutral-100 py-4 text-sm font-medium uppercase tracking-[0.12em] text-neutral-700 transition-colors last:border-b-0 hover:text-accent"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
