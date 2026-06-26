import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  titleId?: string;
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'left', titleId }: SectionHeaderProps) {
  const isCenter = align === 'center';
  return (
    <div className={cn('flex flex-col gap-3', isCenter && 'items-center text-center')}>
      {eyebrow && (
        <div
          className={cn(
            'flex items-center gap-2 text-sm font-semibold text-brand-600',
            isCenter && 'justify-center'
          )}
        >
          <span className="h-px w-6 bg-brand-600" aria-hidden="true" />
          {eyebrow}
        </div>
      )}
      <h2 id={titleId} className="text-display-md font-bold text-slate-900 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className={cn('max-w-2xl text-base text-slate-600', isCenter && 'mx-auto')}>{subtitle}</p>
      )}
    </div>
  );
}
