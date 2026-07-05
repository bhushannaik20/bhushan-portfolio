export type ExperienceEntry = {
  id: string;
  role: string;
  organization: string;
  duration: string;
  location?: string;
  description: string[];
  badge?: string;
  stats?: { label: string; value: string }[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "safeway",
    role: "Founder",
    organization: "SafeWay Innovations LLP",
    duration: "February 2024 — Present",
    location: "Mumbai, India",
    badge: "Pre-incubated · AIC-NIFIE, IIM Mumbai",
    description: [
      "Founded a technology venture focused on sustainability, mobility, and public sector innovation, translating research and hackathon-winning prototypes into deployable products.",
      "Led product strategy and cross-functional execution across engineering, design, and go-to-market for multiple platforms including Urja Shakti and Varsha Bandhan.",
      "Secured pre-incubation under AIC-NIFIE, Indian Institute of Management Mumbai, supporting structured venture development.",
      "Signed 3 Memorandums of Understanding with local solar vendors across Vasai–Virar for pilot testing and R&D.",
      "Built and managed a multidisciplinary founding team spanning engineering, design, and business development.",
    ],
  },
  {
    id: "content-creator",
    role: "Content Creator",
    organization: "YouTube (formerly BSN Gaming)",
    duration: "2017 — 2021",
    description: [
      "Built and managed an independent content channel from the ground up, covering content strategy, production, and audience engagement.",
      "Grew a subscriber base of 400+ and accumulated 25,000+ views through consistent content planning and execution.",
      "Developed early skills in communication, consistency, and public-facing presentation that continue to inform current work.",
    ],
    stats: [
      { label: "Views", value: "25,000+" },
      { label: "Subscribers", value: "400+" },
    ],
  },
];