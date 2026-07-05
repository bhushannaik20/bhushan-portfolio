import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Bhushan Naik",
  description:
    "A curated collection of competitions, innovation milestones, leadership moments, and speaking engagements.",
};

export default function GalleryPage() {
  return (
    <main className="pt-32 pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy">
          Gallery
        </p>
        <h1 className="mt-4 font-serif text-3xl font-semibold text-navy lg:text-5xl">
          Moments & Milestones
        </h1>
        <p className="mt-4 max-w-[700px] text-base text-text-muted lg:text-lg">
          A curated look at competitions, innovation work, leadership,
          speaking engagements, networking, and travel.
        </p>

        <div className="mt-14">
          <GalleryGrid />
        </div>
      </div>
    </main>
  );
}