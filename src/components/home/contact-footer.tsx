"use client";

import { useContent } from "@/i18n/locale-provider";
import { BRAND_NAME } from "@/lib/brand";
import { CONTACT_EMAIL, contactMailto } from "@/lib/contact";

export function ContactFooter() {
  const content = useContent();
  const { contact, sections } = content;

  return (
    <footer
      id={sections.contact}
      className="w-full scroll-mt-32 border-t border-neutral-100 px-4 py-10 sm:scroll-mt-36 sm:px-6 lg:scroll-mt-40 lg:px-12"
    >
      <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-md">
          <p className="font-medium uppercase tracking-[0.15em] text-neutral-700">
            {contact.eyebrow}
          </p>
          <p className="mt-3 text-neutral-600">
            {contact.intro.before}
            <a
              href={contactMailto("contact", content)}
              className="text-accent underline-offset-4 hover:underline"
            >
              {contact.intro.link}
            </a>
            {contact.intro.after}
          </p>
          <p className="mt-4 text-sm text-neutral-500">{contact.note}</p>
        </div>
        <div className="text-sm text-neutral-500 sm:text-right">
          <a
            href={contactMailto("contact", content)}
            className="break-all text-base font-medium text-neutral-800 transition-colors hover:text-accent sm:text-lg"
          >
            {CONTACT_EMAIL}
          </a>
          <ul className="mt-4 flex flex-col gap-2 sm:items-end">
            {contact.socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-neutral-700 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            © {new Date().getFullYear()} {BRAND_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
