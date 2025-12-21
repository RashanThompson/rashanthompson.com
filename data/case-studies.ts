export interface CaseStudyResult {
  metric: string;
  label: string;
  description?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  services: string[];
  challenge: {
    summary: string;
    details: string[];
  };
  solution: {
    summary: string;
    approach: string[];
    technologies?: string[];
  };
  results: CaseStudyResult[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  keyTakeaways: string[];
  relatedStudies: string[];
}

export const caseStudies: Record<string, CaseStudy> = {
  'fortune-500-contact-center-transformation': {
    slug: 'fortune-500-contact-center-transformation',
    title: 'Fortune 500 Contact Center Transformation',
    client: 'Global Financial Services Company',
    industry: 'Financial Services',
    duration: '18 months',
    services: ['Contact Center Modernization', 'AI Integration', 'Process Optimization', 'Change Management'],
    challenge: {
      summary: 'Legacy contact center systems were creating poor customer experience and driving operational costs through the roof.',
      details: [
        'Customer satisfaction scores had declined 15% over two years',
        'Average handle time exceeded industry benchmarks by 40%',
        'Agent turnover was 45% annually due to outdated tools',
        'Siloed systems prevented unified customer view',
        'Manual routing led to frequent transfers and repeat contacts',
      ],
    },
    solution: {
      summary: 'Rashan Thompson led a comprehensive contact center transformation combining AI-assisted routing, unified agent desktop, and predictive analytics.',
      approach: [
        'Conducted stakeholder interviews across 12 business units to understand pain points',
        'Designed unified agent desktop consolidating 7 legacy systems',
        'Implemented AI-powered intelligent routing reducing transfers by 60%',
        'Deployed predictive analytics for proactive customer outreach',
        'Led change management initiative reaching 2,000+ agents across 8 locations',
        'Established continuous improvement framework for ongoing optimization',
      ],
      technologies: ['Salesforce Service Cloud', 'Einstein AI', 'Amazon Connect', 'Tableau', 'MuleSoft'],
    },
    results: [
      { metric: '40%', label: 'NPS Improvement', description: 'Net Promoter Score increased from 22 to 62' },
      { metric: '25%', label: 'Cost Reduction', description: 'Annual operational savings of $12M' },
      { metric: '20%', label: 'FCR Increase', description: 'First Call Resolution improved from 65% to 85%' },
      { metric: '35%', label: 'AHT Reduction', description: 'Average Handle Time reduced from 12 to 8 minutes' },
    ],
    testimonial: {
      quote: "Rashan didn't just implement technology—he transformed how we think about customer service. His ability to align technology with business outcomes while bringing our teams along was exceptional.",
      author: 'Chief Customer Officer',
      role: 'Fortune 500 Financial Services',
    },
    keyTakeaways: [
      'Technology transformation requires equal investment in change management',
      'AI augments agent capabilities rather than replacing human judgment',
      'Unified customer view is foundational to experience improvement',
      'Continuous measurement enables rapid iteration and optimization',
    ],
    relatedStudies: ['salesforce-implementation-healthcare', 'ai-driven-revenue-growth'],
  },

  'salesforce-implementation-healthcare': {
    slug: 'salesforce-implementation-healthcare',
    title: 'Enterprise Salesforce Implementation',
    client: 'Regional Healthcare Network',
    industry: 'Healthcare',
    duration: '90 days',
    services: ['Salesforce Implementation', 'Data Integration', 'Training', 'HIPAA Compliance'],
    challenge: {
      summary: 'Fragmented patient data across 12 facilities was preventing coordinated care delivery and frustrating both patients and providers.',
      details: [
        'Patient information scattered across 12 different EMR systems',
        'Care coordinators spent 3+ hours daily manually reconciling records',
        'No visibility into patient journey across facilities',
        'Compliance risks from inconsistent documentation',
        'Patient complaints about repeating information at every touchpoint',
      ],
    },
    solution: {
      summary: 'Rashan Thompson designed and delivered a unified Salesforce Health Cloud implementation with custom patient journey mapping, completing the project in just 90 days.',
      approach: [
        'Rapid assessment of existing systems and data quality',
        'Designed HIPAA-compliant integration architecture',
        'Implemented Salesforce Health Cloud with custom patient timeline',
        'Built automated care gap identification workflows',
        'Trained 500+ users across all 12 facilities',
        'Established data governance framework for ongoing quality',
      ],
      technologies: ['Salesforce Health Cloud', 'MuleSoft Healthcare Accelerator', 'Tableau CRM', 'DocuSign'],
    },
    results: [
      { metric: '360°', label: 'Patient View', description: 'Complete visibility across all touchpoints' },
      { metric: '35%', label: 'Efficiency Gain', description: 'Care coordinator time savings' },
      { metric: '90', label: 'Day Deployment', description: 'Full implementation in 3 months' },
      { metric: '100%', label: 'Compliance', description: 'HIPAA audit passed with zero findings' },
    ],
    testimonial: {
      quote: "We had tried twice before to unify our patient data and failed. Rashan's approach was different—he understood healthcare workflows, not just Salesforce. The 90-day timeline seemed impossible, but he delivered.",
      author: 'Chief Information Officer',
      role: 'Regional Healthcare Network',
    },
    keyTakeaways: [
      'Healthcare implementations require deep understanding of clinical workflows',
      'Rapid deployment is possible with focused scope and strong governance',
      'User adoption depends on solving real daily pain points',
      'Compliance must be built in from day one, not added later',
    ],
    relatedStudies: ['fortune-500-contact-center-transformation', 'nonprofit-operational-excellence'],
  },

  'ai-driven-revenue-growth': {
    slug: 'ai-driven-revenue-growth',
    title: 'AI-Driven Revenue Growth Initiative',
    client: 'Technology Services Provider',
    industry: 'Technology',
    duration: '6 months',
    services: ['AI Integration', 'Sales Optimization', 'CRM Enhancement', 'Analytics'],
    challenge: {
      summary: 'Sales team was struggling with lead prioritization and opportunity qualification, leaving significant revenue on the table.',
      details: [
        'Sales reps spending 60% of time on unqualified leads',
        'Win rate had declined from 25% to 18% over two years',
        'No predictive visibility into pipeline health',
        'Manual forecasting was inaccurate and time-consuming',
        'Top performers had insights that were not being captured or shared',
      ],
    },
    solution: {
      summary: 'Rashan Thompson implemented an AI-powered sales intelligence platform that transformed how the team identified, prioritized, and pursued opportunities.',
      approach: [
        'Analyzed two years of win/loss data to identify success patterns',
        'Built predictive lead scoring model with 85% accuracy',
        'Implemented Einstein Analytics for real-time pipeline insights',
        'Designed automated outreach sequences for different buyer personas',
        'Created coaching dashboards for sales managers',
        'Established feedback loop for continuous model improvement',
      ],
      technologies: ['Salesforce Sales Cloud', 'Einstein AI', 'Pardot', 'Tableau', 'Outreach.io'],
    },
    results: [
      { metric: '35%', label: 'Revenue Growth', description: 'Year-over-year increase in closed-won' },
      { metric: '50%', label: 'Lead Conversion', description: 'Improvement in qualified lead conversion' },
      { metric: '3x', label: 'Pipeline Velocity', description: 'Faster movement through sales stages' },
      { metric: '40%', label: 'Time Savings', description: 'Reduction in administrative tasks' },
    ],
    testimonial: {
      quote: "The AI isn't replacing our salespeople—it's making them superhuman. They now spend time on deals that actually close. Rashan understood that the technology had to serve the people, not the other way around.",
      author: 'VP of Sales',
      role: 'Technology Services Provider',
    },
    keyTakeaways: [
      'AI for sales must augment human judgment, not replace it',
      'Historical data quality determines model effectiveness',
      'Sales adoption requires demonstrating immediate value',
      'Continuous learning loops keep models relevant as markets change',
    ],
    relatedStudies: ['fortune-500-contact-center-transformation', 'smb-digital-transformation'],
  },

  'global-team-transformation': {
    slug: 'global-team-transformation',
    title: 'Global Technology Team Transformation',
    client: 'Fortune 500 Consulting Firm',
    industry: 'Professional Services',
    duration: '24 months',
    services: ['Team Transformation', 'Operating Model', 'Change Management', 'Delivery Excellence'],
    challenge: {
      summary: 'Siloed technology teams across three continents were creating delivery inconsistencies and threatening client relationships.',
      details: [
        '1,500+ team members with no unified way of working',
        'Delivery quality varied significantly by region',
        'Knowledge sharing was minimal across geographies',
        'Client complaints about inconsistent experience',
        'Top talent leaving due to limited growth opportunities',
      ],
    },
    solution: {
      summary: 'Rashan Thompson designed and implemented a unified global operating model that aligned teams across North America, Europe, and Asia while preserving regional strengths.',
      approach: [
        'Conducted assessment across all three regions to understand capabilities and gaps',
        'Designed unified delivery methodology with regional flexibility',
        'Implemented shared tooling and collaboration platforms',
        'Created global career framework with clear progression paths',
        'Established centers of excellence for key capabilities',
        'Built leadership development program for emerging leaders',
      ],
      technologies: ['Jira', 'Confluence', 'Microsoft Teams', 'ServiceNow', 'Workday'],
    },
    results: [
      { metric: '1,500+', label: 'Team Members', description: 'Aligned under unified operating model' },
      { metric: '40%', label: 'Delivery Speed', description: 'Improvement in project completion time' },
      { metric: '98%', label: 'Client Satisfaction', description: 'CSAT scores across global engagements' },
      { metric: '50%', label: 'Attrition Reduction', description: 'Improvement in key talent retention' },
    ],
    testimonial: {
      quote: "Rashan didn't impose a one-size-fits-all model. He built something that brought us together while respecting what made each region strong. That's why it actually worked.",
      author: 'Global Delivery Leader',
      role: 'Fortune 500 Consulting Firm',
    },
    keyTakeaways: [
      'Global transformation must balance standardization with regional autonomy',
      'People transformation is harder than technology transformation',
      'Career growth opportunities are essential for retention',
      'Centers of excellence accelerate knowledge sharing',
    ],
    relatedStudies: ['fortune-500-contact-center-transformation', 'nonprofit-operational-excellence'],
  },

  'smb-digital-transformation': {
    slug: 'smb-digital-transformation',
    title: 'SMB Digital Transformation',
    client: 'Regional Manufacturing Company',
    industry: 'Manufacturing',
    duration: '4 months',
    services: ['Digital Transformation', 'System Integration', 'Automation', 'Training'],
    challenge: {
      summary: 'Manual processes and disconnected systems were limiting growth and making it impossible to scale without proportional headcount increases.',
      details: [
        'Order processing required manual entry into 4 different systems',
        'Inventory visibility was 48+ hours delayed',
        'Customer inquiries took 2-3 days for accurate responses',
        'Finance team spent 40% of time on manual reconciliation',
        'Growing revenue but shrinking margins due to operational inefficiency',
      ],
    },
    solution: {
      summary: 'Rashan Thompson delivered an end-to-end digital transformation that connected systems, automated workflows, and positioned the company for scalable growth.',
      approach: [
        'Mapped all business processes to identify automation opportunities',
        'Implemented Salesforce as central customer and order hub',
        'Built real-time integration with ERP and inventory systems',
        'Automated routine workflows using Salesforce Flow',
        'Created self-service portal for customer order tracking',
        'Trained all 45 employees on new systems and processes',
      ],
      technologies: ['Salesforce Sales Cloud', 'MuleSoft', 'Slack', 'DocuSign', 'QuickBooks Integration'],
    },
    results: [
      { metric: '60%', label: 'Process Automation', description: 'Of manual tasks now automated' },
      { metric: '45%', label: 'Time Savings', description: 'Weekly hours returned to strategic work' },
      { metric: '4 mo', label: 'ROI Timeline', description: 'Investment recovered in first 4 months' },
      { metric: '2x', label: 'Order Capacity', description: 'Without adding headcount' },
    ],
    testimonial: {
      quote: "We thought digital transformation was something only big companies could do. Rashan showed us it was not only possible for a company our size—it was essential for our survival.",
      author: 'CEO',
      role: 'Regional Manufacturing Company',
    },
    keyTakeaways: [
      'SMB transformation requires right-sized solutions, not enterprise complexity',
      'Quick wins build momentum for larger changes',
      'Integration is often more valuable than new systems',
      'Training investment determines adoption success',
    ],
    relatedStudies: ['ai-driven-revenue-growth', 'nonprofit-operational-excellence'],
  },

  'nonprofit-operational-excellence': {
    slug: 'nonprofit-operational-excellence',
    title: 'Nonprofit Operational Excellence',
    client: 'National Education Nonprofit',
    industry: 'Nonprofit',
    duration: '5 months',
    services: ['Nonprofit Technology', 'Salesforce', 'Donor Management', 'Volunteer Coordination'],
    challenge: {
      summary: 'Limited technology budget combined with growing program demands and donor expectations was stretching the organization to breaking point.',
      details: [
        'Donor information scattered across spreadsheets and email',
        'No visibility into volunteer hours or engagement',
        'Grant reporting required weeks of manual data compilation',
        'Staff burnout from administrative overhead',
        'Board requesting metrics that were impossible to produce',
      ],
    },
    solution: {
      summary: 'Rashan Thompson leveraged Salesforce Nonprofit Cloud with donated licenses to deliver enterprise-grade technology at zero licensing cost.',
      approach: [
        'Secured Salesforce.org donated licenses (10 free + discounted additional)',
        'Designed unified donor and volunteer management system',
        'Built automated grant reporting dashboards',
        'Implemented constituent journey tracking',
        'Created volunteer self-service portal',
        'Trained staff on sustainable system management',
      ],
      technologies: ['Salesforce Nonprofit Cloud', 'Salesforce Volunteers', 'Tableau CRM', 'FormAssembly'],
    },
    results: [
      { metric: '200%', label: 'Donor Visibility', description: 'Complete view of giving history and engagement' },
      { metric: '50%', label: 'Admin Reduction', description: 'Time saved on manual tasks' },
      { metric: '$0', label: 'License Cost', description: 'Using Salesforce.org donated licenses' },
      { metric: '10x', label: 'Reporting Speed', description: 'Grant reports from weeks to hours' },
    ],
    testimonial: {
      quote: "We were struggling with tools designed for corporations or making do with spreadsheets. Rashan understood nonprofit operations and showed us there was a third way. Our donors are now getting the stewardship they deserve.",
      author: 'Executive Director',
      role: 'National Education Nonprofit',
    },
    keyTakeaways: [
      'Nonprofit technology should leverage available donated resources',
      'Operational efficiency directly translates to mission impact',
      'Board reporting capabilities drive strategic decision-making',
      'Volunteer engagement technology improves retention',
    ],
    relatedStudies: ['salesforce-implementation-healthcare', 'smb-digital-transformation'],
  },
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}

export function getRelatedCaseStudies(currentSlug: string): CaseStudy[] {
  const current = caseStudies[currentSlug];
  if (!current) return [];

  return current.relatedStudies
    .map(slug => caseStudies[slug])
    .filter((study): study is CaseStudy => study !== undefined);
}
