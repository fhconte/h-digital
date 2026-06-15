import type { StackContent } from "@/content/types";

export const stack: StackContent = {
  eyebrow: "Stack",
  title: "O que uso no dia a dia.",
  intro: {
    before: "Trabalho com ",
    highlight: "TypeScript, React, Next.js, Vue e Node.js",
    after:
      ", além de arquitetura frontend, design systems, monorepos, validação com Zod, GraphQL, Firebase e Docker.",
  },
  stack: {
    title: "Stack principal",
    description:
      "Do componente no navegador até integrações com APIs, modelos de dados e bancos MySQL e NoSQL. Testes com Jest, Cypress e React Testing Library. CI/CD com GitHub Actions, AWS, AWS CLI, Google Cloud e publicação na Vercel.",
    toolingLabel: "Ferramentas e práticas",
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
    title: "Como trabalho",
    description:
      "Próximo de produto e negócio, com foco em escalabilidade, manutenibilidade e performance. Participo de decisões de arquitetura, modelos de dados, algoritmos em ambientes JavaScript, estratégias de teste, refatorações graduais e entregas que ajudam o time a ir mais rápido sem perder estabilidade.",
    examples:
      "Experiência em SSR, micro frontends, SPA, OOP, design patterns, TDD/BDD/DDD e design systems documentados em Storybook.",
  },
  strengths: {
    title: "Pontos fortes",
    items: [
      {
        title: "Arquitetura frontend",
        text: "Monorepos, design tokens, bibliotecas de componentes, modelos de dados e configurações reutilizáveis de TypeScript e ESLint.",
      },
      {
        title: "Qualidade e testes",
        text: "Jest, Cypress e React Testing Library em fluxos críticos, com pipelines de CI/CD usando AWS, AWS CLI, Google Cloud e GitHub Actions.",
      },
      {
        title: "UX/UI e design systems",
        text: "Conhecimento avançado em design systems, acessibilidade, usabilidade e trabalho próximo com Figma.",
      },
      {
        title: "Colaboração",
        text: "Code reviews, discussões técnicas e comunicação com times de produto, pesquisa e stakeholders não técnicos.",
      },
    ],
  },
  coreSkills: {
    title: "Competências centrais",
    items: [
      "Design systems customizáveis documentados em Storybook",
      "Frontends em React, Vue e Next.js com TypeScript",
      "APIs, integrações, algoritmos e automações em Node.js",
      "Modelagem de dados com MySQL e bancos NoSQL",
      "Dashboards, apps web e ferramentas internas",
      "Testes automatizados, CI/CD e melhoria contínua de performance",
    ],
  },
  industries: {
    title: "Setores e contextos",
    items: [
      {
        title: "Saúde e setor bancário",
        text: "Unimed Paraná, Paraná Banco, banco next e Serasa — apps, design systems e produtos digitais.",
      },
      {
        title: "Automotivo e enterprise",
        text: "Volvo Group (Volvo Connect) — MVP greenfield com BDD, GraphQL e times multidisciplinares.",
      },
      {
        title: "Pesquisa e educação",
        text: "Levante (rede global de pesquisa educacional), Positivo Tecnologia e exames online.",
      },
      {
        title: "Mídia e agências",
        text: "Grupo Globo/Gazeta do Povo, Get Chute e marcas globais — component libraries, mobile-first e Scrum.",
      },
    ],
  },
};
