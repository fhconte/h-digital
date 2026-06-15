import type { ExperienceContent } from "@/content/types";

export const experience: ExperienceContent = {
  eyebrow: "Experience",
  title: "Professional journey.",
  intro: {
    before: "Over a decade in web products — from ",
    highlight: "design systems and frontend architecture",
    after:
      " to production apps in healthcare, banking, automotive, research, and media.",
  },
  backgroundNote:
    "Bachelor's in Social Communication (UNICURITIBA). Certifications in React, Next.js, Node.js, Docker, GraphQL, and TDD. Experience with data models, algorithms in JavaScript environments, MySQL and NoSQL databases, AWS, AWS CLI, and Google Cloud in CI/CD workflows. Fluent English, native Portuguese, elementary Spanish.",
  highlights: {
    title: "Highlighted products",
    items: [
      {
        title: "Levante Dashboard",
        text: "Open-source platform for a global educational research network, with study setup, participant flows, activities, and analytics.",
        href: "https://github.com/levante-framework/levante-dashboard/",
        hrefLabel: "View repository",
      },
      {
        title: "Serasa design system",
        text: "React component library built in a monorepo with design tokens, Storybook, Turborepo, Changesets, Vite, Jest, Cypress, and Vanilla Extract.",
      },
      {
        title: "Volvo Connect",
        text: "Greenfield MVP for Volvo Group, connecting frontend, GraphQL, BDD, Figma, data science, backend, design, and business teams.",
      },
      {
        title: "next.me",
        text: "Digital banking frontend work with React, TypeScript, tests, Web Components, Next.js, Styled Components, and design system integration.",
      },
      {
        title: "Unimed Paraná beneficiary app",
        text: "Healthcare web and mobile experience built with React, Ionic, and Angular for beneficiary-facing services.",
      },
      {
        title: "pbconsignado.com.br",
        text: "Banking product experience for payroll loan flows, built as part of Holanda Digital work with Paraná Banco.",
      },
    ],
  },
  periods: [
    {
      label: "2022 — present",
      roles: [
        {
          title: "Tarmac · Levante, Select Quote — Web Engineer",
          description:
            "Jan 2025 — present · Remote. Open-source project for a global educational research network. TypeScript, Zod, monorepo, Cypress, and features for study configuration, participants, activities, and analytics.",
        },
        {
          title: "Serasa — Senior Frontend Engineer",
          description:
            "Feb 2024 — Dec 2024 · Remote. Architected and led a monorepo design system from scratch: design tokens, React library, Storybook, Turborepo, Changesets, Vite, Jest, Cypress, and Vanilla Extract.",
        },
        {
          title: "Volvo Group — Senior Frontend Engineer",
          description:
            "May 2022 — Oct 2022 · Remote. Greenfield Volvo Connect MVP with BDD, React, GraphQL, Figma, and teams across data science, backend, design, and business.",
        },
      ],
    },
    {
      label: "2015 — 2022",
      roles: [
        {
          title: "Wipro · Banco Next — Frontend Engineer",
          description:
            "Aug 2020 — Apr 2022 · Remote. Client interface, requirements, functional testing, and frontend expert role. React, TypeScript, Jest, Styled Components, Web Components, Next.js, and design system.",
        },
        {
          title: "Holanda Digital — Senior Frontend Developer",
          description:
            "Feb 2015 — Jul 2020 · Remote. Unimed Paraná (React, Ionic, Angular, beneficiary app), Paraná Banco (React, Redux, Storybook), and pbconsignado.com.br.",
        },
      ],
    },
    {
      label: "2012 — 2015",
      roles: [
        {
          title: "Get Chute — Frontend Developer",
          description:
            "Apr 2014 — Jan 2015 · Remote. Projects for Coca-Cola, Land Rover, Visa, Microsoft, Vogue, and other global brands. JavaScript, Sass, wireframes, and Scrum.",
        },
        {
          title: "Grupo Globo · Gazeta do Povo — Frontend Developer",
          description:
            "Apr 2013 — Apr 2014 · Curitiba. Digital transformation of a major newspaper brand: branding guidelines, component library, mobile patterns, and prototyping.",
        },
        {
          title: "Positivo Tecnologia — Frontend Developer Jr",
          description:
            "Apr 2012 — Apr 2013 · Curitiba. Online exam platform for Positivo schools. Wireframes, responsive HTML/CSS/JS, and product analysis.",
        },
      ],
    },
  ],
  cta: {
    before: "Want to know more about a project? ",
    link: "Send an email",
    after: " or connect on LinkedIn.",
  },
};
