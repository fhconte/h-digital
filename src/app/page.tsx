import Image from "next/image";

const navItems = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

const microsolutionExamples = [
  "Design systems, sites e protótipos interativos",
  "MVPs, validação e auditoria de produto",
  "Dashboards e ferramentas internas",
  "Automações, APIs, formulários e assistentes",
];

const whyMicro = [
  {
    title: "Escopo definido",
    text: "Cada entrega resolve um problema específico — sem prometer um monólito gigante desde o dia um.",
  },
  {
    title: "Ciclos mais curtos",
    text: "Menos burocracia de startup, mais construção. Do conceito ao uso real em prazos realistas.",
  },
  {
    title: "Menor risco",
    text: "Investimento e complexidade proporcionais ao tamanho da solução, não ao tamanho do discurso.",
  },
  {
    title: "Impacto direto",
    text: "Ferramentas que as pessoas usam no dia a dia, não apresentações que ficam na gaveta.",
  },
];

const products = [
  {
    title: "Design Systems sob medida",
    description:
      "Tokens, componentes e documentação para seu produto manter consistência visual e velocidade no desenvolvimento.",
  },
  {
    title: "MVPs e validação",
    description:
      "Versão mínima funcional para testar hipóteses com usuários reais antes de investir pesado.",
  },
  {
    title: "Landing pages e sites",
    description:
      "Páginas enxutas, rápidas e com mensagem clara — institucional, campanha ou lançamento.",
  },
  {
    title: "Dashboards e painéis",
    description:
      "Interfaces para visualizar dados, acompanhar métricas e apoiar decisões do dia a dia.",
  },
  {
    title: "Automações e integrações",
    description:
      "Conectamos ferramentas, APIs e fluxos para eliminar trabalho manual repetitivo.",
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
  {
    title: "Ferramentas internas",
    description:
      "CRMs simples, gestão de leads, agendas e fluxos operacionais feitos para o seu processo.",
  },
  {
    title: "Formulários e onboarding",
    description:
      "Cadastros, questionários, KYC leve e jornadas de entrada — fluxos claros que convertem e orientam.",
  },
  {
    title: "Assistentes e chatbots",
    description:
      "Suporte automatizado, FAQ inteligente ou triagem de demandas com escopo definido e mensurável.",
  },
  {
    title: "APIs e microsserviços",
    description:
      "Um endpoint, uma integração ou um job específico — backend pontual sem arquitetura desnecessária.",
  },
];

const comparison = {
  traditional: [
    "Foco em startup e pitch",
    "Prazos longos e incertos",
    "Pressão por “mudar o mercado”",
    "Modelo pesado em equity e escala",
  ],
  micro: [
    "Foco em produto ou ferramenta enxuta",
    "Entregas em ciclos curtos",
    "Resolver uma dor concreta bem feito",
    "Projeto fechado, parceria ou produto próprio",
  ],
};

export default function Home() {
  return (
    <div className="min-h-full bg-white text-neutral-900">
      <header className="flex w-full items-center justify-between gap-6 border-b border-neutral-100 px-6 py-2 lg:px-12">
        <a href="#" aria-label="H Digital — início">
          <Image
            src="/brand/logo.png"
            alt="H Digital"
            width={944}
            height={531}
            className="h-24 w-auto lg:h-32"
            priority
          />
        </a>
        <nav aria-label="Menu principal">
          <ul className="flex items-center gap-6 text-sm font-medium uppercase tracking-[0.15em] text-neutral-700 sm:gap-10 sm:text-base">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="w-full">
        <section className="relative w-full">
          <div className="relative aspect-[21/9] min-h-[280px] w-full sm:min-h-[360px] lg:min-h-[420px]">
            <Image
              src="/brand/hero.jpg"
              alt="Paisagem da Holanda com moinhos ao entardecer"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
            <div className="absolute inset-0 flex items-end px-6 pb-10 lg:px-12 lg:pb-16">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-white/80">
                  Incubadora de microsoluções de tecnologia
                </p>
                <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Ferramentas digitais pequenas, úteis e prontas para usar.
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
                  Incubamos e construímos produtos tech enxutos — com escopo
                  claro, entrega rápida e foco em resolver um problema de cada
                  vez.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="solucoes"
          className="w-full scroll-mt-28 px-6 py-16 lg:px-12 lg:py-24"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Soluções
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              H Digital é uma incubadora de microsoluções de tecnologia.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Não apostamos tudo em uma única startup nem em projetos sem fim.
              Criamos e apoiamos{" "}
              <strong className="font-medium text-neutral-900">
                soluções digitais sob medida, enxutas e executáveis
              </strong>{" "}
              — da ideia à operação, unindo estratégia, design e engenharia.
            </p>
          </div>

          <div className="mt-16 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 lg:p-10">
            <h3 className="text-xl font-semibold sm:text-2xl">
              O que é uma microsolução?
            </h3>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
              É um produto ou ferramenta digital com escopo delimitado: resolve
              uma necessidade concreta, pode ser lançada em semanas ou poucos
              meses e evolui conforme o uso real — não conforme um deck de
              investidores.
            </p>
            <p className="mt-4 text-neutral-600">
              Pense em um MVP que valida uma hipótese, uma automação que poupa
              horas de trabalho manual, um painel que organiza dados dispersos ou
              um site que comunica e converte. Pequeno no tamanho, grande no
              efeito.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Por que microsoluções?
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyMicro.map((item) => (
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
                H Digital · microsoluções
              </h3>
              <ul className="mt-4 space-y-3 text-neutral-700">
                {comparison.micro.map((item) => (
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
                {microsolutionExamples.map((item) => (
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
                  — desenvolvemos microsoluções próprias e de parceiros, do zero
                  à primeira versão publicada.
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
          id="projetos"
          className="w-full scroll-mt-28 border-t border-neutral-100 bg-neutral-50 px-6 py-16 lg:px-12 lg:py-24"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Projetos
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Onde as microsoluções ganham vida.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Aqui incubamos produtos digitais em diferentes estágios: ideias em
            validação, MVPs em teste com usuários reais e ferramentas já em
            operação que precisam evoluir. Cada projeto mantém escopo claro —
            sem virar um monólito antes da hora.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
            Estas são microsoluções que incubamos e entregamos — cada uma com
            escopo fechado e objetivo claro. Cases em andamento entram aqui
            conforme forem publicados.
          </p>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <li
                key={product.title}
                className="flex flex-col border border-neutral-200 bg-white p-6 lg:p-8"
              >
                <h3 className="text-lg font-semibold text-neutral-900">
                  {product.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-neutral-600">
                  {product.description}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-3xl text-neutral-600">
            Tem outra dor em mente?{" "}
            <a
              href="#contato"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              Fale conosco
            </a>{" "}
            — microsolução é exatamente isso: o tamanho certo para o problema
            certo.
          </p>
        </section>
      </main>

      <footer
        id="contato"
        className="w-full scroll-mt-28 border-t border-neutral-100 px-6 py-10 lg:px-12"
      >
        <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <p className="font-medium uppercase tracking-[0.15em] text-neutral-700">
              Contato
            </p>
            <p className="mt-3 text-neutral-600">
              Tem uma ideia, um processo manual ou um produto para validar?
              Vamos conversar sobre a microsolução certa para o seu contexto.
            </p>
          </div>
          <div className="text-sm text-neutral-500">
            <a
              href="mailto:hdgtldevelopment@gmail.com"
              className="text-lg font-medium text-neutral-800 transition-colors hover:text-accent"
            >
              hdgtldevelopment@gmail.com
            </a>
            <p className="mt-6">© {new Date().getFullYear()} H Digital</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
