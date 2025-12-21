'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface MorphingBlobProps {
  className?: string;
  variant?: 'primary' | 'accent' | 'gold';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  blur?: number;
  opacity?: number;
}

const sizeClasses = {
  sm: 'w-[200px] h-[200px]',
  md: 'w-[400px] h-[400px]',
  lg: 'w-[600px] h-[600px]',
  xl: 'w-[800px] h-[800px]',
};

const positionClasses = {
  'top-left': '-top-1/4 -left-1/4',
  'top-right': '-top-1/4 -right-1/4',
  'bottom-left': '-bottom-1/4 -left-1/4',
  'bottom-right': '-bottom-1/4 -right-1/4',
  center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
};

const variantClasses = {
  primary: 'morphing-blob-primary',
  accent: 'morphing-blob-accent',
  gold: 'morphing-blob-gold',
};

export function MorphingBlob({
  className,
  variant = 'primary',
  size = 'lg',
  position = 'top-right',
  blur = 60,
  opacity = 0.3,
}: MorphingBlobProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div
      className={cn(
        'morphing-blob absolute pointer-events-none',
        sizeClasses[size],
        positionClasses[position],
        variantClasses[variant],
        prefersReducedMotion && 'animation-none',
        className
      )}
      style={{
        filter: `blur(${blur}px)`,
        opacity: prefersReducedMotion ? opacity * 0.5 : opacity,
      }}
      aria-hidden="true"
    />
  );
}
