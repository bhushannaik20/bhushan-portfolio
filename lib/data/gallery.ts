export type GalleryImage = {
  id: string;
  category: string;
  caption: string;
};

export const GALLERY_CATEGORIES = [
  "All",
  "Competitions",
  "Innovation",
  "Leadership",
  "Speaking",
  "Networking",
  "Travel",
  "Photography",
] as const;

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "sih-2024", category: "Competitions", caption: "Smart India Hackathon 2024" },
  { id: "strategy-storm", category: "Competitions", caption: "Strategy Storm 2025" },
  { id: "techgium", category: "Competitions", caption: "TECHgium 9th Edition" },
  { id: "statathon", category: "Competitions", caption: "Statathon 2025-26" },
  { id: "urja-shakti-demo", category: "Innovation", caption: "Urja Shakti" },
  { id: "nirmal-data-demo", category: "Innovation", caption: "Nirmal Data" },
  { id: "prism-demo", category: "Innovation", caption: "PRISM" },
  { id: "drishti-ai-demo", category: "Innovation", caption: "Drishti AI" },
  { id: "founder-meeting", category: "Leadership", caption: "Founder meeting" },
  { id: "team-discussion", category: "Leadership", caption: "Team discussion" },
  { id: "pitching", category: "Leadership", caption: "Pitching" },
  { id: "mentoring", category: "Leadership", caption: "Mentoring" },
  { id: "presentation", category: "Speaking", caption: "Presentation" },
  { id: "panel-discussion", category: "Speaking", caption: "Panel discussion" },
  { id: "judges", category: "Speaking", caption: "With judges" },
  { id: "govt-officials", category: "Speaking", caption: "Government officials" },
  { id: "investors", category: "Networking", caption: "Investor meeting" },
  { id: "founders-network", category: "Networking", caption: "Founders network" },
  { id: "industry-event", category: "Networking", caption: "Industry event" },
  { id: "conference", category: "Networking", caption: "Conference" },
  { id: "campus-visit", category: "Travel", caption: "Campus visit" },
  { id: "innovation-event", category: "Travel", caption: "Innovation event" },
  { id: "landscape-1", category: "Photography", caption: "Landscape" },
  { id: "architecture-1", category: "Photography", caption: "Architecture" },
];