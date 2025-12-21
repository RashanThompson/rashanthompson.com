import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://rashanthompson.com/sitemap.xml',
    host: 'https://rashanthompson.com',
  };
}
