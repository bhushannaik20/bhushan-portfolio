import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ConsultingCase } from "@/types/consulting-case";
import { TiltCard } from "@/components/ui/TiltCard";

const TOP_BORDER = ["border-t-gold", "border-t-crimson", "border-t-forest"];
const DOT_COLORS = ["bg-gold", "bg-navy", "bg-crimson"];
const TAG_BORDER = ["border-l-navy", "border-l-crimson", "border-l-forest"];

export function CaseBlock({
  caseItem,
  index,
}: {
  caseItem: ConsultingCase;
  index: number;
}) {
  return (
    <article
      className={`border-t-2 ${TOP_BORDER[index % 3]} py-12 first:border-t-0 first:pt-0 lg:py-16`}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[34%_1fr] lg:gap-14">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <TiltCard className="relative aspect-[4/3] overflow-hidden border border-border bg-surface">
            <Image
              src={`/images/consulting/${caseItem.id}/cover.jpg`}
              alt={caseItem.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 34vw"
            />
          </TiltCard>

          <Link
            href={caseItem.presentationDeckUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 flex items-center justify-between border-b border-border pb-4 text-xs font-bold uppercase tracking-[0.06em] text-navy transition-all hover:pl-2 hover:text-crimson"
          >
            Presentation Deck
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </Link>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-navy">
            {String(index + 1).padStart(2, "0")} — {caseItem.consultingDomain.join(" · ")}
          </p>
          <h3 className="mt-3 font-serif text-4xl font-bold leading-[0.98] tracking-[-0.03em] text-text-primary lg:text-[52px]">
            {caseItem.title}
          </h3>

          <div className="mt-7 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
            <div className="bg-white p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-navy">Client</p>
              <p className="mt-1 text-[15px] font-semibold text-text-primary">
                {caseItem.client}
              </p>
            </div>
            <div className="bg-white p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-navy">Status</p>
              <p className="mt-1 text-[15px] font-semibold text-crimson">
                {caseItem.status}
              </p>
            </div>
            <div className="bg-white p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-navy">
                Organising Body
              </p>
              <p className="mt-1 text-[15px] font-semibold text-text-primary">
                {caseItem.organisingBody.join(", ")}
              </p>
            </div>
            {caseItem.competition && (
              <div className="bg-white p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-navy">
                  Competition
                </p>
                <p className="mt-1 text-[15px] font-semibold text-text-primary">
                  {caseItem.competition}
                </p>
              </div>
            )}
          </div>

          <div className="mt-7">
            <h4 className="text-xs font-bold uppercase tracking-[0.11em] text-navy">Overview</h4>
            <p className="mt-2 max-w-[800px] text-[16px] leading-relaxed text-text-primary">
              {caseItem.executiveSummary}
            </p>
          </div>

          <div className="mt-7">
            <h4 className="text-xs font-bold uppercase tracking-[0.11em] text-crimson">
              Business Challenge
            </h4>
            <p className="mt-2 max-w-[800px] text-[16px] leading-relaxed text-text-primary">
              {caseItem.businessChallenge}
            </p>
          </div>

          <div className="mt-7">
            <h4 className="text-xs font-bold uppercase tracking-[0.11em] text-navy">
              Strategic Recommendation
            </h4>
            <ul className="mt-3 columns-1 gap-x-10 sm:columns-2">
              {caseItem.strategicRecommendation.map((point, i) => (
                <li
                  key={i}
                  className="mb-2.5 flex items-start gap-2.5 break-inside-avoid"
                >
                  <span
                    className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${DOT_COLORS[i % 3]}`}
                  />
                  <span className="text-[15px] text-text-primary">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7">
            <h4 className="text-xs font-bold uppercase tracking-[0.11em] text-navy">
              Frameworks
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {caseItem.frameworks.map((framework, i) => (
                <span
                  key={framework}
                  className={`border border-border ${TAG_BORDER[i % 3]} border-l-[3px] bg-white px-3 py-1.5 text-xs font-bold text-navy transition-transform hover:-translate-y-0.5`}
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}