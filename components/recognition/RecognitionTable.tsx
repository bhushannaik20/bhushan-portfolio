import { RECOGNITION } from "@/lib/data/recognition";

export function RecognitionTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border bg-surface">
            <th scope="col" className="px-4 py-3 text-left font-semibold text-navy">Sr.</th>
            <th scope="col" className="px-4 py-3 text-left font-semibold text-navy">Competition</th>
            <th scope="col" className="px-4 py-3 text-left font-semibold text-navy">Organising Body</th>
            <th scope="col" className="px-4 py-3 text-left font-semibold text-navy">Achievement</th>
            <th scope="col" className="px-4 py-3 text-left font-semibold text-navy">Year</th>
          </tr>
        </thead>
        <tbody>
          {RECOGNITION.map((entry, index) => (
            <tr
              key={entry.sr}
              className={`border-b border-border last:border-b-0 hover:bg-surface ${
                index % 2 === 1 ? "bg-surface/50" : "bg-white"
              }`}
            >
              <td className="px-4 py-3 text-text-muted">{entry.sr}</td>
              <td className="px-4 py-3 font-medium text-text-primary">{entry.competition}</td>
              <td className="px-4 py-3 text-text-muted">{entry.organisingBody}</td>
              <td className="px-4 py-3 font-medium text-crimson">{entry.achievement}</td>
              <td className="px-4 py-3 text-text-muted">{entry.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}