'use client';

import { Accordion } from 'radix-ui';
import { Plus } from 'lucide-react';
import type { FAQItem } from '@/types';

export interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion.Root type="single" collapsible className="flex flex-col gap-3">
      {items.map((item) => (
        <Accordion.Item key={item.id} value={item.id} className="overflow-hidden rounded-xl border border-slate-200">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-slate-900 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2">
              {item.question}
              <Plus
                className="size-5 shrink-0 text-brand-600 transition-transform duration-200 group-data-[state=open]:rotate-45"
                aria-hidden="true"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden px-5 text-slate-600 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="pb-4">{item.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
