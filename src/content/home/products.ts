import type { ProductCategory } from "@/content/home/types";

export const productCategories: ProductCategory[] = [
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
];
