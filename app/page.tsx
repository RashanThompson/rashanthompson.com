import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Section,
  DirectAnswer,
  Metric,
  ScrollReveal,
  SpotlightCard,
  TiltCard,
  MorphingBlob,
  GlassCard,
} from '@/components/ui';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'AI-Driven Business Transformation | Rashan Thompson - 25+ Years Leading Change',
  description:
    'Rashan Thompson delivers AI-driven business transformation with 25+ years Fortune 500 leadership. $100M contracts, 1,500+ teams led. Transform your operations today.',
  keywords: [
    'AI-driven business transformation',
    'technology strategy consultant',
    'CRM implementation expert',
    'contact center optimization',
    'digital transformation leader',
    'Salesforce consulting NJ',
  ],
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rashan Thompson',
  jobTitle: 'Technology Strategist',
  description:
    'Technology Strategist with 25+ years of Fortune 500 leadership experience, founder of Connective Technologies, and creator of CareerPhases.com',
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: '+1-917-426-7263',
  sameAs: [siteConfig.linkedin, siteConfig.careerPhases],
  worksFor: {
    '@type': 'Organization',
    name: 'Connective Technologies',
    url: siteConfig.connectiveTech,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'West Orange',
    addressRegion: 'NJ',
    addressCountry: 'US',
  },
};

const heroMetrics = [
  { value: '25+', label: 'Years Transforming Businesses' },
  { value: '$100M+', label: 'Contracts Directed' },
  { value: '1,500+', label: 'Team Members Led Globally' },
  { value: '40%', label: 'Average NPS Improvement' },
];

const provenResults = [
  { value: '$3.5M', label: 'New Contracts in 6 Months', desc: 'Life sciences client growth through strategic C-suite engagement' },
  { value: '40%', label: 'NPS Improvement', desc: 'Contact center transformation with AI-powered solutions' },
  { value: '45%', label: 'Faster Patient Onboarding', desc: 'HIPAA-compliant oncology portal reducing treatment delays' },
  { value: '35%', label: 'Revenue Growth', desc: 'RevOps integration and CRM optimization for startup clients' },
];

const audienceCards = [
  {
    title: 'Businesses & Enterprises',
    description: 'CRM implementation, AI-powered automation, contact center transformation, and revenue operations optimization for measurable growth.',
    href: '/for-business',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Students & Young Professionals',
    description: 'AI literacy workshops, career exploration, youth entrepreneurship, and financial education through "The Income Engine" curriculum.',
    href: '/work-with-students',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Schools & Organizations',
    description: 'Workshops, teacher training, and curriculum consulting to prepare institutions for the AI-driven workforce.',
    href: '/work-with-schools',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    title: 'Faith Communities',
    description: 'Career workshops, family financial wellness, and youth development programs aligned with faith-based values.',
    href: '/work-with-faith',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: "Rashan's deep technical knowledge of Salesforce and NICE inContact, combined with his business acumen, was invaluable to us winning several pivotal deals. One of our most significant deals, worth over $75 million, was won largely because of Rashan's ability to connect with the client.",
    name: 'Richard Jordon',
    title: 'Chief Commercial Officer',
  },
  {
    quote: "Rashan is a senior-level Technical Solution Leader for Fortune 500 companies who require complex technology convergence. His strengths include transformational business process reengineering with a focus on improving business operations efficiency.",
    name: 'Temeko Richardson',
    title: 'Senior Management Consultant',
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero Section */}
      <section className="hero relative min-h-screen flex items-center justify-center overflow-hidden pt-36">
        <MorphingBlob variant="accent" size="xl" position="top-right" opacity={0.2} />
        <MorphingBlob variant="primary" size="lg" position="bottom-left" opacity={0.15} />
        <MorphingBlob variant="gold" size="md" position="center" opacity={0.1} blur={80} />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <ScrollReveal variant="fadeUp" delay={100}>
                <p className="text-accent-light text-sm uppercase tracking-widest mb-4 font-medium">
                  Technology Strategist & AI Integration Expert
                </p>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={200}>
                <h1 className="text-balance text-foreground">
                  Accelerate Growth Through{' '}
                  <span className="gradient-text">AI-Driven Business Transformation</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={300}>
                <p className="hero-subtitle">
                  By 2030, AI will displace 85 million jobs while creating 97 million new roles.
                  The question isn&apos;t whether AI will reshape your industry - it&apos;s whether you&apos;ll lead the change or follow it.
                </p>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={400}>
                <DirectAnswer>
                  Rashan Thompson is a Technology Strategist and AI Integration Expert with over 25 years
                  of Fortune 500 leadership experience. He has managed global teams of 1,500+ members,
                  directed $100M+ contracts, and delivered transformative results including 40% NPS
                  improvements, 35% revenue growth, and 97/100 customer satisfaction scores.
                </DirectAnswer>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={500}>
                <div className="flex gap-4 justify-center lg:justify-start flex-wrap mt-8">
                  <Link href="/contact" className="btn btn-primary">
                    Work With Rashan
                  </Link>
                  <Link href="/about" className="btn btn-secondary">
                    Discover My Approach
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal variant="fadeUp" delay={300}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/rashan/panel-speaking.jpg"
                  alt="Rashan Thompson speaking on a panel discussion about technology and business transformation"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fadeUp" delay={600}>
            <div className="flex justify-center gap-8 md:gap-12 flex-wrap my-12">
              {heroMetrics.map((metric, index) => (
                <div key={metric.label} className="float" style={{ animationDelay: `${index * -2}s` }}>
                  <Metric value={metric.value} label={metric.label} />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-foreground-muted flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-foreground-muted rounded-full" />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <Section className="relative py-16">
        <ScrollReveal>
          <p className="text-center text-foreground-muted text-sm uppercase tracking-widest mb-8">
            Experience with Leading Organizations
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {/* Slalom */}
            <div className="flex items-center gap-2 text-foreground-muted">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor">
                <rect x="4" y="8" width="6" height="16" rx="1" />
                <rect x="13" y="4" width="6" height="24" rx="1" />
                <rect x="22" y="12" width="6" height="12" rx="1" />
              </svg>
              <span className="font-semibold text-lg">Slalom</span>
            </div>

            {/* Cognizant */}
            <div className="flex items-center gap-2 text-foreground-muted">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor">
                <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M10 16 L14 20 L22 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-semibold text-lg">Cognizant</span>
            </div>

            {/* Conduent */}
            <div className="flex items-center gap-2 text-foreground-muted">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor">
                <path d="M4 16 L16 4 L28 16 L16 28 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="16" cy="16" r="4" />
              </svg>
              <span className="font-semibold text-lg">Conduent</span>
            </div>

            {/* Salesforce */}
            <div className="flex items-center gap-2 text-foreground-muted">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor">
                <circle cx="10" cy="18" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="22" cy="18" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="16" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="font-semibold text-lg">Salesforce</span>
            </div>

            {/* Genesys */}
            <div className="flex items-center gap-2 text-foreground-muted">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor">
                <path d="M8 8 L24 8 L24 24 L8 24 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M12 12 L20 12 L20 20 L12 20 Z" fill="currentColor" />
              </svg>
              <span className="font-semibold text-lg">Genesys</span>
            </div>

            {/* NICE */}
            <div className="flex items-center gap-2 text-foreground-muted">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor">
                <rect x="6" y="6" width="8" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="18" y="6" width="8" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="font-semibold text-lg">NICE</span>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* How Can AI-Driven Transformation Accelerate Your Business */}
      <Section narrow className="relative">
        <MorphingBlob variant="accent" size="md" position="top-right" opacity={0.1} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <h2 className="text-foreground">
                How Can <span className="gradient-text">AI-Driven Transformation</span> Accelerate Your Business?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <DirectAnswer>
                AI-driven business transformation combines strategic leadership, advanced technology
                integration, and operational excellence to deliver measurable results. Rashan Thompson
                specializes in implementing Salesforce CRM, AI-powered automation, and contact center
                optimization that reduces costs, improves customer satisfaction, and accelerates revenue growth.
              </DirectAnswer>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/AI-by-Rashan-Thompson-web.jpg"
                alt="AI-Driven Business Transformation visualization"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200}>
          <p>
            I've spent over two decades at the intersection of technology and human potential -leading
            digital transformations at Fortune 500 companies including <strong>Slalom Consulting</strong>,
            <strong> Cognizant</strong>, and <strong>Conduent</strong>. My expertise spans CRM implementation,
            AI-powered solutions, contact center optimization, and revenue operations.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p>
            But technology is only part of the equation. What sets my approach apart is the ability to
            <strong> translate complex systems into measurable business outcomes</strong> -outcomes like:
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {[
              '40% improvement in Net Promoter Scores through AI-powered customer experience optimization',
              '35% revenue growth via strategic RevOps integration and Salesforce implementation',
              '$3.5M in new contracts secured within six months through strategic client engagement',
              '45% faster patient onboarding with HIPAA-compliant digital portals',
              '25% reduction in call volume through AI chatbot and self-service channel deployment',
              '20% improvement in First Call Resolution through process optimization',
            ].map((item, index) => (
              <SpotlightCard key={index} className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground-muted">{item}</span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {/* What Makes Rashan Thompson's Approach Different */}
      <Section narrow className="relative">
        <MorphingBlob variant="gold" size="md" position="top-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            What Makes <span className="gradient-text-gold">Rashan Thompson's</span> Approach Different?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Rashan Thompson combines rare operational depth -managing contact centers with 1,500+ team
            members -with executive-level consulting for C-suite leaders. This dual expertise enables
            him to design and execute AI-driven transformations that deliver measurable business outcomes.
          </DirectAnswer>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p>
            I've been where you are. I've managed the frontlines of contact center operations, optimized
            KPIs like First Call Resolution and Average Handle Time, and met Service Level Agreements
            under pressure. I've also sat in boardrooms with CEOs, negotiating $100M contracts and
            aligning technology initiatives with business strategy.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <GlassCard className="p-6 mt-8">
            <h3 className="text-xl text-foreground mb-4">This unique blend of operational depth and strategic vision means I understand your challenges at every level:</h3>
            <ul className="space-y-3 text-foreground-muted">
              <li><strong className="text-foreground">For executives:</strong> I speak your language -P&L responsibility, ROI, competitive positioning</li>
              <li><strong className="text-foreground">For operations leaders:</strong> I've managed the metrics you manage -NPS, FCR, CSAT, SLA compliance</li>
              <li><strong className="text-foreground">For technology teams:</strong> I've implemented the platforms you use -Salesforce, Genesys, NICE, Azure, AWS</li>
            </ul>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <h3 className="text-xl text-foreground mt-12 mb-4">Beyond Consulting: Building AI-Powered Solutions</h3>
          <p>
            I don't just advise on AI -I build with it. As the creator of{' '}
            <a href={siteConfig.careerPhases} target="_blank" rel="noopener noreferrer" className="text-accent-light hover:text-accent">
              CareerPhases.com
            </a>, I developed an AI-powered career and income intelligence platform that integrates
            conversational AI coaching, predictive income modeling, and database-driven career assessments.
          </p>
        </ScrollReveal>
      </Section>

      {/* Who Benefits from AI-Driven Business Transformation */}
      <Section className="relative">
        <MorphingBlob variant="primary" size="lg" position="bottom-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            Who Benefits from <span className="gradient-text">AI-Driven Transformation</span>?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {audienceCards.map((card, index) => (
            <ScrollReveal key={card.title} delay={100 + index * 100}>
              <SpotlightCard className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 text-accent">
                    {card.icon}
                  </div>
                  <h3 className="text-xl mb-3 text-foreground">{card.title}</h3>
                  <p className="text-foreground-muted flex-grow mb-4">{card.description}</p>
                  <Link
                    href={card.href}
                    className="text-accent-light hover:text-accent inline-flex items-center gap-2 font-medium"
                  >
                    Explore Solutions
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Proven Results */}
      <Section className="relative">
        <MorphingBlob variant="accent" size="lg" position="bottom-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            Proven Results: <span className="gradient-text">Rashan Thompson's</span> Impact
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {provenResults.map((result, index) => (
            <ScrollReveal key={result.label} delay={100 + index * 100}>
              <TiltCard className="p-6 text-center h-full">
                <span className="font-heading text-4xl md:text-5xl gradient-text block mb-2">
                  {result.value}
                </span>
                <span className="text-foreground font-semibold block mb-2">{result.label}</span>
                <span className="text-sm text-foreground-muted">{result.desc}</span>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="text-center mt-12">
            <Link href="/case-studies" className="btn btn-primary">
              View All Case Studies
            </Link>
          </div>
        </ScrollReveal>
      </Section>

      {/* Testimonials */}
      <Section narrow className="relative">
        <MorphingBlob variant="gold" size="sm" position="top-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            What Clients Say About <span className="gradient-text">Rashan Thompson</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-6 mt-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={100 + index * 150}>
              <GlassCard className="p-8">
                <blockquote className="text-lg text-foreground-muted italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="not-italic">
                  <strong className="text-foreground">{testimonial.name}</strong>
                  <span className="text-foreground-muted">  - {testimonial.title}</span>
                </cite>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Related Ventures */}
      <Section className="relative">
        <MorphingBlob variant="accent" size="lg" position="bottom-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            Building the <span className="gradient-text">Future</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <ScrollReveal delay={100}>
            <TiltCard className="p-8 h-full">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl mb-3 text-foreground">Connective Technologies</h3>
                <p className="text-foreground-muted flex-grow mb-6">
                  A business operations consulting firm helping small and medium businesses implement
                  CRM systems, integrate AI solutions, and transform their operations. Rashan Thompson
                  founded Connective Technologies to bring enterprise-grade strategy to growing companies.
                </p>
                <a
                  href={siteConfig.connectiveTech}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-fit"
                >
                  Visit Website
                </a>
              </div>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <TiltCard className="p-8 h-full">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl mb-3 text-foreground">CareerPhases.com</h3>
                <p className="text-foreground-muted flex-grow mb-6">
                  An AI-powered career and income intelligence platform created by Rashan Thompson.
                  CareerPhases provides tools and resources for career development, financial literacy,
                  and workforce readiness -making professional guidance accessible to all.
                </p>
                <a
                  href={siteConfig.careerPhases}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold w-fit"
                >
                  Explore Platform
                </a>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="relative">
        <ScrollReveal>
          <GlassCard variant="highlight" className="max-w-4xl mx-auto text-center p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10" />

            <h2 className="text-foreground mt-0 mb-4">
              Ready to <span className="gradient-text">Transform</span> Your Business with AI?
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mb-8">
              Whether you need a strategic partner, a hands-on consultant, or a dedicated technology
              leader, I bring 25+ years of proven expertise to every engagement.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn btn-primary">
                Start a Conversation
              </Link>
              <Link href="/speaking" className="btn btn-secondary">
                Invite Rashan to Speak
              </Link>
            </div>
          </GlassCard>
        </ScrollReveal>
      </Section>
    </>
  );
}
