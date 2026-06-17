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
        title: "Serasa Design System",
        text: "Private React component library I architected in a monorepo with design tokens, Storybook, Turborepo, Changesets, Vite, Jest, Cypress, and Vanilla Extract.",
      },
      {
        title: "Volvo Connect Truck Fuel Advisor",
        text: "Greenfield MVP for Volvo Group, connecting frontend, GraphQL, BDD, Figma, data science, backend, design, and business teams.",
        href: "https://www.volvotrucks.com.br/pt-br/services/optimized-business/volvo-connect.html",
        hrefLabel: "View website",
      },
      {
        title: "next.me",
        text: "Digital banking frontend work built in Next.js with React, TypeScript, tests, Web Components, Styled Components, and design system integration.",
        href: "https://next.me/",
        hrefLabel: "View website",
      },
      {
        title: "Unimed Paraná Apps",
        text: "Healthcare web and mobile experience built with React, Ionic, and Angular for beneficiary-facing services.",
        href: "https://www.unimed.coop.br/site/web/parana/aplicativos",
        hrefLabel: "View website",
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
            "May 2022 — Oct 2022 · Remote. Greenfield Volvo Connect Truck Fuel Advisor MVP with BDD, React, GraphQL, Figma, and teams across data science, backend, design, and business.",
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
            "Feb 2015 — Jul 2020 · Remote. Unimed Paraná Apps (React, Ionic, Angular) and Paraná Banco (React, Redux, Storybook).",
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
    {
      label: "2009 — 2012",
      roles: [
        {
          title:
            "DuPont Sustainable Solutions — Trainee Designer & Frontend Developer",
          description:
            "May 2010 — Apr 2012 · Curitiba, on-site. Design and frontend work for video training and marketing operations for medium and large companies: product catalogs, institutional presentations, certificates, stationery, HTML/CSS marketing emails and newsletters, multilingual writing and editing, workshop support, campaign analysis, and print production interface. Company websites: dupont.com and consultdss.com.",
        },
        {
          title:
            "TerraForum Consultores · HSBC — Trainee Designer & Frontend Developer",
          description:
            "May 2009 — May 2010 · Curitiba, on-site. Digital design and frontend publishing for HSBC Brazil's internal communication platform, delivered on a customized Microsoft SharePoint portal with HTML, CSS, and JavaScript. UI design, illustration, storytelling, and fast visual solutions for daily and weekly employee news content. Project reference: business.hsbc.com.br.",
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
