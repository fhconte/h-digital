import type { ExperienceContent } from "@/content/types";

export const experience: ExperienceContent = {
  eyebrow: "Experiência",
  title: "Trajetória profissional.",
  intro: {
    before: "Mais de uma década em produtos web — de ",
    highlight: "design systems e arquitetura frontend",
    after:
      " a aplicações em produção para saúde, setor bancário, automotivo, pesquisa e mídia.",
  },
  backgroundNote:
    "Formação em Comunicação Social (UNICURITIBA). Certificações em React, Redux, Docker, JavaScript avançado, HTML5 e CSS3. Experiência com modelos de dados, algoritmos em ambientes JavaScript, bancos MySQL e NoSQL, AWS, AWS CLI e Google Cloud em fluxos de CI/CD. Inglês fluente, português nativo e espanhol básico.",
  highlights: {
    title: "Produtos em destaque",
    items: [
      {
        title: "Levante Dashboard",
        text: "Plataforma open-source para rede global de pesquisa educacional, com configuração de estudos, participantes, atividades e analytics.",
        href: "https://github.com/levante-framework/levante-dashboard/",
        hrefLabel: "Ver repositório",
      },
      {
        title: "Serasa Design System",
        text: "Biblioteca React privada que arquitetei em monorepo com design tokens, Storybook, Turborepo, Changesets, Vite, Jest, Cypress e Vanilla Extract.",
      },
      {
        title: "Volvo Connect Truck Fuel Advisor",
        text: "MVP greenfield para o Volvo Group, integrando frontend, GraphQL, BDD, Figma, data science, backend, design e negócio.",
        href: "https://www.volvotrucks.com.br/pt-br/services/optimized-business/volvo-connect.html",
        hrefLabel: "Ver site",
      },
      {
        title: "next.me",
        text: "Frontend para banco digital construído em Next.js com React, TypeScript, testes, Web Components, Styled Components e integração com design system.",
        href: "https://next.me/",
        hrefLabel: "Ver site",
      },
      {
        title: "Unimed Paraná Apps",
        text: "Experiência web e mobile em saúde, construída com React, Ionic e Angular para serviços voltados a beneficiários.",
        href: "https://www.unimed.coop.br/site/web/parana/aplicativos",
        hrefLabel: "Ver site",
      },
    ],
  },
  certifications: {
    title: "Licenças e certificações",
    issuedLabel: "Data de emissão",
    credentialIdLabel: "ID da credencial",
    items: [
      {
        title: "HTML5 e CSS3 Advanced",
        issuer: "Adobe",
        issuerDetail: "ENG DTP & Multimídia - São Paulo - SP",
        issued: "Emitido em jul. de 2012",
      },
      {
        title: "Docker for Javascript Developers",
        issuer: "Udemy",
        issued: "Emitido em jun. de 2020",
        credentialId: "6597085f-03d2-4636-ad71-c741f695162e",
        href: "https://udemy-certificate.s3.amazonaws.com/image/UC-6597085f-03d2-4636-ad71-c741f695162e.jpg",
        hrefLabel: "Ver credencial",
      },
      {
        title: "Modern React with Redux - Stephen Grider",
        issuer: "Udemy",
        issued: "Emitido em abr. de 2018",
        href: "https://www.udemy.com/certificate/UC-GZE7JTYT/",
        hrefLabel: "Ver credencial",
      },
      {
        title:
          "JavaScript Avançado III: ES6, Orientação a Objetos e Design Patterns",
        issuer: "Alura",
        issued: "Emitido em abr. de 2017",
        credentialId: "cc846478-8455-4dd5-9fd7-b4bee8f92ee7",
        href: "https://cursos.alura.com.br/certificate/cc846478-8455-4dd5-9fd7-b4bee8f92ee7",
        hrefLabel: "Ver credencial",
      },
      {
        title:
          "JavaScript Avançado II: ES6, Orientação a Objetos e Design Patterns",
        issuer: "Alura",
        issued: "Emitido em abr. de 2017",
        credentialId: "730f03ad-d8a6-447b-b64f-c7e5753d6881",
        href: "https://cursos.alura.com.br/certificate/730f03ad-d8a6-447b-b64f-c7e5753d6881",
        hrefLabel: "Ver credencial",
      },
      {
        title:
          "JavaScript Avançado I: ES6, Orientação a Objetos e Design Patterns",
        issuer: "Alura",
        issued: "Emitido em mar. de 2018",
        credentialId: "0f537e63-2dbd-498c-b7cf-3ac69dfb5544",
        href: "https://cursos.alura.com.br/certificate/0f537e63-2dbd-498c-b7cf-3ac69dfb5544",
        hrefLabel: "Ver credencial",
      },
      {
        title: "JavaScript: Programando na linguagem da web",
        issuer: "Alura",
        issued: "Emitido em mar. de 2016",
        credentialId: "a52c6571-441e-4753-b84c-063b566e1230",
        href: "https://cursos.alura.com.br/certificate/a52c6571-441e-4753-b84c-063b566e1230",
        hrefLabel: "Ver credencial",
      },
    ],
  },
  periods: [
    {
      label: "2022 — presente",
      roles: [
        {
          title: "Tarmac · Levante, Select Quote — Web Engineer",
          description:
            "Jan 2025 — presente · Remoto. Projeto open-source para rede global de pesquisa educacional. TypeScript, Zod, monorepo, Cypress e funcionalidades de configuração de estudos, participantes, atividades e analytics.",
        },
        {
          title: "Serasa — Senior Frontend Engineer",
          description:
            "Fev 2024 — Dez 2024 · Remoto. Arquitetura e liderança de design system em monorepo do zero: design tokens, biblioteca React, Storybook, Turborepo, Changesets, Vite, Jest, Cypress e Vanilla Extract.",
        },
        {
          title: "Volvo Group — Senior Frontend Engineer",
          description:
            "Mai 2022 — Out 2022 · Remoto. MVP greenfield do Volvo Connect Truck Fuel Advisor com BDD, React, GraphQL, Figma e times de data science, backend, design e negócio.",
        },
      ],
    },
    {
      label: "2015 — 2022",
      roles: [
        {
          title: "Wipro · Banco Next — Frontend Engineer",
          description:
            "Ago 2020 — Abr 2022 · Remoto. Interface com cliente, requisitos, testes funcionais e referência técnica em frontend. React, TypeScript, Jest, Styled Components, Web Components, Next.js e design system.",
        },
        {
          title: "Holanda Digital — Senior Frontend Developer",
          description:
            "Fev 2015 — Jul 2020 · Remoto. Unimed Paraná Apps (React, Ionic, Angular) e Paraná Banco (React, Redux, Storybook).",
        },
      ],
    },
    {
      label: "2012 — 2015",
      roles: [
        {
          title: "Get Chute — Frontend Developer",
          description:
            "Abr 2014 — Jan 2015 · Remoto. Projetos para Coca-Cola, Land Rover, Visa, Microsoft, Vogue e outras marcas globais. JavaScript, Sass, wireframes e Scrum.",
        },
        {
          title: "Grupo Globo · Gazeta do Povo — Frontend Developer",
          description:
            "Abr 2013 — Abr 2014 · Curitiba. Transformação digital de marca jornalística: branding guidelines, component library, padrões mobile e prototipação.",
        },
        {
          title: "Positivo Tecnologia — Frontend Developer Jr",
          description:
            "Abr 2012 — Abr 2013 · Curitiba. Plataforma de provas online para escolas Positivo. Wireframes, HTML/CSS/JS responsivo e análise de produto.",
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
            "Mai 2010 — Abr 2012 · Curitiba, presencial. Design e frontend para treinamentos em vídeo e operações de marketing: catálogos, apresentações, certificados, papelaria, e-mails e newsletters em HTML/CSS, suporte a workshops, análise de campanhas e interface com gráficas.",
        },
        {
          title:
            "TerraForum Consultores · HSBC — Trainee Designer & Frontend Developer",
          description:
            "Mai 2009 — Mai 2010 · Curitiba, presencial. Design digital e publicação frontend para a comunicação interna do HSBC Brasil em Microsoft SharePoint customizado, usando HTML, CSS e JavaScript.",
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
