import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Publication } from "@/lib/data/publications";

export function PublicationBlock({
  publication,
  index,
}: {
  publication: Publication;
  index: number;
}) {
  const isReversed = index % 2 === 1;

  return (
    <div className="border-t border-border pt-12 first:border-t-0 first:pt-0">
      <div
        className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 ${
          isReversed ? "lg:[direction:rtl]" : ""
        }`}
      >
        <div className={isReversed ? "lg:[direction:ltr]" : ""}>
          <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-border bg-surface text-sm text-text-muted">
            Publication image placeholder
          </div>
        </div>

        <div className={`flex flex-col justify-center ${isReversed ? "lg:[direction:ltr]" : ""}`}>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy">
            {publication.publisher}
          </p>
          <h3 className="mt-3 font-serif text-xl font-semibold text-navy lg:text-2xl">
            {publication.title}
          </h3>
          <p className="mt-2 text-sm text-text-muted">{publication.date}</p>
          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            {publication.summary}
          </p>

          {publication.url ? (
            <Link
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-light"
            >
              {publication.buttonLabel}
              <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          ) : (
            <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-text-muted">
              {publication.buttonLabel}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}