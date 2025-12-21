'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary py-sm sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <Link
          href="/"
          className="font-heading text-xl text-white no-underline hover:text-background transition-colors"
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex list-none gap-md m-0 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'text-background no-underline text-[0.9rem] py-xs border-b-2 border-transparent transition-all hover:border-background',
                    item.isButton && 'btn btn-secondary !text-background !border-background hover:!bg-background hover:!text-primary'
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
          className="md:hidden text-white p-xs"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-primary border-t border-white/20 mt-sm">
          <ul className="flex flex-col list-none m-0 p-md gap-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-background no-underline text-base block py-xs"
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
