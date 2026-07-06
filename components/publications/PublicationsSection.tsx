import { PUBLICATIONS } from "@/lib/data/publications";
import { PublicationBlock } from "./PublicationBlock";

export function PublicationsSection() {
  return (
    <section id="publications" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-navy">
          Publications
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold text-navy lg:text-[52px]">
          Research & Publications
        </h2>
        <p className="mt-4 max-w-[700px] text-base text-text-muted lg:text-xl">
          Selected peer-reviewed research contributions in electronics,
          embedded systems and renewable energy.
        </p>

        <div className="mt-14 space-y-6">
          {PUBLICATIONS.map((publication) => (
            <PublicationBlock key={publication.id} publication={publication} />
          ))}
        </div>
      </div>
    </section>
  );
}