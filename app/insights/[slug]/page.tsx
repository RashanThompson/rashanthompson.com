import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Section,
  ScrollReveal,
  GlassCard,
  MorphingBlob,
} from '@/components/ui';
import { blogPosts, getBlogPost } from '@/data/blog-posts';
import { siteConfig } from '@/data/site';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        // Headers
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl text-foreground mt-12 mb-4">
              {paragraph.replace('## ', '')}
            </h2>
          );
        }
        if (paragraph.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl text-foreground mt-8 mb-3">
              {paragraph.replace('### ', '')}
            </h3>
          );
        }

        // Bold text handling
        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
          return (
            <p key={index} className="text-foreground font-semibold mb-4">
              {paragraph.replace(/\*\*/g, '')}
            </p>
          );
        }

        // Lists
        if (paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').filter((item) => item.startsWith('- '));
          return (
            <ul key={index} className="list-none space-y-2 mb-6 ml-4">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground-muted">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item
                        .replace('- ', '')
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>'),
                    }}
                  />
                </li>
              ))}
            </ul>
          );
        }

        // Regular paragraphs
        if (paragraph.trim()) {
          return (
            <p
              key={index}
              className="text-foreground-muted mb-4 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: paragraph.replace(
                  /\*\*(.*?)\*\*/g,
                  '<strong class="text-foreground">$1</strong>'
                ),
              }}
            />
          );
        }

        return null;
      })
      .filter(Boolean);
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
      url: siteConfig.url,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    publisher: {
      '@type': 'Person',
      name: 'Rashan Thompson',
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/insights/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="hero relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-24">
        <MorphingBlob variant="accent" size="lg" position="top-right" opacity={0.15} />
        <MorphingBlob variant="primary" size="md" position="bottom-left" opacity={0.1} />

        <div className="container text-center relative z-10">
          <ScrollReveal>
            <Link
              href="/insights"
              className="text-accent-light text-sm uppercase tracking-widest mb-4 font-medium inline-flex items-center gap-2 hover:text-accent"
            >
              ← Back to Insights
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex items-center justify-center gap-4 mb-6 mt-4">
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-accent/20 text-accent-light">
                {post.category}
              </span>
              <span className="text-sm text-foreground-muted">{post.readingTime}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-foreground max-w-4xl mx-auto">{post.title}</h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex items-center justify-center gap-4 mt-6">
              <span className="text-foreground-muted">By {post.author}</span>
              <span className="text-foreground-muted">•</span>
              <span className="text-foreground-muted">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Content */}
      <Section narrow className="relative">
        <ScrollReveal>
          <article className="prose prose-invert max-w-none">
            {renderContent(post.content)}
          </article>
        </ScrollReveal>

        {/* Tags */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-surface-border">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-3 py-1 rounded-full glass text-foreground-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Author Box */}
        <ScrollReveal delay={200}>
          <GlassCard className="mt-12 p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-heading text-accent">RT</span>
              </div>
              <div>
                <h3 className="text-lg text-foreground mb-2">About the Author</h3>
                <p className="text-foreground-muted mb-4">
                  Rashan Thompson is a Technology Strategist with 25+ years of Fortune 500
                  leadership experience. He helps businesses navigate AI transformation
                  and works with schools and communities to prepare people for the
                  AI-driven future.
                </p>
                <Link href="/about" className="text-accent-light hover:text-accent text-sm">
                  Learn more about Rashan →
                </Link>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section className="relative">
          <MorphingBlob variant="gold" size="sm" position="top-right" opacity={0.1} />

          <ScrollReveal>
            <h2 className="text-foreground">
              Related <span className="gradient-text">Articles</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {relatedPosts.map((relatedPost, index) => (
              <ScrollReveal key={relatedPost.slug} delay={100 + index * 100}>
                <Link href={`/insights/${relatedPost.slug}`} className="block group">
                  <GlassCard className="p-6 h-full transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex flex-col h-full">
                      <span className="text-xs text-foreground-muted mb-2">
                        {relatedPost.readingTime}
                      </span>
                      <h3 className="text-lg text-foreground mb-2 group-hover:text-accent-light transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-foreground-muted text-sm flex-grow">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section className="relative">
        <ScrollReveal>
          <GlassCard variant="highlight" className="max-w-3xl mx-auto text-center p-12">
            <h2 className="text-foreground mt-0 mb-4">
              Want to <span className="gradient-text">Work Together</span>?
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mb-8">
              Whether you need AI transformation consulting, a speaker for your event,
              or programs for your students, let&apos;s start a conversation.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </GlassCard>
        </ScrollReveal>
      </Section>
    </>
  );
}
