import { Quote } from 'lucide-react';
import { MISSION_QUOTE, MISSION_STORY } from '@/lib/data/about';

export function MissionSection() {
  return (
    <section aria-labelledby="mission-heading" className="container-width section-padding py-20">
      <h2 id="mission-heading" className="sr-only">
        Our Mission
      </h2>
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-3xl bg-brand-900 p-8 text-white lg:p-10">
          <Quote className="size-8 text-solar-amber" aria-hidden="true" />
          <p className="text-xl font-medium leading-relaxed text-balance">{MISSION_QUOTE}</p>
          <p className="text-sm font-semibold text-brand-200">Tunde Adeyemi, Founder &amp; CEO</p>
        </div>
        <div className="flex flex-col gap-5 text-slate-700">
          {MISSION_STORY.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
