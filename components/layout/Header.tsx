'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navItems, siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types';

function NavDropdown({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        className="nav-link flex items-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {item.title}
        <ChevronDown
          size={14}
          className={cn('transition-transform duration-200', isOpen && 'rotate-180')}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 py-2 min-w-[200px] glass rounded-xl shadow-lg z-50">
          <Link
            href={item.href}
            className="block px-4 py-2 text-sm text-foreground-muted hover:text-foreground hover:bg-surface-hover transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item.title} Overview
          </Link>
          <div className="h-px bg-surface-border mx-2 my-1" />
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2 text-sm text-foreground-muted hover:text-foreground hover:bg-surface-hover transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

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
          className="flex items-center no-underline hover:opacity-80 transition-opacity"
        >
          <video
            autoPlay
            muted
            playsInline
            className="h-[100px] w-auto"
            aria-label={siteConfig.name}
          >
            <source src="/images/rashan/logo.mp4" type="video/mp4" />
          </video>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex list-none gap-5 m-0 p-0 items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <NavDropdown item={item} />
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'nav-link',
                      item.isButton && 'btn btn-primary !py-2 !px-4 !text-sm'
                    )}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground p-2 glass rounded-lg focus-ring"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden glass mt-2 mx-4 rounded-xl overflow-hidden">
          <ul className="flex flex-col list-none m-0 p-4 gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between text-foreground-muted text-base py-3 px-4 rounded-lg transition-colors hover:bg-surface-hover hover:text-foreground"
                      onClick={() =>
                        setExpandedMobileItem(
                          expandedMobileItem === item.href ? null : item.href
                        )
                      }
                    >
                      {item.title}
                      <ChevronDown
                        size={16}
                        className={cn(
                          'transition-transform duration-200',
                          expandedMobileItem === item.href && 'rotate-180'
                        )}
                      />
                    </button>
                    {expandedMobileItem === item.href && (
                      <div className="pl-4 mt-1 space-y-1">
                        <Link
                          href={item.href}
                          className="block text-foreground-muted text-sm py-2 px-4 rounded-lg transition-colors hover:bg-surface-hover hover:text-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.title} Overview
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block text-foreground-muted text-sm py-2 px-4 rounded-lg transition-colors hover:bg-surface-hover hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
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
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
