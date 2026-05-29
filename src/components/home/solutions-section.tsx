import { content } from "@/content";

export function SolutionsSection() {
  const { solutions } = content;

  return (
    <section
      id="solucoes"
      className="w-full scroll-mt-32 px-4 py-12 sm:scroll-mt-36 sm:px-6 sm:py-16 lg:scroll-mt-40 lg:px-12 lg:py-24"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {solutions.eyebrow}
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
          {solutions.title}
        </h2>
        <p className="mt-6 text-base leading-8 text-neutral-600 sm:text-lg">
          {solutions.intro.before}
          <strong className="font-medium text-neutral-900">
            {solutions.intro.highlight}
          </strong>
          {solutions.intro.after}
        </p>
      </div>

      <div className="mt-10 max-w-3xl">
        <h3 className="text-lg font-semibold text-neutral-900">
          {solutions.stack.title}
        </h3>
        <p className="mt-3 text-neutral-600">{solutions.stack.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {solutions.techStack.map((tech) => (
            <li
              key={tech}
              className="border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700"
            >
              {tech}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm font-medium text-neutral-700">
          {solutions.stack.toolingLabel}
        </p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {solutions.toolingStack.map((tool) => (
            <li
              key={tool}
              className="border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm font-medium text-neutral-700"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:mt-16 sm:p-8 lg:p-10">
        <h3 className="text-xl font-semibold sm:text-2xl">
          {solutions.howWeWork.title}
        </h3>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
          {solutions.howWeWork.description}
        </p>
        <p className="mt-4 text-neutral-600">{solutions.howWeWork.examples}</p>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold sm:text-2xl">
          {solutions.whyHire.title}
        </h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.whyHire.items.map((item) => (
            <div key={item.title} className="border-t-2 border-accent pt-4">
              <h4 className="font-semibold text-neutral-900">{item.title}</h4>
              <p className="mt-2 text-sm leading-7 text-neutral-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <h3 className="text-xl font-semibold sm:text-2xl">
            {solutions.whatWeBuild.title}
          </h3>
          <ul className="mt-8 space-y-4 text-lg text-neutral-700">
            {solutions.whatWeBuild.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-neutral-200 pt-10 lg:border-t-0 lg:border-l lg:pl-16 lg:pt-0">
          <h3 className="text-xl font-semibold sm:text-2xl">
            {solutions.incubatorRole.title}
          </h3>
          <ul className="mt-8 space-y-5 text-lg text-neutral-700">
            {solutions.incubatorRole.items.map((item) => (
              <li key={item.title}>
                <strong className="font-medium text-neutral-900">
                  {item.title}
                </strong>
                : {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
