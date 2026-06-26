import Link from 'next/link';

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export function PageHero({ eyebrow, title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-50 py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-brand-100) 1px, transparent 1px), linear-gradient(to bottom, var(--color-brand-100) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="container-width section-padding relative flex flex-col gap-4">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-brand-600">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-medium text-slate-700">
              {breadcrumb}
            </li>
          </ol>
        </nav>
        {eyebrow && (
          <div className="flex items-center gap-2 text-sm font-semibold text-brand-600">
            <span className="h-px w-6 bg-brand-600" aria-hidden="true" />
            {eyebrow}
          </div>
        )}
        <h1 className="text-display-lg font-bold text-balance text-slate-900">{title}</h1>
        {subtitle && <p className="max-w-2xl text-lg text-slate-600">{subtitle}</p>}
      </div>
    </section>
  );
}
