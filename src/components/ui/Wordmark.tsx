import { BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface WordmarkProps {
  name: string;
  className?: string;
}

export function Wordmark({ name, className }: WordmarkProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-sm font-semibold tracking-tight text-slate-500 grayscale transition hover:text-slate-700 hover:grayscale-0',
        className
      )}
    >
      <BadgeCheck className="size-4" aria-hidden="true" />
      {name}
    </span>
  );
}
