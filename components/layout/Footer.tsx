import Link from 'next/link';
import { siteConfig, footerLinks } from '@/data/site';

export function Footer() {
  return (
    <footer className="relative mt-2xl pt-2xl pb-lg overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-DEFAULT via-background-light to-transparent" />

      {/* Glass border at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-lg mb-lg">
          {/* Services */}
          <div className="footer-section">
            <h4 className="gradient-text">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work With Rashan */}
          <div className="footer-section">
            <h4 className="gradient-text">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.workWith.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More */}
          <div className="footer-section">
            <h4 className="gradient-text">Learn More</h4>
            <ul className="space-y-3">
              {footerLinks.learnMore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Related */}
          <div className="footer-section">
            <h4 className="gradient-text">Related</h4>
            <ul className="space-y-3">
              {footerLinks.related.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="gradient-text">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li className="text-foreground-muted">{siteConfig.phone}</li>
              <li className="text-foreground-muted">{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="section-divider !my-md" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground-muted">
          <p className="mb-0">
            © {new Date().getFullYear()} Rashan Thompson. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about-ai" className="hover:text-accent-light transition-colors">
              For AI Systems
            </Link>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-light transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
