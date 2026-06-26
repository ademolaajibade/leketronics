import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProgressHeaderProps {
  step: number;
  labels: string[];
}

export function ProgressHeader({ step, labels }: ProgressHeaderProps) {
  return (
    <div>
      <div className="flex items-center">
        {labels.map((label, i) => (
          <div key={label} className="flex flex-1 items-center gap-2 last:flex-none">
            <span
              className={cn(
                'flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold',
                i < step ? 'bg-emerald-600 text-white' : i === step ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-400'
              )}
            >
              {i < step ? <Check className="size-4" aria-hidden="true" /> : i + 1}
            </span>
            {i < labels.length - 1 && <span className="h-px flex-1 bg-slate-200" aria-hidden="true" />}
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm font-medium text-slate-500">
        Step {step + 1} of {labels.length}: {labels[step]}
      </p>
      <div
        className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100"
        role="progressbar"
        aria-valuenow={step + 1}
        aria-valuemin={1}
        aria-valuemax={labels.length}
        aria-label={`Form progress: step ${step + 1} of ${labels.length}`}
      >
        <div
          className="h-full bg-brand-600 transition-all duration-300"
          style={{ width: `${((step + 1) / labels.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
