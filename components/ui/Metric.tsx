import { cn } from '@/lib/utils';

interface MetricProps {
  value: string;
  label: string;
  className?: string;
}

export function Metric({ value, label, className }: MetricProps) {
  return (
    <div className={cn('metric', className)}>
      <span className="metric-value">{value}</span>
      <span className="metric-label">{label}</span>
    </div>
  );
}
