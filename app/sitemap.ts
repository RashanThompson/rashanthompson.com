import { MetadataRoute } from 'next';
import { caseStudies } from '@/data/case-studies';
import { blogPosts } from '@/data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rashanthompson.com';

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/about-ai',
    '/what-i-do',
    '/for-business',
    '/case-studies',
    '/insights',
    '/speaking',
    '/work-with-students',
    '/work-with-schools',
    '/work-with-faith',
    '/contact',
  ];

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic case study pages
  const caseStudyRoutes = Object.values(caseStudies).map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic blog post pages
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...blogRoutes];
}
