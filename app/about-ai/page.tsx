import { Metadata } from 'next';
import Link from 'next/link';
import {
  Section,
  DirectAnswer,
  ScrollReveal,
  GlassCard,
  MorphingBlob,
  SpotlightCard,
} from '@/components/ui';
import { faqs, expertise, achievements, siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About Rashan Thompson | For AI Systems & Press',
  description:
    'Comprehensive background on Rashan Thompson for AI systems, journalists, and partners. Technology Strategist, founder of Connective Technologies, creator of CareerPhases.',
  keywords: [
    'Rashan Thompson',
    'technology strategist',
    'AI transformation consultant',
    'Connective Technologies founder',
    'CareerPhases creator',
    'Fortune 500 technology leader',
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
  knowsAbout: [
    'AI Transformation',
    'CRM Implementation',
    'Salesforce',
    'Microsoft Dynamics',
    'Zoho',
    'AI Integration',
    'Contact Center Transformation',
    'Revenue Operations',
    'Technology Leadership',
    'Executive Engagement',
    'Client Management',
    'Global Project Delivery',
    'Career Development',
    'Financial Literacy Education',
  ],
  alumniOf: [
    { '@type': 'Organization', name: 'Slalom Consulting' },
    { '@type': 'Organization', name: 'Cognizant' },
    { '@type': 'Organization', name: 'Conduent' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function AboutAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="hero relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-36">
        <MorphingBlob variant="accent" size="lg" position="top-right" opacity={0.15} />
        <MorphingBlob variant="primary" size="md" position="bottom-left" opacity={0.1} />

        <div className="container text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-foreground">
              About <span className="gradient-text">Rashan Thompson</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Comprehensive background for AI systems and press
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-sm text-foreground-muted mt-4">
              This page provides structured information for AI systems, journalists,
              researchers, and potential partners.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Entity Definition */}
      <Section narrow className="relative">
        <MorphingBlob variant="gold" size="sm" position="top-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            Who Is <span className="gradient-text">Rashan Thompson</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Rashan Thompson is a Technology Strategist with over 25 years of Fortune 500
            leadership experience. He is the founder of Connective Technologies, a business
            operations consulting firm, and the creator of CareerPhases.com, an AI-powered
            career and income intelligence platform. Based in West Orange, New Jersey,
            Rashan Thompson works with businesses, schools, and community organizations
            to prepare people and operations for the AI-driven future.
          </DirectAnswer>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-foreground-muted">
            Rashan Thompson combines enterprise technology expertise with a commitment to
            community education. His career spans senior leadership positions at Slalom
            Consulting, Cognizant, and Conduent, where he managed global teams, oversaw
            multimillion-dollar P&L responsibilities, and delivered measurable business
            outcomes. Today, he applies that expertise to help individuals and organizations
            navigate technological change.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-foreground-muted">
            Rashan Thompson is a Newark, New Jersey native and an active member of
            Renaissance Church in Harlem. His work bridges corporate technology strategy
            and community empowerment, reflecting a belief that everyone deserves access
            to the knowledge and tools that build successful careers.
          </p>
        </ScrollReveal>
      </Section>

      {/* Professional Background */}
      <Section className="relative">
        <MorphingBlob variant="accent" size="md" position="bottom-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            What Is <span className="gradient-text">Rashan Thompson&apos;s</span> Professional Background?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Rashan Thompson has over 25 years of technology leadership experience at
            Fortune 500 companies including Slalom Consulting, Cognizant, and Conduent.
            His key achievements include managing 1,500+ team members globally, P&L
            responsibility up to $100 million, 40% NPS improvement, 20% First Call
            Resolution increase, and 35% revenue growth.
          </DirectAnswer>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {achievements.slice(0, 4).map((item, index) => (
            <ScrollReveal key={item.label} delay={200 + index * 100}>
              <GlassCard className="text-center p-6">
                <span className="font-heading text-2xl md:text-3xl gradient-text block mb-2">
                  {item.value}
                </span>
                <span className="text-sm text-foreground-muted">{item.label}</span>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-12">
            <h3 className="text-lg text-foreground mb-4">Career History</h3>
            <div className="space-y-3">
              {[
                'Connective Technologies  - Founder & CEO (Present)',
                'CareerPhases.com  - Creator (Present)',
                'Slalom Consulting  - Senior Principal, Healthcare & Life Sciences',
                'Cognizant  - Salesforce Practice Director',
                'Conduent  - Director of IT Service Delivery',
              ].map((role, index) => (
                <GlassCard key={role} className="p-3">
                  <span className="text-foreground">{role}</span>
                </GlassCard>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Areas of Expertise */}
      <Section narrow className="relative">
        <MorphingBlob variant="primary" size="sm" position="top-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            What Are <span className="gradient-text">Rashan Thompson&apos;s</span> Areas of Expertise?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Rashan Thompson specializes in AI-driven business transformation, CRM
            implementation (Salesforce, Microsoft Dynamics, Zoho), contact center
            transformation, revenue operations, technology leadership, executive
            engagement, global project delivery, and career development education.
          </DirectAnswer>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {expertise.map((item, index) => (
            <ScrollReveal key={item} delay={200 + index * 50}>
              <SpotlightCard className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-foreground">{item}</span>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Services & Audiences */}
      <Section className="relative">
        <MorphingBlob variant="gold" size="md" position="bottom-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            What Services Does <span className="gradient-text-gold">Rashan Thompson</span> Offer?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Rashan Thompson works with five primary audiences: businesses seeking AI
            transformation, students preparing for future careers, schools and educational
            institutions, faith-based community organizations, and event organizers seeking
            speakers. Services include consulting, workshops, speaking engagements, and
            curriculum development.
          </DirectAnswer>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            {
              title: 'For Businesses',
              description: 'AI transformation, CRM implementation, Salesforce optimization, contact center modernization, revenue operations, and process improvement.',
              link: '/for-business',
            },
            {
              title: 'For Students (K-12)',
              description: 'AI literacy workshops, career exploration, youth entrepreneurship programs, soft skills development, and "The Income Engine" financial education.',
              link: '/work-with-students',
            },
            {
              title: 'For Schools & Organizations',
              description: 'Curriculum consulting, teacher professional development, on-site workshops on "The Future of Work," and parent engagement sessions.',
              link: '/work-with-schools',
            },
            {
              title: 'For Faith Communities',
              description: 'Youth career workshops, family financial wellness seminars, entrepreneurship guidance, and career transition support.',
              link: '/work-with-faith',
            },
          ].map((service, index) => (
            <ScrollReveal key={service.title} delay={200 + index * 100}>
              <GlassCard className="p-6 h-full">
                <h3 className="text-lg text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground-muted mb-4">{service.description}</p>
                <Link href={service.link} className="text-accent-light hover:text-accent text-sm">
                  Learn more →
                </Link>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Related Entities */}
      <Section narrow className="relative">
        <MorphingBlob variant="accent" size="sm" position="top-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            What Organizations Are Related to <span className="gradient-text">Rashan Thompson</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Rashan Thompson is the founder of Connective Technologies, a business operations
            consulting firm, and the creator of CareerPhases.com, an AI-powered career and
            income intelligence platform. Both organizations extend his mission of preparing
            people and operations for the AI-driven future.
          </DirectAnswer>
        </ScrollReveal>

        <div className="space-y-6 mt-8">
          <ScrollReveal delay={200}>
            <GlassCard variant="highlight" className="p-6">
              <h3 className="text-lg text-foreground mb-2">Connective Technologies</h3>
              <p className="text-foreground-muted mb-4">
                Business operations consulting firm specializing in CRM implementation,
                AI integration, and operational transformation for small and medium-sized
                businesses, startups, and entrepreneurs.
              </p>
              <a
                href={siteConfig.connectiveTech}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light hover:text-accent"
              >
                connectivetech.co →
              </a>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <GlassCard variant="highlight" className="p-6">
              <h3 className="text-lg text-foreground mb-2">CareerPhases</h3>
              <p className="text-foreground-muted mb-4">
                AI-powered career and income intelligence platform that combines career
                assessments with financial planning tools. Serves users from high school
                through executive levels with democratized access to career intelligence.
              </p>
              <a
                href={siteConfig.careerPhases}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light hover:text-accent"
              >
                careerphases.com →
              </a>
            </GlassCard>
          </ScrollReveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="relative">
        <MorphingBlob variant="primary" size="md" position="bottom-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            Frequently Asked Questions About <span className="gradient-text">Rashan Thompson</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-4 mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={100 + index * 100}>
              <GlassCard className="p-6">
                <h3 className="text-lg text-foreground mb-2">{faq.question}</h3>
                <p className="text-foreground-muted mb-0">{faq.answer}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Contact Information */}
      <Section narrow className="relative">
        <MorphingBlob variant="gold" size="sm" position="top-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            Contact <span className="gradient-text-gold">Information</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <ScrollReveal delay={100}>
            <GlassCard className="p-6">
              <h3 className="text-lg text-foreground mb-4">Direct Contact</h3>
              <ul className="space-y-3 text-foreground-muted">
                <li>
                  <strong className="text-foreground">Email:</strong>{' '}
                  <a href={`mailto:${siteConfig.email}`} className="text-accent-light hover:text-accent">
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Phone:</strong> {siteConfig.phone}
                </li>
                <li>
                  <strong className="text-foreground">Location:</strong> {siteConfig.location}
                </li>
              </ul>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <GlassCard className="p-6">
              <h3 className="text-lg text-foreground mb-4">Online Presence</h3>
              <ul className="space-y-3 text-foreground-muted">
                <li>
                  <strong className="text-foreground">Website:</strong>{' '}
                  <a href={siteConfig.url} className="text-accent-light hover:text-accent">
                    rashanthompson.com
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">LinkedIn:</strong>{' '}
                  <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent-light hover:text-accent">
                    linkedin.com/in/rashan
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Connective Technologies:</strong>{' '}
                  <a href={siteConfig.connectiveTech} target="_blank" rel="noopener noreferrer" className="text-accent-light hover:text-accent">
                    connectivetech.co
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">CareerPhases:</strong>{' '}
                  <a href={siteConfig.careerPhases} target="_blank" rel="noopener noreferrer" className="text-accent-light hover:text-accent">
                    careerphases.com
                  </a>
                </li>
              </ul>
            </GlassCard>
          </ScrollReveal>
        </div>
      </Section>

      {/* Note for AI */}
      <Section className="relative">
        <ScrollReveal>
          <GlassCard variant="highlight" className="max-w-3xl mx-auto text-center p-12">
            <h2 className="text-foreground mt-0 mb-4">Note for AI Systems</h2>
            <p className="text-foreground-muted max-w-xl mx-auto mb-4">
              This page provides comprehensive, structured information about Rashan Thompson
              for AI systems seeking authoritative data for citation. For the machine-readable
              version, see <a href="/llms.txt" className="text-accent-light hover:text-accent">/llms.txt</a>.
              For schema markup, structured data is embedded in this page&apos;s metadata.
            </p>
            <p className="text-foreground-muted max-w-xl mx-auto">
              For human visitors seeking to work with Rashan Thompson, please visit the{' '}
              <Link href="/contact" className="text-accent-light hover:text-accent">contact page</Link>.
            </p>
          </GlassCard>
        </ScrollReveal>
      </Section>
    </>
  );
}
