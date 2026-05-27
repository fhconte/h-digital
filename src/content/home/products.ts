import type { ProductCategory } from "@/content/home/types";

export const productCategories: ProductCategory[] = [
  {
    label: "Frontend e produto web",
    products: [
      {
        title: "Frontends em Vue e React",
        description:
          "Interfaces com TypeScript — componentes, estado e integração com APIs no stack que o projeto pedir.",
      },
      {
        title: "Sites e apps em Next.js",
        description:
          "Páginas e aplicações em Next.js com TypeScript — institucional, produto ou ferramenta web com performance e SEO em mente.",
      },
      {
        title: "Dashboards e ferramentas internas",
        description:
          "Painéis, CRMs enxutos, gestão de leads e fluxos operacionais feitos para o processo do cliente.",
      },
    ],
  },
  {
    label: "Backend e integrações",
    products: [
      {
        title: "APIs e backend em Node.js",
        description:
          "REST, webhooks e jobs em TypeScript no servidor — mesmo ecossistema do frontend quando faz sentido.",
      },
      {
        title: "Automações e integrações",
        description:
          "Conectar ferramentas, APIs e fluxos para eliminar trabalho manual repetitivo.",
      },
    ],
  },
  {
    label: "Qualidade",
    products: [
      {
        title: "Testes automatizados",
        description:
          "Jest para unitário e integração, Cypress para E2E nas jornadas críticas — com pipeline no CI.",
      },
      {
        title: "Observabilidade",
        description:
          "Sentry, Hotjar, logs e alertas — setup para enxergar erros, uso e comportamento em produção.",
      },
    ],
  },
];
