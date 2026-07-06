import { RECOGNITION } from "@/lib/data/recognition";
import { getStatusBadgeClasses } from "@/lib/badge-colors";

export function RecognitionTable() {
  return (
    <div className="relative">
      <div className="absolute left-[15px] top-2 h-[calc(100%-1rem)] w-px bg-border" />

      <div className="space-y-6">
        {RECOGNITION.map((entry) => (
          <div key={entry.sr} className="relative flex gap-6 pl-10">
            <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-navy font-serif text-xs font-bold text-white shadow-sm">
              {entry.sr}
            </span>

            <div className="flex w-full flex-col gap-3 rounded-xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-serif text-base font-bold text-navy sm:text-lg">
                  {entry.competition}
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  {entry.organisingBody}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide ${getStatusBadgeClasses(
                    entry.achievement
                  )}`}
                >
                  {entry.achievement}
                </span>
                <span className="text-sm font-semibold text-text-muted">
                  {entry.year}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}