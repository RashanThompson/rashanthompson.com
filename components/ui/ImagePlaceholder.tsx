'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  placeholder?: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'hero';
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function ImagePlaceholder({
  src,
  alt,
  placeholder,
  className,
  containerClassName,
  aspectRatio = 'video',
  fill = false,
  width,
  height,
  priority = false,
}: ImagePlaceholderProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    hero: 'aspect-[21/9]',
  };

  if (error || !src) {
    return (
      <div
        className={cn(
          'img-placeholder',
          aspectClasses[aspectRatio],
          containerClassName
        )}
        data-placeholder={placeholder || `Image: ${alt}`}
      >
        <span className="text-center px-sm">{placeholder || alt}</span>
      </div>
    );
  }

  return (
    <div className={cn('img-container', aspectClasses[aspectRatio], containerClassName)}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={cn('object-cover', loading && 'blur-sm', className)}
          onError={() => setError(true)}
          onLoad={() => setLoading(false)}
          priority={priority}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width || 800}
          height={height || 450}
          className={cn('w-full h-auto', loading && 'blur-sm', className)}
          onError={() => setError(true)}
          onLoad={() => setLoading(false)}
          priority={priority}
        />
      )}
    </div>
  );
}
