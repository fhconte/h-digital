import type { SolutionsContent } from "@/content/types";

export const solutions: SolutionsContent = {
  eyebrow: "Soluções",
  title: "Trabalhamos com o que conhecemos bem.",
  intro: {
    before: "Fazemos sites, painéis e APIs com ",
    highlight: "TypeScript, Vue, React, Next.js e Node.js",
    after: ". Cada projeto tem escopo e prazo definidos na proposta.",
  },
  stack: {
    title: "Stack principal",
    description:
      "Do componente no browser até a API no servidor. Código no GitHub, pipeline no GitHub Actions e site ou app publicado na Vercel.",
    toolingLabel: "Publicação e CI",
  },
  techStack: ["TypeScript", "Vue", "React", "Next.js", "Node.js"],
  toolingStack: ["Vercel", "GitHub Actions"],
  howWeWork: {
    title: "Como trabalhamos",
    description:
      "Cada job tem um objetivo claro: site, painel, integração ou API. Prazo e entregas combinados na proposta. Repositório no GitHub, CI no GitHub Actions e publicação na Vercel quando for projeto web.",
    examples:
      "Exemplos do que já fazemos: painel em Vue, site em Next.js, backend em Node para ligar sistemas que você já usa.",
  },
  whyHire: {
    title: "Por que contratar",
    items: [
      {
        title: "Escopo definido",
        text: "Antes de começar, você sabe o que entra na entrega. Sem escopo que cresce no meio do projeto.",
      },
      {
        title: "Prazo combinado",
        text: "Marcos claros do início ao fim. Menos reunião vaga, mais coisa pronta para usar.",
      },
      {
        title: "Orçamento fechado",
        text: "Proposta por entrega. Você paga o que foi combinado, sem surpresa no meio do caminho.",
      },
      {
        title: "Uso de verdade",
        text: "Prioridade em ferramenta que o time usa no dia a dia, não só apresentação.",
      },
    ],
  },
  whatWeBuild: {
    title: "O que desenvolvemos",
    items: [
      "Frontends em Vue, React e Next.js com TypeScript",
      "APIs e automações em Node.js",
      "Sites, dashboards e ferramentas internas",
      "Deploy na Vercel, CI com GitHub Actions, testes e monitoramento",
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
