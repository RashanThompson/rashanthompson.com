import { Metadata } from 'next';
import Link from 'next/link';
import {
  Section,
  DirectAnswer,
  ScrollReveal,
  GlassCard,
  MorphingBlob,
  SpotlightCard,
} from '@/components/ui';
import { blogPosts, getFeaturedPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Insights | AI, Leadership & Career Development',
  description:
    'Insights on AI transformation, technology leadership, career development, and business strategy from Rashan Thompson. Practical perspectives from 25+ years of Fortune 500 experience.',
  keywords: [
    'AI insights',
    'technology leadership blog',
    'career development advice',
    'business strategy articles',
    'Rashan Thompson blog',
    'CRM best practices',
    'future of work',
  ],
};

const categories = [
  { name: 'All', value: 'all' },
  { name: 'AI & Technology', value: 'AI & Technology' },
  { name: 'Career Development', value: 'Career Development' },
  { name: 'Business Strategy', value: 'Business Strategy' },
  { name: 'Leadership', value: 'Leadership' },
];

export default function InsightsPage() {
  const featuredPosts = getFeaturedPosts();

  return (
    <>
      {/* Hero */}
      <section className="hero relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-36">
        <MorphingBlob variant="accent" size="lg" position="top-right" opacity={0.15} />
        <MorphingBlob variant="primary" size="md" position="bottom-left" opacity={0.1} />

        <div className="container text-center relative z-10">
          <ScrollReveal>
            <p className="text-accent-light text-sm uppercase tracking-widest mb-4 font-medium">
              Thoughts & Perspectives
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-foreground">
              <span className="gradient-text">Insights</span> from the Field
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Practical perspectives on AI transformation, technology leadership,
              and career development from 25+ years of Fortune 500 experience.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <DirectAnswer className="max-w-3xl mx-auto mt-8">
              Rashan Thompson shares insights on AI strategy, CRM implementation,
              career development, and technology leadership. These articles draw
              from real-world experience leading global teams and transforming
              business operations at scale.
            </DirectAnswer>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <Section className="relative">
          <MorphingBlob variant="gold" size="md" position="top-left" opacity={0.1} />

          <ScrollReveal>
            <h2 className="text-foreground">
              <span className="gradient-text-gold">Featured</span> Articles
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {featuredPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={100 + index * 100}>
                <Link href={`/insights/${post.slug}`} className="block group">
                  <GlassCard variant="highlight" className="p-8 h-full transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-gold/20 text-gold">
                          Featured
                        </span>
                        <span className="text-xs text-foreground-muted">
                          {post.readingTime}
                        </span>
                      </div>
                      <h3 className="text-xl text-foreground mb-3 group-hover:text-accent-light transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-foreground-muted flex-grow mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-accent-light">
                          {post.category}
                        </span>
                        <span className="text-sm text-foreground-muted">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      )}

      {/* All Posts */}
      <Section className="relative">
        <MorphingBlob variant="accent" size="lg" position="bottom-right" opacity={0.1} />

        <ScrollReveal>
          <h2 className="text-foreground">
            All <span className="gradient-text">Articles</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap gap-3 mt-6 mb-8">
            {categories.map((category) => (
              <button
                key={category.value}
                className="px-4 py-2 text-sm rounded-full glass hover:bg-surface-hover transition-colors text-foreground-muted hover:text-foreground"
              >
                {category.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={150 + index * 50}>
              <Link href={`/insights/${post.slug}`} className="block group">
                <SpotlightCard className="p-6 transition-all duration-300 hover:scale-[1.01]">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium px-2 py-1 rounded bg-accent/20 text-accent-light">
                          {post.category}
                        </span>
                        <span className="text-xs text-foreground-muted">
                          {post.readingTime}
                        </span>
                      </div>
                      <h3 className="text-lg text-foreground mb-2 group-hover:text-accent-light transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-foreground-muted text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <span className="text-sm text-foreground-muted">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section className="relative">
        <ScrollReveal>
          <GlassCard variant="highlight" className="max-w-3xl mx-auto text-center p-12">
            <h2 className="text-foreground mt-0 mb-4">
              Stay <span className="gradient-text">Informed</span>
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mb-8">
              Get insights on AI transformation, career development, and technology
              leadership delivered to your inbox. No spam, just practical perspectives.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-grow px-4 py-3 glass rounded-xl text-foreground"
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </GlassCard>
        </ScrollReveal>
      </Section>
    </>
  );
}
