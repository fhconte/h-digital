import type { SolutionsContent } from "@/content/types";

export const solutions: SolutionsContent = {
  eyebrow: "Solutions",
  title: "We work with what we know well.",
  intro: {
    before: "We build sites, dashboards, and APIs with ",
    highlight: "TypeScript, Vue, React, Next.js, and Node.js",
    after: ". Every project has a defined scope and timeline in the proposal.",
  },
  stack: {
    title: "Core stack",
    description:
      "From browser components to server APIs. Code on GitHub, pipeline on GitHub Actions, and sites or apps deployed on Vercel.",
    toolingLabel: "Deployment & CI",
  },
  techStack: ["TypeScript", "Vue", "React", "Next.js", "Node.js"],
  toolingStack: ["Vercel", "GitHub Actions"],
  howWeWork: {
    title: "How we work",
    description:
      "Each job has a clear goal: site, dashboard, integration, or API. Timeline and deliverables agreed in the proposal. GitHub repository, CI on GitHub Actions, and Vercel deployment for web projects.",
    examples:
      "Examples of what we already do: Vue dashboard, Next.js site, Node backend to connect systems you already use.",
  },
  whyHire: {
    title: "Why hire us",
    items: [
      {
        title: "Defined scope",
        text: "Before we start, you know exactly what is included. No scope creep mid-project.",
      },
      {
        title: "Agreed timeline",
        text: "Clear milestones from start to finish. Less vague meetings, more ready-to-use output.",
      },
      {
        title: "Fixed budget",
        text: "Proposal per delivery. You pay what was agreed — no surprises along the way.",
      },
      {
        title: "Real-world use",
        text: "Priority on tools your team uses daily, not just slide decks.",
      },
    ],
  },
  whatWeBuild: {
    title: "What we build",
    items: [
      "Customizable design systems documented in Storybook",
      "Frontends in Vue, React, and Next.js with TypeScript",
      "APIs and automations in Node.js",
      "Sites, dashboards, and internal tools",
      "Vercel deployment, CI with GitHub Actions, testing, and monitoring",
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
