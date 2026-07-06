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
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <Image
            src={`/images/consulting/${caseItem.id}/cover.jpg`}
            alt={caseItem.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col p-6 lg:p-8">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold text-gold">
              {orderNumber}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {caseItem.consultingDomain.slice(0, 2).map((d) => (
                <span
                  key={d}
                  className="rounded-full bg-navy px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          <h3 className="mt-3 font-serif text-2xl font-bold text-navy lg:text-[32px]">
            {caseItem.title}
          </h3>

          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 rounded-lg bg-surface p-4 text-[13px]">
            <div>
              <p className="font-semibold uppercase tracking-wide text-text-muted">
                Client
              </p>
              <p className="mt-0.5 font-semibold text-text-primary">
                {caseItem.client}
              </p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-wide text-text-muted">
                Status
              </p>
              <span className="mt-0.5 inline-block rounded-full bg-navy/10 px-2.5 py-0.5 text-[11px] font-bold text-navy">
                {caseItem.status}
              </span>
            </div>
            <div className="col-span-2">
              <p className="font-semibold uppercase tracking-wide text-text-muted">
                Organising Body
              </p>
              <p className="mt-0.5 font-semibold text-text-primary">
                {caseItem.organisingBody.join(", ")}
              </p>
            </div>
            {caseItem.competition && (
              <div className="col-span-2">
                <p className="font-semibold uppercase tracking-wide text-text-muted">
                  Competition
                </p>
                <p className="mt-0.5 font-semibold text-text-primary">
                  {caseItem.competition}
                </p>
              </div>
            )}
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-text-muted lg:text-[17px]">
            {caseItem.executiveSummary}
          </p>

          <div className="mt-4 rounded-lg border-l-[3px] border-navy bg-navy/5 p-3">
            <p className="text-[11px] font-bold uppercase tracking-wide text-navy">
              Business Challenge
            </p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-text-muted">
              {caseItem.businessChallenge}
            </p>
          </div>

          <div className="mt-4">
            <p className="text-[11px] font-bold uppercase tracking-wide text-navy">
              Strategic Recommendation
            </p>
            <ul className="mt-2 space-y-1.5">
              {caseItem.strategicRecommendation.slice(0, 5).map((point, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-[13px] leading-relaxed text-text-muted"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-forest" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {caseItem.frameworks.map((framework) => (
              <span
                key={framework}
                className="rounded-md bg-forest px-2.5 py-1 text-[11px] font-bold text-white"
              >
                {framework}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <Link
              href={caseItem.presentationDeckUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-navy-light"
            >
              Presentation Deck
              <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}