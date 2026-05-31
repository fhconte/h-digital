export type Product = {
  title: string;
  description: string;
};

export type ProductCategory = {
  label: string;
  products: Product[];
};

export type FocusPoint = {
  title: string;
  text: string;
};

export type HowWeWorkItem = {
  title: string;
  text: string;
};

export type TextWithHighlight = {
  before: string;
  highlight: string;
  after: string;
};

export type TextWithLink = {
  before: string;
  link: string;
  after: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  imageAlt: string;
};

export type NavContent = {
  items: { label: string; href: string }[];
  homeAriaLabel: string;
  mainMenuAriaLabel: string;
  mobileMenuAriaLabel: string;
  openMenu: string;
  closeMenu: string;
  menuToggleOpen: string;
  menuToggleClose: string;
};

export type SolutionsContent = {
  eyebrow: string;
  title: string;
  intro: TextWithHighlight;
  stack: {
    title: string;
    description: string;
    toolingLabel: string;
  };
  techStack: string[];
  toolingStack: string[];
  howWeWork: {
    title: string;
    description: string;
    examples: string;
  };
  whyHire: {
    title: string;
    items: FocusPoint[];
  };
  whatWeBuild: {
    title: string;
    items: string[];
  };
  incubatorRole: {
    title: string;
    items: HowWeWorkItem[];
  };
};

export type DeliveriesContent = {
  eyebrow: string;
  title: string;
  intro: TextWithHighlight;
  pricingNote: string;
  cases: {
    title: string;
    description: string;
  };
  categories: ProductCategory[];
  cta: TextWithLink;
};

export type ContactContent = {
  eyebrow: string;
  intro: TextWithLink;
  note: string;
  emailSubjects: {
    inicio: string;
    entregas: string;
    contato: string;
  };
};

export type SectionIds = {
  solutions: string;
  deliveries: string;
  contact: string;
};

export type SiteContent = {
  metadata: {
    title: string;
    description: string;
  };
  sections: SectionIds;
  hero: HeroContent;
  nav: NavContent;
  solutions: SolutionsContent;
  deliveries: DeliveriesContent;
  contact: ContactContent;
};
