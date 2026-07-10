import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { HERO_CONTENT, SITE_CONFIG } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-16 lg:pt-20"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-5 lg:gap-16 lg:px-10">
        {/* Left: Content */}
        <div className="order-2 lg:order-1 lg:col-span-3">
          <Reveal>
            <span className="inline-block rounded-full border border-navy/20 bg-navy/5 px-4 py-1.5 text-xs font-bold text-navy">
              {HERO_CONTENT.badge}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.15em] text-text-muted">
              {HERO_CONTENT.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="hero-gradient-bar mt-4 h-1 w-20 rounded-full" />
          </Reveal>

          <Reveal delay={160}>
            <h1 className="mt-5 font-serif text-5xl font-bold leading-[1.05] tracking-[-0.02em] text-text-primary sm:text-6xl lg:text-[84px]">
              {HERO_CONTENT.name}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 text-xl font-semibold text-navy sm:text-2xl lg:text-[30px]">
              {HERO_CONTENT.title}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-[620px] text-base leading-relaxed text-text-muted lg:text-lg">
              {HERO_CONTENT.tagline}
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/resume/bhushan-naik-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-navy px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-navy-light active:translate-y-0 active:scale-95"
              >
                Resume
              </Link>
              <Link
                href="/#contact"
                className="rounded-lg border-2 border-navy px-6 py-3 text-xs font-bold uppercase tracking-wide text-navy transition-all hover:-translate-y-0.5 hover:bg-navy/5 active:translate-y-0 active:scale-95"
              >
                Contact
              </Link>
              <Link
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gold px-6 py-3 text-xs font-bold uppercase tracking-wide text-navy transition-all hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0 active:scale-95"
              >
                LinkedIn
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Right: Portrait */}
        <Reveal
          delay={120}
          className="order-1 flex justify-center lg:order-2 lg:col-span-2 lg:justify-end"
        >
          <div className="group relative aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-xl border border-border shadow-sm transition-transform duration-500 hover:-translate-y-1 lg:aspect-auto lg:h-[600px] lg:w-[480px] lg:max-w-none">
            <Image
              src="/images/profile/portrait.jpg"
              alt="Bhushan Naik"
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 90vw, 480px"
            />
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce lg:block">
        <ArrowDown className="h-4 w-4 text-text-muted" strokeWidth={1.75} />
      </div>
    </section>
  );
}