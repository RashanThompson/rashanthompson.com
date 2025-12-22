import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Section,
  DirectAnswer,
  ScrollReveal,
  GlassCard,
  MorphingBlob,
  SpotlightCard,
  TiltCard,
} from '@/components/ui';
import {
  getCaseStudy,
  getAllCaseStudySlugs,
  getRelatedCaseStudies,
} from '@/data/case-studies';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.title} | Case Study | Rashan Thompson`,
    description: `${caseStudy.challenge.summary} Learn how Rashan Thompson delivered ${caseStudy.results[0].metric} ${caseStudy.results[0].label.toLowerCase()}.`,
    keywords: [
      caseStudy.industry.toLowerCase(),
      ...caseStudy.services.map((s) => s.toLowerCase()),
      'case study',
      'Rashan Thompson',
      'business transformation',
    ],
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const relatedStudies = getRelatedCaseStudies(slug);

  return (
    <>
      {/* Hero */}
      <section className="hero relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-36">
        <MorphingBlob variant="accent" size="lg" position="top-right" opacity={0.15} />
        <MorphingBlob variant="gold" size="md" position="bottom-left" opacity={0.1} />

        <div className="container text-center relative z-10">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-sm font-semibold text-accent-light bg-accent/10 px-3 py-1 rounded-full">
                {caseStudy.industry}
              </span>
              <span className="text-sm text-foreground-muted">
                {caseStudy.duration}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-foreground">
              {caseStudy.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="gradient-text">
                {caseStudy.title.split(' ').slice(-1)}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              {caseStudy.client}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {caseStudy.services.map((service) => (
                <span
                  key={service}
                  className="text-sm text-foreground-muted bg-surface-muted px-3 py-1 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Results Highlight */}
      <Section className="relative -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {caseStudy.results.map((result, index) => (
            <ScrollReveal key={result.label} delay={index * 100}>
              <TiltCard>
                <GlassCard className="text-center p-6">
                  <span className="font-heading text-3xl md:text-4xl gradient-text block mb-2">
                    {result.metric}
                  </span>
                  <span className="text-sm text-foreground-muted block">
                    {result.label}
                  </span>
                </GlassCard>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Challenge */}
      <Section narrow className="relative">
        <MorphingBlob variant="primary" size="md" position="top-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            The <span className="gradient-text">Challenge</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            {caseStudy.challenge.summary}
          </DirectAnswer>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-8">
            <h3 className="text-lg text-foreground mb-4">Specific Pain Points:</h3>
            <ul className="space-y-3">
              {caseStudy.challenge.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground-muted">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </Section>

      {/* Solution */}
      <Section narrow className="relative">
        <MorphingBlob variant="gold" size="sm" position="top-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            The <span className="gradient-text-gold">Solution</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            {caseStudy.solution.summary}
          </DirectAnswer>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-8">
            <h3 className="text-lg text-foreground mb-4">Approach:</h3>
            <div className="space-y-4">
              {caseStudy.solution.approach.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-accent font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-foreground-muted mt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {caseStudy.solution.technologies && (
          <ScrollReveal delay={300}>
            <div className="mt-8">
              <h3 className="text-lg text-foreground mb-4">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.solution.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm font-medium text-accent-light bg-accent/10 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </Section>

      {/* Results Detail */}
      <Section className="relative">
        <MorphingBlob variant="accent" size="lg" position="bottom-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-center text-foreground">
            The <span className="gradient-text">Results</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {caseStudy.results.map((result, index) => (
            <ScrollReveal key={result.label} delay={100 + index * 100}>
              <SpotlightCard className="p-6">
                <div className="flex items-start gap-4">
                  <span className="font-heading text-4xl gradient-text">
                    {result.metric}
                  </span>
                  <div>
                    <h3 className="text-lg text-foreground mb-1">{result.label}</h3>
                    {result.description && (
                      <p className="text-sm text-foreground-muted mb-0">
                        {result.description}
                      </p>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <Section narrow className="relative">
          <MorphingBlob variant="gold" size="md" position="center" opacity={0.1} />

          <ScrollReveal>
            <GlassCard variant="highlight" className="p-8 text-center">
              <blockquote className="text-xl md:text-2xl text-foreground italic mb-6">
                &ldquo;{caseStudy.testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-foreground font-semibold mb-1">
                  {caseStudy.testimonial.author}
                </p>
                <p className="text-foreground-muted text-sm mb-0">
                  {caseStudy.testimonial.role}
                </p>
              </div>
            </GlassCard>
          </ScrollReveal>
        </Section>
      )}

      {/* Key Takeaways */}
      <Section narrow className="relative">
        <MorphingBlob variant="primary" size="sm" position="top-left" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            Key <span className="gradient-text">Takeaways</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DirectAnswer>
            What can other organizations learn from this transformation? Here are the
            key insights that apply beyond this specific engagement.
          </DirectAnswer>
        </ScrollReveal>

        <div className="space-y-4 mt-8">
          {caseStudy.keyTakeaways.map((takeaway, index) => (
            <ScrollReveal key={index} delay={200 + index * 100}>
              <GlassCard className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-sm">✓</span>
                  </div>
                  <p className="text-foreground mb-0">{takeaway}</p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <Section className="relative">
          <MorphingBlob variant="accent" size="md" position="bottom-left" opacity={0.1} />

          <ScrollReveal>
            <h2 className="text-center text-foreground">
              Related <span className="gradient-text">Case Studies</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {relatedStudies.map((study, index) => (
              <ScrollReveal key={study.slug} delay={100 + index * 100}>
                <Link href={`/case-studies/${study.slug}`} className="block group">
                  <SpotlightCard className="p-6 h-full transition-transform duration-300 group-hover:scale-[1.02]">
                    <span className="text-xs font-semibold text-accent-light bg-accent/10 px-2 py-1 rounded">
                      {study.industry}
                    </span>
                    <h3 className="text-lg text-foreground mt-3 mb-2 group-hover:text-accent-light transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-foreground-muted mb-4">
                      {study.challenge.summary}
                    </p>
                    <div className="flex gap-4">
                      {study.results.slice(0, 2).map((result) => (
                        <div key={result.label}>
                          <span className="font-heading text-xl gradient-text">
                            {result.metric}
                          </span>
                          <span className="text-xs text-foreground-muted block">
                            {result.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </SpotlightCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section className="relative">
        <ScrollReveal>
          <GlassCard variant="highlight" className="max-w-3xl mx-auto text-center p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-accent/20 rounded-full blur-[100px] -z-10" />

            <h2 className="text-foreground mt-0 mb-4">
              Ready for Similar <span className="gradient-text">Results</span>?
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mb-8">
              Every transformation starts with understanding your unique challenges.
              Let&apos;s discuss how Rashan Thompson can help you achieve breakthrough outcomes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Start a Conversation
              </Link>
              <Link href="/case-studies" className="btn btn-secondary">
                View All Case Studies
              </Link>
            </div>
          </GlassCard>
        </ScrollReveal>
      </Section>
    </>
  );
}
