import { PUBLICATIONS } from "@/lib/data/publications";
import { PublicationBlock } from "./PublicationBlock";

export function PublicationsSection() {
  return (
    <section id="publications" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy">
          Publications
        </p>
        <h2 className="mt-4 font-serif text-3xl font-semibold text-navy lg:text-5xl">
          Research & Publications
        </h2>
        <p className="mt-4 max-w-[700px] text-base text-text-muted lg:text-lg">
          Selected peer-reviewed research contributions in electronics,
          embedded systems and renewable energy.
        </p>

        <div className="mt-14 space-y-12">
          {PUBLICATIONS.map((publication, index) => (
            <PublicationBlock
              key={publication.id}
              publication={publication}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}