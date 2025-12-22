import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'AI Literacy for Students | K-12 Career Education | Rashan Thompson',
  description:
    'Rashan Thompson prepares K-12 students for the AI-driven economy through AI literacy workshops, career exploration, youth entrepreneurship, and financial education programs.',
  keywords: [
    'AI literacy for students',
    'K-12 career education',
    'youth entrepreneurship programs',
    'financial literacy for kids',
    'STEM career exploration',
    'Rashan Thompson student programs',
    'future careers education',
    'technology education for youth',
  ],
};

const programs = [
  {
    title: 'AI Literacy',
    icon: '🤖',
    description:
      "AI is transforming every industry. Rashan Thompson teaches students to understand AI as a tool for creativity, problem-solving, and career advancement -not something to fear.",
    details:
      'Students explore real applications: AI in art, music, writing, science, and business. They learn that AI amplifies human capability rather than replacing it.',
    outcomes: ['Understand how AI works conceptually', 'Use AI tools responsibly', 'See AI as opportunity'],
  },
  {
    title: 'Future Careers',
    icon: '🚀',
    description:
      'STEM careers extend far beyond traditional coding. Rashan Thompson introduces students to career paths they may never have considered: data science, UX design, product management, and more.',
    details:
      "Students discover how their existing interests -art, sports, healthcare, entertainment -connect to technology careers.",
    outcomes: ['Discover new career possibilities', 'Connect interests to careers', 'Understand industry trends'],
  },
  {
    title: 'Youth Entrepreneurship',
    icon: '💡',
    description:
      'Every student benefits from entrepreneurial thinking. Rashan Thompson teaches problem identification, solution development, and the basics of creating value for others.',
    details:
      'These skills translate whether students become entrepreneurs, employees, or community leaders.',
    outcomes: ['Identify problems worth solving', 'Develop business thinking', 'Create value for others'],
  },
  {
    title: 'Soft Skills Development',
    icon: '🎯',
    description:
      "Technical skills get you the interview. Soft skills get you the career. Rashan Thompson emphasizes communication, leadership, and collaboration -skills AI cannot replicate.",
    details:
      "Students practice presenting ideas, working in teams, and adapting to new situations -the skills that cannot be automated.",
    outcomes: ['Improve communication', 'Build leadership skills', 'Work effectively in teams'],
  },
];

const incomeEngineTopics = [
  {
    title: 'Understanding Income',
    description: 'What is income? Where does it come from? How do different careers compare?',
  },
  {
    title: 'Managing Money',
    description: 'Budgeting, saving, and making smart decisions with limited resources.',
  },
  {
    title: 'Building Wealth',
    description: 'The basics of investing, compound growth, and long-term thinking.',
  },
  {
    title: 'Avoiding Traps',
    description: 'Understanding debt, scams, and financial decisions that hold people back.',
  },
  {
    title: 'Creating Opportunity',
    description: 'How education, skills, and relationships translate into economic advancement.',
  },
];

const outcomes = [
  'Clear understanding of AI and how to use it productively',
  'Awareness of career paths they may not have known existed',
  'Foundational entrepreneurial and business thinking skills',
  'Improved communication and presentation abilities',
  'Financial literacy fundamentals through The Income Engine',
  'Confidence to explore technology without intimidation',
  'Connection to someone who has navigated the path to success',
];

export default function WorkWithStudentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-36">
        <MorphingBlob variant="accent" size="lg" position="top-right" opacity={0.15} />
        <MorphingBlob variant="gold" size="md" position="bottom-left" opacity={0.1} />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <ScrollReveal>
                <h1 className="text-foreground">
                  <span className="gradient-text">Rashan Thompson</span> Works With Students
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <p className="text-xl text-foreground-muted max-w-2xl">
                  Preparing the next generation for careers that don&apos;t exist yet
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <DirectAnswer className="max-w-3xl mt-8">
                  Rashan Thompson offers K-12 programs that prepare students for the AI-driven
                  economy through AI literacy, future career exploration, youth entrepreneurship,
                  and financial education. These programs transform technology from something
                  intimidating into a tool students can use to build their futures.
                </DirectAnswer>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={300}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/Students with Rashan 2.jpg"
                  alt="Rashan Thompson with students at a career exploration workshop"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <Section narrow className="relative">
        <MorphingBlob variant="primary" size="sm" position="top-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            Why Should Students Learn About <span className="gradient-text">AI and Careers</span> Now?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            By the time today&apos;s middle schoolers enter the workforce, AI will have transformed
            every industry. The jobs they will hold may not exist today. The question is not
            whether they will encounter AI -it is whether they will be prepared to use it as
            a tool or be displaced by it.
          </DirectAnswer>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-foreground-muted">
            Rashan Thompson believes every young person deserves access to the knowledge and
            skills that build successful careers. That means more than coding or technical
            training -it means understanding how technology, business, and human skills
            intersect. It means learning to think strategically about income and opportunity.
            It means developing the confidence to adapt as the world changes.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-foreground-muted">
            When Rashan Thompson works with students, he brings the same strategic thinking
            applied to Fortune 500 companies -but translated for young minds. He does not
            talk down to students. He talks to them as future professionals, because that
            is exactly what they are.
          </p>
        </ScrollReveal>
      </Section>

      {/* Programs */}
      <Section className="relative">
        <MorphingBlob variant="accent" size="lg" position="bottom-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            What Do Students Learn With <span className="gradient-text">Rashan Thompson</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Rashan Thompson&apos;s student programs cover AI literacy, future careers exploration,
            youth entrepreneurship, and soft skills development. Each program is designed to
            give students practical knowledge and confidence for the AI-driven economy.
          </DirectAnswer>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {programs.map((program, index) => (
            <ScrollReveal key={program.title} delay={200 + index * 100}>
              <TiltCard className="h-full">
                <GlassCard className="p-6 h-full">
                  <span className="text-4xl mb-4 block">{program.icon}</span>
                  <h3 className="text-xl text-foreground mb-3">{program.title}</h3>
                  <p className="text-foreground-muted mb-4">{program.description}</p>
                  <p className="text-sm text-foreground-muted mb-4">{program.details}</p>
                  <div className="space-y-2">
                    {program.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-sm text-accent-light">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* The Income Engine */}
      <Section narrow className="relative">
        <MorphingBlob variant="gold" size="md" position="top-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            What Is <span className="gradient-text-gold">&quot;The Income Engine&quot;</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            &quot;The Income Engine&quot; is Rashan Thompson&apos;s financial education program designed
            for young people and families. It covers money management fundamentals, income
            generation strategies, and financial wellness principles to help participants
            build a strong foundation for economic independence.
          </DirectAnswer>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-foreground-muted">
            Financial literacy changes lives. Rashan Thompson has seen talented young people
            make choices that limited their options simply because no one taught them how
            money works. The Income Engine exists to change that.
          </p>
        </ScrollReveal>

        <div className="space-y-4 mt-8">
          {incomeEngineTopics.map((topic, index) => (
            <ScrollReveal key={topic.title} delay={300 + index * 100}>
              <SpotlightCard className="p-4" spotlightColor="rgba(212, 168, 83, 0.1)">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg text-foreground mb-1">{topic.title}</h3>
                    <p className="text-foreground-muted text-sm mb-0">{topic.description}</p>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={800}>
          <p className="text-foreground-muted mt-8">
            The Income Engine gives young people the financial intelligence that many
            families do not have access to -the knowledge that builds generational wealth.
          </p>
        </ScrollReveal>
      </Section>

      {/* Who Is This For */}
      <Section className="relative">
        <MorphingBlob variant="primary" size="md" position="bottom-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            Who Are <span className="gradient-text">These Programs</span> For?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: 'Parents Who Want More for Their Children',
              description:
                'If you recognize that the world your child will enter is different from the one you grew up in, these programs provide the preparation standard curricula often miss.',
              icon: '👨‍👩‍👧',
            },
            {
              title: 'Students Curious About Technology',
              description:
                'If you are wondering what AI means for your future, or curious about careers you have not heard about in school, these programs open doors.',
              icon: '🎓',
            },
            {
              title: 'Youth Groups and Organizations',
              description:
                'If you lead a youth group, after-school program, or community organization, Rashan Thompson can deliver workshops tailored to your context.',
              icon: '🏫',
            },
          ].map((audience, index) => (
            <ScrollReveal key={audience.title} delay={100 + index * 100}>
              <GlassCard className="p-6 h-full">
                <span className="text-4xl mb-4 block">{audience.icon}</span>
                <h3 className="text-lg text-foreground mb-3">{audience.title}</h3>
                <p className="text-foreground-muted mb-0">{audience.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Outcomes */}
      <Section narrow className="relative">
        <MorphingBlob variant="accent" size="sm" position="top-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            What <span className="gradient-text">Outcomes</span> Can You Expect?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-foreground-muted">
            Students who participate in Rashan Thompson&apos;s programs leave with tangible
            skills and shifted mindsets:
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {outcomes.map((outcome, index) => (
            <ScrollReveal key={outcome} delay={200 + index * 50}>
              <GlassCard className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-sm">✓</span>
                  </div>
                  <span className="text-foreground">{outcome}</span>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <DirectAnswer className="mt-8">
            Rashan Thompson&apos;s student programs do not just teach content -they shift
            mindsets. Students leave seeing technology as an opportunity rather than a
            threat, and themselves as capable of thriving in whatever the future holds.
          </DirectAnswer>
        </ScrollReveal>
      </Section>

      {/* CareerPhases Link */}
      <Section className="relative">
        <MorphingBlob variant="gold" size="md" position="center" opacity={0.1} />

        <ScrollReveal>
          <GlassCard variant="highlight" className="max-w-3xl mx-auto text-center p-12">
            <h2 className="text-foreground mt-0 mb-4">
              Want Digital Resources for <span className="gradient-text-gold">Career Exploration</span>?
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mb-8">
              <a
                href={siteConfig.careerPhases}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light hover:text-accent underline"
              >
                CareerPhases.com
              </a>{' '}
              is Rashan Thompson&apos;s AI-powered career intelligence platform. Students
              and families can access tools for career exploration, income planning, and
              skill development -extending the learning beyond live workshops.
            </p>
            <a
              href={siteConfig.careerPhases}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              Explore CareerPhases.com
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
              Ready to Invest in Your <span className="gradient-text">Student&apos;s Future</span>?
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mb-8">
              Whether you are a parent, youth leader, or educator, Rashan Thompson would
              love to discuss how to work together to prepare young people for what is next.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Start a Conversation
              </Link>
              <Link href="/speaking" className="btn btn-secondary">
                Book a Workshop
              </Link>
            </div>
          </GlassCard>
        </ScrollReveal>
      </Section>
    </>
  );
}
