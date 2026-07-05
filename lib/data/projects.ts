import { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    id: "urja-shakti",
    title: "Urja Shakti",
    metadata: {
      domain: ["Sustainability", "Renewable Energy", "Climate Technology"],
      role: "Co-Founder, Strategy & Product Development",
      status: "National Winner — Smart India Hackathon 2024",
      organisingBody: [
        "AICTE",
        "Ministry of Education Innovation Cell",
        "Ministry of Education, Government of India",
      ],
      businessModel: "Commission-based Marketplace",
    },
    executiveOverview:
      "Urja Shakti is a satellite imagery-enabled rooftop solar aggregation platform designed to accelerate decentralized solar adoption under PM Surya Ghar Yojana. The platform connects homeowners with verified solar installation partners through AI-assisted rooftop assessment, subsidy integration, financial estimation and vendor aggregation.",
    businessProblem:
      "Residential rooftop solar adoption remains fragmented due to limited awareness, complex vendor discovery, inconsistent quotations and the absence of personalized feasibility assessments. Homeowners often struggle to identify trusted vendors and understand government incentives.",
    solution:
      "The platform enables homeowners to select their rooftop using satellite imagery, enter electricity consumption details and receive a customized rooftop solar assessment including system sizing, estimated generation, financial savings, subsidy eligibility and vendor quotations. Local vendors receive standardized assessments, reducing sales effort while improving customer confidence.",
    workflow: [
      "Satellite Rooftop Selection",
      "Household Information",
      "Electricity Consumption",
      "AI-assisted Solar Assessment",
      "Customized Financial & Technical Report",
      "Government Subsidy Mapping",
      "Vendor Quote Generation",
      "Installation & AMC Support",
    ],
    keyFeatures: [
      "Satellite Imagery Assessment",
      "Custom Rooftop Analysis",
      "Vendor Aggregation Marketplace",
      "PM Surya Ghar Subsidy Integration",
      "Financial Savings Estimator",
      "AI Chat Assistant",
      "Annual Maintenance Planning",
      "Multilingual Support",
    ],
    impact: [
      "Winner — Smart India Hackathon 2024",
      "3 Memorandums of Understanding signed with local solar vendors across Vasai–Virar for pilot testing and R&D",
      "Supports local solar ecosystem through standardized customer acquisition",
      "Promotes decentralized renewable energy adoption aligned with national sustainability objectives",
    ],
    sdgs: ["SDG 7", "SDG 11", "SDG 13"],
    liveDemoUrl: "https://urjashakti-35d72.web.app/home",
  },
  {
    id: "prism",
    title: "PRISM",
    subtitle: "Proposal Response & Intelligent Solutions for Market Growth",
    metadata: {
      domain: ["Enterprise AI", "Agentic AI", "Sales Automation", "Procurement Intelligence"],
      role: "Product Lead",
      status: "Prototype",
      organisingBody: ["EY Techathon 6.0"],
      businessModel: "Enterprise SaaS, Subscription Licensing",
    },
    executiveOverview:
      "PRISM is an Agentic AI platform developed for enterprise RFP discovery, compliance analysis and proposal generation. Designed initially for the FMEG industry, the platform automates end-to-end bid qualification using specialized AI agents, engineering standards validation and intelligent proposal workflows.",
    businessProblem:
      "Preparing enterprise proposals is resource intensive and requires continuous monitoring of tender portals, manual document review, engineering standards verification and commercial pricing analysis.",
    solution:
      "PRISM continuously scans predefined tender portals, identifies relevant RFPs within configurable timelines, parses documents using OCR, validates compliance against IEC, ISO and EU standards, compares technical requirements with OEM catalogues, retrieves distributor pricing and generates review-ready proposal reports for business teams.",
    workflow: [
      "Monitor Tender Sources",
      "RFP Discovery",
      "OCR Document Parsing",
      "Agentic AI Analysis",
      "Standards Validation",
      "OEM Catalogue Matching",
      "Pricing Intelligence",
      "Proposal Report Generation",
      "Human Review",
    ],
    keyFeatures: [
      "Automated RFP Discovery",
      "OCR Document Processing",
      "Multi-Agent AI Workflow",
      "IEC / ISO / EU Standards Validation",
      "OEM Repository Matching",
      "Distributor Pricing Engine",
      "Proposal Generation",
      "Review Workflow",
    ],
    impact: [
      "Built for EY Techathon 6.0",
      "Reduces manual proposal preparation effort",
      "Improves compliance consistency",
      "Designed for enterprise procurement teams",
    ],
    liveDemoUrl: "https://prism-rfp.web.app/",
  },
  {
    id: "varsha-bandhan",
    title: "Varsha Bandhan",
    metadata: {
      domain: ["Climate Technology", "Water Resources", "GovTech"],
      role: "Product Lead",
      status: "Prototype",
      organisingBody: [
        "Smart India Hackathon 2025",
        "Ministry of Jal Shakti, Government of India",
      ],
      businessModel: "Commission Marketplace",
    },
    executiveOverview:
      "Varsha Bandhan is a satellite imagery and GIS-enabled rooftop rainwater harvesting platform that generates CGWB-compliant feasibility assessments, structural recommendations and multilingual DPRs while connecting households with implementation partners, subsidies and annual maintenance services.",
    businessProblem:
      "Although rooftop rainwater harvesting is promoted nationally, households often lack technical guidance, groundwater assessment, standardized structural recommendations and trusted implementation partners.",
    solution:
      "Users identify their rooftop using satellite imagery, while geological conditions, borewell availability, roof material and household parameters are automatically combined to generate detailed feasibility reports, pit dimensions, recharge recommendations and implementation guidance aligned with CGWB guidelines.",
    workflow: [
      "Satellite Rooftop Selection",
      "GIS Groundwater Analysis",
      "Household Details",
      "Roof Material Assessment",
      "Borewell Evaluation",
      "CGWB Compliance Engine",
      "Detailed DPR Generation",
      "Vendor & AMC Integration",
    ],
    keyFeatures: [
      "Satellite Mapping",
      "GIS Groundwater Intelligence",
      "CGWB Compliance",
      "Detailed Structural Recommendations",
      "Automated DPR Generation",
      "Vendor Aggregation",
      "Government Subsidy Guidance",
      "AI Chat Assistant",
    ],
    impact: [
      "Developed for Smart India Hackathon 2025",
      "Bridges policy with citizen implementation",
      "Standardizes rooftop rainwater harvesting planning",
      "Supports sustainable groundwater recharge",
    ],
    liveDemoUrl: "https://varsha-bandhan.vercel.app/calculator",
  },
  {
    id: "arogya-kavach",
    title: "Arogya Kavach",
    metadata: {
      domain: ["Healthcare", "Predictive Analytics", "Public Health", "GovTech"],
      role: "Product Lead",
      status: "Final Year B.E. Project, Prototype",
      organisingBody: [
        "Smart India Hackathon 2025",
        "Ministry of Health & Family Welfare",
      ],
      businessModel: "Government Digital Public Infrastructure",
    },
    executiveOverview:
      "Arogya Kavach is a predictive public health intelligence platform that integrates IDSP surveillance data, IMD weather intelligence and Google Trends to forecast district-level disease outbreaks while supporting hospitals, policymakers and frontline healthcare workers through preparedness dashboards.",
    businessProblem:
      "Current disease surveillance remains reactive, limiting preparedness for hospitals and public health authorities while creating reporting gaps for frontline healthcare workers.",
    solution:
      "The platform analyses historical disease bulletins, climate intelligence and epidemiological trends to generate weekly forecasts for water-borne, vector-borne and air-borne diseases. It additionally supports hospital resource planning, OPD/IPD preparedness, offline-first ASHA reporting and WhatsApp-enabled submissions.",
    keyFeatures: [
      "District Health Dashboards",
      "Disease Forecasting",
      "Hospital Preparedness",
      "Inventory Planning",
      "Offline-first ASHA PWA",
      "WhatsApp Reporting",
      "Public Policy Dashboard",
      "Explainable AI Forecasts",
    ],
    impact: [
      "Developed for Smart India Hackathon 2025",
      "Final Year B.E. Project",
      "Designed in consultation with senior clinicians and practicing doctors",
      "Supports preventive public health decision-making",
    ],
    liveDemoUrl: "https://arogyakavach.vercel.app/",
  },
  {
    id: "drishti-ai",
    title: "DRISHTI AI",
    metadata: {
      domain: ["Industrial AI", "Engineering Intelligence"],
      role: "Product Lead",
      status: "Grand Finale Finalist — LTTS TECHgium 9th Edition",
      organisingBody: ["L&T Technology Services"],
    },
    executiveOverview:
      "DRISHTI AI is a standards-aware engineering intelligence platform combining a deterministic engineering validation engine with retrieval-augmented, explainable AI to support ASTM-aligned material and design decisions across 800+ engineering materials.",
    businessProblem:
      "Engineering teams face slow, manual, and inconsistent validation against ASTM and related standards when selecting materials and design parameters, creating compliance risk and design delays.",
    solution:
      "The platform combines a deterministic rule-based engineering engine with a retrieval-augmented generation (RAG) layer over a database of 800+ engineering materials, producing explainable, standards-aligned recommendations that engineers can trust and audit.",
    keyFeatures: [
      "ASTM-Aligned Validation",
      "Deterministic Engineering Engine",
      "Retrieval-Augmented Generation",
      "Explainable AI Recommendations",
      "800+ Engineering Materials Database",
    ],
    impact: [
      "Grand Finale Finalist — LTTS TECHgium 9th Edition",
      "Reduces manual standards-verification effort for engineering teams",
      "Improves consistency and auditability of material selection decisions",
    ],
    liveDemoUrl: "#",
  },
  {
    id: "nirmal-data",
    title: "Nirmal Data",
    metadata: {
      domain: ["Public Sector", "GovTech", "Statistical Intelligence"],
      role: "Product Lead",
      status: "Grand Finale Finalist — Statathon 2025–26",
      organisingBody: [
        "AICTE",
        "Ministry of Education Innovation Cell",
        "Ministry of Statistics and Programme Implementation, Government of India",
      ],
    },
    executiveOverview:
      "Nirmal Data is a deterministic statistical intelligence platform that automates weighted statistical computation, rule-based validation and multilingual reporting to support government survey and data quality workflows, with complete audit trails.",
    businessProblem:
      "Government statistical workflows often rely on manual, error-prone computation and validation of large survey datasets, with limited traceability and inconsistent reporting formats across regions and languages.",
    solution:
      "Nirmal Data applies deterministic weighted-statistics computation with an AI-guided processing plan, rule-based validation checks, and generates multilingual reports with complete audit trails for transparency and accountability.",
    keyFeatures: [
      "Weighted Statistical Computation",
      "AI-Guided Processing Plan",
      "Rule-Based Validation",
      "Multilingual Reporting",
      "Complete Audit Trails",
    ],
    impact: [
      "Grand Finale Finalist — Statathon 2025–26",
      "Improves accuracy and traceability of government statistical workflows",
      "Supports multilingual accessibility for regional data teams",
    ],
    liveDemoUrl: "#",
  },
  {
    id: "drowsiness-detection",
    title: "IoT Enabled Driver Drowsiness Detection System",
    metadata: {
      domain: ["Electronics Research", "Embedded Systems", "Road Safety"],
      role: "Researcher",
      status: "Published Research",
      organisingBody: ["IEEE Xplore"],
    },
    executiveOverview:
      "This research presents multiple low-cost driver drowsiness detection systems designed for two-wheelers, passenger vehicles and commercial transport, using embedded IoT sensing technologies to improve road safety and accident prevention.",
    businessProblem:
      "Driver fatigue remains a significant contributor to road accidents across vehicle categories, with limited low-cost, vehicle-agnostic detection systems available for widespread deployment.",
    solution:
      "The research proposes multiple embedded IoT-based detection architectures tailored to two-wheelers, passenger vehicles and commercial transport, using low-cost sensing hardware to identify drowsiness indicators and trigger timely alerts.",
    keyFeatures: [
      "Embedded IoT Sensing",
      "Multi-Vehicle-Type Architecture",
      "Low-Cost Hardware Design",
      "Real-Time Alert Mechanism",
    ],
    impact: [
      "Published in IEEE Xplore, 17 April 2025",
      "Addresses road safety across diverse vehicle categories",
      "Demonstrates low-cost, scalable embedded design approach",
    ],
    publicationUrl: "https://ieeexplore.ieee.org/document/10958589",
  },
];