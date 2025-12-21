import { Metadata } from 'next';
import Link from 'next/link';
import {
  Section,
  DirectAnswer,
  ScrollReveal,
  GlassCard,
  MorphingBlob,
  SpotlightCard,
  TiltCard,
} from '@/components/ui';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'AI Transformation Consulting for Business | CRM Implementation | Rashan Thompson',
  description:
    'Rashan Thompson helps businesses accelerate growth through AI transformation, CRM implementation, and operational excellence. 25+ years Fortune 500 expertise for SMBs and enterprises.',
  keywords: [
    'AI transformation consulting',
    'CRM implementation consultant',
    'Salesforce implementation expert',
    'business technology consulting',
    'digital transformation consultant',
    'operational excellence consulting',
    'Rashan Thompson business consulting',
    'SMB technology strategy',
  ],
};

const services = [
  {
    title: 'AI-Driven Transformation',
    icon: '🤖',
    description:
      'Integrate AI into your business operations to automate routine tasks, enhance decision-making, and unlock new growth opportunities.',
    outcomes: [
      'Automated workflows and processes',
      'AI-powered analytics and insights',
      'Enhanced customer experience',
      'Competitive advantage through technology',
    ],
    idealFor: 'Businesses ready to leverage AI for growth',
  },
  {
    title: 'CRM Implementation',
    icon: '📊',
    description:
      'Deploy Salesforce and other CRM platforms that drive sales, improve customer relationships, and provide visibility across your business.',
    outcomes: [
      'Unified customer data and 360° view',
      'Streamlined sales processes',
      'Automated marketing workflows',
      'Real-time analytics and reporting',
    ],
    idealFor: 'Companies needing better customer management',
  },
  {
    title: 'Operational Excellence',
    icon: '⚡',
    description:
      'Optimize business processes to reduce costs, improve efficiency, and scale operations without proportional headcount increases.',
    outcomes: [
      'Streamlined business processes',
      'Reduced operational costs',
      'Improved team productivity',
      'Scalable operations',
    ],
    idealFor: 'Growing businesses hitting operational limits',
  },
  {
    title: 'Technology Strategy',
    icon: '🎯',
    description:
      'Develop a roadmap for technology investments that aligns with business objectives and delivers measurable ROI.',
    outcomes: [
      'Clear technology roadmap',
      'Prioritized investment decisions',
      'Vendor evaluation and selection',
      'Risk mitigation strategies',
    ],
    idealFor: 'Leaders making technology decisions',
  },
];

const results = [
  { metric: '40%+', label: 'Avg Efficiency Gain', description: 'Process automation results' },
  { metric: '90 Days', label: 'Typical ROI Timeline', description: 'Investment payback period' },
  { metric: '35%', label: 'Revenue Growth', description: 'Sales optimization impact' },
  { metric: '25%', label: 'Cost Reduction', description: 'Operational excellence outcomes' },
];

const clientTypes = [
  {
    title: 'SMBs Ready to Scale',
    description: 'Growing businesses that have outgrown manual processes and need technology to enable the next phase of growth.',
    icon: '🚀',
  },
  {
    title: 'Startups Building Foundation',
    description: 'Early-stage companies that want to build the right technology foundation from the start.',
    icon: '💡',
  },
  {
    title: 'Enterprises Seeking Agility',
    description: 'Larger organizations that need to move faster and want outside perspective on transformation.',
    icon: '🏢',
  },
  {
    title: 'Private Equity Portfolio',
    description: 'PE firms seeking operational improvements and technology modernization for portfolio companies.',
    icon: '📈',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Deep dive into your business, technology landscape, and strategic objectives. Understanding before recommending.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Develop a transformation roadmap with clear milestones, success metrics, and resource requirements.',
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Hands-on execution with your team. Agile delivery with continuous feedback and rapid iteration.',
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'Fine-tune for maximum impact. Knowledge transfer and ongoing support for sustainable results.',
  },
];

export default function ForBusinessPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <MorphingBlob variant="accent" size="lg" position="top-right" opacity={0.15} />
        <MorphingBlob variant="primary" size="md" position="bottom-left" opacity={0.1} />

        <div className="container text-center relative z-10">
          <ScrollReveal>
            <span className="text-accent-light text-sm font-semibold tracking-wider uppercase mb-4 block">
              Business Consulting
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-foreground">
              AI Transformation & Technology Strategy by{' '}
              <span className="gradient-text">Rashan Thompson</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Fortune 500 expertise for businesses ready to accelerate growth
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <DirectAnswer className="max-w-3xl mx-auto mt-8">
              Rashan Thompson helps businesses achieve breakthrough results through AI-driven
              transformation, CRM implementation, and operational excellence. With 25+ years
              of Fortune 500 leadership experience, he brings enterprise-grade strategy to
              SMBs, startups, and growing organizations.
            </DirectAnswer>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link href="/contact" className="btn btn-primary">
                Start a Conversation
              </Link>
              <Link href="/case-studies" className="btn btn-secondary">
                View Case Studies
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Results */}
      <Section className="relative -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {results.map((result, index) => (
            <ScrollReveal key={result.label} delay={index * 100}>
              <TiltCard>
                <GlassCard className="text-center p-6">
                  <span className="font-heading text-3xl md:text-4xl gradient-text block mb-2">
                    {result.metric}
                  </span>
                  <span className="text-sm text-foreground-muted block">
                    {result.label}
                  </span>
                </GlassCard>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Why Rashan Thompson */}
      <Section narrow className="relative">
        <MorphingBlob variant="gold" size="sm" position="top-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            Why Do Businesses Choose <span className="gradient-text">Rashan Thompson</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Businesses choose Rashan Thompson because he combines strategic vision with
            hands-on implementation expertise. Unlike consultants who deliver recommendations
            and leave, he stays engaged to ensure strategies translate into measurable
            business outcomes. His Fortune 500 experience means you get proven methodologies
            adapted for your scale and context.
          </DirectAnswer>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-foreground-muted">
            Most business leaders know they need to leverage AI and modern technology to
            compete. The challenge is finding a partner who understands both the technology
            and the business implications -someone who can translate complex possibilities
            into practical action plans that deliver ROI.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-foreground-muted">
            Rashan Thompson has led technology transformations at Cognizant, Conduent, and
            Slalom Consulting. He has managed teams of 1,500+ globally and held P&L
            responsibility exceeding $100 million. Now, through{' '}
            <a
              href={siteConfig.connectiveTech}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:text-accent underline"
            >
              Connective Technologies
            </a>
            , he brings that expertise to businesses ready to accelerate their growth.
          </p>
        </ScrollReveal>
      </Section>

      {/* Services */}
      <Section className="relative">
        <MorphingBlob variant="accent" size="lg" position="bottom-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            What Services Does <span className="gradient-text">Rashan Thompson</span> Offer?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={100 + index * 100}>
              <TiltCard className="h-full">
                <GlassCard className="p-6 h-full">
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-foreground-muted mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-sm text-foreground-muted">{outcome}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-accent-light">
                    <strong>Ideal for:</strong> {service.idealFor}
                  </p>
                </GlassCard>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Who Works With Rashan */}
      <Section className="relative">
        <MorphingBlob variant="primary" size="md" position="top-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            Who Works With <span className="gradient-text">Rashan Thompson</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Rashan Thompson works with SMBs ready to scale, startups building technology
            foundation, enterprises seeking agility, and private equity firms optimizing
            portfolio companies. His approach adapts to your size, industry, and specific
            business challenges.
          </DirectAnswer>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {clientTypes.map((client, index) => (
            <ScrollReveal key={client.title} delay={200 + index * 100}>
              <SpotlightCard className="p-6 h-full">
                <span className="text-4xl mb-4 block">{client.icon}</span>
                <h3 className="text-lg text-foreground mb-2">{client.title}</h3>
                <p className="text-foreground-muted mb-0">{client.description}</p>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section narrow className="relative">
        <MorphingBlob variant="gold" size="sm" position="top-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            How Does <span className="gradient-text-gold">Rashan Thompson</span> Work?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Every engagement follows a proven methodology: Discovery to understand your
            business, Strategy to define the transformation roadmap, Implementation with
            hands-on execution, and Optimization to ensure sustainable results. This approach
            consistently delivers measurable outcomes within agreed timelines.
          </DirectAnswer>
        </ScrollReveal>

        <div className="space-y-4 mt-8">
          {processSteps.map((step, index) => (
            <ScrollReveal key={step.step} delay={200 + index * 100}>
              <GlassCard className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-gold font-bold">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg text-foreground mb-1">{step.title}</h3>
                    <p className="text-foreground-muted text-sm mb-0">{step.description}</p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Connective Technologies */}
      <Section className="relative">
        <MorphingBlob variant="accent" size="md" position="bottom-left" opacity={0.1} />

        <ScrollReveal>
          <GlassCard variant="highlight" className="max-w-3xl mx-auto text-center p-12">
            <h2 className="text-foreground mt-0 mb-4">
              About <span className="gradient-text">Connective Technologies</span>
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mb-6">
              Connective Technologies is Rashan Thompson&apos;s business operations consulting firm
              specializing in CRM implementation, AI integration, and operational transformation
              for SMBs and startups.
            </p>
            <p className="text-foreground-muted max-w-xl mx-auto mb-8">
              The firm brings Fortune 500 methodologies to growing businesses -helping them
              achieve enterprise-grade results without enterprise-level budgets.
            </p>
            <a
              href={siteConfig.connectiveTech}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit Connective Technologies
            </a>
          </GlassCard>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section className="relative">
        <ScrollReveal>
          <GlassCard variant="highlight" className="max-w-3xl mx-auto text-center p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-accent/20 rounded-full blur-[100px] -z-10" />

            <h2 className="text-foreground mt-0 mb-4">
              Ready to <span className="gradient-text">Transform Your Business</span>?
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mb-8">
              Every transformation starts with understanding your unique challenges.
              Let&apos;s discuss how Rashan Thompson can help you achieve breakthrough results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Start a Conversation
              </Link>
              <Link href="/case-studies" className="btn btn-secondary">
                View Case Studies
              </Link>
            </div>
          </GlassCard>
        </ScrollReveal>
      </Section>
    </>
  );
}
