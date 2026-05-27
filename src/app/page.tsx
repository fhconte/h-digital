import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { BRAND_NAME } from "@/lib/brand";
import { CONTACT_EMAIL, contactMailto } from "@/lib/contact";

const solutionExamples = [
  "Frontends em JavaScript, React e Next.js com SSR",
  "APIs, automações e serviços em Node.js",
  "Design systems, sites e protótipos interativos",
  "MVPs, validação e auditoria de produto",
  "Dashboards, ferramentas internas e qualidade em produção",
];

const techStack = [
  "JavaScript",
  "React",
  "Next.js",
  "SSR",
  "Node.js",
];

const whyFocused = [
  {
    title: "Escopo definido",
    text: "Você sabe o que será entregue antes de começar — sem surpresas, sem projeto que cresce sem controle.",
  },
  {
    title: "Resultado no prazo",
    text: "Ciclos curtos e objetivos. Do conceito ao uso real, com marcos claros em vez de promessas distantes.",
  },
  {
    title: "Investimento previsível",
    text: "Cada entrega tem proposta fechada. Você investe no que resolve a dor, não em discurso de escala.",
  },
  {
    title: "Impacto mensurável",
    text: "Ferramentas que as pessoas usam no dia a dia — com métricas, feedback e evolução baseada em uso real.",
  },
];

const productCategories = [
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

const comparison = {
  traditional: [
    "Foco em startup e pitch",
    "Prazos longos e incertos",
    "Pressão por “mudar o mercado”",
    "Modelo pesado em equity e escala",
  ],
  hdigital: [
    "Foco em produto que funciona de verdade",
    "Entregas em ciclos com marcos claros",
    "Resolver uma dor concreta com excelência",
    "Projeto fechado, parceria ou produto próprio",
  ],
};

export default function Home() {
  return (
    <div className="min-h-full bg-white text-neutral-900">
      <SiteHeader />

      <main className="w-full">
        <section className="relative w-full">
          <div className="relative min-h-[min(85vh,520px)] w-full sm:min-h-[400px] sm:aspect-[21/9] lg:min-h-[420px]">
            <Image
              src="/brand/hero.jpg"
              alt="Paisagem da Holanda com moinhos ao entardecer"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20 sm:bg-gradient-to-r sm:from-black/60 sm:via-black/25 sm:to-transparent" />
            <div className="absolute inset-0 flex items-end px-4 pb-8 sm:px-6 sm:pb-10 lg:px-12 lg:pb-16">
              <div className="w-full max-w-3xl">
                <p className="mb-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/80 sm:text-xs sm:tracking-[0.3em]">
                  Incubadora de soluções digitais
                </p>
                <h1 className="text-2xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Tecnologia que sai do papel e funciona no mundo real.
                </h1>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/90 sm:mt-4 sm:text-lg">
                  Frontends em React e Next.js, server-side rendering e
                  soluções em Node.js — com escopo claro, entrega previsível e
                  foco em resultado no mundo real.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
                  <a
                    href={contactMailto("inicio")}
                    className="inline-flex w-full items-center justify-center bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90 sm:w-auto"
                  >
                    Falar conosco
                  </a>
                  <a
                    href="#entregas"
                    className="inline-flex w-full items-center justify-center border border-white/80 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/10 sm:w-auto"
                  >
                    O que entregamos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="solucoes"
          className="w-full scroll-mt-32 px-4 py-12 sm:scroll-mt-36 sm:px-6 sm:py-16 lg:scroll-mt-40 lg:px-12 lg:py-24"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Soluções
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Incubadora de tecnologia para quem precisa de resultado, não de
              discurso.
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-600 sm:text-lg">
              Não vendemos promessa de unicórnio nem projeto sem fim. Criamos{" "}
              <strong className="font-medium text-neutral-900">
                soluções digitais sob medida, com começo, meio e fim definidos
              </strong>{" "}
              — da ideia à operação, com JavaScript no frontend (React, Next.js,
              SSR) e Node.js no backend quando o produto precisa.
            </p>
          </div>

          <div className="mt-10 max-w-3xl">
            <h3 className="text-lg font-semibold text-neutral-900">
              Stack principal
            </h3>
            <p className="mt-3 text-neutral-600">
              Ecossistema JavaScript de ponta a ponta — do browser ao servidor —
              para entregar rápido sem sacrificar qualidade técnica.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:mt-16 sm:p-8 lg:p-10">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Nossa abordagem: escopo definido, impacto real
            </h3>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
              Cada entrega é um produto ou ferramenta digital com objetivo
              claro: resolve uma necessidade concreta, pode ir ao ar em semanas
              ou poucos meses e evolui com base no uso — não no palpite.
            </p>
            <p className="mt-4 text-neutral-600">
              Um app Next.js com SSR que ranqueia e carrega rápido. Uma API em
              Node.js que integra seus sistemas. Um MVP que valida antes de
              escalar. Um painel que organiza decisões.{" "}
              <strong className="font-medium text-neutral-900">
                Foco no que importa, entregue com excelência.
              </strong>
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Por que funciona para o seu negócio
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyFocused.map((item) => (
                <div
                  key={item.title}
                  className="border-t-2 border-accent pt-4"
                >
                  <h4 className="font-semibold text-neutral-900">{item.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-lg font-semibold text-neutral-500">
                Incubadora tradicional
              </h3>
              <ul className="mt-4 space-y-3 text-neutral-600">
                {comparison.traditional.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-neutral-300" aria-hidden>
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-accent">
                {BRAND_NAME}
              </h3>
              <ul className="mt-4 space-y-3 text-neutral-700">
                {comparison.hdigital.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-accent" aria-hidden>
                      +
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h3 className="text-xl font-semibold sm:text-2xl">
                O que desenvolvemos
              </h3>
              <ul className="mt-8 space-y-4 text-lg text-neutral-700">
                {solutionExamples.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-neutral-200 pt-10 lg:border-t-0 lg:border-l lg:pl-16 lg:pt-0">
              <h3 className="text-xl font-semibold sm:text-2xl">
                Como a incubadora atua
              </h3>
              <ul className="mt-8 space-y-5 text-lg text-neutral-700">
                <li>
                  <strong className="font-medium text-neutral-900">
                    Incubação
                  </strong>{" "}
                  — desenvolvemos produtos digitais próprios e de parceiros, do
                  zero à primeira versão publicada.
                </li>
                <li>
                  <strong className="font-medium text-neutral-900">
                    Projetos sob medida
                  </strong>{" "}
                  — para empresas, criadores e equipes que precisam de tech sem
                  montar um departamento inteiro.
                </li>
                <li>
                  <strong className="font-medium text-neutral-900">
                    Evolução contínua
                  </strong>{" "}
                  — depois do lançamento, iteramos com base em uso, feedback e
                  métricas reais.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="entregas"
          className="w-full scroll-mt-32 border-t border-neutral-100 bg-neutral-50 px-4 py-12 sm:scroll-mt-36 sm:px-6 sm:py-16 lg:scroll-mt-40 lg:px-12 lg:py-24"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            O que entregamos
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Soluções digitais que incubamos e construímos para você.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600 sm:text-lg">
            Do frontend em React e Next.js — com SSR quando precisa — ao
            backend em Node.js, cada entrega tem escopo fechado e objetivo claro.
            O investimento acompanha o
            desafio:{" "}
            <strong className="font-medium text-neutral-900">
              sob consulta, com proposta personalizada por projeto
            </strong>
            , sem pacote genérico que não serve ninguém.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-600">
            Você paga apenas pelo{" "}
            <strong className="font-medium text-neutral-900">
              desenvolvimento
            </strong>
            . Domínio e hospedagem ficam com você — contratados e pagos
            diretamente às empresas de registro e hospedagem que escolher.
          </p>

          <div className="mt-10 max-w-3xl rounded-2xl border border-dashed border-neutral-300 bg-white p-6 lg:p-8">
            <h3 className="text-lg font-semibold text-neutral-900">
              Cases em destaque
            </h3>
            <p className="mt-3 leading-7 text-neutral-600">
              Estamos incubando as primeiras soluções com parceiros. Assim que
              houver autorização para divulgar, publicamos aqui resultados reais
              — problema, solução e impacto — em vez de só listar serviços.
            </p>
          </div>

          {productCategories.map((category, index) => (
            <div key={category.label} className={index === 0 ? "mt-12" : "mt-16"}>
              <h3 className="text-lg font-semibold text-neutral-900">
                {category.label}
              </h3>
              <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.products.map((product) => (
                  <li
                    key={product.title}
                    className="flex flex-col border border-neutral-200 bg-white p-6 lg:p-8"
                  >
                    <h4 className="text-lg font-semibold text-neutral-900">
                      {product.title}
                    </h4>
                    <p className="mt-3 flex-1 text-sm leading-7 text-neutral-600">
                      {product.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="mt-12 max-w-3xl text-neutral-600">
            Tem outra dor em mente?{" "}
            <a
              href={contactMailto("entregas")}
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              Fale conosco
            </a>{" "}
            — montamos a entrega certa para o seu contexto, com escopo que você
            entende antes de assinar.
          </p>
        </section>
      </main>

      <footer
        id="contato"
        className="w-full scroll-mt-32 border-t border-neutral-100 px-4 py-10 sm:scroll-mt-36 sm:px-6 lg:scroll-mt-40 lg:px-12"
      >
        <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <p className="font-medium uppercase tracking-[0.15em] text-neutral-700">
              Contato
            </p>
            <p className="mt-3 text-neutral-600">
              Tem uma ideia, um processo manual ou um produto para validar?{" "}
              <a
                href={contactMailto("rodape")}
                className="text-accent underline-offset-4 hover:underline"
              >
                Conte o contexto
              </a>{" "}
              — respondemos com a solução que faz sentido e um escopo inicial
              para conversar, sem compromisso.
            </p>
            <p className="mt-4 text-sm text-neutral-500">
              Cobramos só o desenvolvimento · domínio e hospedagem por sua conta
              · escopo fechado por entrega
            </p>
          </div>
          <div className="text-sm text-neutral-500 sm:text-right">
            <a
              href={contactMailto("rodape")}
              className="break-all text-base font-medium text-neutral-800 transition-colors hover:text-accent sm:text-lg"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-6">
              © {new Date().getFullYear()} {BRAND_NAME}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
