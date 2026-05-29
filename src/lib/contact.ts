import { content } from "@/content";
import { BRAND_NAME } from "@/lib/brand";

export const CONTACT_EMAIL = "hdgtldevelopment@gmail.com";

export type ContactSource = keyof typeof content.contact.emailSubjects;

export function contactMailto(source: ContactSource): string {
  const subject = `${content.contact.emailSubjects[source]} | ${BRAND_NAME}`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
