import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { HERO_CONTENT, SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-20"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-5 lg:gap-16 lg:px-10">
        <div className="order-2 lg:order-1 lg:col-span-3">
          <span className="inline-block rounded-full border border-navy/20 bg-navy/5 px-4 py-1.5 text-xs font-bold text-navy">
            {HERO_CONTENT.badge}
          </span>

          <p className="mt-4 text-xs font-bold uppercase tracking-[0.15em] text-text-muted">
            {HERO_CONTENT.eyebrow}
          </p>

          <div className="hero-gradient-bar mt-4 h-1 w-20 rounded-full" />

          <h1 className="mt-5 font-serif text-6xl font-bold leading-[1.05] tracking-[-0.02em] text-text-primary lg:text-[84px]">
            {HERO_CONTENT.name}
          </h1>

          <p className="mt-4 text-2xl font-semibold text-navy lg:text-[30px]">
            {HERO_CONTENT.title}
          </p>

          <p className="mt-6 max-w-[620px] text-base leading-relaxed text-text-muted lg:text-lg">
            {HERO_CONTENT.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/resume/bhushan-naik-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-navy px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-navy-light"
            >
              Resume
            </Link>
            <Link
              href="/#contact"
              className="rounded-lg border-2 border-navy px-6 py-3 text-xs font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy/5"
            >
              Contact
            </Link>
            <Link
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gold px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:opacity-90"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:col-span-2 lg:justify-end">
          <div className="relative h-[480px] w-[380px] overflow-hidden rounded-xl border border-border shadow-sm lg:h-[600px] lg:w-[480px]">
            <Image
              src="/images/profile/portrait.jpg"
              alt="Bhushan Naik"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 380px, 480px"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
        <ArrowDown className="h-4 w-4 text-text-muted" strokeWidth={1.75} />
      </div>
    </section>
  );
}