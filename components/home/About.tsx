const ABOUT_INFO = [
  { label: "Status", value: "Engineering Graduate" },
  {
    label: "Institution",
    value: "Fr. Conceicao Rodrigues College of Engineering",
  },
  { label: "Location", value: "Mumbai, India" },
  { label: "Career Goal", value: "Management Consulting" },
  { label: "Interests", value: "Strategy · Innovation · Sustainability" },
  { label: "Languages", value: "English · Hindi · Marathi" },
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
          {/* Left: Paragraphs */}
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

          {/* Right: Info Table */}
          <div className="overflow-hidden rounded-xl border border-border bg-white">
            {ABOUT_INFO.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${
                  index !== ABOUT_INFO.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="text-sm font-medium text-text-muted">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-navy">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}