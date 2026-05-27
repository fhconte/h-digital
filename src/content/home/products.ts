import type { ProductCategory } from "@/content/home/types";

export const productCategories: ProductCategory[] = [
  {
    label: "Produto e experiência",
    products: [
      {
        title: "Design Systems sob medida",
        description:
          "Tokens, componentes e documentação para seu produto manter consistência visual e velocidade no desenvolvimento.",
      },
      {
        title: "MVPs e validação",
        description:
          "Versão funcional para testar hipóteses com usuários reais antes de comprometer budget em escala.",
      },
      {
        title: "Landing pages e sites",
        description:
          "Páginas rápidas em Next.js — institucional, campanha ou lançamento, com SSR ou SSG quando o projeto pede performance e SEO.",
      },
      {
        title: "Protótipos interativos",
        description:
          "Do conceito ao clique: protótipos navegáveis para alinhar time, cliente e investimento.",
      },
      {
        title: "Auditoria de produto digital",
        description:
          "Análise focada de UX, performance e código — diagnóstico claro e prioridades de melhoria.",
      },
    ],
  },
  {
    label: "Operação e dados",
    products: [
      {
        title: "Dashboards e painéis",
        description:
          "Interfaces para visualizar dados, acompanhar métricas e apoiar decisões do dia a dia.",
      },
      {
        title: "Ferramentas internas",
        description:
          "CRMs, gestão de leads, agendas e fluxos operacionais feitos para o seu processo.",
      },
      {
        title: "Formulários e onboarding",
        description:
          "Cadastros, questionários, KYC leve e jornadas de entrada — fluxos claros que convertem e orientam.",
      },
    ],
  },
  {
    label: "Frontend e plataforma web",
    products: [
      {
        title: "Frontends React e Next.js",
        description:
          "Interfaces em JavaScript com componentes React — rotas, estado e integração com APIs, no padrão que o mercado já adota e mantém.",
      },
      {
        title: "Server-side rendering (SSR)",
        description:
          "Renderização no servidor com Next.js — primeiro carregamento rápido, conteúdo dinâmico e melhor base para SEO em páginas que precisam ser encontradas.",
      },
      {
        title: "Dashboards e apps web",
        description:
          "Painéis, fluxos internos e produtos SaaS no browser — experiência responsiva, tipada com TypeScript quando o projeto exige mais rigor.",
      },
    ],
  },
  {
    label: "Backend e integrações",
    products: [
      {
        title: "Soluções em Node.js",
        description:
          "APIs REST, webhooks, filas e jobs no mesmo ecossistema JavaScript do frontend — menos atrito entre times e deploy mais coerente.",
      },
      {
        title: "Automações e integrações",
        description:
          "Conectamos ferramentas, APIs e fluxos para eliminar trabalho manual repetitivo.",
      },
      {
        title: "Assistentes e chatbots",
        description:
          "Suporte automatizado, FAQ inteligente ou triagem de demandas com escopo definido e mensurável.",
      },
      {
        title: "APIs e microsserviços",
        description:
          "Endpoints e serviços pontuais em Node.js — integração ou job específico, sem arquitetura desnecessária.",
      },
    ],
  },
  {
    label: "Qualidade e confiabilidade",
    products: [
      {
        title: "Observabilidade",
        description:
          "Sentry para erros e performance em produção, Hotjar para gravações, mapas de calor e funis — além de logs, métricas e alertas, com setup e dashboards sob medida.",
      },
      {
        title: "Testes automatizados",
        description:
          "Jest para testes unitários e de integração, Cypress para fluxos E2E nas jornadas críticas — suítes focadas e pipeline no CI para deploy com mais confiança.",
      },
    ],
  },
];
