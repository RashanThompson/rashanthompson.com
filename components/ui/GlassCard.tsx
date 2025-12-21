import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'muted' | 'strong' | 'highlight';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const paddingClasses = {
  none: '',
  sm: 'p-sm',
  md: 'p-md',
  lg: 'p-lg',
};

const variantClasses = {
  default: 'glass-card',
  muted: 'surface-muted rounded-xl',
  strong: 'surface-strong rounded-xl',
  highlight: 'card-highlight',
};

export function GlassCard({
  children,
  className,
  variant = 'default',
  padding = 'md',
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        variantClasses[variant],
        paddingClasses[padding],
        !hover && 'hover:transform-none hover:shadow-glass',
        className
      )}
    >
      {children}
    </div>
  );
}
