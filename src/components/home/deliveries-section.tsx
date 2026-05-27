import { productCategories } from "@/content/home";
import { contactMailto } from "@/lib/contact";

export function DeliveriesSection() {
  return (
    <section
      id="entregas"
      className="w-full scroll-mt-32 border-t border-neutral-100 bg-neutral-50 px-4 py-12 sm:scroll-mt-36 sm:px-6 sm:py-16 lg:scroll-mt-40 lg:px-12 lg:py-24"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        O que entregamos
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
        O que fazemos no dia a dia.
      </h2>
      <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600 sm:text-lg">
        Vue, React, Next.js e Node com TypeScript. Cada projeto com escopo
        fechado. Valor{" "}
        <strong className="font-medium text-neutral-900">
          sob consulta
        </strong>
        , com proposta escrita antes de começar.
      </p>
      <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-600">
        Cobramos só o desenvolvimento. Para sites e apps Next.js, configuramos
        deploy na Vercel na sua conta. Domínio e plano da Vercel você paga
        direto ao provedor.
      </p>

      <div className="mt-10 max-w-3xl rounded-2xl border border-dashed border-neutral-300 bg-white p-6 lg:p-8">
        <h3 className="text-lg font-semibold text-neutral-900">Cases</h3>
        <p className="mt-3 leading-7 text-neutral-600">
          Em breve publicamos trabalhos com autorização do cliente. Por enquanto
          a lista abaixo mostra o tipo de entrega que aceitamos.
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
        Precisa de outra coisa?{" "}
        <a
          href={contactMailto("entregas")}
          className="font-medium text-accent underline-offset-4 hover:underline"
        >
          Manda um e-mail
        </a>{" "}
        com o que você precisa. Respondemos com escopo e prazo para avaliar.
      </p>
    </section>
  );
}
