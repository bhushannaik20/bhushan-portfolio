export type ProjectMetadata = {
  domain: string[];
  role: string;
  status: string;
  organisingBody: string[];
  businessModel?: string;
  primaryBeneficiary?: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  metadata: ProjectMetadata;
  executiveOverview: string;
  businessProblem: string;
  solution: string;
  workflow?: string[];
  keyFeatures?: string[];
  impact: string[];
  sdgs?: string[];
  liveDemoUrl?: string;
  publicationUrl?: string;
};