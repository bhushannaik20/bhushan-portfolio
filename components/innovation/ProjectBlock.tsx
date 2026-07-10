import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";
import { TiltCard } from "@/components/ui/TiltCard";

const TOP_BORDER = ["border-t-navy", "border-t-forest", "border-t-crimson"];
const DOT_COLORS = ["bg-navy", "bg-crimson", "bg-forest"];

export function ProjectBlock({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className={`border-t-2 ${TOP_BORDER[index % 3]} py-12 first:border-t-0 first:pt-0 lg:py-16`}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[34%_1fr] lg:gap-14">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <TiltCard className="relative aspect-[4/3] overflow-hidden border border-border bg-surface">
            <Image
              src={`/images/projects/${project.id}/cover.jpg`}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 34vw"
            />
          </TiltCard>

          {(project.liveDemoUrl || project.publicationUrl) && (
            <Link
              href={project.liveDemoUrl ?? project.publicationUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 flex items-center justify-between border-b border-border pb-4 text-xs font-bold uppercase tracking-[0.06em] text-navy transition-all hover:pl-2 hover:text-crimson"
            >
              {project.liveDemoUrl ? "Live Demo" : "View Publication"}
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </Link>
          )}
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-navy">
            {String(index + 1).padStart(2, "0")} — {project.metadata.domain.join(" · ")}
          </p>
          <h3 className="mt-3 font-serif text-4xl font-bold leading-[0.98] tracking-[-0.03em] text-text-primary lg:text-[52px]">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="mt-2 text-sm italic text-text-muted">
              {project.subtitle}
            </p>
          )}

          <div className="mt-7 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
            <div className="bg-white p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-navy">Role</p>
              <p className="mt-1 text-[15px] font-semibold text-text-primary">
                {project.metadata.role}
              </p>
            </div>
            <div className="bg-white p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-navy">Status</p>
              <p className="mt-1 text-[15px] font-semibold text-crimson">
                {project.metadata.status}
              </p>
            </div>
            <div className="bg-white p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-navy">
                Organising Body
              </p>
              <p className="mt-1 text-[15px] font-semibold text-text-primary">
                {project.metadata.organisingBody.join(", ")}
              </p>
            </div>
            {project.metadata.businessModel && (
              <div className="bg-white p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-navy">
                  Business Model
                </p>
                <p className="mt-1 text-[15px] font-semibold text-text-primary">
                  {project.metadata.businessModel}
                </p>
              </div>
            )}
          </div>

          <div className="mt-7">
            <h4 className="text-xs font-bold uppercase tracking-[0.11em] text-navy">Overview</h4>
            <p className="mt-2 max-w-[800px] text-[16px] leading-relaxed text-text-primary">
              {project.executiveOverview}
            </p>
          </div>

          <div className="mt-7">
            <h4 className="text-xs font-bold uppercase tracking-[0.11em] text-forest">
              Business Problem
            </h4>
            <p className="mt-2 max-w-[800px] text-[16px] leading-relaxed text-text-primary">
              {project.businessProblem}
            </p>
          </div>

          <div className="mt-7">
            <h4 className="text-xs font-bold uppercase tracking-[0.11em] text-crimson">Solution</h4>
            <p className="mt-2 max-w-[800px] text-[16px] leading-relaxed text-text-primary">
              {project.solution}
            </p>
          </div>

          {project.keyFeatures && (
            <div className="mt-7">
              <h4 className="text-xs font-bold uppercase tracking-[0.11em] text-navy">
                Key Features
              </h4>
              <ul className="mt-3 columns-1 gap-x-10 sm:columns-2">
                {project.keyFeatures.map((feature, i) => (
                  <li
                    key={feature}
                    className="mb-2.5 flex items-start gap-2.5 break-inside-avoid"
                  >
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${DOT_COLORS[i % 3]}`}
                    />
                    <span className="text-[15px] text-text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-7">
            <h4 className="text-xs font-bold uppercase tracking-[0.11em] text-navy">Impact</h4>
            <ul className="mt-3 space-y-2">
              {project.impact.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-[15px] leading-relaxed text-text-primary"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {project.sdgs && (
            <p className="mt-7 text-sm font-bold text-text-primary">
              UN SDGs: <span className="text-forest">{project.sdgs.join(", ")}</span>
            </p>
          )}
        </div>
      </div>
    </article>
  );
}