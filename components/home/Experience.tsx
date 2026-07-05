import { EXPERIENCE } from "@/lib/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy">
          Experience
        </p>
        <h2 className="mt-4 font-serif text-3xl font-semibold text-navy lg:text-5xl">
          Experience
        </h2>
        <p className="mt-4 max-w-[700px] text-base text-text-muted lg:text-lg">
          A track record of building, leading, and executing — from an
          independent content venture to a pre-incubated technology startup.
        </p>

        <div className="relative mt-16">
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-border lg:left-[7px]" />

          <div className="space-y-16">
            {EXPERIENCE.map((entry) => (
              <div key={entry.id} className="relative pl-10">
                {/* Timeline node */}
                <div className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-white bg-navy shadow-sm" />

                <div className="rounded-xl border border-border bg-white p-8 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-navy">
                        {entry.role}
                      </h3>
                      <p className="mt-1 text-base font-medium text-text-primary">
                        {entry.organization}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-text-muted">
                      {entry.duration}
                    </span>
                  </div>

                  {entry.badge && (
                    <span className="mt-4 inline-block rounded-md bg-surface px-3 py-1 text-xs font-medium text-navy">
                      {entry.badge}
                    </span>
                  )}

                  <ul className="mt-6 space-y-3">
                    {entry.description.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-text-muted lg:text-base"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {entry.stats && (
                    <div className="mt-6 flex gap-8 border-t border-border pt-6">
                      {entry.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="font-serif text-2xl font-semibold text-navy">
                            {stat.value}
                          </p>
                          <p className="text-xs text-text-muted">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}