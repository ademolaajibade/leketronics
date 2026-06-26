import { StatCounter } from '@/components/ui/StatCounter';
import { HOMEPAGE_STATS } from '@/lib/data/homepage';

export function StatsSection() {
  return (
    <section aria-label="SolarGenius by the numbers" className="bg-brand-600">
      <div className="container-width section-padding grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {HOMEPAGE_STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center text-white">
            <p className="text-display-md font-bold">
              <StatCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-sm font-medium text-brand-100">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
