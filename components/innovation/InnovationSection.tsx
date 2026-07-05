import { PROJECTS } from "@/lib/data/projects";
import { ProjectBlock } from "./ProjectBlock";

export function InnovationSection() {
  return (
    <section id="innovation" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy">
          Work
        </p>
        <h2 className="mt-4 font-serif text-3xl font-semibold text-navy lg:text-5xl">
          Innovation & Product Development
        </h2>
        <p className="mt-4 max-w-[700px] text-base text-text-muted lg:text-lg">
          A selected portfolio of technology-led products developed across
          sustainability, public sector, enterprise AI, industrial
          engineering, healthcare and embedded systems. Each initiative
          addresses a real-world business or policy challenge through
          structured product thinking, user-centric design and scalable
          implementation.
        </p>

        <div className="mt-16 space-y-16 lg:space-y-24">
          {PROJECTS.map((project, index) => (
            <ProjectBlock key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}