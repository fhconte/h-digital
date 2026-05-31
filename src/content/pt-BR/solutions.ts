import type { SolutionsContent } from "@/content/types";

export const solutions: SolutionsContent = {
  eyebrow: "Soluções",
  title: "Design system como fundação — não como add-on.",
  intro: {
    before: "Nosso core são ",
    highlight: "design systems sob medida",
    after:
      ": totalmente customizáveis, pensados em acessibilidade, performance, segurança e branding forte. Depois disso, sites, painéis e APIs em TypeScript, Vue, React, Next.js e Node.js.",
  },
  stack: {
    title: "O que compõe o sistema",
    description:
      "Tokens, componentes e padrões de interface documentados em Storybook — referência viva para design, produto e engenharia. Modular para adotar por partes ou integrado de ponta a ponta.",
    toolingLabel: "Entrega e operação",
  },
  techStack: ["Storybook", "TypeScript", "Vue", "React", "Next.js", "Node.js"],
  toolingStack: ["Vercel", "GitHub Actions"],
  howWeWork: {
    title: "Como trabalhamos",
    description:
      "O design system pode ser usado de forma modular ou integrada ao produto. Componentes e tokens se desmembram e reaproveitam em vários projetos sem refazer a base a cada entrega.",
    examples:
      "Entregamos o catálogo no Storybook para o time consultar, testar e evoluir — além do código pronto para produção.",
  },
  whyHire: {
    title: "Pilares do sistema",
    items: [
      {
        title: "Acessibilidade",
        text: "Componentes e padrões pensados para uso inclusivo desde o início, não como correção depois.",
      },
      {
        title: "Performance",
        text: "Base enxuta, tokens consistentes e componentes otimizados para carregar e escalar bem.",
      },
      {
        title: "Segurança",
        text: "Boas práticas no frontend e nas integrações, com revisão de dependências e padrões seguros.",
      },
      {
        title: "Branding interativo",
        text: "Identidade visual forte e flexível — motion, estados e tom de marca aplicados de forma coerente.",
      },
    ],
  },
  whatWeBuild: {
    title: "O que desenvolvemos",
    items: [
      "Design systems customizáveis documentados em Storybook",
      "Bibliotecas modulares reutilizáveis em múltiplos produtos",
      "Frontends em Vue, React e Next.js com TypeScript",
      "APIs, automações e deploy na Vercel com CI no GitHub Actions",
    ],
  },
  incubatorRole: {
    title: "Como a incubadora atua",
    items: [
      {
        title: "Incubação",
        text: "Produtos nossos e de parceiros, do zero até a primeira versão no ar.",
      },
      {
        title: "Projetos sob medida",
        text: "Para quem precisa de software sem montar time interno de dev.",
      },
      {
        title: "Manutenção",
        text: "Depois do lançamento, ajustes e melhorias conforme o uso.",
      },
    ],
  },
};
