import type { DeliveriesContent } from "@/content/types";

export const deliveries: DeliveriesContent = {
  eyebrow: "O que entregamos",
  title: "O que fazemos no dia a dia.",
  intro: {
    before:
      "Design systems sob medida no centro; Vue, React, Next.js e Node com TypeScript quando o produto pede. Valor ",
    highlight: "sob consulta",
    after: ", com proposta escrita antes de começar.",
  },
  pricingNote:
    "Cobramos só o desenvolvimento. Para sites e apps Next.js, configuramos deploy na Vercel na sua conta. Domínio e plano da Vercel você paga direto ao provedor.",
  cases: {
    title: "Cases",
    description:
      "Em breve publicamos trabalhos com autorização do cliente. Por enquanto a lista abaixo mostra o tipo de entrega que aceitamos.",
  },
  categories: [
    {
      label: "Design Systems",
      products: [
        {
          title: "Design Systems sob medida",
          description:
            "Sistema totalmente customizável, com acessibilidade, performance, segurança e branding forte. Uso modular ou integrado, desmembrável para vários projetos e documentado em Storybook como referência da empresa.",
        },
      ],
    },
    {
      label: "Frontend e produto web",
      products: [
        {
          title: "Frontends em Vue e React",
          description:
            "Telas em TypeScript: componentes, estado e chamadas de API, no framework que o projeto usar.",
        },
        {
          title: "Sites e apps em Next.js",
          description:
            "Sites institucionais, landing pages e apps em Next.js com TypeScript. Deploy configurado na Vercel (conta do cliente).",
        },
        {
          title: "Dashboards e ferramentas internas",
          description:
            "Painéis, CRMs simples, gestão de leads e rotinas do dia a dia do seu time.",
        },
      ],
    },
    {
      label: "Backend e integrações",
      products: [
        {
          title: "APIs e backend em Node.js",
          description:
            "REST, webhooks e rotinas em TypeScript no servidor, alinhado ao frontend quando fizer sentido.",
        },
        {
          title: "Automações e integrações",
          description:
            "Ligar sistemas, APIs e fluxos para cortar trabalho manual repetitivo.",
        },
      ],
    },
    {
      label: "Qualidade",
      products: [
        {
          title: "Testes automatizados",
          description:
            "Jest e Cypress nos fluxos importantes. GitHub Actions roda os testes antes de publicar na Vercel.",
        },
        {
          title: "Observabilidade",
          description:
            "Configuração de Sentry, Hotjar, logs e alertas para ver erro e uso em produção.",
        },
      ],
    },
  ],
  cta: {
    before: "Precisa de outra coisa? ",
    link: "Manda um e-mail",
    after: " com o que você precisa. Respondemos com escopo e prazo para avaliar.",
  },
};
