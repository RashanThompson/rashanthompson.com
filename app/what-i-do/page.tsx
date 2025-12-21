import { Metadata } from 'next';
import { Section, DirectAnswer, Card, Button } from '@/components/ui';
import { workWithCards, siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'What I Do',
  description:
    'Rashan Thompson works with students, schools, faith communities, and businesses to prepare for the AI-driven future through technology strategy and career education.',
};

export default function WhatIDoPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero py-xl bg-white">
        <div className="container text-center">
          <h1>What Does Rashan Thompson Do?</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Preparing people and organizations for the AI-driven future
          </p>
        </div>
      </section>

      {/* Overview */}
      <Section narrow>
        <h2>How Does Rashan Thompson Help People Prepare for the Future?</h2>

        <DirectAnswer>
          Rashan Thompson works with four primary audiences: students and
          families seeking career readiness, schools needing curriculum and
          teacher training, faith communities building economic resilience, and
          businesses transforming operations. The common thread is preparation
          for an AI-driven economy.
        </DirectAnswer>

        <p>
          The future of work is already here. AI isn't a distant possibility -it's
          reshaping every industry, every career path, every community. My
          mission is to help people and organizations get ahead of that change
          rather than be swept up by it.
        </p>

        <p>
          I bring two decades of Fortune 500 experience to every engagement, but
          I translate that expertise for the audience in front of me. A workshop
          for eighth-graders looks different from a consulting engagement with a
          mid-size business. What remains constant is the commitment to
          practical, actionable preparation.
        </p>

        <blockquote className="italic text-accent border-l-4 border-accent pl-md my-md">
          "The best time to prepare was yesterday. The second best time is now."
        </blockquote>
      </Section>

      {/* Audiences */}
      <Section className="bg-white">
        <h2>Who Does Rashan Thompson Work With?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mt-md">
          {/* Students */}
          <div className="card">
            <h3>Students & Families</h3>
            <p className="text-muted">
              Parents who want their children to thrive in an AI economy.
              Students curious about technology careers. Young people ready to
              build skills that will serve them for life.
            </p>
            <h4 className="text-base font-semibold mt-sm">What Students Learn:</h4>
            <ul className="text-muted space-y-xs">
              <li>AI Literacy  - Understanding and using AI as a creative tool</li>
              <li>Future Careers  - STEM pathways beyond traditional coding</li>
              <li>Youth Entrepreneurship  - Building business thinking early</li>
              <li>Soft Skills  - Communication, leadership, emotional intelligence</li>
              <li>The Income Engine  - Financial education fundamentals</li>
            </ul>
            <Button href="/work-with-students" variant="secondary" className="mt-sm">
              Learn More
            </Button>
          </div>

          {/* Schools */}
          <div className="card">
            <h3>Schools & Educators</h3>
            <p className="text-muted">
              Principals seeking to future-proof their curriculum. Program
              directors building career readiness initiatives. Board members
              investing in student outcomes.
            </p>
            <h4 className="text-base font-semibold mt-sm">What Schools Receive:</h4>
            <ul className="text-muted space-y-xs">
              <li>Curriculum Consulting  - Integrating AI and career readiness</li>
              <li>Teacher Training  - Equipping educators with technology tools</li>
              <li>Student Workshops  - Direct engagement with students</li>
              <li>Parent Engagement  - Bringing families into the conversation</li>
              <li>Assessment & Strategy  - Tailored recommendations</li>
            </ul>
            <Button href="/work-with-schools" variant="secondary" className="mt-sm">
              Learn More
            </Button>
          </div>

          {/* Faith Communities */}
          <div className="card">
            <h3>Faith Communities</h3>
            <p className="text-muted">
              Pastors and faith leaders investing in their congregation's
              economic wellbeing. Community organizers building programs that
              last. Churches ready to serve beyond Sunday.
            </p>
            <h4 className="text-base font-semibold mt-sm">What Faith Communities Gain:</h4>
            <ul className="text-muted space-y-xs">
              <li>Youth Career Workshops  - Preparing young members for work</li>
              <li>Family Financial Wellness  - Stewardship meets strategy</li>
              <li>Entrepreneurship Training  - Building economic independence</li>
              <li>Career Transition Support  - Helping members navigate change</li>
              <li>Technology Literacy  - Demystifying AI for all ages</li>
            </ul>
            <Button href="/work-with-faith" variant="secondary" className="mt-sm">
              Learn More
            </Button>
          </div>

          {/* Businesses */}
          <div className="card">
            <h3>Businesses & Organizations</h3>
            <p className="text-muted">
              Small and medium businesses ready to scale their operations.
              Startups seeking CRM implementation expertise. Organizations
              needing AI strategy without enterprise budgets.
            </p>
            <h4 className="text-base font-semibold mt-sm">What Businesses Achieve:</h4>
            <ul className="text-muted space-y-xs">
              <li>CRM Implementation  - Salesforce, Microsoft Dynamics, Zoho</li>
              <li>AI Integration Strategy  - Practical, results-focused approaches</li>
              <li>Contact Center Transformation  - Improved customer experience</li>
              <li>Revenue Operations  - Aligning sales, marketing, and service</li>
              <li>Operational Optimization  - Doing more with less</li>
            </ul>
            <Button href={siteConfig.connectiveTech} variant="secondary" external className="mt-sm">
              Visit Connective Technologies
            </Button>
          </div>
        </div>
      </Section>

      {/* Common Thread */}
      <Section narrow>
        <h2>What Is the Common Thread in Rashan Thompson's Work?</h2>

        <DirectAnswer>
          Whether working with a seventh-grader or a CEO, Rashan Thompson
          focuses on one goal: preparing people and organizations to thrive as
          technology reshapes how we work, learn, and live. Every engagement is
          about readiness for what's next.
        </DirectAnswer>

        <p>
          I've seen the same patterns across every audience I serve. Uncertainty
          about AI. Worry about being left behind. A desire to prepare -but
          uncertainty about where to start. That's where I come in.
        </p>

        <p>
          My approach is practical, not theoretical. I don't deliver abstract
          lectures about the future. I provide frameworks, tools, and skills
          that people can use immediately. When I leave a workshop, participants
          have something concrete they can apply the next day.
        </p>

        <h3>What Makes This Work Different?</h3>

        <p>
          Most technology education is either too abstract (academic theory) or
          too narrow (learn this one tool). Rashan Thompson offers something
          different: strategic thinking combined with practical application,
          delivered by someone who has operated at the highest levels of
          enterprise technology.
        </p>

        <p>
          I bring Fortune 500 rigor to community settings. I translate complex
          concepts into accessible language. And I stay engaged -because
          preparation isn't a one-time event, it's an ongoing journey.
        </p>
      </Section>

      {/* Related Ventures */}
      <Section className="bg-white">
        <h2>What Are Rashan Thompson's Ventures?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mt-md">
          <Card
            title="Connective Technologies"
            description="My business operations consulting firm serves small and medium businesses that need enterprise-quality CRM implementation and technology strategy without enterprise budgets. We specialize in Salesforce, Microsoft Dynamics, and Zoho implementations, along with AI integration and operational transformation."
            href={siteConfig.connectiveTech}
          />
          <Card
            title="CareerPhases.com"
            description="My AI-powered career and income intelligence platform makes professional guidance accessible to everyone. CareerPhases provides tools for career exploration, income planning, and workforce readiness -powered by AI but grounded in real-world experience."
            href={siteConfig.careerPhases}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="bg-primary text-white p-lg rounded-[8px] max-w-2xl mx-auto">
          <h2 className="text-white mt-0">Ready to Start a Conversation?</h2>
          <p className="text-white/90">
            Whether you're a parent, educator, faith leader, or business owner,
            I'd love to discuss how we might work together.
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
