import { cn } from '@/lib/utils';

interface DirectAnswerProps {
  children: React.ReactNode;
  className?: string;
}

export function DirectAnswer({ children, className }: DirectAnswerProps) {
  return (
    <p className={cn('direct-answer', className)}>
      {children}
    </p>
  );
}
