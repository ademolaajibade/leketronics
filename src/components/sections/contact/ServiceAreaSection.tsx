import { Badge } from '@/components/ui/Badge';
import { COMPANY } from '@/lib/data/navigation';

export function ServiceAreaSection() {
  return (
    <section aria-labelledby="service-area-heading" className="bg-slate-50 py-20">
      <div className="container-width section-padding flex flex-col items-center gap-6 text-center">
        <h2 id="service-area-heading" className="text-display-md font-bold text-slate-900">
          Areas We Serve in Lagos
        </h2>
        <ul className="flex flex-wrap justify-center gap-2">
          {COMPANY.serviceArea.map((area) => (
            <li key={area}>
              <Badge variant="outline">{area}</Badge>
            </li>
          ))}
        </ul>
        <p className="text-slate-600">{`Don't see your area? Contact us — we may still be able to help.`}</p>
      </div>
    </section>
  );
}
