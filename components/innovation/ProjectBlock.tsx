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
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm lg:p-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[360px_1fr]">
        {/* Image + CTA */}
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-surface">
            <Image
              src={`/images/projects/${project.id}/cover.jpg`}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 360px"
            />
          </div>

          {(project.liveDemoUrl || project.publicationUrl) && (
            <Link
              href={project.liveDemoUrl ?? project.publicationUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-xs font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-navy-light"
            >
              {project.liveDemoUrl ? "Live Demo" : "View Publication"}
              <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          )}
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold text-gold">
              {orderNumber}
            </span>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-navy">
              {project.metadata.domain.join(" · ")}
            </p>
          </div>

          <h3 className="mt-3 font-serif text-4xl font-bold leading-tight text-navy">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="mt-2 text-sm italic text-text-muted">
              {project.subtitle}
            </p>
          )}

          {/* Metadata 2x2 grid */}
          <div className="mt-6 grid grid-cols-1 border-t border-border sm:grid-cols-2">
            <div className="border-b border-border py-3 sm:border-r sm:pr-6">
              <p className="text-xs font-bold uppercase tracking-wide text-navy">
                Role
              </p>
              <p className="mt-1 text-[15px] font-semibold text-text-primary">
                {project.metadata.role}
              </p>
            </div>
            <div className="border-b border-border py-3 sm:pl-6">
              <p className="text-xs font-bold uppercase tracking-wide text-navy">
                Status
              </p>
              <span
                className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${getStatusBadgeClasses(
                  project.metadata.status
                )}`}
              >
                {project.metadata.status}
              </span>
            </div>
            <div className="border-b border-border py-3 sm:border-r sm:pr-6">
              <p className="text-xs font-bold uppercase tracking-wide text-navy">
                Organising Body
              </p>
              <p className="mt-1 text-[15px] font-semibold text-text-primary">
                {project.metadata.organisingBody.join(", ")}
              </p>
            </div>
            {project.metadata.businessModel && (
              <div className="border-b border-border py-3 sm:pl-6">
                <p className="text-xs font-bold uppercase tracking-wide text-navy">
                  Business Model
                </p>
                <p className="mt-1 text-[15px] font-semibold text-text-primary">
                  {project.metadata.businessModel}
                </p>
              </div>
            )}
          </div>

          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wide text-navy">
              Overview
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-text-muted lg:text-base">
              {project.executiveOverview}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wide text-navy">
              Business Problem
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-text-muted">
              {project.businessProblem}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wide text-navy">
              Solution
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-text-muted">
              {project.solution}
            </p>
          </div>

          {project.keyFeatures && (
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wide text-navy">
                Key Features
              </p>
              <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                {project.keyFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span className="text-sm text-text-primary">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wide text-navy">
              Impact
            </p>
            <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {project.impact.map((point, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                  <span className="text-sm leading-relaxed text-text-muted">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {project.sdgs && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.sdgs.map((sdg) => (
                <span
                  key={sdg}
                  className="rounded-md bg-forest px-2.5 py-1 text-xs font-bold text-white"
                >
                  {sdg}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}