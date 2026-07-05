import { CONSULTING_CASES } from "@/lib/data/consulting-cases";
import { CaseBlock } from "./CaseBlock";

export function ConsultingSection() {
  return (
    <section id="consulting" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy">
          Consulting
        </p>
        <h2 className="mt-4 font-serif text-3xl font-semibold text-navy lg:text-5xl">
          Strategy & Consulting Experience
        </h2>
        <p className="mt-4 max-w-[700px] text-base text-text-muted lg:text-lg">
          Selected consulting engagements addressing growth strategy, digital
          transformation, product management, healthcare, organizational
          transformation and financial inclusion through structured analysis
          and implementation-focused recommendations.
        </p>

        <div className="mt-16 space-y-16 lg:space-y-24">
          {CONSULTING_CASES.map((caseItem, index) => (
            <CaseBlock key={caseItem.id} caseItem={caseItem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}