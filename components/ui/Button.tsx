import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  external?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = 'primary',
  className,
  type = 'button',
  disabled = false,
  external = false,
  onClick,
}: ButtonProps) {
  const classes = cn(
    'btn',
    variant === 'primary' && 'btn-primary',
    variant === 'secondary' && 'btn-secondary',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
