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
  title: 'What Does Rashan Thompson Do? | Technology Strategy & Career Education',
  description:
    'Rashan Thompson works with students, schools, faith communities, and businesses to prepare for the AI-driven future through technology strategy and career education.',
  keywords: [
    'what does Rashan Thompson do',
    'technology strategist',
    'career education',
    'AI preparation',
    'business transformation',
    'youth programs',
  ],
};

const audiences = [
  {
    title: 'Students & Families',
    icon: '🎓',
    description:
      'Parents who want their children to thrive in an AI economy. Students curious about technology careers. Young people ready to build skills that will serve them for life.',
    offerings: [
      'AI Literacy - Understanding and using AI as a creative tool',
      'Future Careers - STEM pathways beyond traditional coding',
      'Youth Entrepreneurship - Building business thinking early',
      'Soft Skills - Communication, leadership, emotional intelligence',
      'The Income Engine - Financial education fundamentals',
    ],
    href: '/work-with-students',
    cta: 'Learn More',
  },
  {
    title: 'Schools & Educators',
    icon: '🏫',
    description:
      'Principals seeking to future-proof their curriculum. Program directors building career readiness initiatives. Board members investing in student outcomes.',
    offerings: [
      'Curriculum Consulting - Integrating AI and career readiness',
      'Teacher Training - Equipping educators with technology tools',
      'Student Workshops - Direct engagement with students',
      'Parent Engagement - Bringing families into the conversation',
      'Assessment & Strategy - Tailored recommendations',
    ],
    href: '/work-with-schools',
    cta: 'Learn More',
  },
  {
    title: 'Faith Communities',
    icon: '⛪',
    description:
      "Pastors and faith leaders investing in their congregation's economic wellbeing. Community organizers building programs that last. Churches ready to serve beyond Sunday.",
    offerings: [
      'Youth Career Workshops - Preparing young members for work',
      'Family Financial Wellness - Stewardship meets strategy',
      'Entrepreneurship Training - Building economic independence',
      'Career Transition Support - Helping members navigate change',
      'Technology Literacy - Demystifying AI for all ages',
    ],
    href: '/work-with-faith',
    cta: 'Learn More',
  },
  {
    title: 'Businesses & Organizations',
    icon: '🏢',
    description:
      'Small and medium businesses ready to scale their operations. Startups seeking CRM implementation expertise. Organizations needing AI strategy without enterprise budgets.',
    offerings: [
      'CRM Implementation - Salesforce, Microsoft Dynamics, Zoho',
      'AI Integration Strategy - Practical, results-focused approaches',
      'Contact Center Transformation - Improved customer experience',
      'Revenue Operations - Aligning sales, marketing, and service',
      'Operational Optimization - Doing more with less',
    ],
    href: '/for-business',
    cta: 'Learn More',
  },
];

export default function WhatIDoPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-36">
        <MorphingBlob variant="accent" size="lg" position="top-right" opacity={0.15} />
        <MorphingBlob variant="primary" size="md" position="bottom-left" opacity={0.1} />

        <div className="container text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-foreground">
              What Does <span className="gradient-text">Rashan Thompson</span> Do?
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Preparing people and organizations for the AI-driven future
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <DirectAnswer className="max-w-3xl mx-auto mt-8">
              Rashan Thompson works with four primary audiences: students and families seeking
              career readiness, schools needing curriculum and teacher training, faith communities
              building economic resilience, and businesses transforming operations. The common
              thread is preparation for an AI-driven economy.
            </DirectAnswer>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <Section narrow className="relative">
        <MorphingBlob variant="gold" size="sm" position="top-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            How Does <span className="gradient-text">Rashan Thompson</span> Help People Prepare?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-foreground-muted">
            The future of work is already here. AI is not a distant possibility - it is reshaping
            every industry, every career path, every community. My mission is to help people and
            organizations get ahead of that change rather than be swept up by it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-foreground-muted">
            I bring two decades of Fortune 500 experience to every engagement, but I translate
            that expertise for the audience in front of me. A workshop for eighth-graders looks
            different from a consulting engagement with a mid-size business. What remains constant
            is the commitment to practical, actionable preparation.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <GlassCard variant="highlight" className="p-6 mt-8">
            <p className="text-lg text-foreground italic mb-0">
              &quot;The best time to prepare was yesterday. The second best time is now.&quot;
            </p>
          </GlassCard>
        </ScrollReveal>
      </Section>

      {/* Audiences */}
      <Section className="relative">
        <MorphingBlob variant="accent" size="lg" position="bottom-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            Who Does <span className="gradient-text">Rashan Thompson</span> Work With?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {audiences.map((audience, index) => (
            <ScrollReveal key={audience.title} delay={100 + index * 100}>
              <TiltCard className="h-full">
                <GlassCard className="p-6 h-full">
                  <span className="text-4xl mb-4 block">{audience.icon}</span>
                  <h3 className="text-xl text-foreground mb-3">{audience.title}</h3>
                  <p className="text-foreground-muted mb-4">{audience.description}</p>

                  <h4 className="text-sm font-semibold text-accent-light mb-3">
                    What {audience.title.split(' ')[0]} {audience.title.includes('&') ? 'Receive' : 'Gain'}:
                  </h4>
                  <div className="space-y-2 mb-6">
                    {audience.offerings.map((offering) => (
                      <div key={offering} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground-muted">{offering}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={audience.href}
                    className="text-accent-light hover:text-accent inline-flex items-center gap-2 font-medium mt-auto"
                  >
                    {audience.cta}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </GlassCard>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Common Thread */}
      <Section narrow className="relative">
        <MorphingBlob variant="primary" size="md" position="top-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            What Is the <span className="gradient-text-gold">Common Thread</span> in This Work?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Whether working with a seventh-grader or a CEO, Rashan Thompson focuses on one goal:
            preparing people and organizations to thrive as technology reshapes how we work,
            learn, and live. Every engagement is about readiness for what is next.
          </DirectAnswer>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-foreground-muted">
            I have seen the same patterns across every audience I serve. Uncertainty about AI.
            Worry about being left behind. A desire to prepare - but uncertainty about where
            to start. That is where I come in.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-foreground-muted">
            My approach is practical, not theoretical. I do not deliver abstract lectures about
            the future. I provide frameworks, tools, and skills that people can use immediately.
            When I leave a workshop, participants have something concrete they can apply the next day.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <h3 className="text-xl text-foreground mt-8 mb-4">What Makes This Work Different?</h3>
          <p className="text-foreground-muted">
            Most technology education is either too abstract (academic theory) or too narrow
            (learn this one tool). Rashan Thompson offers something different: strategic thinking
            combined with practical application, delivered by someone who has operated at the
            highest levels of enterprise technology.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <p className="text-foreground-muted">
            I bring Fortune 500 rigor to community settings. I translate complex concepts into
            accessible language. And I stay engaged - because preparation is not a one-time event,
            it is an ongoing journey.
          </p>
        </ScrollReveal>
      </Section>

      {/* Related Ventures */}
      <Section className="relative">
        <MorphingBlob variant="gold" size="md" position="bottom-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            What Are <span className="gradient-text-gold">Rashan Thompson&apos;s</span> Ventures?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <ScrollReveal delay={100}>
            <TiltCard className="h-full">
              <GlassCard className="p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl mb-3 text-foreground">Connective Technologies</h3>
                <p className="text-foreground-muted flex-grow mb-6">
                  My business operations consulting firm serves small and medium businesses that
                  need enterprise-quality CRM implementation and technology strategy without
                  enterprise budgets. We specialize in Salesforce, Microsoft Dynamics, and Zoho
                  implementations, along with AI integration and operational transformation.
                </p>
                <a
                  href={siteConfig.connectiveTech}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-fit"
                >
                  Visit Website
                </a>
              </GlassCard>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <TiltCard className="h-full">
              <GlassCard className="p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl mb-3 text-foreground">CareerPhases.com</h3>
                <p className="text-foreground-muted flex-grow mb-6">
                  My AI-powered career and income intelligence platform makes professional guidance
                  accessible to everyone. CareerPhases provides tools for career exploration, income
                  planning, and workforce readiness - powered by AI but grounded in real-world experience.
                </p>
                <a
                  href={siteConfig.careerPhases}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold w-fit"
                >
                  Explore Platform
                </a>
              </GlassCard>
            </TiltCard>
          </ScrollReveal>
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative">
        <ScrollReveal>
          <GlassCard variant="highlight" className="max-w-3xl mx-auto text-center p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-accent/20 rounded-full blur-[100px] -z-10" />

            <h2 className="text-foreground mt-0 mb-4">
              Ready to Start a <span className="gradient-text">Conversation</span>?
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mb-8">
              Whether you are a parent, educator, faith leader, or business owner,
              I would love to discuss how we might work together.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Work With Rashan
            </Link>
          </GlassCard>
        </ScrollReveal>
      </Section>
    </>
  );
}
