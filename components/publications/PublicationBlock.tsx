import Link from "next/link";
import { FileText, ExternalLink } from "lucide-react";
import { Publication } from "@/lib/data/publications";

export function PublicationBlock({
  publication,
}: {
  publication: Publication;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy/5">
          <FileText className="h-5 w-5 text-navy" strokeWidth={1.75} />
        </span>
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-wide text-text-muted">
            {publication.publisher}
          </p>

          <h3 className="mt-3 font-serif text-xl font-bold text-navy lg:text-2xl">
            {publication.title}
          </h3>
          <p className="mt-1 text-sm text-text-muted">{publication.date}</p>
          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            {publication.summary}
          </p>

          {publication.url ? (
            <Link
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-navy-light"
            >
              {publication.buttonLabel}
              <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          ) : (
            <span className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-text-muted">
              {publication.buttonLabel}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}