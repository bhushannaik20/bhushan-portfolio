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
        {/* Left: Content (60%) */}
        <div className="order-2 lg:order-1 lg:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-crimson">
            {HERO_CONTENT.eyebrow}
          </p>

          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.1] tracking-[-0.02em] text-navy lg:text-[80px]">
            {HERO_CONTENT.name}
          </h1>

          <p className="mt-4 text-xl font-semibold text-text-primary lg:text-2xl">
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
              className="rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-light"
            >
              Resume
            </Link>
            <Link
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-navy px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-surface"
            >
              LinkedIn
            </Link>
            <Link
              href="/#contact"
              className="rounded-lg px-6 py-3 text-sm font-medium text-navy underline decoration-1 underline-offset-4 transition-colors hover:text-navy-light"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Right: Portrait (40%) */}
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