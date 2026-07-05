"use client";

import { useState } from "react";
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from "@/lib/data/gallery";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredImages =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {GALLERY_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === category
                ? "border-navy bg-navy text-white"
                : "border-border bg-white text-text-primary hover:border-navy"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry-style grid */}
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="mb-4 break-inside-avoid rounded-xl border border-border bg-surface"
          >
            <div className="flex aspect-[4/3] items-center justify-center rounded-xl text-sm text-text-muted">
              {image.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}