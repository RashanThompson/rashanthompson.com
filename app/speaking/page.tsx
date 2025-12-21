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
import { speakingTopics, siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Keynote Speaker on AI & Business Transformation | Rashan Thompson',
  description:
    'Invite Rashan Thompson to speak at your conference, school, or organization. Topics include AI readiness, career development, technology leadership, and financial literacy.',
  keywords: [
    'AI keynote speaker',
    'business transformation speaker',
    'technology leadership speaker',
    'career development speaker',
    'Rashan Thompson speaking',
    'corporate conference speaker',
    'school assembly speaker',
    'faith community speaker',
  ],
};

const formats = [
  {
    title: 'Keynote Addresses',
    icon: '🎤',
    description:
      'High-impact presentations for conferences, summits, and large gatherings. Keynotes typically run 30-60 minutes and can be tailored to your event theme.',
    bestFor: 'Conferences, annual meetings, executive summits',
  },
  {
    title: 'Workshops & Training',
    icon: '🛠️',
    description:
      'Interactive sessions for hands-on learning. Workshops run 90 minutes to full-day and include exercises, discussions, and takeaway materials.',
    bestFor: 'Professional development, team building, skill development',
  },
  {
    title: 'Panel Participation',
    icon: '💬',
    description:
      'Expert contribution to moderated discussions. Rashan Thompson brings informed perspectives and engaging dialogue to panel formats.',
    bestFor: 'Industry events, thought leadership forums, expert roundtables',
  },
  {
    title: 'Fireside Chats',
    icon: '🔥',
    description:
      "Conversational formats for intimate settings. Q&A-driven sessions that allow deep exploration of topics that matter to your audience.",
    bestFor: 'Leadership retreats, executive offsites, intimate gatherings',
  },
];

const audiences = [
  { name: 'Corporate conferences and off-sites', icon: '🏢' },
  { name: 'Professional associations and industry groups', icon: '👔' },
  { name: 'K-12 schools and school districts', icon: '🏫' },
  { name: 'Colleges and universities', icon: '🎓' },
  { name: 'Faith communities and religious organizations', icon: '⛪' },
  { name: 'Nonprofit organizations and foundations', icon: '❤️' },
  { name: 'Government agencies and workforce development', icon: '🏛️' },
  { name: 'Community organizations and civic groups', icon: '🤝' },
];

export default function SpeakingPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <MorphingBlob variant="accent" size="lg" position="top-right" opacity={0.15} />
        <MorphingBlob variant="primary" size="md" position="bottom-left" opacity={0.1} />

        <div className="container text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-foreground">
              Invite <span className="gradient-text">Rashan Thompson</span> to Speak
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Keynotes, workshops, and panels for conferences, schools, and organizations
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <DirectAnswer className="max-w-3xl mx-auto mt-8">
              Rashan Thompson delivers keynotes, workshops, and panel participation on AI
              readiness, career development, technology leadership, and financial literacy.
              With 25+ years of Fortune 500 experience and a commitment to community education,
              he brings both credibility and accessibility to any stage.
            </DirectAnswer>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Invite */}
      <Section narrow className="relative">
        <MorphingBlob variant="gold" size="sm" position="top-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            Why Invite <span className="gradient-text">Rashan Thompson</span> to Your Event?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            The best speakers do more than share information—they change how audiences think.
            After a session with Rashan Thompson, your audience will not just know more facts.
            They will see technology differently, understand their own capabilities differently,
            and leave with actionable steps they can take immediately.
          </DirectAnswer>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-foreground-muted">
            Rashan Thompson brings the same strategic rigor to speaking that he brought to
            leading teams of 1,500+ members at Fortune 500 companies. Every presentation is
            prepared with your audience in mind—their context, their challenges, their questions.
            He does not recycle generic content. He crafts experiences that serve the people
            in the room.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {[
            { value: '25+', label: 'Years Experience', icon: '⚡' },
            { value: '100%', label: 'Customized', icon: '🎯' },
            { value: 'All', label: 'Audience Levels', icon: '👥' },
          ].map((item, index) => (
            <ScrollReveal key={item.label} delay={300 + index * 100}>
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

      {/* Topics */}
      <Section className="relative">
        <MorphingBlob variant="accent" size="lg" position="bottom-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            What Topics Does <span className="gradient-text">Rashan Thompson</span> Speak About?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {speakingTopics.map((topic, index) => (
            <ScrollReveal key={topic.title} delay={100 + index * 100}>
              <TiltCard className="h-full">
                <GlassCard className="p-6 h-full">
                  <h3 className="text-lg text-foreground mb-3">{topic.title}</h3>
                  <p className="text-foreground-muted text-sm mb-4">{topic.description}</p>
                  <p className="text-xs text-accent-light">
                    <strong>Best for:</strong> {topic.audience}
                  </p>
                </GlassCard>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={700}>
          <p className="text-center text-foreground-muted mt-8 italic">
            Custom topics available. Let&apos;s discuss what your audience needs most.
          </p>
        </ScrollReveal>
      </Section>

      {/* Formats */}
      <Section className="relative">
        <MorphingBlob variant="primary" size="md" position="top-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            What Speaking Formats Does <span className="gradient-text">Rashan Thompson</span> Offer?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {formats.map((format, index) => (
            <ScrollReveal key={format.title} delay={100 + index * 100}>
              <SpotlightCard className="p-6 h-full">
                <span className="text-4xl mb-4 block">{format.icon}</span>
                <h3 className="text-xl text-foreground mb-3">{format.title}</h3>
                <p className="text-foreground-muted mb-4">{format.description}</p>
                <p className="text-sm text-accent-light">
                  <strong>Best for:</strong> {format.bestFor}
                </p>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Audiences */}
      <Section narrow className="relative">
        <MorphingBlob variant="gold" size="sm" position="top-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            Who Typically Invites <span className="gradient-text-gold">Rashan Thompson</span> to Speak?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            Rashan Thompson speaks at corporate conferences, educational institutions, faith
            communities, and nonprofit organizations. His audiences range from Fortune 500
            executives to middle school students—and he adjusts his approach for each.
          </DirectAnswer>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {audiences.map((audience, index) => (
            <ScrollReveal key={audience.name} delay={200 + index * 50}>
              <GlassCard className="p-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{audience.icon}</span>
                  <span className="text-foreground">{audience.name}</span>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Inquiry Form */}
      <Section narrow className="relative">
        <MorphingBlob variant="accent" size="md" position="bottom-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            How Can You Invite <span className="gradient-text">Rashan Thompson</span> to Speak?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-foreground-muted">
            To discuss a speaking engagement, please share a few details about your event:
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <GlassCard className="p-8 mt-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input type="text" id="name" name="name" required placeholder="John Smith" />
                </div>

                <div className="form-group">
                  <label htmlFor="organization">Organization *</label>
                  <input type="text" id="organization" name="organization" required placeholder="Your company or organization" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required placeholder="john@example.com" />
              </div>

              <div className="form-group">
                <label htmlFor="event-type">Type of Event *</label>
                <select id="event-type" name="event-type" required>
                  <option value="">Select event type...</option>
                  <option value="conference">Conference Keynote</option>
                  <option value="workshop">Workshop / Training</option>
                  <option value="panel">Panel Discussion</option>
                  <option value="school">School Presentation</option>
                  <option value="faith">Faith Community Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="audience">Who Is Your Audience? *</label>
                <input
                  type="text"
                  id="audience"
                  name="audience"
                  placeholder="e.g., high school students, sales executives, church members"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="details">Tell Me About Your Event</label>
                <textarea
                  id="details"
                  name="details"
                  placeholder="Event date, location, theme, what you're hoping to achieve..."
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Submit Speaking Inquiry
              </button>
            </form>

            <p className="text-foreground-muted text-center mt-6">
              Or email directly:{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-accent-light hover:text-accent underline">
                {siteConfig.email}
              </a>
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
              Ready to Transform Your <span className="gradient-text">Event</span>?
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mb-8">
              Rashan Thompson brings Fortune 500 expertise and genuine connection to every
              stage. Let&apos;s discuss how to make your event unforgettable.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Start a Conversation
              </Link>
              <Link href="/about" className="btn btn-secondary">
                Learn About Rashan
              </Link>
            </div>
          </GlassCard>
        </ScrollReveal>
      </Section>
    </>
  );
}
