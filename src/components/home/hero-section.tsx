import Image from "next/image";
import { contactMailto } from "@/lib/contact";

export function HeroSection() {
  return (
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
              Frontends em React e Next.js, server-side rendering e soluções em
              Node.js — com escopo claro, entrega previsível e foco em resultado
              no mundo real.
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
  );
}
