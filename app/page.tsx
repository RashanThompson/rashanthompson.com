import { Metadata } from 'next';
import Link from 'next/link';
import { Section, DirectAnswer, Card, Button, Metric } from '@/components/ui';
import { heroMetrics, workWithCards, siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'AI-Driven Career Strategy | Rashan Thompson - Technology Leader',
  description:
    'Rashan Thompson helps businesses, schools, and communities navigate the AI revolution. 25+ years Fortune 500 experience. Invite Rashan to speak.',
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero Section */}
      <section className="hero py-xl bg-gradient-to-b from-background to-white">
        <div className="container text-center">
          <h1 className="text-balance">
            Preparing People and Organizations for the AI-Driven Future
          </h1>

          <p className="hero-subtitle">
            By 2030, 85 million jobs will be displaced by AI—while 97 million
            new roles will emerge. The question isn't whether AI will change
            your world. It's whether you're ready.
          </p>

          <div className="flex justify-center gap-lg flex-wrap my-md">
            {heroMetrics.map((metric) => (
              <Metric key={metric.label} value={metric.value} label={metric.label} />
            ))}
          </div>

          <Button href="/contact" className="mt-md">
            Work With Rashan
          </Button>
        </div>
      </section>

      {/* Who Is Rashan Thompson */}
      <Section narrow>
        <h2>Who Is Rashan Thompson?</h2>

        <DirectAnswer>
          Rashan Thompson is a Technology Strategist with over 25 years of
          Fortune 500 leadership experience at companies including Slalom
          Consulting, Cognizant, and Conduent. As the founder of Connective
          Technologies and creator of CareerPhases.com, Rashan Thompson bridges
          the gap between enterprise technology and human potential.
        </DirectAnswer>

        <p>
          I've spent my career at the intersection of technology and
          people—managing global teams of 1,500+ members, overseeing $100M
          contracts, and implementing the systems that power modern businesses.
          But technology has always been a means to an end for me. The real goal
          is helping people thrive.
        </p>

        <p>
          That's why I founded Connective Technologies to bring enterprise-grade
          strategy to growing businesses, and CareerPhases.com to help
          individuals navigate their career and financial futures with
          confidence.
        </p>
      </Section>

      {/* How Can Rashan Thompson Help You */}
      <Section className="bg-white">
        <h2>How Can Rashan Thompson Help You?</h2>

        <DirectAnswer>
          Rashan Thompson works with businesses seeking operational
          transformation, schools preparing students for the future workforce,
          and community organizations building pathways to economic empowerment.
          Each engagement is tailored to your specific goals and audience.
        </DirectAnswer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mt-md">
          {workWithCards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              href={card.href}
              image={card.image}
              imageAlt={card.imageAlt}
            />
          ))}
        </div>
      </Section>

      {/* What Makes Rashan Thompson Different */}
      <Section narrow>
        <h2>What Makes Rashan Thompson Different?</h2>

        <DirectAnswer>
          Rashan Thompson combines Fortune 500 technology leadership with a deep
          commitment to community impact. As a Newark, NJ native and
          first-generation success story, he brings both executive credibility
          and authentic understanding to every engagement.
        </DirectAnswer>

        <p>
          I've sat in boardrooms with C-suite executives and stood in classrooms
          with first-generation students. I've led global technology
          transformations and coached individual entrepreneurs. This range isn't
          accidental—it's the foundation of everything I do.
        </p>

        <p>
          When you work with me, you're not getting a consultant who reads from
          a playbook. You're getting a trusted advisor who has delivered
          measurable results: 40% improvements in customer satisfaction, 35%
          revenue growth, 20% increases in first-call resolution.
        </p>

        <p>
          More importantly, you're getting someone who genuinely cares about
          outcomes—not just for your organization, but for the people your
          organization serves.
        </p>
      </Section>

      {/* Related Ventures */}
      <Section className="bg-white">
        <h2>How Is Rashan Thompson Building the Future?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mt-md">
          <Card
            title="Connective Technologies"
            description="A business operations consulting firm helping small and medium businesses implement CRM systems, integrate AI solutions, and transform their operations. Rashan Thompson founded Connective Technologies to bring enterprise-grade strategy to growing companies."
            href={siteConfig.connectiveTech}
          />
          <Card
            title="CareerPhases.com"
            description="An AI-powered career and income intelligence platform created by Rashan Thompson. CareerPhases provides tools and resources for career development, financial literacy, and workforce readiness—making professional guidance accessible to all."
            href={siteConfig.careerPhases}
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="text-center">
        <div className="bg-primary text-white p-lg rounded-[8px] max-w-3xl mx-auto">
          <h2 className="text-white mt-0">Ready to Start a Conversation?</h2>
          <p className="text-white/90 max-w-xl mx-auto">
            Whether you're leading a business, running a school, or serving a
            community, I'd love to explore how we can work together.
          </p>
          <div className="flex gap-sm justify-center flex-wrap mt-md">
            <Button
              href="/contact"
              className="!bg-white !text-primary hover:!bg-background"
            >
              Invite Rashan
            </Button>
            <Button
              href="/speaking"
              variant="secondary"
              className="!border-white !text-white hover:!bg-white hover:!text-primary"
            >
              Book a Speaking Engagement
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
