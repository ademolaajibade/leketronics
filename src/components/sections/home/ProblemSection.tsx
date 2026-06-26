import { SectionHeader } from '@/components/ui/SectionHeader';
import { PROBLEM_ITEMS } from '@/lib/data/homepage';

export function ProblemSection() {
  return (
    <section aria-labelledby="problem-heading" className="container-width section-padding py-20">
      <SectionHeader align="center" titleId="problem-heading" title="You Already Know the Problem." />
      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {PROBLEM_ITEMS.map(({ icon: Icon, headline, body }) => (
          <div key={headline} className="flex flex-col items-center gap-4 text-center">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
              <Icon className="size-7" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-semibold text-slate-900">{headline}</h3>
            <p className="text-slate-600">{body}</p>
          </div>
        ))}
      </div>
      <p className="mt-12 text-center text-xl font-semibold text-brand-700 text-balance">
        There is a permanent fix. And it pays for itself.
      </p>
    </section>
  );
}
