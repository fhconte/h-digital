import type { StackContent } from "@/content/types";

export const stack: StackContent = {
  eyebrow: "Stack",
  title: "What I work with day to day.",
  intro: {
    before: "I work with ",
    highlight: "TypeScript, React, Next.js, Vue, and Node.js",
    after:
      ", along with frontend architecture, design systems, monorepos, data modeling, Zod validation, GraphQL, Firebase, and Docker.",
  },
  stack: {
    title: "Core stack",
    description:
      "From browser components to API integrations, data models, and MySQL and NoSQL databases. Testing with Jest, Cypress, and React Testing Library. CI/CD with GitHub Actions, AWS, AWS CLI, Google Cloud, and deployment on Vercel.",
    toolingLabel: "Tools & practices",
  },
  techStack: [
    "TypeScript",
    "React",
    "Next.js",
    "Vue",
    "Node.js",
    "GraphQL",
    "Zod",
    "MySQL",
    "NoSQL",
    "AWS",
    "Google Cloud",
    "Docker",
  ],
  toolingStack: [
    "GitHub Actions",
    "Jest",
    "Cypress",
    "Storybook",
    "Turborepo",
    "Firebase",
    "AWS CLI",
    "Figma",
  ],
  approach: {
    title: "How I work",
    description:
      "Close to product and business needs, with a focus on scalability, maintainability, and performance. I contribute to architecture decisions, data models, algorithms in JavaScript environments, testing strategies, gradual refactors, and solutions that help teams move faster without compromising stability.",
    examples:
      "Experience with SSR, micro frontends, SPAs, OOP, design patterns, TDD/BDD/DDD, and design systems documented in Storybook.",
  },
  strengths: {
    title: "Strengths",
    items: [
      {
        title: "Frontend architecture",
        text: "Monorepos, design tokens, component libraries, data models, and reusable TypeScript and ESLint configurations.",
      },
      {
        title: "Quality & testing",
        text: "Jest, Cypress, and React Testing Library on critical flows, with CI/CD pipelines using AWS, AWS CLI, Google Cloud, and GitHub Actions.",
      },
      {
        title: "UX/UI & design systems",
        text: "Advanced knowledge of design systems, accessibility, usability, and close collaboration with Figma.",
      },
      {
        title: "Collaboration",
        text: "Code reviews, technical discussions, and communication with product, research, and non-technical stakeholders.",
      },
    ],
  },
  coreSkills: {
    title: "Core skills",
    items: [
      "Customizable design systems documented in Storybook",
      "Frontends in React, Vue, and Next.js with TypeScript",
      "APIs, integrations, algorithms, and automations in Node.js",
      "Data modeling with MySQL and NoSQL databases",
      "Dashboards, web apps, and internal tools",
      "Automated testing, CI/CD, and continuous performance improvements",
    ],
  },
  industries: {
    title: "Industries & contexts",
    items: [
      {
        title: "Healthcare & banking",
        text: "Unimed Paraná, Paraná Banco, banco next, and Serasa — apps, design systems, and digital products.",
      },
      {
        title: "Automotive & enterprise",
        text: "Volvo Group (Volvo Connect) — greenfield MVP with BDD, GraphQL, and multidisciplinary teams.",
      },
      {
        title: "Research & education",
        text: "Levante (global educational research network), Positivo Tecnologia, and online exam platforms.",
      },
      {
        title: "Media & agencies",
        text: "Grupo Globo/GPC, Get Chute, and global brands — component libraries, mobile-first, and Scrum.",
      },
    ],
  },
};
