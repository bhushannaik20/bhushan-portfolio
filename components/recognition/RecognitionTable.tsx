import { RECOGNITION } from "@/lib/data/recognition";

const ACHIEVEMENT_STYLES: Record<string, string> = {
  Winner: "bg-forest/10 text-forest",
  "1st Runner Up": "bg-royal/10 text-royal",
  Finalist: "bg-royal/10 text-royal",
  "Grand Finale Finalist": "bg-crimson/10 text-crimson",
  Shortlisted: "bg-surface text-text-muted border border-border",
};

export function RecognitionTable() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
      {RECOGNITION.map((entry) => (
        <div
          key={entry.sr}
          className="flex flex-col gap-4 rounded-xl border border-border bg-white p-6 shadow-sm transition-transform hover:-translate-y-0.5 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-sm font-semibold text-white">
              {String(entry.sr).padStart(2, "0")}
            </span>
            <div>
              <p className="font-serif text-lg font-semibold text-navy">
                {entry.competition}
              </p>
              <p className="mt-1 text-sm text-text-muted">
                {entry.organisingBody}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 pl-14 lg:pl-0">
            <span
              className={`rounded-full px-4 py-1.5 text-xs font-semibold ${
                ACHIEVEMENT_STYLES[entry.achievement] ??
                "bg-surface text-text-muted"
              }`}
            >
              {entry.achievement}
            </span>
            <span className="text-sm font-medium text-text-muted">
              {entry.year}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}