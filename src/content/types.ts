export type ExperienceRole = {
  title: string;
  description: string;
};

export type ExperiencePeriod = {
  label: string;
  roles: ExperienceRole[];
};

export type FocusPoint = {
  title: string;
  text: string;
};

export type LabeledItem = {
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

export type StackContent = {
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
  approach: {
    title: string;
    description: string;
    examples: string;
  };
  strengths: {
    title: string;
    items: FocusPoint[];
  };
  coreSkills: {
    title: string;
    items: string[];
  };
  industries: {
    title: string;
    items: LabeledItem[];
  };
};

export type ExperienceContent = {
  eyebrow: string;
  title: string;
  intro: TextWithHighlight;
  backgroundNote: string;
  highlights: {
    title: string;
    description: string;
  };
  periods: ExperiencePeriod[];
  cta: TextWithLink;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type ContactContent = {
  eyebrow: string;
  intro: TextWithLink & {
    secondaryLink?: string;
  };
  note: string;
  socialLinks: SocialLink[];
  emailSubjects: {
    home: string;
    experience: string;
    contact: string;
  };
};

export type SectionIds = {
  stack: string;
  experience: string;
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
  stack: StackContent;
  experience: ExperienceContent;
  contact: ContactContent;
};
