import { content } from "@/content";
import { BRAND_NAME } from "@/lib/brand";
import { CONTACT_EMAIL, contactMailto } from "@/lib/contact";

export function ContactFooter() {
  const { contact } = content;

  return (
    <footer
      id="contato"
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
              href={contactMailto("contato")}
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
            href={contactMailto("contato")}
            className="break-all text-base font-medium text-neutral-800 transition-colors hover:text-accent sm:text-lg"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-6">
            © {new Date().getFullYear()} {BRAND_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
