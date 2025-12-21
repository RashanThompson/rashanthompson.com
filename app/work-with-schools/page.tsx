import { Metadata } from 'next';
import { Section, DirectAnswer, Card, Button, ImagePlaceholder } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Work With Schools',
  description:
    'Rashan Thompson partners with schools for curriculum consulting, teacher training, and student workshops. Bringing Fortune 500 technology expertise to educational settings.',
};

const offerings = [
  {
    title: 'Curriculum Consulting',
    description:
      "Rashan Thompson works with curriculum directors and department heads to integrate AI literacy and career readiness into existing programs. This isn't about adding another subject—it's about weaving future-ready skills into what you're already teaching.",
    details:
      "We assess current curriculum, identify integration opportunities, and develop implementation roadmaps that respect your teachers' capacity and your students' developmental stages.",
  },
  {
    title: 'Teacher Training',
    description:
      "Teachers can't teach what they don't understand. Rashan Thompson delivers professional development that equips educators with the knowledge and tools to bring AI and career concepts into their classrooms.",
    details:
      'Training is practical, not theoretical. Teachers leave with lesson plans they can use immediately, along with frameworks for ongoing integration throughout the school year.',
  },
  {
    title: 'Student Workshops',
    description:
      'Sometimes direct engagement has the most impact. Rashan Thompson leads interactive workshops that introduce students to AI literacy, career exploration, entrepreneurship, and financial fundamentals.',
    details:
      "Workshops are tailored to grade level and can be delivered as single sessions, multi-day programs, or recurring engagements. Students engage with someone who has walked the path they're just beginning.",
  },
  {
    title: 'Parent Engagement',
    description:
      "Students don't learn in isolation. Rashan Thompson offers parent workshops and presentations that help families understand the changing landscape and support their children's preparation.",
    details:
      "When parents understand what's coming, they become partners in preparation rather than obstacles to progress. Family financial literacy sessions extend the learning beyond the school day.",
  },
];

export default function WorkWithSchoolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero py-xl bg-white">
        <div className="container text-center">
          <h1>Rashan Thompson Works With Schools</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Enterprise-grade AI and career strategy for the classroom
          </p>
        </div>
      </section>

      {/* Overview */}
      <Section narrow>
        <h2>Why Should Schools Partner With Rashan Thompson?</h2>

        <DirectAnswer>
          Rashan Thompson brings Fortune 500 technology expertise into
          educational settings through curriculum consulting, teacher training,
          student workshops, and parent engagement programs. Schools receive
          enterprise-grade strategy adapted for their unique context and student
          population.
        </DirectAnswer>

        <p>
          Most school administrators know their students need preparation for an
          AI-driven economy. The challenge is finding partners who can deliver
          that preparation authentically—people who have actually operated at
          the intersection of technology and business, not just read about it.
        </p>

        <p>
          I've spent over 25 years implementing technology transformations at
          the highest levels. I've led teams of 1,500+ members, managed $100M+
          in P&L responsibility, and delivered measurable results at Slalom,
          Cognizant, and Conduent. Now I'm committed to bringing that expertise
          to the communities that need it most—starting in classrooms.
        </p>

        <p>
          As a Newark, New Jersey native, I understand what it means for
          students to lack access to networks and knowledge that others take for
          granted. Rashan Thompson's school partnerships exist to close that
          gap.
        </p>
      </Section>

      {/* What Schools Receive */}
      <Section className="bg-white">
        <h2>What Do Schools Receive From Rashan Thompson?</h2>

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

      {/* Who Partners */}
      <Section narrow>
        <h2>Who Typically Partners With Rashan Thompson?</h2>

        <p>
          Rashan Thompson works with educational institutions at all levels,
          from individual schools to district-wide initiatives. Common partners
          include:
        </p>

        <h3 className="text-lg mt-md">Principals and School Leaders</h3>
        <p className="text-muted">
          If you're a principal who sees the gap between what students are
          learning and what the future requires, Rashan Thompson can help you
          develop a strategic approach to closing it. We start with assessment
          and move through implementation, ensuring alignment with your school's
          priorities and resources.
        </p>

        <h3 className="text-lg mt-md">Program Directors and Department Heads</h3>
        <p className="text-muted">
          If you lead career and technical education, STEM programs, or
          after-school initiatives, Rashan Thompson can enhance what you're
          already building. I integrate with existing programs rather than
          competing with them.
        </p>

        <h3 className="text-lg mt-md">Board Members and District Leaders</h3>
        <p className="text-muted">
          If you're setting direction for an entire district, Rashan Thompson
          can help you develop a vision for AI readiness and career preparation
          that scales across multiple schools. Strategy at your level,
          implementation support at the building level.
        </p>

        <h3 className="text-lg mt-md">Charter Schools and Alternative Education</h3>
        <p className="text-muted">
          If you're building something new, Rashan Thompson can help you build
          it right from the start. Charter and alternative schools often have
          the flexibility to innovate—I help you use that flexibility
          strategically.
        </p>
      </Section>

      {/* Newark Angle */}
      <Section className="bg-white" narrow>
        <h2>What Makes Rashan Thompson Different for Schools?</h2>

        <DirectAnswer>
          Rashan Thompson combines Fortune 500 expertise with Newark roots. As a
          native of Newark, New Jersey, he brings personal understanding of what
          it means for students to lack access to networks and opportunities
          that others take for granted. His school partnerships are about equity
          as much as education.
        </DirectAnswer>

        <p>
          I didn't grow up with insider access to technology careers. I had to
          build my way in, learning lessons along the way that I now share with
          students facing similar challenges. That's not something you can
          fake—students know the difference between someone who has lived it and
          someone who has only studied it.
        </p>

        <p>When I work with schools in underserved communities, I bring:</p>

        <ul className="space-y-xs text-muted">
          <li>
            <strong>Relatability</strong> — Students see someone who came from
            where they are and got to where they want to go
          </li>
          <li>
            <strong>Credibility</strong> — Fortune 500 experience that schools
            couldn't otherwise access
          </li>
          <li>
            <strong>Practicality</strong> — Real-world knowledge, not theoretical
            frameworks
          </li>
          <li>
            <strong>Commitment</strong> — Ongoing engagement, not one-time
            appearances
          </li>
        </ul>

        <p>
          Rashan Thompson's school partnerships aren't charity—they're
          investment in future colleagues, customers, and community members. I
          work with schools because I believe in what education can do, and I
          want to make it better.
        </p>
      </Section>

      {/* Process */}
      <Section narrow>
        <h2>What Does the Partnership Process Look Like?</h2>

        <p>
          Every school partnership begins with conversation. Rashan Thompson
          doesn't offer cookie-cutter programs—everything is tailored to your
          context, your students, and your goals. Here's how engagements
          typically develop:
        </p>

        <ol className="space-y-sm mt-md">
          <li className="flex gap-sm">
            <span className="font-heading text-primary font-bold">1.</span>
            <div>
              <strong>Initial Conversation</strong> — We discuss your vision,
              your challenges, and what you're hoping to achieve
            </div>
          </li>
          <li className="flex gap-sm">
            <span className="font-heading text-primary font-bold">2.</span>
            <div>
              <strong>Assessment</strong> — I learn about your current programs,
              student population, and institutional constraints
            </div>
          </li>
          <li className="flex gap-sm">
            <span className="font-heading text-primary font-bold">3.</span>
            <div>
              <strong>Proposal</strong> — I develop a customized engagement plan
              that respects your resources and timeline
            </div>
          </li>
          <li className="flex gap-sm">
            <span className="font-heading text-primary font-bold">4.</span>
            <div>
              <strong>Implementation</strong> — We execute together, with
              ongoing communication and adjustment
            </div>
          </li>
          <li className="flex gap-sm">
            <span className="font-heading text-primary font-bold">5.</span>
            <div>
              <strong>Evaluation</strong> — We measure impact and plan for
              sustainability and extension
            </div>
          </li>
        </ol>

        <p className="mt-md">
          The goal is always to build capacity within your institution, not
          dependence on external consultants. Rashan Thompson's role is to
          accelerate what you're building, not to become a permanent fixture.
        </p>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="bg-primary text-white p-lg rounded-[8px] max-w-2xl mx-auto">
          <h2 className="text-white mt-0">Ready to Prepare Your Students for What's Next?</h2>
          <p className="text-white/90">
            Whether you're exploring possibilities or ready to move forward, I'd
            love to hear about your school and discuss how we might work
            together.
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
