import { RECOGNITION } from "@/lib/data/recognition";
import { getAchievementIcon } from "@/lib/badge-colors";

export function RecognitionTable() {
  return (
    <div className="relative">
      <div className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-border" />

      <div className="space-y-5">
        {RECOGNITION.map((entry) => {
          const { icon: Icon, colorClass } = getAchievementIcon(entry.achievement);
          return (
            <div key={entry.sr} className="relative flex gap-5 pl-12">
              <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-navy font-serif text-xs font-bold text-white shadow-sm">
                {entry.sr}
              </span>

              <div className="flex w-full flex-col gap-2 rounded-xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-serif text-lg font-bold text-navy">
                    {entry.competition}
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    {entry.organisingBody}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Icon className={`h-4 w-4 ${colorClass}`} strokeWidth={2} />
                  <span className={`text-sm font-bold ${colorClass}`}>
                    {entry.achievement}
                  </span>
                  <span className="ml-2 text-sm font-medium text-text-muted">
                    {entry.year}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}