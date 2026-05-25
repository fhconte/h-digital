import Image from "next/image";

const navItems = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

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
                  className="transition-colors hover:text-[#c45c26]"
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
                  Incubadora de tecnologia
                </p>
                <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Onde ideias digitais ganham forma, estrutura e escala.
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section id="solucoes" className="w-full scroll-mt-28 px-6 py-16 lg:px-12 lg:py-24">
          <div className="grid w-full gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                H Digital é uma incubadora de projetos de tecnologia.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                Apoiamos empreendedores, equipes e produtos digitais desde a
                concepção até a execução — unindo estratégia, design e
                engenharia para transformar oportunidades em soluções reais.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600">
                Além disso, criamos um ambiente para acelerar aprendizado,
                validar hipóteses e construir negócios digitais com base
                sólida, visão de longo prazo e foco em impacto.
              </p>
            </div>
            <div className="border-t border-neutral-200 pt-10 lg:border-t-0 lg:border-l lg:pl-16 lg:pt-0">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c45c26]">
                O que fazemos
              </p>
              <ul className="mt-8 space-y-5 text-lg text-neutral-700">
                <li>Incubação de produtos e startups digitais</li>
                <li>Prototipação, MVPs e evolução de plataformas</li>
                <li>Consultoria em tecnologia, UX e arquitetura</li>
                <li>Parcerias para escalar projetos com consistência</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="projetos"
          className="w-full scroll-mt-28 border-t border-neutral-100 bg-neutral-50 px-6 py-16 lg:px-12 lg:py-24"
        >
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Projetos
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Incubamos e desenvolvemos produtos digitais em diferentes estágios —
            da validação de ideias à operação em escala.
          </p>
        </section>
      </main>

      <footer
        id="contato"
        className="w-full scroll-mt-28 border-t border-neutral-100 px-6 py-8 lg:px-12"
      >
        <div className="flex w-full flex-col gap-4 text-sm text-neutral-500 sm:flex-row sm:items-start sm:justify-between">
          <p>© {new Date().getFullYear()} H Digital</p>
          <div>
            <p className="font-medium uppercase tracking-[0.15em] text-neutral-700">
              Contato
            </p>
            <a
              href="mailto:flaviohconte@gmail.com"
              className="text-neutral-600 transition-colors hover:text-[#c45c26]"
            >
              contato@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
