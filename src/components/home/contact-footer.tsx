"use client";

import { useContent } from "@/i18n/locale-provider";
import { NAME } from "@/lib/brand";
import { CONTACT_EMAIL, contactMailto } from "@/lib/contact";

export function ContactFooter() {
  const content = useContent();
  const { contact, sections } = content;
  const linkedIn = contact.socialLinks.find((link) => link.label === "LinkedIn");

  return (
    <footer
      id={sections.contact}
      className="flex min-h-[55vh] w-full scroll-mt-32 items-center border-t border-neutral-100 bg-neutral-950 px-4 py-20 text-white sm:scroll-mt-36 sm:px-6 sm:py-24 lg:scroll-mt-40 lg:px-12 lg:py-28"
    >
      <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.45fr)] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">
            {contact.eyebrow}
          </p>
          <p className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {contact.intro.before}
            <a
              href={contactMailto("contact", content)}
              className="text-accent underline-offset-8 transition-opacity hover:opacity-80"
            >
              {contact.intro.link}
            </a>
            {contact.intro.after}
            {contact.intro.secondaryLink && linkedIn ? (
              <a
                href={linkedIn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-8 transition-opacity hover:opacity-80"
              >
                {contact.intro.secondaryLink}
              </a>
            ) : null}
            {contact.intro.secondaryLink && linkedIn ? "." : null}
          </p>
          <p className="mt-6 text-base text-white/60 sm:text-lg">
            {contact.note}
          </p>
        </div>
        <div className="text-sm text-white/60 lg:text-right">
          <a
            href={contactMailto("contact", content)}
            className="break-all text-xl font-semibold text-white transition-colors hover:text-accent sm:text-2xl"
          >
            {CONTACT_EMAIL}
          </a>
          <ul className="mt-8 flex flex-col gap-3 lg:items-end">
            {contact.socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-white/75 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-white/45">
            © {new Date().getFullYear()} {NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
