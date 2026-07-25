export type Publication = {
  id: string;
  title: string;
  publisher: string;
  date: string;
  summary: string;
  citation?: string;
  buttonLabel: string;
  url?: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    id: "drowsiness-detection",
    title:
      "IoT-Enabled Drowsiness Detection Systems for Enhanced Road Safety Across Diverse Vehicle Types",
    publisher: "IEEE Xplore — ICPC2T 2025, Raipur, India",
    date: "17 April 2025",
    summary:
      "This paper proposes multiple low-cost driver drowsiness detection systems across two-wheelers, passenger vehicles and commercial transport using embedded IoT sensing technologies to improve road safety and accident prevention.",
    citation:
      'B. S. Naik, T. V. Khot, B. D. Machado and R. B. Raut, "IoT-Enabled Drowsiness Detection Systems for Enhanced Road Safety Across Diverse Vehicle Types," 2025 Fourth International Conference on Power, Control and Computing Technologies (ICPC2T), Raipur, India, 2025, pp. 293-298, doi: 10.1109/ICPC2T63847.2025.10958589.',
    buttonLabel: "View Publication",
    url: "https://ieeexplore.ieee.org/document/10958589",
  },
  {
    id: "urja-shakti-paper",
    title:
      "Urja Shakti: A Digital Platform for Rooftop Solar Aggregation Using Satellite and Geospatial Intelligence",
    publisher:
      "Springer Nature (In Press) — 10th International Conference on Advances in Energy Research (ICAER 2025), IIT Bombay",
    date: "16–19 December 2025",
    summary:
      "Conference paper presenting a satellite-enabled digital platform for accelerating decentralized rooftop solar adoption through geospatial analysis, financial intelligence and vendor aggregation.",
    buttonLabel: "In Press",
  },
];