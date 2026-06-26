import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function CustomQuoteCTA() {
  return (
    <section aria-labelledby="custom-quote-heading" className="bg-slate-50 py-20">
      <div className="container-width section-padding flex flex-col items-center gap-6 rounded-3xl bg-brand-900 p-10 text-center sm:p-14">
        <h2 id="custom-quote-heading" className="text-display-sm font-bold text-balance text-white">
          Running a Business With Energy Needs of Its Own?
        </h2>
        <p className="max-w-xl text-brand-100">
          Your business has unique energy needs. Get a system designed specifically for your load
          profile and building, not a package built for a house.
        </p>
        <Button asChild size="xl" className="bg-white text-brand-900 hover:bg-brand-50">
          <Link href="/contact?package=industrial">Request Custom Commercial Quote</Link>
        </Button>
      </div>
    </section>
  );
}
