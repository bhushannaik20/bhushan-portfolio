import { PROJECTS } from "@/lib/data/projects";
import { ProjectBlock } from "./ProjectBlock";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function InnovationSection() {
  return (
    <section id="innovation" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            kicker="Technology Projects"
            title="Products built around real institutional and market problems."
            description="A selected portfolio of technology-led products developed across sustainability, public sector, enterprise AI, industrial engineering, healthcare and embedded systems."
            markerColor="forest"
            shadowColor="gold"
          />
        </Reveal>

        <div className="mt-14 lg:mt-20">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id}>
              <ProjectBlock project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}