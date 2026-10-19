
import Image from "next/image";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            kicker="About Me"
            title="Building solutions at the intersection of strategy, technology, and public impact."
            markerColor="crimson"
            shadowColor="forest"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Presentation Photo */}
          <Reveal delay={80}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-border">
              <Image
                src="/images/about/iit-guwahati-presentation.jpeg"
                alt="Bhushan Naik presenting a case solution at IIT Guwahati"
                fill
                priority={false}
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <p className="mt-3 text-sm text-text-muted">
              Case Presentation · IIT Guwahati
            </p>
          </Reveal>

          {/* Right: Biography */}
          <Reveal
            delay={160}
            className="space-y-6 text-base leading-relaxed text-text-muted lg:text-lg"
          >
            <p>
              Bhushan Naik is the Founder of SafeWay Innovations LLP and an
              engineering graduate from Fr. Conceicao Rodrigues College of
              Engineering, University of Mumbai. Combining entrepreneurial
              drive with strategic thinking, he brings a track record of
              national-level leadership across innovation, entrepreneurship,
              and technology-driven initiatives.
            </p>

            <p>
              His work spans renewable energy, road safety, product innovation,
              and digital platforms, alongside exposure to FMCG, consulting,
              and product management (PMx). He has pitched and presented ideas
              to 50+ entrepreneurs, investors, and C-suite executives. As an
              alumnus of the Ministry of Education's Innovation Cell, he works
              at the intersection of technology, policy, and entrepreneurship.
            </p>

            <p>
              Driven by the vision of Viksit Bharat 2047, Bhushan is focused
              on building ventures and strategies that contribute to India's
              long-term growth. He welcomes collaborations across
              entrepreneurship, renewable energy, FMCG innovation, consulting,
              and product strategy.
            </p>

            <p className="pt-2 text-sm font-semibold tracking-wide text-navy lg:text-base">
              Top Skills: Leadership · Problem Solving · Operations Management
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
