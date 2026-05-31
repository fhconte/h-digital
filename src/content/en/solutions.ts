import type { SolutionsContent } from "@/content/types";

export const solutions: SolutionsContent = {
  eyebrow: "Solutions",
  title: "Design system as the foundation — not an add-on.",
  intro: {
    before: "Our core is ",
    highlight: "custom design systems",
    after:
      ": fully customizable, built for accessibility, performance, security, and strong branding. Then sites, dashboards, and APIs in TypeScript, Vue, React, Next.js, and Node.js.",
  },
  stack: {
    title: "What the system includes",
    description:
      "Tokens, components, and UI patterns documented in Storybook — a living reference for design, product, and engineering. Modular to adopt in parts or integrated end to end.",
    toolingLabel: "Delivery & operations",
  },
  techStack: ["Storybook", "TypeScript", "Vue", "React", "Next.js", "Node.js"],
  toolingStack: ["Vercel", "GitHub Actions"],
  howWeWork: {
    title: "How we work",
    description:
      "The design system can be used modularly or integrated into the product. Components and tokens break apart and reuse across multiple projects without rebuilding the base every time.",
    examples:
      "We deliver the catalog in Storybook for your team to browse, test, and evolve — plus production-ready code.",
  },
  whyHire: {
    title: "System pillars",
    items: [
      {
        title: "Accessibility",
        text: "Components and patterns designed for inclusive use from the start, not patched in later.",
      },
      {
        title: "Performance",
        text: "Lean foundation, consistent tokens, and components optimized to load and scale well.",
      },
      {
        title: "Security",
        text: "Best practices on the frontend and integrations, with dependency review and safe patterns.",
      },
      {
        title: "Interactive branding",
        text: "Strong, flexible visual identity — motion, states, and brand tone applied consistently.",
      },
    ],
  },
  whatWeBuild: {
    title: "What we build",
    items: [
      "Customizable design systems documented in Storybook",
      "Modular libraries reusable across multiple products",
      "Frontends in Vue, React, and Next.js with TypeScript",
      "APIs, automations, and Vercel deployment with GitHub Actions CI",
    ],
  },
  incubatorRole: {
    title: "How the incubator works",
    items: [
      {
        title: "Incubation",
        text: "Our products and partners' products, from zero to first live version.",
      },
      {
        title: "Custom projects",
        text: "For teams that need software without building an in-house dev team.",
      },
      {
        title: "Maintenance",
        text: "After launch, adjustments and improvements based on real usage.",
      },
    ],
  },
};
