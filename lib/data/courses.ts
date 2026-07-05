export type Course = {
  id: string;
  title: string;
  institution: string;
  issued: string;
  credentialId?: string;
  verifyUrl: string;
};

export const COURSES: Course[] = [
  {
    id: "summer-analytics-2025",
    title: "Summer Analytics 2025",
    institution: "Indian Institute of Technology Guwahati",
    issued: "April 2025",
    credentialId: "d97a7324-deba-4ab0-94e5-8807fe055b71",
    verifyUrl:
      "https://certificate.givemycertificate.com/c/d97a7324-deba-4ab0-94e5-8807fe055b71",
  },
  {
    id: "winter-consulting-2025",
    title: "Winter Consulting 2025",
    institution: "Indian Institute of Technology Guwahati",
    issued: "February 2026",
    verifyUrl:
      "https://certificate.givemycertificate.com/c/20ad8028-d70f-4d04-b7f3-e8db17d8face",
  },
];