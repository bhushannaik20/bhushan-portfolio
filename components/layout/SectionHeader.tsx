type Color = "navy" | "forest" | "crimson" | "gold";

const dotColor: Record<Color, string> = {
  navy: "bg-navy",
  forest: "bg-forest",
  crimson: "bg-crimson",
  gold: "bg-gold",
};

export function SectionHeader({
  kicker,
  title,
  description,
  markerColor = "crimson",
  shadowColor = "forest",
}: {
  kicker: string;
  title: string;
  description: string;
  markerColor?: Color;
  shadowColor?: Color;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr] lg:gap-14">
      <div className="flex items-center gap-3">
        <span className="relative inline-block h-2.5 w-2.5 shrink-0">
          <span className={`absolute inset-0 ${dotColor[markerColor]}`} />
          <span
            className={`absolute inset-0 translate-x-1.5 translate-y-1.5 ${dotColor[shadowColor]}`}
          />
        </span>
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-navy">
          {kicker}
        </p>
      </div>
      <div>
        <h2 className="font-serif text-3xl font-bold leading-[1.02] tracking-[-0.03em] text-text-primary sm:text-4xl lg:text-[52px]">
          {title}
        </h2>
        <p className="mt-4 max-w-[700px] text-base text-text-muted lg:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}