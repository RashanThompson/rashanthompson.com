'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass py-3'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container flex justify-between items-center">
        <Link
          href="/"
          className="font-heading text-xl text-foreground no-underline hover:text-accent-light transition-colors"
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex list-none gap-6 m-0 p-0 items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'nav-link',
                    item.isButton && 'btn btn-primary !py-2 !px-4 !text-sm'
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 glass rounded-lg focus-ring"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden glass mt-2 mx-4 rounded-xl overflow-hidden">
          <ul className="flex flex-col list-none m-0 p-4 gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'text-foreground-muted no-underline text-base block py-3 px-4 rounded-lg transition-colors hover:bg-surface-hover hover:text-foreground',
                    item.isButton && 'btn btn-primary mt-2 text-center'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
