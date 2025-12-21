import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ImagePlaceholder } from './ImagePlaceholder';

interface CardProps {
  title: string;
  description: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Card({
  title,
  description,
  href,
  image,
  imageAlt,
  className,
  children,
}: CardProps) {
  const content = (
    <>
      {image && (
        <ImagePlaceholder
          src={image}
          alt={imageAlt || title}
          aspectRatio="video"
          containerClassName="mb-sm"
        />
      )}
      <h3 className="text-xl mb-xs">{title}</h3>
      <p className="text-muted mb-sm">{description}</p>
      {children}
      {href && (
        <span className="text-primary font-medium">Learn More →</span>
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http');

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn('card block no-underline', className)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={cn('card block no-underline', className)}>
        {content}
      </Link>
    );
  }

  return <div className={cn('card', className)}>{content}</div>;
}
