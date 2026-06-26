'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';

export function SuccessCard({ firstName }: { firstName: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="status"
      className="flex flex-col items-center gap-4 rounded-3xl border border-slate-200 p-10 text-center"
    >
      <motion.span
        initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 12 }}
        className="flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
      >
        <Check className="size-8" aria-hidden="true" />
      </motion.span>
      <h2 className="text-xl font-bold text-slate-900">Thanks, {firstName}!</h2>
      <p className="text-slate-600">{`We'll be in touch within 4 hours.`}</p>
      <Link href="/social-proof" className="font-semibold text-brand-600 hover:text-brand-700">
        In the meantime, view our case studies →
      </Link>
    </div>
  );
}
