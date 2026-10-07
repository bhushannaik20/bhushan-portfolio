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
    duration: "April 2026 — Present",
    location: "Mumbai, India",
    badge: "Pre-incubated · AIC-NIFIE, IIM Mumbai",
    description: [
      "Founded a technology venture focused on sustainability, mobility, and public sector innovation, translating research and hackathon-winning prototypes into deployable products.",
      "Led development of B2B/B2C solar and rainwater harvesting platforms aligned with the UN SDGs and Viksit Bharat @2047, securing 6+ strategic vendor MoUs across Vasai–Virar for pilot testing and R&D.",
      "Directed product strategy, channel partnerships, and cross-functional execution across engineering, design, and go-to-market.",
      "Developed 15+ solutions under national innovation initiatives supported by the Ministry of Education, MoSPI, and the Ministry of Jal Shakti.",
      "Pre-incubated at AIC-NIFIE, IIM Mumbai; shortlisted for AICTE APF & YUKTI 2025 (Government of India).",
    ],
  },
  {
    id: "content-creator",
    role: "Content Creator",
    organization: "YouTube (formerly BSN Gaming)",
    duration: "2017 — 2021",
    description: [
      "Built and managed an independent content channel from the ground up, covering content strategy, production, and audience engagement.",
      "Grew a subscriber base of 350+ and accumulated 25,000+ views through consistent content planning and execution.",
      "Developed early skills in communication, consistency, and public-facing presentation that continue to inform current work.",
    ],
    stats: [
      { label: "Views", value: "25,000+" },
      { label: "Subscribers", value: "350+" },
    ],
  },
];