import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const ABOUT_INFO = [
  { label: "Academic Status", value: "Bachelor of Engineering Graduate (2026)" },
  { label: "Institution", value: "Fr. Conceicao Rodrigues College of Engineering" },
  { label: "Location", value: "Mumbai, India" },
  { label: "Career Goal", value: "Management Consulting" },
  { label: "Interests", value: "Strategy · Innovation · Sustainability" },
  { label: "Languages", value: "English · Hindi · Marathi" },
];

export function About() {
  return (
    <section id="about" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            kicker="About Me"
            title="Building solutions at the intersection of strategy, technology, and public impact."
            description="A leadership profile built on execution, not activity — selected technology products and consulting cases that demonstrate judgment, ownership, sector breadth, and communication."
            markerColor="crimson"
            shadowColor="forest"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={80} className="space-y-6 text-base leading-relaxed text-text-muted lg:text-lg">
            <p>
              I am an engineering graduate driven by structured problem
              solving across sustainability, public policy, and enterprise
              technology. My work spans national hackathons, product
              development, and strategic consulting cases, each grounded in
              understanding a real business or governance challenge before
              designing a solution.
            </p>
            <p>
              I work at the intersection of technology and strategy —
              building platforms for renewable energy adoption, public health
              intelligence, and enterprise decision-making, while also
              advising organizations on growth strategy, market entry, and
              organizational transformation through case competitions and
              consulting engagements.
            </p>
            <p>
              I am pursuing a career in management consulting because it
              combines the structured thinking, cross-industry exposure, and
              execution discipline required to solve complex problems at
              scale — the same qualities that have shaped every project and
              case I have worked on.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="border-t border-border">
              {ABOUT_INFO.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-1 gap-1 border-b border-border py-4 transition-colors hover:bg-navy/[0.03] sm:grid-cols-[180px_1fr] sm:gap-6 sm:py-5"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.08em] text-navy">
                    {item.label}
                  </span>
                  <span className="text-[15px] font-semibold text-text-primary sm:text-base">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}