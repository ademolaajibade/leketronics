'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { formatNaira } from '@/lib/utils';

export function SavingsCalculatorTeaser() {
  const [bill, setBill] = useState('');
  const [result, setResult] = useState<number | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const amount = Number(bill);
    if (!Number.isFinite(amount) || amount <= 0) {
      setResult(null);
      return;
    }
    setResult(Math.max(20000, Math.round(amount * 0.85)));
  }

  return (
    <section aria-labelledby="calculator-heading" className="container-width section-padding py-20">
      <div className="grid gap-8 rounded-3xl border border-brand-200 bg-brand-50 p-8 lg:grid-cols-2 lg:items-center lg:p-12">
        <div>
          <h2 id="calculator-heading" className="text-display-sm font-bold text-balance text-slate-900">
            {`Find Out Exactly How Much You'll Save.`}
          </h2>
          <p className="mt-3 text-slate-600">
            {`Tell us what you currently spend on NEPA and generator fuel combined, and we'll show you a rough monthly saving estimate before you even book an assessment.`}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="flex-1">
            <Input
              label="Your monthly NEPA/generator bill (₦)"
              type="number"
              inputMode="numeric"
              min={0}
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              placeholder="e.g. 90000"
              required
            />
          </div>
          <Button type="submit" size="lg">
            Calculate My Savings
          </Button>
        </form>
      </div>
      {result !== null && (
        <p className="mt-6 text-center text-lg font-semibold text-brand-700" role="status">
          {`You could save around ${formatNaira(result)} a month with solar.`}
        </p>
      )}
    </section>
  );
}
