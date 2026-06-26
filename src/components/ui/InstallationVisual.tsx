import { cn, hashString } from '@/lib/utils';

export interface InstallationVisualProps {
  seed: string;
  variant?: 'residential' | 'commercial' | 'off-grid';
  className?: string;
}

const GRADIENTS: Record<string, string[]> = {
  residential: ['from-brand-700 via-brand-600 to-solar-amber', 'from-brand-800 via-brand-600 to-brand-400'],
  commercial: ['from-brand-900 via-brand-700 to-brand-500', 'from-slate-800 via-brand-800 to-brand-500'],
  'off-grid': ['from-solar-orange via-brand-700 to-brand-900', 'from-brand-900 via-brand-700 to-solar-orange'],
};

export function InstallationVisual({ seed, variant = 'residential', className }: InstallationVisualProps) {
  const hash = hashString(`${seed}-${variant}`);
  const gradientSet = GRADIENTS[variant] ?? GRADIENTS.residential;
  const gradient = gradientSet[hash % gradientSet.length];
  const cols = 4 + (hash % 3);
  const rows = 3;
  const angle = -8 + (hash % 17);

  return (
    <div
      aria-hidden="true"
      role="presentation"
      className={cn('relative overflow-hidden bg-gradient-to-br', gradient, className)}
    >
      <div
        className="absolute inset-0 grid gap-1 p-6 opacity-80"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
          transform: `skewY(${angle}deg) scale(1.2)`,
        }}
      >
        {Array.from({ length: rows * cols }).map((_, i) => (
          <div key={i} className="rounded-[3px] bg-white/15 ring-1 ring-white/25" />
        ))}
      </div>
      <div className="absolute -top-8 -right-8 size-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </div>
  );
}
