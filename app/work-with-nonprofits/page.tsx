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
  title: 'Nonprofit Community Workshops | Career & Financial Literacy | Rashan Thompson',
  description:
    'Rashan Thompson partners with nonprofits to deliver career workshops, financial literacy programs, and AI readiness training for the communities they serve. Fortune 500 expertise for mission-driven impact.',
  keywords: [
    'nonprofit career workshops',
    'community financial literacy',
    'nonprofit youth programs',
    'career development nonprofits',
    'financial wellness workshops',
    'Rashan Thompson nonprofits',
    'AI literacy community programs',
    'workforce development nonprofits',
  ],
};

const offerings = [
  {
    title: 'Career Exploration Workshops',
    icon: '🎯',
    description:
      'Many nonprofit beneficiaries lack exposure to career possibilities beyond their immediate environment. Rashan Thompson delivers workshops that expand horizons and provide practical career guidance.',
    details:
      'Participants learn about career paths in technology, healthcare, business, and emerging fields - along with the skills and education pathways to reach them.',
    formats: ['Youth programs', 'Adult workforce development', 'Re-entry programs'],
  },
  {
    title: 'Financial Literacy & The Income Engine',
    icon: '💰',
    description:
      'Financial education is foundational to economic mobility. Rashan Thompson delivers The Income Engine curriculum - teaching budgeting, saving, investing, and building financial independence.',
    details:
      'Programs cover money management fundamentals, understanding credit, avoiding financial pitfalls, and building wealth over time. Content adapts for youth through adults.',
    formats: ['Multi-session workshops', 'Family programs', 'One-day intensives'],
  },
  {
    title: 'AI Readiness for Communities',
    icon: '🤖',
    description:
      'AI is reshaping the job market, and underserved communities risk being left behind. Rashan Thompson helps community members understand AI - both as a career opportunity and a tool for personal advancement.',
    details:
      'Demystifying AI, understanding which jobs are changing, learning to use AI tools productively, and preparing for the future of work.',
    formats: ['Workshop series', 'Career fair sessions', 'Community events'],
  },
  {
    title: 'Youth Entrepreneurship',
    icon: '💡',
    description:
      'Economic independence often means creating your own opportunities. Rashan Thompson introduces entrepreneurship concepts to young people, helping them see themselves as capable of building businesses.',
    details:
      'From identifying opportunities to understanding business basics, these sessions inspire the next generation of entrepreneurs from underserved communities.',
    formats: ['Summer programs', 'After-school workshops', 'Pitch competitions'],
  },
];

const audienceTypes = [
  {
    title: 'Workforce Development Organizations',
    description: 'Job training programs, employment services, and career centers seeking to add career readiness and financial literacy content.',
    icon: '👔',
  },
  {
    title: 'Youth-Serving Organizations',
    description: 'After-school programs, mentoring organizations, and youth development nonprofits preparing young people for economic success.',
    icon: '🎓',
  },
  {
    title: 'Community Development Organizations',
    description: 'CDCs, community foundations, and neighborhood organizations focused on economic empowerment and mobility.',
    icon: '🏘️',
  },
  {
    title: 'Re-Entry Programs',
    description: 'Organizations helping formerly incarcerated individuals build careers and financial stability.',
    icon: '🔄',
  },
];

const programFormats = [
  'Single-session workshops (60-90 minutes)',
  'Multi-session series (4-8 weeks)',
  'Youth summer program components',
  'Career fair presentations',
  'Parent and family workshops',
  'Train-the-trainer sessions',
  'Conference keynotes and breakouts',
  'Virtual and in-person delivery',
];

export default function WorkWithNonprofitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-36">
        <MorphingBlob variant="accent" size="lg" position="top-right" opacity={0.15} />
        <MorphingBlob variant="primary" size="md" position="bottom-left" opacity={0.1} />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <ScrollReveal>
                <h1 className="text-foreground">
                  <span className="gradient-text">Rashan Thompson</span> Works With Nonprofits
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <p className="text-xl text-foreground-muted max-w-2xl">
                  Career and financial empowerment for the communities you serve
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <DirectAnswer className="max-w-3xl mt-8">
                  Rashan Thompson partners with nonprofit organizations to deliver career workshops,
                  financial literacy programs, and AI readiness training directly to their communities.
                  With 25+ years of Fortune 500 experience and a passion for community empowerment,
                  he brings practical guidance that changes lives.
                </DirectAnswer>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={300}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/Rashan Thompson Afro Tech.jpeg"
                  alt="Rashan Thompson at Afro Tech conference"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <Section narrow className="relative">
        <MorphingBlob variant="gold" size="sm" position="top-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            Why Should Nonprofits Partner With <span className="gradient-text">Rashan Thompson</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Nonprofits serve communities that often lack access to career guidance, financial
            education, and exposure to economic opportunities. Rashan Thompson brings Fortune 500
            expertise directly to these communities - helping your organization deliver programming
            that creates lasting impact.
          </DirectAnswer>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-foreground-muted">
            Your organization already has the community trust and relationships. What Rashan Thompson
            brings is content and expertise - career knowledge from decades in corporate leadership,
            financial education through The Income Engine curriculum, and practical AI guidance that
            prepares people for the changing job market.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-foreground-muted">
            As a Newark native who built a career from modest beginnings to Fortune 500 leadership,
            Rashan Thompson understands the communities your nonprofit serves. His message is not
            theoretical - it is grounded in real experience and practical steps that work.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {[
            { value: '25+', label: 'Years Experience', icon: '⚡' },
            { value: 'Newark', label: 'Native Roots', icon: '🏠' },
            { value: 'Real', label: 'World Results', icon: '📈' },
          ].map((item, index) => (
            <ScrollReveal key={item.label} delay={400 + index * 100}>
              <GlassCard className="text-center p-6">
                <span className="text-3xl mb-2 block">{item.icon}</span>
                <span className="font-heading text-2xl gradient-text block mb-2">
                  {item.value}
                </span>
                <span className="text-sm text-foreground-muted">{item.label}</span>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Offerings */}
      <Section className="relative">
        <MorphingBlob variant="accent" size="lg" position="bottom-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            What Programs Does <span className="gradient-text">Rashan Thompson</span> Offer?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {offerings.map((offering, index) => (
            <ScrollReveal key={offering.title} delay={100 + index * 100}>
              <TiltCard className="h-full">
                <GlassCard className="p-6 h-full">
                  <span className="text-4xl mb-4 block">{offering.icon}</span>
                  <h3 className="text-xl text-foreground mb-3">{offering.title}</h3>
                  <p className="text-foreground-muted mb-4">{offering.description}</p>
                  <p className="text-sm text-foreground-muted mb-4">{offering.details}</p>
                  <div className="space-y-2">
                    {offering.formats.map((format) => (
                      <div key={format} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-sm text-accent-light">{format}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Who Partners */}
      <Section className="relative">
        <MorphingBlob variant="primary" size="md" position="top-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            What Types of Nonprofits Partner With <span className="gradient-text">Rashan Thompson</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Rashan Thompson works with nonprofits focused on workforce development, youth services,
            community development, and economic empowerment. If your organization serves people who
            need career guidance and financial education, there is likely a fit.
          </DirectAnswer>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {audienceTypes.map((audience, index) => (
            <ScrollReveal key={audience.title} delay={200 + index * 100}>
              <SpotlightCard className="p-6 h-full">
                <span className="text-4xl mb-4 block">{audience.icon}</span>
                <h3 className="text-lg text-foreground mb-2">{audience.title}</h3>
                <p className="text-foreground-muted mb-0">{audience.description}</p>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* The Income Engine */}
      <Section narrow className="relative">
        <MorphingBlob variant="gold" size="sm" position="top-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            What Is <span className="gradient-text-gold">The Income Engine</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            The Income Engine is Rashan Thompson&apos;s financial education curriculum designed for
            young people and adults who never received financial literacy training. It covers the
            fundamentals of building, managing, and growing income over a lifetime.
          </DirectAnswer>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <GlassCard variant="highlight" className="p-6 mt-8">
            <h3 className="text-lg text-foreground mb-4">The Income Engine Covers:</h3>
            <div className="space-y-3">
              {[
                'Understanding how money works and where it comes from',
                'Budgeting and managing expenses at any income level',
                'Saving strategies and building emergency funds',
                'Introduction to investing and compound growth',
                'Credit, debt, and avoiding financial traps',
                'Building multiple income streams over time',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-foreground-muted">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-foreground-muted mt-8">
            The Income Engine can be delivered as a standalone workshop series or integrated into
            your existing programming. Content adapts for different age groups and contexts - from
            youth programs to adult workforce development.
          </p>
        </ScrollReveal>
      </Section>

      {/* Program Formats */}
      <Section narrow className="relative">
        <MorphingBlob variant="accent" size="sm" position="top-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            What Program Formats Does <span className="gradient-text">Rashan Thompson</span> Offer?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-foreground-muted">
            Rashan Thompson adapts to your organization&apos;s needs and the communities you serve.
            Program formats include:
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {programFormats.map((format, index) => (
            <ScrollReveal key={format} delay={200 + index * 50}>
              <GlassCard className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-foreground">{format}</span>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <p className="text-foreground-muted mt-8">
            Every engagement begins with understanding your organization&apos;s mission, the communities
            you serve, and the outcomes you want to achieve. Rashan Thompson tailors content to
            serve your specific context and goals.
          </p>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section className="relative">
        <ScrollReveal>
          <GlassCard variant="highlight" className="max-w-3xl mx-auto text-center p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-accent/20 rounded-full blur-[100px] -z-10" />

            <h2 className="text-foreground mt-0 mb-4">
              Ready to Empower Your <span className="gradient-text">Community</span>?
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mb-8">
              Whether you serve youth, adults in career transition, or families seeking financial
              stability, Rashan Thompson would love to discuss how to partner with your organization.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Start a Conversation
              </Link>
              <Link href="/speaking" className="btn btn-secondary">
                Speaking Topics
              </Link>
            </div>
          </GlassCard>
        </ScrollReveal>
      </Section>
    </>
  );
}
