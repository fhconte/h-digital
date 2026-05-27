import { BRAND_NAME } from "@/lib/brand";

export const CONTACT_EMAIL = "hdgtldevelopment@gmail.com";

export type ContactSource = "inicio" | "entregas" | "contato";

const SUBJECTS: Record<ContactSource, string> = {
  inicio: "Inicio",
  entregas: "Entregas",
  contato: "Contato",
};

export function contactMailto(source: ContactSource): string {
  const subject = `${SUBJECTS[source]} | ${BRAND_NAME}`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
