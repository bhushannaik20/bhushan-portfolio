import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { HERO_CONTENT, SITE_CONFIG } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-16 lg:pt-20"
    >
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-10 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10">
        <div className="order-2 lg:order-1">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="hero-gradient-bar h-[3px] w-9" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-navy">
                {HERO_CONTENT.badge}
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-serif text-6xl font-bold leading-[0.92] tracking-[-0.04em] text-text-primary sm:text-7xl lg:text-[104px]">
              {HERO_CONTENT.name}
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-[640px] text-2xl font-semibold leading-[1.15] tracking-[-0.01em] text-navy sm:text-[32px]">
              {HERO_CONTENT.title}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-5 max-w-[600px] text-base leading-relaxed text-text-muted lg:text-[17px]">
              {HERO_CONTENT.tagline}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-text-muted">
              {HERO_CONTENT.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href={SITE_CONFIG.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy px-6 py-3.5 text-xs font-bold uppercase tracking-[0.06em] text-white transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
              >
                Resume
              </Link>
              <Link
                href="/#contact"
                className="border border-navy bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.06em] text-navy transition-all hover:-translate-y-0.5 hover:bg-surface active:translate-y-0"
              >
                Contact
              </Link>
              <Link
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gold bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.06em] text-navy transition-all hover:-translate-y-0.5 hover:bg-gold/10 active:translate-y-0"
              >
                LinkedIn
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="order-1 lg:order-2">
          <TiltCard className="mx-auto flex min-h-[420px] w-full max-w-[420px] flex-col justify-end border border-border bg-white p-5 shadow-[0_26px_80px_rgba(16,18,23,0.10)] sm:min-h-[500px] lg:min-h-[600px] lg:max-w-none">
            <div className="relative -m-5 mb-4 aspect-[4/5] overflow-hidden lg:flex-1 lg:aspect-auto">
              <Image
                src="/images/profile/portrait.jpg"
                alt="Bhushan Naik"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted">
              Strategy · Innovation · Execution
            </span>
          </TiltCard>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce lg:block">
        <ArrowDown className="h-4 w-4 text-text-muted" strokeWidth={1.75} />
      </div>
    </section>
  );
}