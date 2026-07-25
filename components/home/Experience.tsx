import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { EXPERIENCE } from "@/lib/data/experience";
import { SITE_CONFIG } from "@/lib/constants";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            kicker="Experience"
            title="Founding, building, and leading with structured execution."
            markerColor="navy"
            shadowColor="gold"
          />
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-border" />

          <div className="space-y-16">
            {EXPERIENCE.map((entry, i) => (
              <Reveal key={entry.id} delay={i * 80}>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-white bg-navy shadow-sm" />

                  <div className="rounded-xl border border-border bg-white p-8 shadow-sm transition-transform hover:-translate-y-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-navy">
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
                      {entry.description.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm leading-relaxed text-text-muted lg:text-base"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {entry.stats && (
                      <div className="mt-6 flex flex-wrap items-center gap-8 border-t border-border pt-6">
                        {entry.stats.map((stat) => (
                          <div key={stat.label}>
                            <p className="font-serif text-2xl font-bold text-navy">
                              {stat.value}
                            </p>
                            <p className="text-xs text-text-muted">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                        {entry.id === "content-creator" && (
                          <Link
                            href={SITE_CONFIG.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto inline-flex items-center gap-2 rounded-lg border border-crimson px-4 py-2 text-sm font-medium text-crimson transition-colors hover:bg-crimson/5"
                          >
                            <PlayCircle className="h-4 w-4" strokeWidth={1.75} />
                            Watch Channel
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}