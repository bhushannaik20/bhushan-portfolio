import { CONSULTING_CASES } from "@/lib/data/consulting-cases";
import { CaseBlock } from "./CaseBlock";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function ConsultingSection() {
  return (
    <section id="consulting" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            kicker="Consulting Cases"
            title="Strategy engagements written as executive summaries."
            description="These cases focus on the client context, business problem, recommendation, and frameworks used — not technology stacks."
            markerColor="crimson"
            shadowColor="navy"
          />
        </Reveal>

        <div className="mt-14 lg:mt-20">
          {CONSULTING_CASES.map((caseItem, index) => (
            <Reveal key={caseItem.id}>
              <CaseBlock caseItem={caseItem} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}