"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { SELECTED_IMPACT } from "@/lib/constants";

function ImpactCard({ number, label }: { number: string; label: string }) {
  const numericPart = parseInt(number.replace(/\D/g, ""), 10);
  const suffix = number.replace(/[0-9]/g, "");
  const { ref, count } = useCountUp(numericPart);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-border bg-white p-8 text-center shadow-sm"
    >
      <p className="font-serif text-4xl font-semibold text-navy lg:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-text-muted">{label}</p>
    </div>
  );
}

export function SelectedImpact() {
  return (
    <section className="border-y border-border bg-surface py-16 lg:py-20">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {SELECTED_IMPACT.map((item) => (
            <ImpactCard
              key={item.label}
              number={item.number}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}