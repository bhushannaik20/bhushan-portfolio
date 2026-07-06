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
  const orderNumber = String(index + 1).padStart(2, "0");

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm lg:p-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[360px_1fr]">
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-surface">
            <Image
              src={`/images/consulting/${caseItem.id}/cover.jpg`}
              alt={caseItem.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 360px"
            />
          </div>

          <Link
            href={caseItem.presentationDeckUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs font-bold uppercase tracking-wide text-crimson"
          >
            Presentation Deck
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
          </Link>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-navy">
            {caseItem.consultingDomain.join(" · ")}
          </p>

          <h3 className="mt-3 font-serif text-4xl font-bold leading-tight text-navy">
            {caseItem.title}
          </h3>

          <div className="mt-6 grid grid-cols-1 border-t border-border sm:grid-cols-2">
            <div className="border-b border-border py-3 sm:border-r sm:pr-6">
              <p className="text-xs font-bold uppercase tracking-wide text-navy">
                Domain
              </p>
              <p className="mt-1 text-[15px] font-semibold text-text-primary">
                {caseItem.consultingDomain.join(" · ")}
              </p>
            </div>
            <div className="border-b border-border py-3 sm:pl-6">
              <p className="text-xs font-bold uppercase tracking-wide text-navy">
                Client
              </p>
              <p className="mt-1 text-[15px] font-semibold text-text-primary">
                {caseItem.client}
              </p>
            </div>
            <div className="border-b border-border py-3 sm:border-r sm:pr-6">
              <p className="text-xs font-bold uppercase tracking-wide text-navy">
                Organising Body
              </p>
              <p className="mt-1 text-[15px] font-semibold text-text-primary">
                {caseItem.organisingBody.join(", ")}
              </p>
            </div>
            <div className="border-b border-border py-3 sm:pl-6">
              <p className="text-xs font-bold uppercase tracking-wide text-navy">
                {caseItem.competition ? "Competition" : "Status"}
              </p>
              <p className="mt-1 text-[15px] font-semibold text-text-primary">
                {caseItem.competition ?? caseItem.status}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wide text-navy">
              Overview
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-text-muted lg:text-base">
              {caseItem.executiveSummary}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wide text-navy">
              Business Challenge
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-text-muted">
              {caseItem.businessChallenge}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wide text-navy">
              Strategic Recommendation
            </p>
            <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {caseItem.strategicRecommendation.map((point, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-sm leading-relaxed text-text-muted">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {caseItem.frameworks.map((framework) => (
              <span
                key={framework}
                className="rounded-md bg-forest px-2.5 py-1 text-xs font-bold text-white"
              >
                {framework}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}