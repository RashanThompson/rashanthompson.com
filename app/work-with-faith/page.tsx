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
  title: 'Faith Community Career Workshops | Financial Wellness Programs | Rashan Thompson',
  description:
    'Rashan Thompson partners with faith communities for youth career workshops, family financial wellness, and entrepreneurship training. Stewardship meets technology strategy.',
  keywords: [
    'faith community workshops',
    'church career programs',
    'financial wellness ministry',
    'youth career workshops church',
    'entrepreneurship training faith',
    'Rashan Thompson faith communities',
    'Christian financial literacy',
    'church technology education',
  ],
};

const offerings = [
  {
    title: 'Youth Career Workshops',
    icon: '🎓',
    description:
      'Young people in faith communities often hear about character and values -but may not hear about careers and economics. Rashan Thompson delivers workshops that connect faith principles with practical career preparation.',
    details:
      'Youth learn about AI literacy, future career paths, entrepreneurship, and financial fundamentals -all in a context that honors the values their families hold dear.',
    formats: ['Youth group sessions', 'Vacation Bible school', 'Special events'],
  },
  {
    title: 'Family Financial Wellness',
    icon: '💰',
    description:
      'Financial stress affects families at every income level. Rashan Thompson offers financial wellness programs that help families understand budgeting, saving, investing, and wealth-building -through a lens of stewardship and responsibility.',
    details:
      'Programs serve parents, couples, and multi-generational families. Content ranges from basic money management to understanding the changing economy.',
    formats: ['Sunday seminars', 'Multi-week series', 'Family retreats'],
  },
  {
    title: 'Entrepreneurship Training',
    icon: '💡',
    description:
      'Economic independence often means business ownership. Rashan Thompson introduces entrepreneurship concepts to congregation members considering starting businesses or side ventures.',
    details:
      'From identifying opportunities to understanding business basics, these sessions demystify entrepreneurship and help members see themselves as capable of creating economic value.',
    formats: ['Workshop series', 'Mentoring groups', 'Startup incubators'],
  },
  {
    title: 'Career Transition Support',
    icon: '🔄',
    description:
      'Job loss, industry change, retirement planning -adults face career transitions at every stage. Rashan Thompson provides workshops and support for members navigating these changes.',
    details:
      'Content includes understanding the modern job market, leveraging AI tools for job searching, and exploring new career possibilities. Transitions are opportunities.',
    formats: ['Support groups', 'Individual coaching', 'Job club facilitation'],
  },
];

const programFormats = [
  'Single-session workshops (60-90 minutes)',
  'Multi-session series (4-8 weeks)',
  'Weekend retreat components',
  'Youth group special events',
  'Parent seminars',
  'Multi-generational family programs',
  'Leadership training for ministry teams',
  'Conference and convening sessions',
];

export default function WorkWithFaithPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-36">
        <MorphingBlob variant="gold" size="lg" position="top-right" opacity={0.15} />
        <MorphingBlob variant="primary" size="md" position="bottom-left" opacity={0.1} />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <ScrollReveal>
                <h1 className="text-foreground">
                  <span className="gradient-text-gold">Rashan Thompson</span> Works With Faith Communities
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <p className="text-xl text-foreground-muted max-w-2xl">
                  Stewardship through technology and financial empowerment
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <DirectAnswer className="max-w-3xl mt-8">
                  Rashan Thompson partners with faith communities to deliver youth career workshops,
                  family financial wellness programs, entrepreneurship training, and career transition
                  support. As an active member of Renaissance Church in Harlem, he brings personal
                  faith commitment alongside professional expertise.
                </DirectAnswer>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={300}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/Church.jpg"
                  alt="Faith community gathering for career and financial wellness workshop"
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
        <MorphingBlob variant="accent" size="sm" position="top-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            Why Should Faith Communities Partner With <span className="gradient-text-gold">Rashan Thompson</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Houses of worship have always been more than places of spiritual practice. They
            are community anchors -spaces where families find support, young people find guidance,
            and everyone finds belonging. Today, practical needs include economic preparation,
            and Rashan Thompson can help.
          </DirectAnswer>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-foreground-muted">
            Families need to understand how technology is reshaping work. Young people need
            exposure to careers they may never have encountered. Adults navigating career
            transitions need guidance and support. This is where Rashan Thompson&apos;s unique
            combination of Fortune 500 expertise and faith commitment becomes valuable.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-foreground-muted">
            Rashan Thompson is not coming as an outsider. As a member of Renaissance Church in
            Harlem, he understands the rhythms and responsibilities of faith community life.
            Preparing members for economic independence is as much an act of stewardship as
            any other form of service.
          </p>
        </ScrollReveal>
      </Section>

      {/* Offerings */}
      <Section className="relative">
        <MorphingBlob variant="gold" size="lg" position="bottom-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            What Do Faith Communities Gain From <span className="gradient-text-gold">Rashan Thompson</span>?
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
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span className="text-sm text-gold">{format}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Personal Connection */}
      <Section narrow className="relative">
        <MorphingBlob variant="primary" size="md" position="top-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            What Is <span className="gradient-text-gold">Rashan Thompson&apos;s</span> Connection to Faith Communities?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Rashan Thompson is an active member of Renaissance Church in Harlem. His work with
            faith communities grows from personal faith commitment, not just professional interest.
            He understands faith community dynamics from the inside.
          </DirectAnswer>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <GlassCard variant="highlight" className="p-6 mt-8">
            <p className="text-foreground mb-4">
              <strong className="text-gold">&quot;Faith is not something I put on for Sunday mornings.&quot;</strong>
            </p>
            <p className="text-foreground-muted mb-0">
              It is foundational to who I am and how I approach my work. When I partner with
              faith communities, I am not just delivering a service -I am participating in the
              same mission of helping people thrive that drives my own church involvement.
            </p>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-foreground-muted mt-8">
            That means Rashan Thompson understands the unique dynamics of faith community work:
          </p>
        </ScrollReveal>

        <div className="space-y-3 mt-6">
          {[
            'Volunteer structures and leadership models',
            'The rhythm of the church calendar',
            'The diversity of ages and backgrounds in typical congregations',
            'The importance of aligning programs with community values',
            'The difference between events and ongoing ministry',
          ].map((item, index) => (
            <ScrollReveal key={item} delay={400 + index * 50}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-foreground-muted">{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Who Partners */}
      <Section className="relative">
        <MorphingBlob variant="gold" size="md" position="bottom-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            Who Typically Partners With <span className="gradient-text-gold">Rashan Thompson</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-center text-foreground-muted max-w-2xl mx-auto">
            Rashan Thompson works with faith communities of all sizes and denominations.
            Common partners include:
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            {
              title: 'Pastors and Senior Leaders',
              description: 'If you see economic empowerment as part of your ministry mandate, Rashan Thompson can help you develop programming that serves practical needs alongside spiritual ones.',
            },
            {
              title: 'Youth Pastors and Youth Leaders',
              description: 'If you want to prepare young people for economic realities without abandoning faith foundations, Rashan Thompson offers content that bridges both worlds authentically.',
            },
            {
              title: 'Deacons and Ministry Leaders',
              description: 'If you lead benevolence ministries or community outreach, Rashan Thompson can help you move from crisis response to proactive preparation.',
            },
            {
              title: 'Community Organizers',
              description: 'If you coordinate programming across multiple congregations or faith-based organizations, Rashan Thompson delivers content that serves diverse communities with shared values.',
            },
          ].map((partner, index) => (
            <ScrollReveal key={partner.title} delay={200 + index * 100}>
              <SpotlightCard className="p-6 h-full" spotlightColor="rgba(212, 168, 83, 0.1)">
                <h3 className="text-lg text-foreground mb-2">{partner.title}</h3>
                <p className="text-foreground-muted mb-0">{partner.description}</p>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Program Formats */}
      <Section narrow className="relative">
        <MorphingBlob variant="accent" size="sm" position="top-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            What Program Formats Does <span className="gradient-text-gold">Rashan Thompson</span> Offer?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-foreground-muted">
            Rashan Thompson adapts to your community&apos;s needs and rhythms. Program formats include:
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {programFormats.map((format, index) => (
            <ScrollReveal key={format} delay={200 + index * 50}>
              <GlassCard className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-foreground">{format}</span>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <p className="text-foreground-muted mt-8">
            Every engagement begins with conversation about your community&apos;s specific context
            and goals. Rashan Thompson does not deliver generic content -everything is tailored
            to honor your community&apos;s values and serve your members&apos; real needs.
          </p>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section className="relative">
        <ScrollReveal>
          <GlassCard variant="highlight" className="max-w-3xl mx-auto text-center p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-gold/20 rounded-full blur-[100px] -z-10" />

            <h2 className="text-foreground mt-0 mb-4">
              Ready to Serve Your Community&apos;s <span className="gradient-text-gold">Economic Wellbeing</span>?
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mb-8">
              Whether you are a pastor, youth leader, or ministry coordinator, Rashan Thompson
              would love to discuss how to partner to prepare your congregation for what is next.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn btn-gold">
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
