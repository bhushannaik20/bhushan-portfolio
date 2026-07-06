import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Project } from "@/types/project";

export function ProjectBlock({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isReversed = index % 2 === 1;
  const orderNumber = String(index + 1).padStart(2, "0");

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm lg:p-10">
      <div
        className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 ${
          isReversed ? "lg:[direction:rtl]" : ""
        }`}
      >
        {/* Image + CTA below it */}
        <div className={isReversed ? "lg:[direction:ltr]" : ""}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-surface">
            <Image
              src={`/images/projects/${project.id}/cover.jpg`}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {(project.liveDemoUrl || project.publicationUrl) && (
            <Link
              href={project.liveDemoUrl ?? project.publicationUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-light"
            >
              {project.liveDemoUrl ? "Live Demo" : "View Publication"}
              <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          )}
        </div>

        {/* Content */}
        <div className={isReversed ? "lg:[direction:ltr]" : ""}>
          <div className="flex items-center gap-3">
            <span className="font-serif text-3xl font-semibold text-royal/30">
              {orderNumber}
            </span>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy">
              {project.metadata.domain.join(" · ")}
            </p>
          </div>
          <h3 className="mt-3 font-serif text-2xl font-semibold text-navy lg:text-3xl">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="mt-1 text-sm italic text-text-muted">
              {project.subtitle}
            </p>
          )}

          <div className="mt-6 space-y-2 rounded-lg border border-border bg-surface p-4 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-text-muted">Role</span>
              <span className="text-right font-medium text-text-primary">
                {project.metadata.role}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-text-muted">Status</span>
              <span className="text-right font-medium text-text-primary">
                {project.metadata.status}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="shrink-0 text-text-muted">
                Organising Body
              </span>
              <span className="text-right font-medium text-text-primary">
                {project.metadata.organisingBody.join(", ")}
              </span>
            </div>
            {project.metadata.businessModel && (
              <div className="flex justify-between gap-4">
                <span className="text-text-muted">Business Model</span>
                <span className="text-right font-medium text-text-primary">
                  {project.metadata.businessModel}
                </span>
              </div>
            )}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-text-muted lg:text-base">
            {project.executiveOverview}
          </p>

          <div className="mt-6">
            <p className="text-sm font-semibold text-navy">
              Business Problem
            </p>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {project.businessProblem}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-navy">Solution</p>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {project.solution}
            </p>
          </div>

          {project.keyFeatures && (
            <div className="mt-6">
              <p className="text-sm font-semibold text-navy">Key Features</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.keyFeatures.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-md bg-surface px-3 py-1.5 text-xs font-medium text-text-primary"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6">
            <p className="text-sm font-semibold text-navy">Impact</p>
            <ul className="mt-3 space-y-2">
              {project.impact.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-relaxed text-text-muted"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-forest" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {project.sdgs && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.sdgs.map((sdg) => (
                <span
                  key={sdg}
                  className="rounded-md bg-forest/10 px-3 py-1 text-xs font-semibold text-forest"
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