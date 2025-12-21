import { Metadata } from 'next';
import { Section, DirectAnswer, Card, Button, ImagePlaceholder } from '@/components/ui';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Work With Students',
  description:
    'Rashan Thompson offers K-12 programs in AI literacy, future careers, youth entrepreneurship, and financial education. Prepare students for the AI-driven economy.',
};

const programs = [
  {
    title: 'AI Literacy',
    description:
      "AI isn't just for programmers. Rashan Thompson teaches students to understand AI as a tool for creativity, problem-solving, and career advancement. Students learn what AI is, how it works at a conceptual level, and most importantly—how to use it responsibly and effectively.",
    details:
      'We explore real applications: AI in art, music, writing, science, and business. Students leave understanding that AI amplifies human capability rather than replacing it.',
    image: '/images/stock/ai-technology.jpg',
    imageAlt: 'Young student exploring artificial intelligence concepts and applications',
  },
  {
    title: 'Future Careers',
    description:
      'STEM careers extend far beyond traditional coding. Rashan Thompson introduces students to career paths they may never have considered: data science, UX design, product management, technical sales, cybersecurity, and roles that blend technology with every industry imaginable.',
    details:
      "Students explore how their existing interests—art, sports, healthcare, entertainment—connect to technology careers. The goal is expanding what's possible in their minds.",
    image: '/images/stock/career-growth.jpg',
    imageAlt: 'Students exploring diverse STEM career pathways',
  },
  {
    title: 'Youth Entrepreneurship',
    description:
      'Not every student will start a business, but every student benefits from entrepreneurial thinking. Rashan Thompson teaches problem identification, solution development, and the basics of creating value for others.',
    details:
      'These skills translate whether students become entrepreneurs, employees, or community leaders. Understanding how business works empowers students to navigate any career path.',
    image: '/images/stock/team-collaboration.jpg',
    imageAlt: 'Young entrepreneurs collaborating on business ideas',
  },
  {
    title: 'Soft Skills Development',
    description:
      "Technical skills get you the interview. Soft skills get you the career. Rashan Thompson emphasizes communication, leadership, emotional intelligence, and collaboration—skills that become more valuable as AI handles routine tasks.",
    details:
      "Students practice presenting ideas, working in teams, giving and receiving feedback, and adapting to new situations. These are the skills that can't be automated.",
    image: '/images/stock/student-learning.jpg',
    imageAlt: 'Students developing communication and leadership skills',
  },
];

export default function WorkWithStudentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero py-xl bg-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <ImagePlaceholder
            src="/images/rashan/workshop-students.jpg"
            alt="Rashan Thompson conducting AI literacy workshop with students"
            placeholder="Photo: Rashan Thompson Workshop with Students"
            aspectRatio="hero"
            fill
            containerClassName="w-full h-full opacity-20"
          />
        </div>
        <div className="container text-center">
          <h1>Rashan Thompson Works With Students</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Preparing the next generation for careers that don't exist yet
          </p>
        </div>
      </section>

      {/* Overview */}
      <Section narrow>
        <h2>Why Should Students Learn About AI and Careers Now?</h2>

        <DirectAnswer>
          Rashan Thompson offers K-12 programs that prepare students for the
          AI-driven economy through AI literacy, future career exploration,
          youth entrepreneurship, soft skills development, and financial
          education. These programs transform technology from something
          intimidating into a tool students can use to build their futures.
        </DirectAnswer>

        <p>
          By the time today's middle schoolers enter the workforce, AI will have
          transformed every industry. The jobs they'll hold may not exist today.
          The question isn't whether they'll encounter AI—it's whether they'll
          be prepared to use it as a tool or be replaced by it.
        </p>

        <p>
          I believe every young person deserves access to the knowledge and
          skills that build successful careers. That's not just coding or
          technical training—it's understanding how technology, business, and
          human skills intersect. It's learning to think strategically about
          income and opportunity. It's developing the confidence to adapt as the
          world changes.
        </p>

        <p>
          When I work with students, I bring the same strategic thinking I've
          applied to Fortune 500 companies—but translated for young minds. I
          don't talk down to students. I talk to them as future professionals,
          because that's exactly what they are.
        </p>
      </Section>

      {/* Programs */}
      <Section className="bg-white">
        <h2>What Do Students Learn With Rashan Thompson?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mt-md">
          {programs.map((program) => (
            <div key={program.title} className="card">
              <ImagePlaceholder
                src={program.image}
                alt={program.imageAlt}
                placeholder={`Stock: ${program.title}`}
                aspectRatio="video"
                containerClassName="mb-sm"
              />
              <h3>{program.title}</h3>
              <p className="text-muted">{program.description}</p>
              <p className="text-muted text-sm">{program.details}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The Income Engine */}
      <Section narrow>
        <h2>What Is "The Income Engine"?</h2>

        <DirectAnswer>
          "The Income Engine" is Rashan Thompson's financial education program
          designed for young people and families. It covers money management
          fundamentals, income generation strategies, and financial wellness
          principles to help participants build a strong foundation for economic
          independence.
        </DirectAnswer>

        <p>
          Financial literacy changes lives. I've seen talented young people make
          choices that limited their options simply because no one taught them
          how money works. The Income Engine exists to change that.
        </p>

        <p>This isn't abstract personal finance theory. It's practical education about:</p>

        <ul className="space-y-xs text-muted">
          <li>
            <strong>Understanding Income</strong> — What is income? Where does it
            come from? How do different careers compare?
          </li>
          <li>
            <strong>Managing Money</strong> — Budgeting, saving, and making smart
            decisions with limited resources
          </li>
          <li>
            <strong>Building Wealth</strong> — The basics of investing, compound
            growth, and long-term thinking
          </li>
          <li>
            <strong>Avoiding Traps</strong> — Understanding debt, scams, and
            financial decisions that hold people back
          </li>
          <li>
            <strong>Creating Opportunity</strong> — How education, skills, and
            relationships translate into economic advancement
          </li>
        </ul>

        <p>
          The Income Engine is about giving young people the financial
          intelligence that many families don't have access to—the knowledge
          that builds generational wealth.
        </p>
      </Section>

      {/* Who Is This For */}
      <Section className="bg-white" narrow>
        <h2>Who Are Rashan Thompson's Student Programs For?</h2>

        <p>
          Rashan Thompson's student programs serve K-12 students, with content
          tailored to developmental stage and context. These programs work for:
        </p>

        <h3 className="text-lg mt-md">Parents Who Want More for Their Children</h3>
        <p className="text-muted">
          If you're a parent who recognizes that the world your child will enter
          is different from the one you grew up in, these programs provide the
          preparation standard curricula often miss. You don't need a technology
          background—I translate complex concepts into accessible learning.
        </p>

        <h3 className="text-lg mt-md">Students Curious About Technology and Business</h3>
        <p className="text-muted">
          If you're a student wondering what AI means for your future, or
          curious about careers you haven't heard about in school, these
          programs open doors. You don't need to be a "tech person"—curiosity is
          the only prerequisite.
        </p>

        <h3 className="text-lg mt-md">Youth Groups and Community Organizations</h3>
        <p className="text-muted">
          If you lead a youth group, after-school program, or community
          organization, Rashan Thompson can deliver workshops tailored to your
          context. These programs work in schools, churches, community centers,
          and anywhere young people gather.
        </p>
      </Section>

      {/* Outcomes */}
      <Section narrow>
        <h2>What Outcomes Can You Expect?</h2>

        <p>Students who participate in Rashan Thompson's programs leave with:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-sm mt-md">
          {[
            'A clear understanding of what AI is and how to use it productively',
            'Awareness of career paths they may not have known existed',
            'Foundational entrepreneurial and business thinking skills',
            'Improved communication and presentation abilities',
            'Financial literacy fundamentals through The Income Engine',
            'Confidence to explore technology without intimidation',
            'A network connection to someone who has "been there"',
          ].map((outcome) => (
            <div
              key={outcome}
              className="bg-background p-sm rounded-[8px] border-l-4 border-accent"
            >
              {outcome}
            </div>
          ))}
        </div>

        <DirectAnswer className="mt-md">
          Rashan Thompson's student programs don't just teach content—they shift
          mindsets. Students leave seeing technology as an opportunity rather
          than a threat, and themselves as capable of thriving in whatever the
          future holds.
        </DirectAnswer>
      </Section>

      {/* CareerPhases Link */}
      <Section className="bg-white text-center">
        <h2>Want Digital Resources for Career Exploration?</h2>
        <p className="max-w-2xl mx-auto text-muted">
          CareerPhases.com is Rashan Thompson's AI-powered career intelligence
          platform. Students and families can access tools for career
          exploration, income planning, and skill development—extending the
          learning beyond live workshops.
        </p>
        <Button href={siteConfig.careerPhases} external className="mt-md">
          Explore CareerPhases.com
        </Button>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="bg-primary text-white p-lg rounded-[8px] max-w-2xl mx-auto">
          <h2 className="text-white mt-0">Ready to Invest in Your Student's Future?</h2>
          <p className="text-white/90">
            Whether you're a parent, youth leader, or educator, I'd love to
            discuss how we might work together to prepare young people for
            what's next.
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
