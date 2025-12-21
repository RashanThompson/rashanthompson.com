import { Metadata } from 'next';
import { Section, DirectAnswer, Card, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Work With Faith Communities',
  description:
    'Rashan Thompson partners with faith communities for career workshops, financial wellness programs, and entrepreneurship training. Stewardship meets technology strategy.',
};

const offerings = [
  {
    title: 'Youth Career Workshops',
    description:
      'Young people in faith communities often hear about character and values—but may not hear about careers and economics. Rashan Thompson delivers workshops that connect faith principles with practical career preparation.',
    details:
      "Youth learn about AI literacy, future career paths, entrepreneurship, and financial fundamentals—all in a context that honors the values their families hold dear. These workshops work for youth groups, vacation Bible school programs, or special events.",
  },
  {
    title: 'Family Financial Wellness',
    description:
      'Financial stress affects families at every income level. Rashan Thompson offers financial wellness programs that help families understand budgeting, saving, investing, and wealth-building—through a lens of stewardship and responsibility.',
    details:
      'These programs serve parents, couples, and multi-generational families. Content ranges from basic money management to understanding the changing economy and preparing children for future success.',
  },
  {
    title: 'Entrepreneurship Training',
    description:
      'Economic independence often means business ownership. Rashan Thompson introduces entrepreneurship concepts to congregation members considering starting businesses or side ventures.',
    details:
      'From identifying opportunities to understanding business basics, these sessions demystify entrepreneurship and help members see themselves as capable of creating economic value for their families and communities.',
  },
  {
    title: 'Career Transition Support',
    description:
      'Job loss, industry change, retirement planning—adults face career transitions at every stage. Rashan Thompson provides workshops and support for members navigating these changes.',
    details:
      "Content includes understanding the modern job market, leveraging AI tools for job searching, identifying transferable skills, and exploring new career possibilities. Transitions are treated as opportunities, not just challenges.",
  },
];

const formats = [
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
      <section className="hero py-xl bg-white">
        <div className="container text-center">
          <h1>Rashan Thompson Works With Faith Communities</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Stewardship through technology and financial empowerment
          </p>
        </div>
      </section>

      {/* Overview */}
      <Section narrow>
        <h2>Why Should Faith Communities Partner With Rashan Thompson?</h2>

        <DirectAnswer>
          Rashan Thompson partners with faith communities to deliver youth
          career workshops, family financial wellness programs, entrepreneurship
          training, and career transition support. As an active member of
          Renaissance Church in Harlem, he brings personal faith commitment
          alongside professional expertise.
        </DirectAnswer>

        <p>
          Houses of worship have always been more than places of spiritual
          practice. They're community anchors—spaces where families find
          support, young people find guidance, and everyone finds belonging. For
          centuries, faith communities have served their members' holistic
          needs: spiritual, emotional, and practical.
        </p>

        <p>
          Today, practical needs include economic preparation. Families need to
          understand how technology is reshaping work. Young people need
          exposure to careers they may never have encountered. Adults navigating
          career transitions need guidance and support. This is where Rashan
          Thompson can help.
        </p>

        <p>
          I'm not coming as an outsider. As a member of Renaissance Church in
          Harlem, I understand the rhythms and responsibilities of faith
          community life. I know that Sunday morning isn't the only time
          ministry happens—and I know that preparing members for economic
          independence is as much an act of stewardship as any other form of
          service.
        </p>
      </Section>

      {/* Offerings */}
      <Section className="bg-white">
        <h2>What Do Faith Communities Gain From Rashan Thompson?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mt-md">
          {offerings.map((offering) => (
            <div key={offering.title} className="card">
              <h3>{offering.title}</h3>
              <p className="text-muted">{offering.description}</p>
              <p className="text-muted text-sm">{offering.details}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Personal Connection */}
      <Section narrow>
        <h2>What Is Rashan Thompson's Connection to Faith Communities?</h2>

        <DirectAnswer>
          Rashan Thompson is an active member of Renaissance Church in Harlem.
          His work with faith communities grows from personal faith commitment,
          not just professional interest. He understands faith community
          dynamics from the inside.
        </DirectAnswer>

        <p>
          Faith isn't something I put on for Sunday mornings. It's foundational
          to who I am and how I approach my work. When I partner with faith
          communities, I'm not just delivering a service—I'm participating in
          the same mission of helping people thrive that drives my own church
          involvement.
        </p>

        <p>That means I understand the unique dynamics of faith community work:</p>

        <ul className="space-y-xs text-muted">
          <li>Volunteer structures and leadership models</li>
          <li>The rhythm of the church calendar</li>
          <li>The diversity of ages and backgrounds in typical congregations</li>
          <li>The importance of aligning programs with community values</li>
          <li>The difference between events and ongoing ministry</li>
        </ul>

        <p>
          Rashan Thompson's faith community partnerships are designed to support
          what you're already building, not to impose external frameworks that
          don't fit your culture.
        </p>
      </Section>

      {/* Who Partners */}
      <Section className="bg-white" narrow>
        <h2>Who Typically Partners With Rashan Thompson?</h2>

        <p>
          Rashan Thompson works with faith communities of all sizes and
          denominations. Common partners include:
        </p>

        <h3 className="text-lg mt-md">Pastors and Senior Leaders</h3>
        <p className="text-muted">
          If you're a pastor who sees economic empowerment as part of your
          ministry mandate, Rashan Thompson can help you develop and deliver
          programming that serves your congregation's practical needs alongside
          their spiritual ones.
        </p>

        <h3 className="text-lg mt-md">Youth Pastors and Youth Leaders</h3>
        <p className="text-muted">
          If you lead youth ministry and want to prepare young people for
          economic realities without abandoning faith foundations, Rashan
          Thompson offers content that bridges both worlds authentically.
        </p>

        <h3 className="text-lg mt-md">Deacons and Ministry Leaders</h3>
        <p className="text-muted">
          If you lead benevolence ministries, community outreach, or member
          care, Rashan Thompson can help you move from crisis response to
          proactive preparation—helping members build resilience before
          challenges arise.
        </p>

        <h3 className="text-lg mt-md">Community Organizers and Coalition Leaders</h3>
        <p className="text-muted">
          If you coordinate programming across multiple congregations or
          faith-based organizations, Rashan Thompson can deliver content that
          serves diverse communities with shared values.
        </p>
      </Section>

      {/* Program Formats */}
      <Section narrow>
        <h2>What Program Formats Does Rashan Thompson Offer?</h2>

        <p>
          Rashan Thompson adapts to your community's needs and rhythms. Program
          formats include:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-sm mt-md">
          {formats.map((format) => (
            <div
              key={format}
              className="bg-background p-sm rounded-[8px] border-l-4 border-accent"
            >
              {format}
            </div>
          ))}
        </div>

        <p className="mt-md">
          Every engagement begins with conversation about your community's
          specific context and goals. Rashan Thompson doesn't deliver generic
          content—everything is tailored to honor your community's values and
          serve your members' real needs.
        </p>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="bg-primary text-white p-lg rounded-[8px] max-w-2xl mx-auto">
          <h2 className="text-white mt-0">Ready to Serve Your Community's Economic Wellbeing?</h2>
          <p className="text-white/90">
            Whether you're a pastor, youth leader, or ministry coordinator, I'd
            love to discuss how we might partner to prepare your congregation
            for what's next.
          </p>
          <Button
            href="/contact"
            className="!bg-white !text-primary hover:!bg-background mt-md"
          >
            Start a Conversation
          </Button>
        </div>
      </Section>
    </>
  );
}
