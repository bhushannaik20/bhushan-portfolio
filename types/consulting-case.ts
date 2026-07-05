export type ConsultingCase = {
  id: string;
  title: string;
  client: string;
  consultingDomain: string[];
  organisingBody: string[];
  competition?: string;
  status: string;
  executiveSummary: string;
  businessChallenge: string;
  strategicRecommendation: string[];
  implementationRoadmap: string[];
  frameworks: string[];
  presentationDeckUrl: string;
};