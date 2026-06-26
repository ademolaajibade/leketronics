import { StatCounter } from '@/components/ui/StatCounter';
import { IMPACT_STATS } from '@/lib/data/social-proof';

export function ImpactStats() {
  return (
    <section aria-label="Our impact in numbers" className="container-width section-padding py-16">
      <div className="flex gap-8 overflow-x-auto sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible lg:grid-cols-5">
        {IMPACT_STATS.map((stat) => (
          <div key={stat.label} className="flex shrink-0 flex-col items-center gap-2 text-center sm:shrink">
            <p className="text-display-sm font-bold text-brand-700">
              <StatCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-sm font-medium text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
