import { Metadata } from 'next';
import Link from 'next/link';
import { Section, DirectAnswer, Card, Button } from '@/components/ui';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Rashan Thompson to discuss working together on technology strategy, career education, speaking engagements, or community programs.',
};

const quickLinks = [
  {
    title: 'For Parents & Students',
    description:
      'Learn about programs in AI literacy, career exploration, and financial education for K-12 students.',
    href: '/work-with-students',
    cta: 'Student Programs',
  },
  {
    title: 'For Schools & Educators',
    description:
      'Explore curriculum consulting, teacher training, and institutional partnerships.',
    href: '/work-with-schools',
    cta: 'School Partnerships',
  },
  {
    title: 'For Faith Communities',
    description:
      'Discover career workshops, financial wellness programs, and community engagement opportunities.',
    href: '/work-with-faith',
    cta: 'Faith Programs',
  },
  {
    title: 'For Event Organizers',
    description:
      'Learn about keynotes, workshops, and panel participation for your conference or event.',
    href: '/speaking',
    cta: 'Speaking',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero py-xl bg-white">
        <div className="container text-center">
          <h1>Work With Rashan Thompson</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Let's start a conversation about what's possible
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
          {/* Form Column */}
          <div>
            <h2 className="mt-0">How Can I Help You?</h2>

            <p className="text-muted">
              Whether you're a parent, educator, faith leader, or business
              owner, I'd love to hear about what you're working on. There's no
              pressure and no obligation—just a conversation about
              possibilities.
            </p>

            <form className="mt-md space-y-sm">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="organization">Organization (if applicable)</label>
                <input type="text" id="organization" name="organization" />
              </div>

              <div className="form-group">
                <label htmlFor="audience">Who Would Rashan Be Working With?</label>
                <select id="audience" name="audience">
                  <option value="">Select an audience...</option>
                  <option value="students">Students / Young People</option>
                  <option value="school">School / Educational Institution</option>
                  <option value="faith">Faith Community / Church</option>
                  <option value="business">Business / Organization</option>
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

              <Button type="submit">Send Message</Button>

              <p className="text-muted text-sm">
                No pricing discussions. No pressure. Just conversation.
              </p>
            </form>
          </div>

          {/* Contact Info Column */}
          <div>
            <h2 className="mt-0">Other Ways to Connect</h2>

            <div className="space-y-md">
              <div className="card">
                <h3 className="text-lg">Email Directly</h3>
                <p className="text-muted mb-xs">
                  For straightforward inquiries, feel free to email me directly:
                </p>
                <a href={`mailto:${siteConfig.email}`} className="font-semibold">
                  {siteConfig.email}
                </a>
              </div>

              <div className="card">
                <h3 className="text-lg">Connect on LinkedIn</h3>
                <p className="text-muted mb-xs">
                  For professional networking and to learn more about my work:
                </p>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  linkedin.com/in/rashan
                </a>
              </div>

              <div className="card">
                <h3 className="text-lg">Phone</h3>
                <p className="text-muted mb-xs">For time-sensitive matters:</p>
                <span className="font-semibold">{siteConfig.phone}</span>
              </div>

              <div className="card">
                <h3 className="text-lg">Location</h3>
                <p className="text-muted mb-xs">Rashan Thompson is based in:</p>
                <span className="font-semibold">{siteConfig.location}</span>
                <p className="text-muted text-sm mt-xs">
                  Available for engagements throughout the United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What to Expect */}
      <Section className="bg-white" narrow>
        <h2>What Happens After You Reach Out?</h2>

        <p>When you submit a message, here's what to expect:</p>

        <ol className="space-y-sm mt-md">
          <li className="flex gap-sm">
            <span className="font-heading text-primary font-bold">1.</span>
            <div>
              <strong>Response within 48 hours</strong> — I personally read
              every inquiry and respond directly. No autoresponders, no
              assistants screening messages.
            </div>
          </li>
          <li className="flex gap-sm">
            <span className="font-heading text-primary font-bold">2.</span>
            <div>
              <strong>A conversation, not a sales pitch</strong> — My goal is to
              understand your situation and explore whether there's a fit. If
              there isn't, I'll tell you honestly.
            </div>
          </li>
          <li className="flex gap-sm">
            <span className="font-heading text-primary font-bold">3.</span>
            <div>
              <strong>Clarity on next steps</strong> — If we decide to work
              together, I'll outline exactly what that looks like before we
              proceed.
            </div>
          </li>
        </ol>

        <DirectAnswer className="mt-md">
          Rashan Thompson personally reads and responds to every inquiry.
          There's no sales pressure, no pricing discussion in the first
          conversation—just an honest exploration of whether working together
          makes sense for your situation.
        </DirectAnswer>
      </Section>

      {/* Quick Links */}
      <Section>
        <h2>Looking for Something Specific?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mt-md">
          {quickLinks.map((link) => (
            <div key={link.href} className="card border-l-4 border-accent">
              <h3 className="text-lg">{link.title}</h3>
              <p className="text-muted">{link.description}</p>
              <Button href={link.href} variant="secondary" className="mt-sm">
                {link.cta}
              </Button>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
