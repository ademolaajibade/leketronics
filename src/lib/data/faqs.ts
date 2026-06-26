import type { FAQItem } from '@/types';

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    category: 'pricing',
    question: 'How much does a typical home solar system cost in Lagos?',
    answer:
      "It depends heavily on your roof size, current consumption and whether you want battery backup. Our Essential 3kW package starts around ₦1.8 million, while a fully battery-backed Premium 10kW system can run ₦5.2 million and above. The fastest way to get an exact number is a free site assessment — we don't quote off a phone call.",
  },
  {
    id: 'f2',
    category: 'pricing',
    question: 'Why do prices vary so much between solar companies in Lagos?',
    answer:
      'Mostly because of panel and battery quality. A system built with Tier-2 panels and a generic battery will always look cheaper on paper, but it typically degrades faster and the warranty is harder to enforce. We only quote with Tier-1 components from Jinko Solar, Canadian Solar or LONGi, which is part of why our pricing sits where it does.',
  },
  {
    id: 'f3',
    category: 'pricing',
    question: 'Do I need to pay the full amount upfront?',
    answer:
      'No. Outright purchase gets you the best long-term return, but most clients spread cost through our 12 to 36-month instalment plans or move to a ₦0-upfront lease. See the Financing section for the breakdown that fits your situation.',
  },
  {
    id: 'f4',
    category: 'installation',
    question: 'Do I need EKEDC’s approval to install solar at my property?',
    answer:
      "If your system stays off-grid or only powers your home through a battery without feeding power back to the grid, you don't need EKEDC sign-off. If you ever want a grid-tied, export-capable setup, that does require notifying your DISCO, and our engineering team handles that documentation as part of the installation.",
  },
  {
    id: 'f5',
    category: 'installation',
    question: 'What happens to my panels during heavy rain or flooding season?',
    answer:
      'The panels themselves are rated for outdoor exposure and heavy rain doesn’t affect output once it stops — if anything, rain cleans the panel surface. The bigger concern in flood-prone areas is where we mount the inverter and battery, which is why we always install those components above flood line, never at ground level in low-lying compounds.',
  },
  {
    id: 'f6',
    category: 'installation',
    question: 'How long does installation actually take?',
    answer:
      'Most residential systems are mounted and commissioned within a single working day once the design is approved. Larger commercial systems, like our 50kW Apapa installation, are usually phased over one to two weeks depending on roof access and electrical work required.',
  },
  {
    id: 'f7',
    category: 'maintenance',
    question: 'Do harmattan dust storms affect how much power my panels generate?',
    answer:
      "Yes, noticeably. A heavy harmattan haze can cut output by 15 to 25 percent if panels go uncleaned for weeks. It's the main reason our maintenance plan includes scheduled cleaning through the December to February harmattan window rather than a flat quarterly visit.",
  },
  {
    id: 'f8',
    category: 'maintenance',
    question: "What's covered under the 2 years of free maintenance?",
    answer:
      "Panel cleaning and output checks, inverter diagnostics and firmware updates, and battery health monitoring. It does not cover physical damage from events like falling branches or theft, which is what your homeowner's insurance is for.",
  },
  {
    id: 'f9',
    category: 'maintenance',
    question: "What's your warranty on panels, inverters and batteries?",
    answer:
      "Panels carry a 25-year performance warranty from the manufacturer, inverters typically 5 to 10 years depending on brand, and lithium batteries 5 to 10 years. We register every warranty in your name at commissioning, not ours, so you can claim directly if we're ever not around to help.",
  },
  {
    id: 'f10',
    category: 'financing',
    question: 'How does the Sterling Bank financing partnership work?',
    answer:
      'You apply through us, we package your proposal with the system specification and projected savings, and Sterling handles the credit assessment. Approved instalment plans typically run 12 to 36 months, and pre-qualification takes about 48 hours.',
  },
  {
    id: 'f11',
    category: 'financing',
    question: 'What happens if I move house before the lease term ends?',
    answer:
      "Our solar lease is tied to you, not the property, so the system can be relocated to your new address if it's feasible, or you can settle the remaining balance to leave it behind for the new owner. We handle this case by case rather than with a one-size-fits-all clause.",
  },
  {
    id: 'f12',
    category: 'financing',
    question: 'Is there a penalty for paying off my instalment plan early?',
    answer:
      'No. None of our instalment plans charge an early repayment penalty, and clearing the balance early is the single fastest way to bring down your total cost of ownership.',
  },
];
