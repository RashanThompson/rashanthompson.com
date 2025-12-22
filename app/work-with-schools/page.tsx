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
  title: 'AI Curriculum Consulting for Schools | Teacher Training | Rashan Thompson',
  description:
    'Rashan Thompson partners with schools for AI curriculum integration, teacher professional development, and student workshops. Fortune 500 expertise for K-12 education.',
  keywords: [
    'AI curriculum consulting',
    'teacher professional development',
    'school technology partnerships',
    'K-12 AI education',
    'career readiness curriculum',
    'Rashan Thompson schools',
    'education technology consulting',
    'student workshop speaker',
  ],
};

const offerings = [
  {
    title: 'Curriculum Consulting',
    icon: '📚',
    description:
      "Rashan Thompson works with curriculum directors and department heads to integrate AI literacy and career readiness into existing programs. This is not about adding another subject -it is about weaving future-ready skills into what you are already teaching.",
    details:
      "Assessment of current curriculum, identification of integration opportunities, and development of implementation roadmaps that respect teachers' capacity and students' developmental stages.",
    outcomes: ['Integrated AI literacy', 'Career-ready curriculum', 'Teacher-sustainable approach'],
  },
  {
    title: 'Teacher Training',
    icon: '👩‍🏫',
    description:
      "Teachers cannot teach what they do not understand. Rashan Thompson delivers professional development that equips educators with the knowledge and tools to bring AI and career concepts into their classrooms.",
    details:
      'Training is practical, not theoretical. Teachers leave with lesson plans they can use immediately, along with frameworks for ongoing integration throughout the school year.',
    outcomes: ['Ready-to-use lesson plans', 'AI tool proficiency', 'Confidence to teach technology'],
  },
  {
    title: 'Student Workshops',
    icon: '🎓',
    description:
      'Sometimes direct engagement has the most impact. Rashan Thompson leads interactive workshops that introduce students to AI literacy, career exploration, entrepreneurship, and financial fundamentals.',
    details:
      "Workshops are tailored to grade level and can be delivered as single sessions, multi-day programs, or recurring engagements. Students engage with someone who has walked the path they are just beginning.",
    outcomes: ['Expanded career awareness', 'AI literacy foundations', 'Entrepreneurial mindset'],
  },
  {
    title: 'Parent Engagement',
    icon: '👨‍👩‍👧‍👦',
    description:
      "Students do not learn in isolation. Rashan Thompson offers parent workshops and presentations that help families understand the changing landscape and support their children's preparation.",
    details:
      'When parents understand what is coming, they become partners in preparation rather than obstacles to progress. Family financial literacy sessions extend the learning beyond the school day.',
    outcomes: ['Informed parents', 'Family alignment', 'Extended learning support'],
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Initial Conversation',
    description: 'Discussion of your vision, challenges, and what you are hoping to achieve.',
  },
  {
    step: '02',
    title: 'Assessment',
    description: 'Learning about your current programs, student population, and institutional constraints.',
  },
  {
    step: '03',
    title: 'Proposal',
    description: 'Development of a customized engagement plan that respects your resources and timeline.',
  },
  {
    step: '04',
    title: 'Implementation',
    description: 'Execution together, with ongoing communication and adjustment as needed.',
  },
  {
    step: '05',
    title: 'Evaluation',
    description: 'Measurement of impact and planning for sustainability and extension.',
  },
];

export default function WorkWithSchoolsPage() {
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
                  <span className="gradient-text">Rashan Thompson</span> Works With Schools
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <p className="text-xl text-foreground-muted max-w-2xl">
                  Enterprise-grade AI and career strategy for the classroom
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <DirectAnswer className="max-w-3xl mt-8">
                  Rashan Thompson brings Fortune 500 technology expertise into educational settings
                  through curriculum consulting, teacher training, student workshops, and parent
                  engagement programs. Schools receive enterprise-grade strategy adapted for their
                  unique context and student population.
                </DirectAnswer>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={300}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/Rashan Thompson College.png"
                  alt="Rashan Thompson speaking at a college or school event"
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
            Why Should Schools Partner With <span className="gradient-text">Rashan Thompson</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Most school administrators know their students need preparation for an AI-driven
            economy. The challenge is finding partners who have actually operated at the
            intersection of technology and business -not just read about it. Rashan Thompson
            brings 25+ years of Fortune 500 experience directly into classrooms.
          </DirectAnswer>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-foreground-muted">
            Rashan Thompson has led teams of 1,500+ members, managed $100M+ in P&L responsibility,
            and delivered measurable results at Slalom, Cognizant, and Conduent. Now he is
            committed to bringing that expertise to the communities that need it most -starting
            in classrooms.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-foreground-muted">
            As a Newark, New Jersey native, Rashan Thompson understands what it means for students
            to lack access to networks and knowledge that others take for granted. His school
            partnerships exist to close that gap.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {[
            { value: '25+', label: 'Years Experience', icon: '⚡' },
            { value: 'K-12', label: 'All Grade Levels', icon: '🎓' },
            { value: '100%', label: 'Customized Content', icon: '🎯' },
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
            What Do Schools Receive From <span className="gradient-text">Rashan Thompson</span>?
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
                    {offering.outcomes.map((outcome) => (
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

      {/* Who Partners */}
      <Section narrow className="relative">
        <MorphingBlob variant="primary" size="md" position="top-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            Who Typically Partners With <span className="gradient-text">Rashan Thompson</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-foreground-muted">
            Rashan Thompson works with educational institutions at all levels, from individual
            schools to district-wide initiatives. Common partners include:
          </p>
        </ScrollReveal>

        <div className="space-y-4 mt-8">
          {[
            {
              title: 'Principals and School Leaders',
              description: 'Strategic approach to closing the gap between what students learn and what the future requires.',
            },
            {
              title: 'Program Directors and Department Heads',
              description: 'Enhancement of existing career and technical education, STEM programs, or after-school initiatives.',
            },
            {
              title: 'Board Members and District Leaders',
              description: 'Vision for AI readiness and career preparation that scales across multiple schools.',
            },
            {
              title: 'Charter Schools and Alternative Education',
              description: 'Building innovation into new programs from the start with strategic flexibility.',
            },
          ].map((partner, index) => (
            <ScrollReveal key={partner.title} delay={200 + index * 100}>
              <SpotlightCard className="p-4">
                <h3 className="text-lg text-foreground mb-1">{partner.title}</h3>
                <p className="text-foreground-muted text-sm mb-0">{partner.description}</p>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* What Makes Different */}
      <Section className="relative">
        <MorphingBlob variant="gold" size="md" position="bottom-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            What Makes <span className="gradient-text-gold">Rashan Thompson</span> Different for Schools?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Rashan Thompson combines Fortune 500 expertise with Newark roots. As a native of
            Newark, New Jersey, he brings personal understanding of what it means for students
            to lack access to networks and opportunities that others take for granted. His
            school partnerships are about equity as much as education.
          </DirectAnswer>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            {
              quality: 'Relatability',
              description: 'Students see someone who came from where they are and got to where they want to go.',
            },
            {
              quality: 'Credibility',
              description: 'Fortune 500 experience that schools could not otherwise access.',
            },
            {
              quality: 'Practicality',
              description: 'Real-world knowledge, not theoretical frameworks.',
            },
            {
              quality: 'Commitment',
              description: 'Ongoing engagement, not one-time appearances.',
            },
          ].map((item, index) => (
            <ScrollReveal key={item.quality} delay={200 + index * 100}>
              <GlassCard className="p-6">
                <h3 className="text-lg text-gold mb-2">{item.quality}</h3>
                <p className="text-foreground-muted mb-0">{item.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section narrow className="relative">
        <MorphingBlob variant="accent" size="sm" position="top-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            What Does the Partnership <span className="gradient-text">Process</span> Look Like?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-foreground-muted">
            Every school partnership begins with conversation. Rashan Thompson does not offer
            cookie-cutter programs -everything is tailored to your context, your students, and
            your goals.
          </p>
        </ScrollReveal>

        <div className="space-y-4 mt-8">
          {processSteps.map((step, index) => (
            <ScrollReveal key={step.step} delay={200 + index * 100}>
              <GlassCard className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-accent font-bold">{step.step}</span>
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

        <ScrollReveal delay={700}>
          <p className="text-foreground-muted mt-8">
            The goal is always to build capacity within your institution, not dependence on
            external consultants. Rashan Thompson&apos;s role is to accelerate what you are building,
            not to become a permanent fixture.
          </p>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section className="relative">
        <ScrollReveal>
          <GlassCard variant="highlight" className="max-w-3xl mx-auto text-center p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-accent/20 rounded-full blur-[100px] -z-10" />

            <h2 className="text-foreground mt-0 mb-4">
              Ready to Prepare Your Students for <span className="gradient-text">What&apos;s Next</span>?
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mb-8">
              Whether you are exploring possibilities or ready to move forward, Rashan Thompson
              would love to hear about your school and discuss how to work together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Start a Conversation
              </Link>
              <Link href="/work-with-students" className="btn btn-secondary">
                Student Programs
              </Link>
            </div>
          </GlassCard>
        </ScrollReveal>
      </Section>
    </>
  );
}
