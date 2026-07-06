import { GraduationCap, MapPin, Target, Sparkles, Languages } from "lucide-react";

const ABOUT_INFO = [
  { icon: GraduationCap, label: "Academic Status", value: "Bachelor of Engineering Graduate (2026)" },
  { icon: GraduationCap, label: "Institution", value: "Fr. Conceicao Rodrigues College of Engineering" },
  { icon: MapPin, label: "Location", value: "Mumbai, India" },
  { icon: Target, label: "Career Goal", value: "Management Consulting" },
  { icon: Sparkles, label: "Interests", value: "Strategy · Innovation · Sustainability" },
  { icon: Languages, label: "Languages", value: "English · Hindi · Marathi" },
];

export function About() {
  return (
    <section id="about" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy">
          About
        </p>
        <h2 className="mt-4 max-w-[700px] font-serif text-3xl font-semibold text-navy lg:text-5xl">
          Building solutions at the intersection of strategy, technology, and
          public impact.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-base leading-relaxed text-text-muted lg:text-lg">
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
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            {ABOUT_INFO.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-start gap-4 px-6 py-5 ${
                    index !== ABOUT_INFO.length - 1
                      ? "border-b border-border"
                      : ""
                  }`}
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy/5">
                    <Icon className="h-4 w-4 text-navy" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-navy">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}