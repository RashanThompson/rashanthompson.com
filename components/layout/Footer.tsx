import Link from 'next/link';
import { siteConfig, footerLinks } from '@/data/site';

export function Footer() {
  return (
    <footer className="bg-primary text-background py-lg mt-xl">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mb-md">
          {/* Work With Rashan */}
          <div className="footer-section">
            <h4>Work With Rashan</h4>
            <ul className="space-y-xs">
              {footerLinks.workWith.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More */}
          <div className="footer-section">
            <h4>Learn More</h4>
            <ul className="space-y-xs">
              {footerLinks.learnMore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Related */}
          <div className="footer-section">
            <h4>Related</h4>
            <ul className="space-y-xs">
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
            <h4>Contact</h4>
            <ul className="space-y-xs">
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li className="text-white/80">{siteConfig.phone}</li>
              <li className="text-white/80">{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-md border-t border-white/20 text-sm opacity-80">
          <p className="mb-0">© {new Date().getFullYear()} Rashan Thompson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
