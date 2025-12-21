import { Metadata } from 'next';
import { Section, DirectAnswer, Card, Button, ImagePlaceholder } from '@/components/ui';
import { speakingTopics } from '@/data/site';

export const metadata: Metadata = {
  title: 'Speaking & Workshops',
  description:
    'Invite Rashan Thompson to speak at your conference, school, or organization. Topics include AI readiness, career development, technology leadership, and financial literacy.',
};

const formats = [
  {
    title: 'Keynote Addresses',
    description:
      'High-impact presentations for conferences, summits, and large gatherings. Keynotes typically run 30-60 minutes and can be tailored to your event theme.',
  },
  {
    title: 'Workshops & Training',
    description:
      'Interactive sessions for hands-on learning. Workshops run 90 minutes to full-day and include exercises, discussions, and takeaway materials.',
  },
  {
    title: 'Panel Participation',
    description:
      'Expert contribution to moderated discussions. Rashan Thompson brings informed perspectives and engaging dialogue to panel formats.',
  },
  {
    title: 'Fireside Chats',
    description:
      "Conversational formats for intimate settings. Q&A-driven sessions that allow deep exploration of topics that matter to your audience.",
  },
];

const audiences = [
  'Corporate conferences and off-sites',
  'Professional associations and industry groups',
  'K-12 schools and school districts',
  'Colleges and universities',
  'Faith communities and religious organizations',
  'Nonprofit organizations and foundations',
  'Government agencies and workforce development',
  'Community organizations and civic groups',
];

export default function SpeakingPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero py-xl bg-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <ImagePlaceholder
            src="/images/rashan/speaking-stage.jpg"
            alt="Rashan Thompson delivering keynote speech on AI and workforce transformation"
            placeholder="Photo: Rashan Thompson Speaking on Stage"
            aspectRatio="hero"
            fill
            containerClassName="w-full h-full opacity-20"
          />
        </div>
        <div className="container text-center">
          <h1>Invite Rashan Thompson to Speak</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Keynotes, workshops, and panels for conferences, schools, and
            organizations
          </p>
        </div>
      </section>

      {/* Overview */}
      <Section narrow>
        <h2>Why Invite Rashan Thompson to Your Event?</h2>

        <DirectAnswer>
          Rashan Thompson delivers keynotes, workshops, and panel participation
          on AI readiness, career development, technology leadership, and
          financial literacy. With 25+ years of Fortune 500 experience and a
          commitment to community education, he brings both credibility and
          accessibility to any stage.
        </DirectAnswer>

        <p>
          The best speakers do more than share information—they change how
          audiences think. After a session with Rashan Thompson, your audience
          won't just know more facts. They'll see technology differently.
          They'll understand their own capabilities differently. They'll leave
          with actionable steps they can take immediately.
        </p>

        <p>
          I bring the same strategic rigor to speaking that I brought to leading
          teams of 1,500+ members at Fortune 500 companies. Every presentation
          is prepared with your audience in mind—their context, their
          challenges, their questions. I don't recycle generic content. I craft
          experiences that serve the people in the room.
        </p>
      </Section>

      {/* Topics */}
      <Section className="bg-white">
        <h2>What Topics Does Rashan Thompson Speak About?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md mt-md">
          {speakingTopics.map((topic) => (
            <div key={topic.title} className="card">
              <h3 className="text-lg">{topic.title}</h3>
              <p className="text-muted text-sm">{topic.description}</p>
              <p className="text-xs text-accent mt-sm">
                <strong>Best for:</strong> {topic.audience}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted mt-md italic">
          Custom topics available. Let's discuss what your audience needs most.
        </p>
      </Section>

      {/* Formats */}
      <Section narrow>
        <h2>What Speaking Formats Does Rashan Thompson Offer?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mt-md">
          {formats.map((format) => (
            <div key={format.title}>
              <h3 className="text-lg mb-xs">{format.title}</h3>
              <p className="text-muted">{format.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Audiences */}
      <Section className="bg-white" narrow>
        <h2>Who Typically Invites Rashan Thompson to Speak?</h2>

        <DirectAnswer>
          Rashan Thompson speaks at corporate conferences, educational
          institutions, faith communities, and nonprofit organizations. His
          audiences range from Fortune 500 executives to middle school
          students—and he adjusts his approach for each.
        </DirectAnswer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-sm mt-md">
          {audiences.map((audience) => (
            <div
              key={audience}
              className="bg-background p-sm rounded-[8px] border-l-4 border-accent"
            >
              {audience}
            </div>
          ))}
        </div>
      </Section>

      {/* Inquiry Form */}
      <Section narrow>
        <h2>How Can You Invite Rashan Thompson to Speak?</h2>

        <p>To discuss a speaking engagement, please share a few details about your event:</p>

        <form className="mt-md space-y-sm">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="organization">Organization</label>
            <input type="text" id="organization" name="organization" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="event-type">Type of Event</label>
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
            <label htmlFor="audience">Who Is Your Audience?</label>
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

          <Button type="submit">Submit Speaking Inquiry</Button>
        </form>

        <p className="text-muted text-center mt-md">
          Or email directly:{' '}
          <a href="mailto:rashan@rashanthompson.com">rashan@rashanthompson.com</a>
        </p>
      </Section>
    </>
  );
}
