import type { ExperienceContent } from "@/content/types";

export const experience: ExperienceContent = {
  eyebrow: "Experiência",
  title: "Trajetória profissional.",
  intro: {
    before: "Mais de uma década em produtos web — de ",
    highlight: "design systems e arquitetura frontend",
    after:
      " a apps em produção para saúde, banca, automotivo, pesquisa e mídia.",
  },
  backgroundNote:
    "Formação em Comunicação Social (UNICURITIBA). Certificações em React, Next.js, Node.js, Docker, GraphQL e TDD. Inglês fluente, português nativo e espanhol básico.",
  highlights: {
    title: "Produtos em destaque",
    description:
      "Levante (levante-network.org), design system Serasa/Premiersoft, Volvo Connect, banco next, App Unimed Paraná e pbconsignado.com.br.",
  },
  periods: [
    {
      label: "2022 — presente",
      roles: [
        {
          title: "Tarmac · Levante — Web Engineer",
          description:
            "Jan 2025 — presente · Remoto. Projeto open-source para rede global de pesquisa educacional. TypeScript, Zod, monorepo, Cypress e features de configuração de estudos, participantes, atividades e analytics.",
        },
        {
          title: "Premiersoft · Serasa — Senior Frontend Engineer",
          description:
            "Fev 2024 — Dez 2024 · Remoto. Arquitetura e liderança de design system em monorepo do zero: design tokens, biblioteca React, Storybook, Turborepo, Changesets, Vite, Jest, Cypress e Vanilla Extract.",
        },
        {
          title: "Volvo Group — Senior Frontend Engineer",
          description:
            "Mai 2022 — Out 2022 · Remoto. MVP greenfield do Volvo Connect com BDD, React, GraphQL, Figma e times de data science, backend, design e negócio.",
        },
      ],
    },
    {
      label: "2015 — 2022",
      roles: [
        {
          title: "Wipro · banco next — Frontend Engineer",
          description:
            "Ago 2020 — Abr 2022 · Remoto. Interface com cliente, requisitos, testes funcionais e frontend expert. React, TypeScript, Jest, Styled Components, Web Components, Next.js e design system.",
        },
        {
          title: "H Digital — Senior Frontend Developer",
          description:
            "Fev 2015 — Jul 2020 · Remoto. Unimed Paraná (React, Ionic, Angular, app beneficiário), Paraná Banco (React, Redux, Storybook) e pbconsignado.com.br.",
        },
      ],
    },
    {
      label: "2012 — 2015",
      roles: [
        {
          title: "Get Chute — Frontend Developer",
          description:
            "Abr 2014 — Jan 2015 · Remoto. Projetos para Coca-Cola, Land Rover, Visa, Microsoft, Vogue e outras marcas globais. JavaScript, Sass, wireframes e SCRUM.",
        },
        {
          title: "Grupo Globo · GPC — Frontend Developer",
          description:
            "Abr 2013 — Abr 2014 · Curitiba. Transformação digital de marca jornalística: branding guidelines, component library, patterns mobile e prototipação.",
        },
        {
          title: "Positivo Tecnologia — Frontend Developer Jr",
          description:
            "Abr 2012 — Abr 2013 · Curitiba. Plataforma de provas online para escolas Positivo. Wireframes, HTML/CSS/JS responsivo e análise de produto.",
        },
      ],
    },
  ],
  cta: {
    before: "Quer saber mais sobre algum projeto? ",
    link: "Manda um e-mail",
    after: " ou conecta no LinkedIn.",
  },
};
