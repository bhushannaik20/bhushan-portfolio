import { CONSULTING_CASES } from "@/lib/data/consulting-cases";
import { CaseBlock } from "./CaseBlock";

export function ConsultingSection() {
  return (
    <section id="consulting" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-navy">
          Consulting
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold text-navy lg:text-[52px]">
          Strategy & Consulting Experience
        </h2>
        <p className="mt-4 max-w-[700px] text-base text-text-muted lg:text-xl">
          Selected consulting engagements addressing growth strategy, digital
          transformation, product management, healthcare, organizational
          transformation and financial inclusion.
        </p>

        <div className="mt-16 space-y-10">
          {CONSULTING_CASES.map((caseItem, index) => (
            <CaseBlock key={caseItem.id} caseItem={caseItem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}