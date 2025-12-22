import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Section,
  DirectAnswer,
  ScrollReveal,
  GlassCard,
  MorphingBlob,
  SpotlightCard,
  TiltCard,
} from '@/components/ui';

export const metadata: Metadata = {
  title: 'Case Studies | AI Transformation & CRM Implementation Results | Rashan Thompson',
  description:
    'Explore proven case studies from Rashan Thompson: 40% NPS improvement, 35% revenue growth, and successful AI transformations across Fortune 500 companies.',
  keywords: [
    'AI transformation case studies',
    'CRM implementation results',
    'Rashan Thompson case studies',
    'business transformation examples',
    'Salesforce implementation success',
    'digital transformation ROI',
    'technology consulting results',
    'Fortune 500 transformation',
  ],
};

const caseStudies = [
  {
    slug: 'fortune-500-contact-center-transformation',
    title: 'Fortune 500 Contact Center Transformation',
    client: 'Global Financial Services Company',
    challenge: 'Legacy contact center systems creating poor customer experience and high operational costs.',
    solution: 'AI-assisted routing, unified agent desktop, and predictive analytics implementation.',
    results: [
      { metric: '40%', label: 'NPS Improvement' },
      { metric: '25%', label: 'Cost Reduction' },
      { metric: '20%', label: 'FCR Increase' },
    ],
    industry: 'Financial Services',
    services: ['Contact Center Modernization', 'AI Integration', 'Process Optimization'],
  },
  {
    slug: 'salesforce-implementation-healthcare',
    title: 'Enterprise Salesforce Implementation',
    client: 'Regional Healthcare Network',
    challenge: 'Fragmented patient data across 12 facilities preventing coordinated care delivery.',
    solution: 'Unified Salesforce Health Cloud implementation with custom patient journey mapping.',
    results: [
      { metric: '360°', label: 'Patient View' },
      { metric: '35%', label: 'Efficiency Gain' },
      { metric: '90', label: 'Day Deployment' },
    ],
    industry: 'Healthcare',
    services: ['Salesforce Implementation', 'Data Integration', 'Training'],
  },
  {
    slug: 'ai-driven-revenue-growth',
    title: 'AI-Driven Revenue Growth Initiative',
    client: 'Technology Services Provider',
    challenge: 'Sales team struggling with lead prioritization and opportunity qualification.',
    solution: 'AI-powered lead scoring, predictive pipeline analytics, and automated outreach sequences.',
    results: [
      { metric: '35%', label: 'Revenue Growth' },
      { metric: '50%', label: 'Lead Conversion' },
      { metric: '3x', label: 'Pipeline Velocity' },
    ],
    industry: 'Technology',
    services: ['AI Integration', 'Sales Optimization', 'CRM Enhancement'],
  },
  {
    slug: 'global-team-transformation',
    title: 'Global Technology Team Transformation',
    client: 'Fortune 500 Consulting Firm',
    challenge: 'Siloed technology teams across three continents creating delivery inconsistencies.',
    solution: 'Unified operating model, shared tooling, and cross-regional collaboration framework.',
    results: [
      { metric: '1,500+', label: 'Team Members Aligned' },
      { metric: '40%', label: 'Delivery Speed' },
      { metric: '98%', label: 'Client Satisfaction' },
    ],
    industry: 'Professional Services',
    services: ['Team Transformation', 'Operating Model', 'Change Management'],
  },
  {
    slug: 'smb-digital-transformation',
    title: 'SMB Digital Transformation',
    client: 'Regional Manufacturing Company',
    challenge: 'Manual processes and disconnected systems limiting growth and scalability.',
    solution: 'End-to-end digital transformation including CRM, ERP integration, and process automation.',
    results: [
      { metric: '60%', label: 'Process Automation' },
      { metric: '45%', label: 'Time Savings' },
      { metric: '4 mo', label: 'ROI Timeline' },
    ],
    industry: 'Manufacturing',
    services: ['Digital Transformation', 'System Integration', 'Automation'],
  },
  {
    slug: 'nonprofit-operational-excellence',
    title: 'Nonprofit Operational Excellence',
    client: 'National Education Nonprofit',
    challenge: 'Limited technology budget with growing program demands and donor expectations.',
    solution: 'Salesforce Nonprofit Cloud implementation with volunteer management and donor analytics.',
    results: [
      { metric: '200%', label: 'Donor Visibility' },
      { metric: '50%', label: 'Admin Reduction' },
      { metric: '$0', label: 'License Cost' },
    ],
    industry: 'Nonprofit',
    services: ['Nonprofit Technology', 'Salesforce', 'Donor Management'],
  },
];

const industries = [
  'Financial Services',
  'Healthcare',
  'Technology',
  'Professional Services',
  'Manufacturing',
  'Nonprofit',
  'Retail',
  'Education',
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-36">
        <MorphingBlob variant="accent" size="lg" position="top-right" opacity={0.15} />
        <MorphingBlob variant="gold" size="md" position="bottom-left" opacity={0.1} />

        <div className="container text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-foreground">
              Case <span className="gradient-text">Studies</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Proven results from AI transformation, CRM implementation, and operational excellence initiatives
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <DirectAnswer className="max-w-3xl mx-auto mt-8">
              Rashan Thompson has delivered measurable business outcomes across Fortune 500 companies
              and growing organizations. These case studies demonstrate real results: 40% NPS improvement,
              35% revenue growth, and transformations that deliver ROI within 90 days.
            </DirectAnswer>
          </ScrollReveal>
        </div>
      </section>

      {/* Results Overview */}
      <Section className="relative">
        <MorphingBlob variant="primary" size="md" position="top-left" opacity={0.1} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <ScrollReveal>
              <h2 className="text-foreground">
                What Results Can <span className="gradient-text">You Expect</span>?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <DirectAnswer>
                Organizations working with Rashan Thompson consistently achieve significant improvements:
                40%+ NPS gains, 25-35% cost reductions, and revenue growth that exceeds industry benchmarks.
                These outcomes come from proven methodologies refined across 25+ years of Fortune 500 experience.
              </DirectAnswer>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/stock/case-study-results.svg"
                alt="Case study results dashboard showing revenue growth, customer satisfaction, and efficiency metrics"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { value: '40%+', label: 'Avg NPS Improvement', icon: '📈' },
            { value: '35%', label: 'Revenue Growth', icon: '💰' },
            { value: '25%', label: 'Cost Reduction', icon: '⚡' },
            { value: '90 Days', label: 'Typical ROI', icon: '🎯' },
          ].map((item, index) => (
            <ScrollReveal key={item.label} delay={200 + index * 100}>
              <TiltCard>
                <GlassCard className="text-center p-6">
                  <span className="text-3xl mb-2 block">{item.icon}</span>
                  <span className="font-heading text-2xl md:text-3xl gradient-text block mb-2">
                    {item.value}
                  </span>
                  <span className="text-sm text-foreground-muted">{item.label}</span>
                </GlassCard>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Case Studies Grid */}
      <Section className="relative">
        <MorphingBlob variant="accent" size="lg" position="bottom-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            Explore <span className="gradient-text">Transformation Stories</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-center text-foreground-muted max-w-2xl mx-auto mb-12">
            Each case study represents a real engagement with verified outcomes. Click to explore
            the challenge, approach, and results in detail.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.slug} delay={200 + index * 100}>
              <Link href={`/case-studies/${study.slug}`} className="block h-full group">
                <SpotlightCard className="p-6 h-full transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-accent-light bg-accent/10 px-2 py-1 rounded">
                        {study.industry}
                      </span>
                    </div>

                    <h3 className="text-xl text-foreground mb-2 group-hover:text-accent-light transition-colors">
                      {study.title}
                    </h3>

                    <p className="text-sm text-foreground-muted mb-4">
                      {study.client}
                    </p>

                    <p className="text-foreground-muted mb-6 flex-grow">
                      {study.challenge}
                    </p>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {study.results.map((result) => (
                        <div key={result.label} className="text-center">
                          <span className="font-heading text-xl gradient-text block">
                            {result.metric}
                          </span>
                          <span className="text-xs text-foreground-muted">
                            {result.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.services.slice(0, 2).map((service) => (
                        <span
                          key={service}
                          className="text-xs text-foreground-muted bg-surface-muted px-2 py-1 rounded"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Industries Served */}
      <Section narrow className="relative">
        <MorphingBlob variant="gold" size="sm" position="top-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            Which Industries Has <span className="gradient-text-gold">Rashan Thompson</span> Served?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Rashan Thompson has delivered transformations across financial services, healthcare,
            technology, professional services, manufacturing, nonprofit, retail, and education
            sectors. His methodologies adapt to industry-specific requirements while maintaining
            consistent outcome quality.
          </DirectAnswer>
        </ScrollReveal>

        <div className="flex flex-wrap gap-3 mt-8">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry} delay={200 + index * 50}>
              <span className="text-sm font-medium text-foreground bg-surface-muted px-4 py-2 rounded-full border border-surface-border hover:border-accent/50 transition-colors">
                {industry}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Methodology */}
      <Section className="relative">
        <MorphingBlob variant="primary" size="md" position="bottom-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            How Does <span className="gradient-text">Rashan Thompson</span> Approach Each Engagement?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Every engagement follows a proven methodology: Discovery to understand current state,
            Strategy to define the transformation roadmap, Implementation with hands-on execution,
            and Optimization to ensure sustainable results. This approach consistently delivers
            measurable outcomes within agreed timelines.
          </DirectAnswer>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {[
            {
              phase: '01',
              title: 'Discovery',
              description: 'Deep dive into your current state, challenges, and objectives. Stakeholder interviews, system assessment, and opportunity identification.',
            },
            {
              phase: '02',
              title: 'Strategy',
              description: 'Develop transformation roadmap with clear milestones, success metrics, and resource requirements. Executive alignment and buy-in.',
            },
            {
              phase: '03',
              title: 'Implementation',
              description: 'Hands-on execution with your team. Agile delivery, continuous feedback loops, and rapid iteration toward defined outcomes.',
            },
            {
              phase: '04',
              title: 'Optimization',
              description: 'Fine-tune for maximum impact. Knowledge transfer, documentation, and ongoing support to ensure sustainable results.',
            },
          ].map((item, index) => (
            <ScrollReveal key={item.phase} delay={200 + index * 100}>
              <GlassCard className="p-6 h-full relative">
                <span className="font-heading text-4xl text-accent/20 absolute top-4 right-4">
                  {item.phase}
                </span>
                <h3 className="text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-foreground-muted mb-0">{item.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative">
        <ScrollReveal>
          <GlassCard variant="highlight" className="max-w-3xl mx-auto text-center p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-accent/20 rounded-full blur-[100px] -z-10" />

            <h2 className="text-foreground mt-0 mb-4">
              Ready to Create Your <span className="gradient-text">Success Story</span>?
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mb-8">
              Every transformation starts with a conversation. Let&apos;s discuss your challenges
              and explore how Rashan Thompson can help you achieve similar results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Start Your Transformation
              </Link>
              <Link href="/about" className="btn btn-secondary">
                Learn About Rashan
              </Link>
            </div>
          </GlassCard>
        </ScrollReveal>
      </Section>
    </>
  );
}
