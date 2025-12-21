import { Metadata } from 'next';
import Link from 'next/link';
import {
  Section,
  DirectAnswer,
  ImagePlaceholder,
  ScrollReveal,
  GlassCard,
  MorphingBlob,
  SpotlightCard,
  TiltCard,
} from '@/components/ui';
import { expertise, achievements, siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About Rashan Thompson | Technology Strategist for Hire | 25+ Years Fortune 500 Experience',
  description:
    "Learn why businesses hire Rashan Thompson as their technology strategist. 25+ years of Fortune 500 leadership, $100M+ P&L experience, and proven AI transformation results.",
  keywords: [
    'technology strategist for hire',
    'Rashan Thompson',
    'AI transformation consultant',
    'Fortune 500 technology leader',
    'CRM implementation expert',
    'business technology advisor',
    'digital transformation consultant',
    'enterprise technology strategist',
  ],
};

const timelineItems = [
  {
    date: 'Present',
    title: 'Founder & Principal, Connective Technologies',
    description:
      'Leads AI-driven business transformation for SMBs and startups. Specializes in CRM implementation, process automation, and operational excellence that delivers measurable ROI within 90 days.',
    impact: 'Helping businesses achieve 40%+ efficiency gains',
  },
  {
    date: 'Present',
    title: 'Creator, CareerPhases.com',
    description:
      'Built and launched an AI-powered career intelligence platform democratizing access to salary data, career path planning, and financial literacy tools for underserved communities.',
    impact: 'Making career intelligence accessible to all',
  },
  {
    date: '2018-2023',
    title: 'Senior Director, Slalom Consulting',
    description:
      'Architected and delivered large-scale Salesforce implementations for enterprise clients including financial services, healthcare, and technology companies. Led cross-functional teams of 50+ consultants.',
    impact: '$50M+ in client engagements delivered',
  },
  {
    date: '2014-2018',
    title: 'Vice President, Cognizant Technology Solutions',
    description:
      'Managed global technology delivery teams across three continents. Drove digital transformation initiatives that generated 35% revenue growth and established new client relationships worth $25M annually.',
    impact: '1,500+ team members managed globally',
  },
  {
    date: '2008-2014',
    title: 'Senior Director, Conduent (Xerox Services)',
    description:
      'Transformed contact center operations serving Fortune 500 clients. Pioneered AI-assisted customer service models that improved NPS by 40% while reducing operational costs by 25%.',
    impact: '40% NPS improvement, 25% cost reduction',
  },
  {
    date: '2000-2008',
    title: 'Technology Leadership, Various Enterprises',
    description:
      'Built foundation in enterprise technology through progressive leadership roles. Developed expertise in CRM systems, business process optimization, and team development that would define career trajectory.',
    impact: 'Foundation for Fortune 500 leadership',
  },
];

const softSkills = [
  {
    skill: 'Strategic Communication',
    description: 'Translating complex technology concepts for executive stakeholders, board presentations, and cross-functional teams.',
  },
  {
    skill: 'Change Leadership',
    description: 'Guiding organizations through digital transformation with minimal disruption and maximum adoption.',
  },
  {
    skill: 'Stakeholder Alignment',
    description: 'Building consensus across IT, operations, finance, and C-suite to ensure technology investments deliver business value.',
  },
  {
    skill: 'Mentorship & Development',
    description: 'Growing the next generation of technology leaders through hands-on coaching and career development.',
  },
  {
    skill: 'Crisis Navigation',
    description: 'Maintaining calm and decisive leadership during high-pressure situations and critical system implementations.',
  },
  {
    skill: 'Cultural Intelligence',
    description: 'Leading diverse global teams and navigating international business environments with sensitivity and effectiveness.',
  },
];

const technicalExpertise = [
  'AI & Machine Learning Integration',
  'Salesforce Implementation & Optimization',
  'CRM Strategy & Architecture',
  'Business Process Automation',
  'Data Analytics & Intelligence',
  'Cloud Transformation (AWS, Azure, GCP)',
  'Enterprise System Integration',
  'Customer Experience Optimization',
  'Contact Center Modernization',
  'Digital Transformation Strategy',
  'Agile & DevOps Leadership',
  'Technology Vendor Management',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <MorphingBlob variant="accent" size="lg" position="top-right" opacity={0.15} />
        <MorphingBlob variant="primary" size="md" position="bottom-left" opacity={0.1} />

        <div className="container text-center relative z-10">
          <ScrollReveal>
            <div className="max-w-[200px] mx-auto mb-8">
              <ImagePlaceholder
                src="/images/rashan/headshot-primary.jpg"
                alt="Rashan Thompson - Technology Strategist with 25+ years Fortune 500 experience"
                placeholder="Photo: Rashan Thompson"
                aspectRatio="square"
                containerClassName="rounded-full overflow-hidden border-4 border-surface-border glow"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-foreground">
              About <span className="gradient-text">Rashan Thompson</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Technology Strategist. AI Transformation Expert. Fortune 500 Leader.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <DirectAnswer className="max-w-3xl mx-auto mt-8">
              Rashan Thompson is a technology strategist for hire with 25+ years of Fortune 500
              leadership experience. He specializes in AI-driven business transformation, CRM
              implementation, and operational excellence. Rashan Thompson has managed teams of
              1,500+ globally and held P&L responsibility exceeding $100 million.
            </DirectAnswer>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Hire Rashan Thompson */}
      <Section narrow className="relative">
        <MorphingBlob variant="gold" size="sm" position="top-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            Why Hire <span className="gradient-text">Rashan Thompson</span> as Your Technology Strategist?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Businesses hire Rashan Thompson because he combines Fortune 500 strategic thinking
            with hands-on implementation expertise. Unlike consultants who deliver recommendations
            and leave, Rashan Thompson stays engaged to ensure strategies translate into measurable
            business outcomes.
          </DirectAnswer>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-foreground-muted">
            Most technology consultants offer either big-picture strategy or tactical execution.
            Rashan Thompson delivers both. His unique background -rising from Newark, NJ to Fortune 500
            executive suites -means he understands technology from the ground up. He has built systems,
            led implementations, managed P&Ls, and driven transformations that generated measurable ROI.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-foreground-muted">
            When you hire Rashan Thompson, you get a partner who speaks both technology and business
            fluently. He can present to your board on Monday and roll up his sleeves with your
            implementation team on Tuesday. That versatility is rare -and it is exactly what
            organizations need when navigating complex technology decisions.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {[
            { value: '25+', label: 'Years of Leadership', icon: '⚡' },
            { value: '$100M+', label: 'P&L Responsibility', icon: '📊' },
            { value: '1,500+', label: 'Team Members Led', icon: '👥' },
          ].map((item, index) => (
            <ScrollReveal key={item.label} delay={400 + index * 100}>
              <GlassCard className="text-center p-6">
                <span className="text-3xl mb-2 block">{item.icon}</span>
                <span className="font-heading text-3xl gradient-text block mb-2">
                  {item.value}
                </span>
                <span className="text-sm text-foreground-muted">{item.label}</span>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Technology Expertise */}
      <Section className="relative">
        <MorphingBlob variant="accent" size="lg" position="bottom-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            What Technology Expertise Does <span className="gradient-text">Rashan Thompson</span> Bring?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Rashan Thompson brings deep expertise in AI integration, Salesforce implementation,
            business process automation, and enterprise digital transformation. His technical
            knowledge spans cloud platforms, CRM systems, data analytics, and customer experience
            optimization.
          </DirectAnswer>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {technicalExpertise.map((item, index) => (
            <ScrollReveal key={item} delay={200 + index * 50}>
              <SpotlightCard className="p-4" spotlightColor="rgba(59, 130, 246, 0.1)">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-foreground">{item}</span>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={800}>
          <p className="mt-8 text-foreground-muted">
            Beyond technical skills, Rashan Thompson excels at translating technology capabilities
            into business value. He helps executives understand which investments will deliver ROI,
            which trends are hype versus substance, and how to build technology teams that execute
            effectively.
          </p>
        </ScrollReveal>
      </Section>

      {/* Career Journey */}
      <Section narrow className="relative">
        <MorphingBlob variant="primary" size="md" position="top-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            What Is <span className="gradient-text">Rashan Thompson&apos;s</span> Career Background?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Rashan Thompson&apos;s career spans 25+ years of progressive technology leadership, from
            hands-on implementation roles to Fortune 500 executive positions at Cognizant, Conduent,
            and Slalom Consulting. He has led teams across three continents and delivered
            transformations for the world&apos;s largest companies.
          </DirectAnswer>
        </ScrollReveal>

        <div className="timeline mt-8">
          {timelineItems.map((item, index) => (
            <ScrollReveal key={index} delay={200 + index * 100}>
              <div className="timeline-item">
                <span className="timeline-date">{item.date}</span>
                <h3 className="text-lg mt-2 mb-2 text-foreground">{item.title}</h3>
                <p className="text-foreground-muted mb-2">{item.description}</p>
                <span className="text-accent-light text-sm font-semibold">{item.impact}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Soft Skills */}
      <Section className="relative">
        <MorphingBlob variant="gold" size="md" position="bottom-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            What Leadership Qualities Define <span className="gradient-text-gold">Rashan Thompson</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Rashan Thompson combines strategic vision with practical execution, technical depth
            with business acumen, and decisive leadership with collaborative team-building. These
            qualities enable him to navigate complex transformations while maintaining stakeholder
            alignment.
          </DirectAnswer>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {softSkills.map((item, index) => (
            <ScrollReveal key={item.skill} delay={200 + index * 100}>
              <TiltCard className="h-full">
                <GlassCard className="p-6 h-full">
                  <h3 className="text-lg text-foreground mb-2">{item.skill}</h3>
                  <p className="text-foreground-muted mb-0">{item.description}</p>
                </GlassCard>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Proven Results */}
      <Section className="relative">
        <MorphingBlob variant="accent" size="lg" position="top-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            What Results Has <span className="gradient-text">Rashan Thompson</span> Delivered?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Rashan Thompson has delivered measurable business outcomes including 40% NPS improvement,
            35% revenue growth, 25% cost reduction, and 20% First Call Resolution increases. These
            results came from Fortune 500 leadership positions managing billion-dollar operations.
          </DirectAnswer>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {achievements.slice(0, 4).map((item, index) => (
            <ScrollReveal key={item.label} delay={200 + index * 100}>
              <TiltCard>
                <GlassCard className="text-center p-6">
                  <span className="font-heading text-3xl md:text-4xl gradient-text block mb-2">
                    {item.value}
                  </span>
                  <span className="text-sm text-foreground-muted">
                    {item.label}
                  </span>
                </GlassCard>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <p className="mt-8 text-foreground-muted text-center max-w-2xl mx-auto">
            These are not theoretical projections -they are verified outcomes from leadership
            positions at Cognizant, Conduent, Slalom, and other Fortune 500 organizations.
            When you work with Rashan Thompson, you benefit from strategies proven at scale.
          </p>
        </ScrollReveal>
      </Section>

      {/* Community & Values */}
      <Section narrow className="relative">
        <MorphingBlob variant="gold" size="sm" position="top-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            Beyond <span className="gradient-text-gold">Business</span>: Community & Values
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Rashan Thompson is deeply committed to community education and equitable access to
            career opportunities. He is based in West Orange, NJ, and serves as an active member
            of Renaissance Church in Harlem. His community work focuses on career education,
            financial literacy, and mentoring young professionals.
          </DirectAnswer>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-foreground-muted">
            Success in business is meaningful only when it creates opportunity for others.
            That conviction drives everything Rashan Thompson does beyond client work. Growing up
            in Newark, New Jersey, he saw firsthand how lack of access -to networks, to mentors,
            to information -can limit potential.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-foreground-muted">
            Today, Rashan Thompson works to bridge that gap. Through speaking engagements at
            schools, career workshops at churches, and platforms like{' '}
            <a
              href="https://careerphases.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:text-accent underline"
            >
              CareerPhases.com
            </a>
            , he makes career intelligence accessible to communities that have historically
            been underserved. Faith plays a central role -the belief that stewardship includes
            preparing others for economic independence and career success.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <GlassCard variant="highlight" className="p-6 mt-8">
            <p className="text-foreground mb-0">
              <strong className="text-gold">&quot;Where you start should not determine where you finish.&quot;</strong>
              <br />
              <span className="text-foreground-muted">
                This belief drives Rashan Thompson&apos;s commitment to democratizing access to
                career success strategies and technology opportunities.
              </span>
            </p>
          </GlassCard>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section className="relative">
        <ScrollReveal>
          <GlassCard variant="highlight" className="max-w-3xl mx-auto text-center p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-accent/20 rounded-full blur-[100px] -z-10" />

            <h2 className="text-foreground mt-0 mb-4">
              Ready to Work With <span className="gradient-text">Rashan Thompson</span>?
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mb-8">
              Whether you need AI transformation consulting, Salesforce implementation, or
              strategic technology guidance, let&apos;s explore how we can accelerate your
              business outcomes.
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
