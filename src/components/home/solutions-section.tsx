import { BRAND_NAME } from "@/lib/brand";
import {
  comparison,
  howWeWork,
  solutionExamples,
  techStack,
  whyFocused,
} from "@/content/home";

export function SolutionsSection() {
  return (
    <section
      id="solucoes"
      className="w-full scroll-mt-32 px-4 py-12 sm:scroll-mt-36 sm:px-6 sm:py-16 lg:scroll-mt-40 lg:px-12 lg:py-24"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Soluções
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
          Desenvolvimento web com a stack que dominamos.
        </h2>
        <p className="mt-6 text-base leading-8 text-neutral-600 sm:text-lg">
          Criamos{" "}
          <strong className="font-medium text-neutral-900">
            soluções digitais sob medida, com começo, meio e fim definidos
          </strong>{" "}
          — com TypeScript no frontend (Vue, React, Next.js) e Node.js no
          backend quando o produto precisa.
        </p>
      </div>

      <div className="mt-10 max-w-3xl">
        <h3 className="text-lg font-semibold text-neutral-900">Stack principal</h3>
        <p className="mt-3 text-neutral-600">
          TypeScript em todo o fluxo — do componente Vue ou React ao endpoint em
          Node.js — com tipagem e manutenção em mente.
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
          Cada entrega é um produto ou ferramenta digital com objetivo claro:
          resolve uma necessidade concreta, pode ir ao ar em semanas ou poucos
          meses e evolui com base no uso — não no palpite.
        </p>
        <p className="mt-4 text-neutral-600">
          Um painel em Vue para o time operar. Um site em Next.js para o
          negócio comunicar e converter. Uma API em Node.js que integra o que
          já existe.{" "}
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
            <div key={item.title} className="border-t-2 border-accent pt-4">
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
            Projeto sem foco
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
          <h3 className="text-lg font-semibold text-accent">{BRAND_NAME}</h3>
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
          <h3 className="text-xl font-semibold sm:text-2xl">O que desenvolvemos</h3>
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
          <h3 className="text-xl font-semibold sm:text-2xl">Como a incubadora atua</h3>
          <ul className="mt-8 space-y-5 text-lg text-neutral-700">
            {howWeWork.map((item) => (
              <li key={item.title}>
                <strong className="font-medium text-neutral-900">
                  {item.title}
                </strong>{" "}
                — {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
