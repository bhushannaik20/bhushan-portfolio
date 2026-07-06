import Link from "next/link";
import Image from "next/image";
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
  const orderNumber = String(index + 1).padStart(2, "0");

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-md">
      <div className="accent-bar h-1.5 w-full" />
      <div className="p-6 lg:p-10">
        <div
          className={`grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16 ${
            isReversed ? "lg:[direction:rtl]" : ""
          }`}
        >
          <div className={isReversed ? "lg:[direction:ltr]" : ""}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-surface">
              <Image
                src={`/images/consulting/${caseItem.id}/cover.jpg`}
                alt={caseItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <Link
              href={caseItem.presentationDeckUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-royal hover:shadow-md"
            >
              Presentation Deck
              <ExternalLink className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>

          <div className={isReversed ? "lg:[direction:ltr]" : ""}>
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-4xl font-bold text-royal/25">
                {orderNumber}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {caseItem.consultingDomain.map((d) => (
                  <span
                    key={d}
                    className="rounded-full bg-navy px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="mt-4 font-serif text-2xl font-bold text-navy lg:text-3xl">
              {caseItem.title}
            </h3>

            <div className="mt-6 divide-y divide-border rounded-lg border border-border bg-surface text-sm">
              <div className="flex justify-between gap-4 px-4 py-3">
                <span className="font-medium text-text-muted">Client</span>
                <span className="text-right font-semibold text-text-primary">
                  {caseItem.client}
                </span>
              </div>
              <div className="flex justify-between gap-4 px-4 py-3">
                <span className="shrink-0 font-medium text-text-muted">
                  Organising Body
                </span>
                <span className="text-right font-semibold text-text-primary">
                  {caseItem.organisingBody.join(", ")}
                </span>
              </div>
              {caseItem.competition && (
                <div className="flex justify-between gap-4 px-4 py-3">
                  <span className="font-medium text-text-muted">
                    Competition
                  </span>
                  <span className="text-right font-semibold text-text-primary">
                    {caseItem.competition}
                  </span>
                </div>
              )}
              <div className="flex justify-between gap-4 px-4 py-3">
                <span className="font-medium text-text-muted">Status</span>
                <span className="text-right font-semibold text-crimson">
                  {caseItem.status}
                </span>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-text-muted lg:text-base">
              {caseItem.executiveSummary}
            </p>

            <div className="mt-6 border-l-4 border-royal bg-royal/5 py-3 pl-4">
              <p className="text-sm font-bold uppercase tracking-wide text-royal">
                Business Challenge
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {caseItem.businessChallenge}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-sm font-bold uppercase tracking-wide text-navy">
                Strategic Recommendation
              </p>
              <ul className="mt-3 space-y-2">
                {caseItem.strategicRecommendation.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p className="text-sm font-bold uppercase tracking-wide text-navy">
                Implementation Roadmap
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {caseItem.implementationRoadmap.map((phase) => (
                  <span
                    key={phase}
                    className="rounded-md border border-border bg-white px-3 py-1.5 text-xs font-medium text-text-primary"
                  >
                    {phase}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-bold uppercase tracking-wide text-navy">
                Frameworks
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {caseItem.frameworks.map((framework) => (
                  <span
                    key={framework}
                    className="rounded-md bg-forest px-3 py-1 text-xs font-bold text-white"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}