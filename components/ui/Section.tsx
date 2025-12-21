import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  narrow?: boolean;
  id?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  narrow = false,
  id,
}: SectionProps) {
  return (
    <section className={cn('py-lg', className)} id={id}>
      <div className={cn('container', narrow && 'content-width', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
