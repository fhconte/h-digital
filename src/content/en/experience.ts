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
    "Bachelor's in Social Communication (UNICURITIBA). Certifications in React, Redux, Docker, advanced JavaScript, HTML5, and CSS3. Experience with data models, algorithms in JavaScript environments, MySQL and NoSQL databases, AWS, AWS CLI, and Google Cloud in CI/CD workflows. Fluent English, native Portuguese, elementary Spanish.",
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
  certifications: {
    title: "Licenses & certifications",
    issuedLabel: "Issue date",
    credentialIdLabel: "Credential ID",
    items: [
      {
        title: "Docker for Javascript Developers",
        issuer: "Udemy",
        issued: "Issued Jun 2020",
        credentialId: "6597085f-03d2-4636-ad71-c741f695162e",
        href: "https://udemy-certificate.s3.amazonaws.com/image/UC-6597085f-03d2-4636-ad71-c741f695162e.jpg",
        hrefLabel: "View credential",
      },
      {
        title: "Modern React with Redux - Stephen Grider",
        issuer: "Udemy",
        issued: "Issued Apr 2018",
        href: "https://www.udemy.com/certificate/UC-GZE7JTYT/",
        hrefLabel: "View credential",
      },
      {
        title:
          "Advanced JavaScript III: ES6, Object-Oriented Programming and Design Patterns",
        issuer: "Alura",
        issued: "Issued Apr 2017",
        credentialId: "cc846478-8455-4dd5-9fd7-b4bee8f92ee7",
        href: "https://cursos.alura.com.br/certificate/cc846478-8455-4dd5-9fd7-b4bee8f92ee7",
        hrefLabel: "View credential",
      },
      {
        title:
          "Advanced JavaScript II: ES6, Object-Oriented Programming and Design Patterns",
        issuer: "Alura",
        issued: "Issued Apr 2017",
        credentialId: "730f03ad-d8a6-447b-b64f-c7e5753d6881",
        href: "https://cursos.alura.com.br/certificate/730f03ad-d8a6-447b-b64f-c7e5753d6881",
        hrefLabel: "View credential",
      },
      {
        title:
          "Advanced JavaScript I: ES6, Object-Oriented Programming and Design Patterns",
        issuer: "Alura",
        issued: "Issued Mar 2018",
        credentialId: "0f537e63-2dbd-498c-b7cf-3ac69dfb5544",
        href: "https://cursos.alura.com.br/certificate/0f537e63-2dbd-498c-b7cf-3ac69dfb5544",
        hrefLabel: "View credential",
      },
      {
        title: "JavaScript: Programming for the Web",
        issuer: "Alura",
        issued: "Issued Mar 2016",
        credentialId: "a52c6571-441e-4753-b84c-063b566e1230",
        href: "https://cursos.alura.com.br/certificate/a52c6571-441e-4753-b84c-063b566e1230",
        hrefLabel: "View credential",
      },
      {
        title: "Advanced HTML5 and CSS3",
        issuer: "Adobe",
        issuerDetail: "ENG DTP & Multimídia - São Paulo - SP",
        issued: "Issued Jul 2012",
      },
    ],
  },
  periods: [
    {
      label: "2022 — present",
      roles: [
        {
          title: "Tarmac · Levante, SelectQuote — Web Engineer",
          description:
            "Jan 2025 — present · Remote. Web engineering work across client projects, including Levante, an open-source platform for a global educational research network, and SelectQuote, a major U.S. insurance client. TypeScript, Zod, monorepo, Cypress, study configuration, participants, activities, analytics, and insurance-related workflows.",
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
            "Feb 2015 — Jul 2020 · Remote. Unimed Paraná Apps (React, Ionic, Angular), Paraná Banco (React, Redux, Storybook), and a 9-month frontend engineering consultancy for Agrotis.",
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
            "May 2010 — Apr 2012 · Curitiba, on-site. Design and frontend for video training and marketing operations: catalogs, presentations, certificates, stationery, HTML/CSS emails and newsletters, workshop support, campaign analysis, and print production interface.",
        },
        {
          title:
            "TerraForum Consultores · HSBC — Trainee Designer & Frontend Developer",
          description:
            "May 2009 — May 2010 · Curitiba, on-site. Digital design and frontend publishing for HSBC Brazil's internal communication platform on customized Microsoft SharePoint, using HTML, CSS, and JavaScript.",
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
