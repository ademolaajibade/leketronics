'use client';

import * as React from 'react';
import Link from 'next/link';
import { Tabs } from 'radix-ui';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { staggerContainer, fadeUp } from '@/lib/motion';
import { PRICING_TIERS } from '@/lib/data/pricing';
import { cn } from '@/lib/utils';
import type { PricingTier } from '@/types';

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <motion.div variants={fadeUp}>
      <Card
        variant="outlined"
        className={cn(
          'relative flex h-full flex-col gap-5 p-7',
          tier.recommended && 'border-2 border-brand-600 lg:scale-105'
        )}
      >
        {tier.recommended && (
          <Badge variant="default" className="absolute -top-3 right-6 bg-brand-600 text-white">
            Most Popular
          </Badge>
        )}
        <Badge variant="outline" className="w-fit">
          {tier.systemSize}
        </Badge>
        <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
        <p className="text-sm text-slate-600">{tier.description}</p>
        <div>
          <p className="text-2xl font-bold text-slate-900">{tier.priceRange}</p>
          {tier.monthlyFrom !== 'Custom' && (
            <p className="text-sm text-slate-500">or from {tier.monthlyFrom}/month</p>
          )}
        </div>
        <ul className="flex flex-col gap-2">
          {tier.features.map((feature) => (
            <li
              key={feature.label}
              className={cn('flex items-start gap-2 text-sm', feature.included ? 'text-slate-700' : 'text-slate-400')}
            >
              {feature.included ? (
                <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
              ) : (
                <X className="mt-0.5 size-4 shrink-0 text-slate-300" aria-hidden="true" />
              )}
              {feature.label}
            </li>
          ))}
        </ul>
        <Button asChild className="mt-auto">
          <Link href={`/contact?package=${tier.id}`}>Get a Custom Quote</Link>
        </Button>
      </Card>
    </motion.div>
  );
}

function PricingGrid({ tiers }: { tiers: PricingTier[] }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? 'visible' : 'hidden'}
      animate="visible"
      variants={staggerContainer}
      className={cn('grid gap-8', tiers.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2')}
    >
      {tiers.map((tier) => (
        <PricingCard key={tier.id} tier={tier} />
      ))}
    </motion.div>
  );
}

export function PricingSection() {
  const [tab, setTab] = React.useState<'residential' | 'commercial'>('residential');
  const residentialTiers = PRICING_TIERS.filter((tier) => tier.type === 'residential');
  const commercialTiers = PRICING_TIERS.filter((tier) => tier.type === 'commercial');

  return (
    <section aria-labelledby="pricing-heading" className="container-width section-padding py-20">
      <h2 id="pricing-heading" className="sr-only">
        Pricing
      </h2>
      <Tabs.Root value={tab} onValueChange={(value) => setTab(value as 'residential' | 'commercial')}>
        <div className="flex justify-center">
          <Tabs.List aria-label="Pricing category" className="inline-flex rounded-full bg-slate-100 p-1">
            <Tabs.Trigger
              value="residential"
              className="rounded-full px-5 py-2 text-sm font-semibold text-slate-600 transition-colors data-[state=active]:bg-white data-[state=active]:text-brand-700 data-[state=active]:shadow-card"
            >
              Residential
            </Tabs.Trigger>
            <Tabs.Trigger
              value="commercial"
              className="rounded-full px-5 py-2 text-sm font-semibold text-slate-600 transition-colors data-[state=active]:bg-white data-[state=active]:text-brand-700 data-[state=active]:shadow-card"
            >
              Commercial
            </Tabs.Trigger>
          </Tabs.List>
        </div>

        <Tabs.Content value="residential" className="mt-12">
          <PricingGrid tiers={residentialTiers} />
        </Tabs.Content>
        <Tabs.Content value="commercial" className="mt-12">
          <PricingGrid tiers={commercialTiers} />
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
}
