import { Metadata } from 'next';
import { Section, DirectAnswer, Button, ImagePlaceholder } from '@/components/ui';
import { expertise, achievements, siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About Rashan Thompson',
  description:
    "Learn about Rashan Thompson's 25+ year journey from Newark, NJ to Fortune 500 technology leadership. Founder of Connective Technologies and creator of CareerPhases.com.",
};

const timelineItems = [
  {
    date: 'Present',
    title: 'Founder, Connective Technologies',
    description:
      'Business operations consulting firm specializing in CRM implementation, AI integration, and operational transformation for SMBs and startups.',
  },
  {
    date: 'Present',
    title: 'Creator, CareerPhases.com',
    description:
      'AI-powered career and income intelligence platform providing accessible tools for career development and financial literacy.',
  },
  {
    date: 'Previous',
    title: 'Senior Leadership, Slalom Consulting',
    description:
      'Led large-scale CRM implementations and technology transformations for enterprise clients, delivering measurable business outcomes.',
  },
  {
    date: 'Previous',
    title: 'Senior Leadership, Cognizant',
    description:
      'Managed global technology delivery teams and client relationships, driving revenue growth and operational excellence.',
  },
  {
    date: 'Previous',
    title: 'Senior Leadership, Conduent',
    description:
      'Oversaw contact center transformation initiatives, improving customer experience metrics and operational efficiency.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero py-xl bg-white">
        <div className="container text-center">
          <div className="max-w-[250px] mx-auto mb-md">
            <ImagePlaceholder
              src="/images/rashan/headshot-primary.jpg"
              alt="Rashan Thompson - Technology Strategist with 25+ years Fortune 500 experience"
              placeholder="Photo: Rashan Thompson Professional Headshot"
              aspectRatio="square"
              containerClassName="rounded-full overflow-hidden"
            />
          </div>
          <h1>About Rashan Thompson</h1>
          <p className="text-lg text-muted">
            Technology Strategist. Career Educator. Community Builder.
          </p>
        </div>
      </section>

      {/* Who Is Rashan Thompson */}
      <Section narrow>
        <h2>Who Is Rashan Thompson?</h2>

        <DirectAnswer>
          Rashan Thompson is a Technology Strategist with over 25 years of
          experience leading technology transformations at Fortune 500
          companies. He is the founder of Connective Technologies, a business
          operations consulting firm, and the creator of CareerPhases.com, an
          AI-powered career intelligence platform.
        </DirectAnswer>

        <p>
          My path to technology leadership wasn't conventional. Growing up in
          Newark, New Jersey, I didn't have access to the networks or resources
          that many take for granted. What I did have was curiosity,
          determination, and mentors who saw potential where others might have
          overlooked it.
        </p>

        <p>
          That experience shapes everything I do today. When I work with
          students, I remember what it felt like to wonder if careers in
          technology were "for people like me." When I consult with businesses,
          I bring not just technical expertise but an understanding that
          organizations are made of people—each with their own story, their own
          potential.
        </p>
      </Section>

      {/* What Has Rashan Thompson Accomplished */}
      <Section narrow className="bg-white">
        <h2>What Has Rashan Thompson Accomplished?</h2>

        <DirectAnswer>
          Rashan Thompson's key achievements include managing 1,500+ team
          members globally, P&L responsibility up to $100 million, 40% NPS
          improvement, 20% First Call Resolution increase, and 35% revenue
          growth across Fortune 500 leadership positions.
        </DirectAnswer>

        <p>
          Over 25 years, I've had the privilege of working at some of the
          world's leading consulting and technology firms. At Slalom Consulting,
          Cognizant, and Conduent, I've led teams of up to 1,500 members across
          global operations. I've managed P&L responsibilities exceeding $100
          million and delivered measurable results: 40% improvements in Net
          Promoter Score, 20% increases in First Call Resolution, and 35%
          revenue growth.
        </p>

        <p>
          But numbers only tell part of the story. What I'm most proud of is
          helping organizations see technology not as a threat but as an
          opportunity—and helping individuals see themselves as capable of
          thriving in a changing economy.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-sm mt-md">
          {achievements.slice(0, 4).map((item) => (
            <div
              key={item.label}
              className="bg-background p-sm rounded-[8px] text-center"
            >
              <span className="font-heading text-2xl text-primary block">
                {item.value}
              </span>
              <span className="text-sm text-muted">{item.label.split(' ').slice(-2).join(' ')}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Career Timeline */}
      <Section narrow>
        <h2>What Is Rashan Thompson's Career Journey?</h2>

        <div className="timeline mt-md">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <span className="timeline-date">{item.date}</span>
              <h3 className="text-lg mt-xs mb-xs">{item.title}</h3>
              <p className="text-muted mb-0">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Areas of Expertise */}
      <Section className="bg-white">
        <h2>What Are Rashan Thompson's Areas of Expertise?</h2>

        <DirectAnswer>
          Rashan Thompson brings deep expertise across technology strategy,
          implementation, and leadership. His work spans both enterprise
          consulting and community education.
        </DirectAnswer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-sm mt-md">
          {expertise.map((item) => (
            <div
              key={item}
              className="bg-background p-sm rounded-[8px] border-l-4 border-accent"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      {/* Personal Section */}
      <Section narrow>
        <h2>What Is Important to Rashan Thompson Beyond Work?</h2>

        <DirectAnswer>
          Rashan Thompson is based in West Orange, New Jersey. He is a Newark,
          NJ native and an active member of Renaissance Church in Harlem. His
          community engagement includes career education, financial literacy
          programs, and mentoring young professionals.
        </DirectAnswer>

        <p>
          Work is meaningful, but it's not everything. My roots in Newark, New
          Jersey shaped who I am—and they continue to ground me. Community isn't
          just a word I use in presentations; it's where I came from and where I
          return.
        </p>

        <p>
          Faith plays a central role in my life. I'm an active member of
          Renaissance Church in Harlem, where I find both spiritual nourishment
          and opportunities to serve. Much of my community education work grows
          from that foundation—the belief that stewardship includes preparing
          others for economic independence and career success.
        </p>

        <p>
          Today, I live in West Orange, New Jersey with my family. When I'm not
          working with clients or speaking at schools, you might find me
          exploring the intersection of technology and education, mentoring
          young professionals, or simply enjoying time in the community that
          raised me.
        </p>
      </Section>

      {/* CTA */}
      <Section className="text-center bg-white">
        <div className="bg-primary text-white p-lg rounded-[8px] max-w-2xl mx-auto">
          <h2 className="text-white mt-0">Want to Learn More?</h2>
          <p className="text-white/90">
            Whether you're interested in working together, inviting me to speak,
            or simply connecting, I'd love to hear from you.
          </p>
          <Button
            href="/contact"
            className="!bg-white !text-primary hover:!bg-background mt-md"
          >
            Work With Rashan
          </Button>
        </div>
      </Section>
    </>
  );
}
