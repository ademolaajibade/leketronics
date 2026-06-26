import Link from 'next/link';
import { Check } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SERVICES } from '@/lib/data/services';

export function ServiceCardsGrid() {
  return (
    <section aria-label="Our services" className="container-width section-padding py-20">
      <div className="grid gap-8 sm:grid-cols-2">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <Card
              key={service.id}
              variant="outlined"
              className="flex flex-col gap-5 p-8 transition-colors hover:border-brand-600"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <Icon className="size-8" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
              <ul className="flex flex-col gap-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-auto">
                <Link href={`/contact?service=${service.slug}`}>{service.cta}</Link>
              </Button>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
