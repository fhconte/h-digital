import type { DeliveriesContent } from "@/content/types";

export const deliveries: DeliveriesContent = {
  eyebrow: "What we deliver",
  title: "What we do day to day.",
  intro: {
    before:
      "Vue, React, Next.js, and Node with TypeScript. Each project with fixed scope. Pricing ",
    highlight: "on request",
    after: ", with a written proposal before we start.",
  },
  pricingNote:
    "We charge for development only. For Next.js sites and apps, we set up deployment on Vercel in your account. You pay the domain and Vercel plan directly to the provider.",
  cases: {
    title: "Case studies",
    description:
      "We will publish client work here with permission soon. For now, the list below shows the kind of delivery we take on.",
  },
  categories: [
    {
      label: "Design Systems",
      products: [
        {
          title: "Custom design systems",
          description:
            "Fully customizable system with accessibility, performance, security, and strong branding. Modular or integrated use, split across multiple projects, documented in Storybook as the company reference.",
        },
      ],
    },
    {
      label: "Frontend & web product",
      products: [
        {
          title: "Vue and React frontends",
          description:
            "TypeScript screens: components, state, and API calls, in whichever framework the project uses.",
        },
        {
          title: "Next.js sites and apps",
          description:
            "Corporate sites, landing pages, and Next.js apps with TypeScript. Deployment configured on Vercel (client account).",
        },
        {
          title: "Dashboards and internal tools",
          description:
            "Panels, simple CRMs, lead management, and your team's day-to-day workflows.",
        },
      ],
    },
    {
      label: "Backend & integrations",
      products: [
        {
          title: "Node.js APIs and backend",
          description:
            "REST, webhooks, and server routines in TypeScript, aligned with the frontend when it makes sense.",
        },
        {
          title: "Automations and integrations",
          description:
            "Connect systems, APIs, and workflows to cut repetitive manual work.",
        },
      ],
    },
    {
      label: "Quality",
      products: [
        {
          title: "Automated testing",
          description:
            "Jest and Cypress on critical flows. GitHub Actions runs tests before publishing to Vercel.",
        },
        {
          title: "Observability",
          description:
            "Sentry, Hotjar, logs, and alerts setup to track errors and usage in production.",
        },
      ],
    },
  ],
  cta: {
    before: "Need something else? ",
    link: "Send an email",
    after: " with what you need. We reply with scope and timeline for you to evaluate.",
  },
};
