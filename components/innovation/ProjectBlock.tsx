import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Project } from "@/types/project";
import { getStatusBadgeClasses } from "@/lib/badge-colors";

export function ProjectBlock({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const orderNumber = String(index + 1).padStart(2, "0");

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image column */}
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <Image
            src={`/images/projects/${project.id}/cover.jpg`}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content column */}
        <div className="flex flex-col p-6 lg:p-8">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold text-gold">
              {orderNumber}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.metadata.domain.slice(0, 2).map((d) => (
                <span
                  key={d}
                  className="rounded-full bg-navy px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          <h3 className="mt-3 font-serif text-2xl font-bold text-navy lg:text-[32px]">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="mt-1 text-sm italic text-text-muted">
              {project.subtitle}
            </p>
          )}

          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 rounded-lg bg-surface p-4 text-[13px]">
            <div>
              <p className="font-semibold uppercase tracking-wide text-text-muted">
                Role
              </p>
              <p className="mt-0.5 font-semibold text-text-primary">
                {project.metadata.role}
              </p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-wide text-text-muted">
                Status
              </p>
              <span
                className={`mt-0.5 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${getStatusBadgeClasses(
                  project.metadata.status
                )}`}
              >
                {project.metadata.status}
              </span>
            </div>
            <div className="col-span-2">
              <p className="font-semibold uppercase tracking-wide text-text-muted">
                Organising Body
              </p>
              <p className="mt-0.5 font-semibold text-text-primary">
                {project.metadata.organisingBody.join(", ")}
              </p>
            </div>
            {project.metadata.businessModel && (
              <div className="col-span-2">
                <p className="font-semibold uppercase tracking-wide text-text-muted">
                  Business Model
                </p>
                <p className="mt-0.5 font-semibold text-text-primary">
                  {project.metadata.businessModel}
                </p>
              </div>
            )}
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-text-muted lg:text-[17px]">
            {project.executiveOverview}
          </p>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-lg border-l-[3px] border-navy bg-navy/5 p-3">
              <p className="text-[11px] font-bold uppercase tracking-wide text-navy">
                Business Problem
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-text-muted">
                {project.businessProblem}
              </p>
            </div>
            <div className="rounded-lg border-l-[3px] border-forest bg-forest/5 p-3">
              <p className="text-[11px] font-bold uppercase tracking-wide text-forest">
                Solution
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-text-muted">
                {project.solution}
              </p>
            </div>
          </div>

          {project.keyFeatures && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.keyFeatures.slice(0, 6).map((feature) => (
                <span
                  key={feature}
                  className="rounded-md border border-border px-2.5 py-1 text-[11px] font-medium text-text-primary"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4">
            <p className="text-[11px] font-bold uppercase tracking-wide text-navy">
              Impact
            </p>
            <ul className="mt-2 space-y-1.5">
              {project.impact.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-[13px] leading-relaxed text-text-muted"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-forest" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {project.sdgs && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.sdgs.map((sdg) => (
                <span
                  key={sdg}
                  className="rounded-md bg-forest px-2.5 py-1 text-[11px] font-bold text-white"
                >
                  {sdg}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto pt-6">
            {(project.liveDemoUrl || project.publicationUrl) && (
              <Link
                href={project.liveDemoUrl ?? project.publicationUrl ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-navy-light"
              >
                {project.liveDemoUrl ? "Live Demo" : "View Publication"}
                <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}