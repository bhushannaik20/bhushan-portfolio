import { RecognitionTable } from "./RecognitionTable";
import { StartupRecognitionCard } from "./StartupRecognitionCard";

export function RecognitionSection() {
  return (
    <section id="recognition" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy">
          Achievements
        </p>
        <h2 className="mt-4 font-serif text-3xl font-semibold text-navy lg:text-5xl">
          Recognition & Leadership
        </h2>
        <p className="mt-4 max-w-[700px] text-base text-text-muted lg:text-lg">
          Selected national achievements, startup recognition and innovation
          milestones demonstrating leadership, structured problem solving and
          consistent execution.
        </p>

        <div className="mt-12">
          <RecognitionTable />
          <StartupRecognitionCard />
        </div>
      </div>
    </section>
  );
}