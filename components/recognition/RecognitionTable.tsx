import { RECOGNITION } from "@/lib/data/recognition";

const YEAR_COLORS = ["text-navy", "text-crimson", "text-forest"];

export function RecognitionTable() {
  return (
    <div className="border-t-2 border-navy">
      {RECOGNITION.map((entry, i) => (
        <div
          key={entry.sr}
          className="grid grid-cols-1 gap-2 border-b border-border py-6 transition-all duration-300 hover:bg-navy/[0.03] hover:pl-3 sm:grid-cols-[100px_1fr_auto] sm:items-baseline sm:gap-8"
        >
          <span className={`text-sm font-extrabold ${YEAR_COLORS[i % 3]}`}>
            {entry.year}
          </span>
          <div>
            <p className="font-serif text-xl font-bold tracking-[-0.02em] text-text-primary sm:text-2xl">
              {entry.competition}
            </p>
            <p className="mt-1 text-sm text-text-muted">{entry.organisingBody}</p>
          </div>
          <span className="text-sm font-semibold text-text-muted sm:text-right">
            {entry.achievement}
          </span>
        </div>
      ))}
    </div>
  );
}