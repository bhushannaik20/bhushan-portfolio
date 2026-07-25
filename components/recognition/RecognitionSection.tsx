import { RecognitionTable } from "./RecognitionTable";
import { StartupRecognitionCard } from "./StartupRecognitionCard";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function RecognitionSection() {
  return (
    <section id="recognition" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            kicker="Recognition"
            title="Selected proof of leadership and execution."
            markerColor="gold"
            shadowColor="crimson"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12">
            <RecognitionTable />
            <StartupRecognitionCard />
          </div>
        </Reveal>
      </div>
    </section>
  );
}