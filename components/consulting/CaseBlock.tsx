import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ConsultingCase } from "@/types/consulting-case";

export function CaseBlock({
  caseItem,
  index,
}: {
  caseItem: ConsultingCase;
  index: number;
}) {
  const isReversed = index % 2 === 1;

  return (
    <div className="border-t border-border pt-16 first:border-t-0 first:pt-0">
      <div
        className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 ${
          isReversed ? "lg:[direction:rtl]" : ""
        }`}
      >
        <div className={isReversed ? "lg:[direction:ltr]" : ""}>
          <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-border bg-surface text-sm text-text-muted">
            {caseItem.client} — logo placeholder
          </div>
        </div>

        <div className={isReversed ? "lg:[direction:ltr]" : ""}>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy">
            {caseItem.consultingDomain.join(" · ")}
          </p>
          <h3 className="mt-3 font-serif text-2xl font-semibold text-navy lg:text-3xl">
            {caseItem.title}
          </h3>

          <div className="mt-6 space-y-2 rounded-lg border border-border bg-surface p-4 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-text-muted">Client</span>
              <span className="text-right font-medium text-text-primary">
                {caseItem.client}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="shrink-0 text-text-muted">
                Organising Body
              </span>
              <span className="text-right font-medium text-text-primary">
                {caseItem.organisingBody.join(", ")}
              </span>
            </div>
            {caseItem.competition && (
              <div className="flex justify-between gap-4">
                <span className="text-text-muted">Competition</span>
                <span className="text-right font-medium text-text-primary">
                  {caseItem.competition}
                </span>
              </div>
            )}
            <div className="flex justify-between gap-4">
              <span className="text-text-muted">Status</span>
              <span className="text-right font-medium text-crimson">
                {caseItem.status}
              </span>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-text-muted lg:text-base">
            {caseItem.executiveSummary}
          </p>

          <div className="mt-6">
            <p className="text-sm font-semibold text-navy">
              Business Challenge
            </p>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {caseItem.businessChallenge}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-navy">
              Strategic Recommendation
            </p>
            <ul className="mt-3 space-y-2">
              {caseItem.strategicRecommendation.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-relaxed text-text-muted"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-forest" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-navy">
              Implementation Roadmap
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {caseItem.implementationRoadmap.map((phase) => (
                <span
                  key={phase}
                  className="rounded-md bg-surface px-3 py-1.5 text-xs font-medium text-text-primary"
                >
                  {phase}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-navy">Frameworks</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {caseItem.frameworks.map((framework) => (
                <span
                  key={framework}
                  className="rounded-md bg-forest/10 px-3 py-1 text-xs font-semibold text-forest"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>

          <Link
            href={caseItem.presentationDeckUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-light"
          >
            Presentation Deck
            <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </div>
  );
}