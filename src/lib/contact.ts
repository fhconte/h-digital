import { BRAND_NAME } from "@/lib/brand";
import type { SiteContent } from "@/content/types";

export const CONTACT_EMAIL = "hdgtldevelopment@gmail.com";

export type ContactSource = keyof SiteContent["contact"]["emailSubjects"];

export function contactMailto(
  source: ContactSource,
  content: SiteContent,
): string {
  const subject = `${content.contact.emailSubjects[source]} | ${BRAND_NAME}`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
