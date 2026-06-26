import { SectionHeader } from '@/components/ui/SectionHeader';
import { TIMELINE } from '@/lib/data/about';

export function TimelineSection() {
  return (
    <section aria-labelledby="timeline-heading" className="container-width section-padding py-20">
      <SectionHeader align="center" titleId="timeline-heading" title="Eight Years, One Mission" />
      <ol className="relative mx-auto mt-12 max-w-2xl">
        <div className="absolute left-2 top-1 h-[calc(100%-1rem)] w-px bg-slate-200" aria-hidden="true" />
        {TIMELINE.map((milestone) => (
          <li key={milestone.year} className="relative flex gap-6 pb-10 last:pb-0">
            <span
              aria-hidden="true"
              className="relative z-10 mt-1 flex size-4 shrink-0 items-center justify-center rounded-full border-2 border-brand-600 bg-white"
            />
            <div>
              <p className="text-sm font-bold text-brand-600">{milestone.year}</p>
              <p className="mt-1 text-slate-700">{milestone.title}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
