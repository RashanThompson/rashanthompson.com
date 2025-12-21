import { Metadata } from 'next';
import Link from 'next/link';
import {
  Section,
  DirectAnswer,
  ScrollReveal,
  GlassCard,
  MorphingBlob,
  SpotlightCard,
  CalendlyEmbed,
} from '@/components/ui';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact Rashan Thompson | Business Consulting & Speaking Inquiries',
  description:
    'Contact Rashan Thompson to discuss AI transformation consulting, speaking engagements, school partnerships, or career education programs. Start a conversation today.',
  keywords: [
    'contact Rashan Thompson',
    'business consulting inquiry',
    'speaking engagement request',
    'AI transformation consultant',
    'technology strategist contact',
    'career education programs',
    'school partnership inquiry',
  ],
};

const quickLinks = [
  {
    title: 'For Parents & Students',
    description:
      'Learn about programs in AI literacy, career exploration, and financial education for K-12 students.',
    href: '/work-with-students',
    cta: 'Student Programs',
    icon: '🎓',
  },
  {
    title: 'For Schools & Educators',
    description:
      'Explore curriculum consulting, teacher training, and institutional partnerships.',
    href: '/work-with-schools',
    cta: 'School Partnerships',
    icon: '🏫',
  },
  {
    title: 'For Faith Communities',
    description:
      'Discover career workshops, financial wellness programs, and community engagement opportunities.',
    href: '/work-with-faith',
    cta: 'Faith Programs',
    icon: '⛪',
  },
  {
    title: 'For Event Organizers',
    description:
      'Learn about keynotes, workshops, and panel participation for your conference or event.',
    href: '/speaking',
    cta: 'Speaking',
    icon: '🎤',
  },
  {
    title: 'For Businesses',
    description:
      'Explore AI transformation, CRM implementation, and operational excellence consulting.',
    href: '/for-business',
    cta: 'Business Consulting',
    icon: '🏢',
  },
  {
    title: 'View Case Studies',
    description:
      'See proven results from AI transformations and business consulting engagements.',
    href: '/case-studies',
    cta: 'Case Studies',
    icon: '📊',
  },
];

const expectationSteps = [
  {
    num: '1',
    title: 'Response within 48 hours',
    desc: "Rashan Thompson personally reads every inquiry and responds directly. No autoresponders, no assistants screening messages.",
  },
  {
    num: '2',
    title: 'A conversation, not a sales pitch',
    desc: "The goal is to understand your situation and explore whether there is a fit. If there is not, he will tell you honestly.",
  },
  {
    num: '3',
    title: 'Clarity on next steps',
    desc: "If you decide to work together, Rashan Thompson will outline exactly what that looks like before proceeding.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
        <MorphingBlob variant="accent" size="lg" position="top-right" opacity={0.15} />
        <MorphingBlob variant="gold" size="md" position="bottom-left" opacity={0.1} />

        <div className="container text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-foreground">
              Work With <span className="gradient-text">Rashan Thompson</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Let&apos;s start a conversation about what&apos;s possible
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <DirectAnswer className="max-w-3xl mx-auto mt-8">
              Rashan Thompson personally reads and responds to every inquiry. Whether you are
              a business leader seeking AI transformation, an educator exploring partnerships,
              or an organization looking for a speaker, the first step is a conversation.
            </DirectAnswer>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <Section className="relative">
        <MorphingBlob variant="primary" size="md" position="top-left" opacity={0.1} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Column */}
          <ScrollReveal>
            <GlassCard className="p-8">
              <h2 className="mt-0 text-foreground">
                How Can <span className="gradient-text">Rashan Thompson</span> Help You?
              </h2>

              <p className="text-foreground-muted">
                Whether you are a parent, educator, faith leader, or business owner, share
                what you are working on. There is no pressure and no obligation -just a
                conversation about possibilities.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input type="text" id="name" name="name" required placeholder="John Smith" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" required placeholder="john@example.com" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="organization">Organization (if applicable)</label>
                  <input type="text" id="organization" name="organization" placeholder="Your company, school, or organization" />
                </div>

                <div className="form-group">
                  <label htmlFor="audience">Who Would Rashan Be Working With?</label>
                  <select id="audience" name="audience">
                    <option value="">Select an audience...</option>
                    <option value="business">Business / Organization</option>
                    <option value="students">Students / Young People</option>
                    <option value="school">School / Educational Institution</option>
                    <option value="faith">Faith Community / Church</option>
                    <option value="conference">Conference / Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="goal">What Are You Hoping to Achieve? *</label>
                  <textarea
                    id="goal"
                    name="goal"
                    placeholder="Tell me about your goals, your challenges, or what prompted you to reach out..."
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>

                <p className="text-foreground-muted text-sm text-center">
                  No pricing discussions. No pressure. Just conversation.
                </p>
              </form>
            </GlassCard>
          </ScrollReveal>

          {/* Contact Info Column */}
          <div className="space-y-6">
            <ScrollReveal delay={100}>
              <h2 className="mt-0 text-foreground">
                Other Ways to <span className="gradient-text">Connect</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <SpotlightCard className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📧</span>
                  <div>
                    <h3 className="text-lg text-foreground mb-2">Email Directly</h3>
                    <p className="text-foreground-muted mb-3">
                      For straightforward inquiries, feel free to email directly:
                    </p>
                    <a href={`mailto:${siteConfig.email}`} className="text-accent-light font-semibold hover:text-accent">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <SpotlightCard className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">💼</span>
                  <div>
                    <h3 className="text-lg text-foreground mb-2">Connect on LinkedIn</h3>
                    <p className="text-foreground-muted mb-3">
                      For professional networking and to learn more about my work:
                    </p>
                    <a
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-light font-semibold hover:text-accent"
                    >
                      linkedin.com/in/rashan
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <SpotlightCard className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📱</span>
                  <div>
                    <h3 className="text-lg text-foreground mb-2">Phone</h3>
                    <p className="text-foreground-muted mb-3">For time-sensitive matters:</p>
                    <span className="text-foreground font-semibold">{siteConfig.phone}</span>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <SpotlightCard className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📍</span>
                  <div>
                    <h3 className="text-lg text-foreground mb-2">Location</h3>
                    <p className="text-foreground-muted mb-3">Rashan Thompson is based in:</p>
                    <span className="text-foreground font-semibold">{siteConfig.location}</span>
                    <p className="text-foreground-muted text-sm mt-2">
                      Available for engagements throughout the United States
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Schedule a Call */}
      <Section className="relative">
        <MorphingBlob variant="accent" size="md" position="top-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            Prefer to <span className="gradient-text">Schedule Directly</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-center text-foreground-muted max-w-2xl mx-auto">
            Skip the back-and-forth emails. Book a 30-minute introductory call directly
            on my calendar. Choose a time that works for you.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <GlassCard className="mt-8 p-4 max-w-4xl mx-auto overflow-hidden">
            <CalendlyEmbed
              url="https://calendly.com/rashan-thompson/30min?hide_gdpr_banner=1&background_color=0a1628&text_color=f8fafc&primary_color=3b82f6"
              className="rounded-lg"
            />
          </GlassCard>
        </ScrollReveal>
      </Section>

      {/* What to Expect */}
      <Section narrow className="relative">
        <MorphingBlob variant="gold" size="sm" position="top-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            What Happens <span className="gradient-text-gold">Next</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-foreground-muted">When you submit a message, here is what to expect:</p>
        </ScrollReveal>

        <div className="space-y-6 mt-8">
          {expectationSteps.map((step, index) => (
            <ScrollReveal key={step.num} delay={200 + index * 100}>
              <GlassCard className="p-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-gold font-bold">{step.num}</span>
                  </div>
                  <div>
                    <strong className="text-foreground">{step.title}</strong>
                    <p className="text-foreground-muted mt-1 mb-0">{step.desc}</p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <DirectAnswer className="mt-8">
            Rashan Thompson personally reads and responds to every inquiry. There is no sales
            pressure, no pricing discussion in the first conversation -just an honest exploration
            of whether working together makes sense for your situation.
          </DirectAnswer>
        </ScrollReveal>
      </Section>

      {/* Quick Links */}
      <Section className="relative">
        <MorphingBlob variant="accent" size="lg" position="bottom-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            Looking for Something <span className="gradient-text">Specific</span>?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {quickLinks.map((link, index) => (
            <ScrollReveal key={link.href} delay={100 + index * 100}>
              <SpotlightCard className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <span className="text-3xl mb-4">{link.icon}</span>
                  <h3 className="text-lg text-foreground mb-2">{link.title}</h3>
                  <p className="text-foreground-muted flex-grow mb-4">{link.description}</p>
                  <Link href={link.href} className="btn btn-secondary w-fit">
                    {link.cta}
                  </Link>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
