"use client";

import { useContent } from "@/i18n/locale-provider";

export function ExperienceSection() {
  const content = useContent();
  const { experience, sections } = content;

  return (
    <section
      id={sections.experience}
      className="w-full scroll-mt-32 border-t border-neutral-100 bg-neutral-50 px-4 py-12 sm:scroll-mt-36 sm:px-6 sm:py-16 lg:scroll-mt-40 lg:px-12 lg:py-24"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {experience.eyebrow}
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
        {experience.title}
      </h2>
      <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600 sm:text-lg">
        {experience.intro.before}
        <strong className="font-medium text-neutral-900">
          {experience.intro.highlight}
        </strong>
        {experience.intro.after}
      </p>
      <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-600">
        {experience.backgroundNote}
      </p>

      <div className="mt-10 max-w-3xl rounded-2xl border border-dashed border-neutral-300 bg-white p-6 lg:p-8">
        <h3 className="text-lg font-semibold text-neutral-900">
          {experience.highlights.title}
        </h3>
        <p className="mt-3 leading-7 text-neutral-600">
          {experience.highlights.description}
        </p>
      </div>

      {experience.periods.map((period, index) => (
        <div key={period.label} className={index === 0 ? "mt-12" : "mt-16"}>
          <h3 className="text-lg font-semibold text-neutral-900">
            {period.label}
          </h3>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {period.roles.map((role) => (
              <li
                key={role.title}
                className="flex flex-col border border-neutral-200 bg-white p-6 lg:p-8"
              >
                <h4 className="text-lg font-semibold text-neutral-900">
                  {role.title}
                </h4>
                <p className="mt-3 flex-1 text-sm leading-7 text-neutral-600">
                  {role.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}

    </section>
  );
}
