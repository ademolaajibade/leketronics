'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { animateCount } from '@/lib/utils';

export interface StatCounterProps {
  value: string;
  suffix?: string;
  className?: string;
}

export function StatCounter({ value, suffix, className }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();
  const target = parseFloat(value);
  const decimals = value.includes('.') ? value.split('.')[1].length : 0;
  const [display, setDisplay] = useState(() =>
    Number.isNaN(target) ? value : (0).toFixed(decimals)
  );

  useEffect(() => {
    if (!inView || Number.isNaN(target)) return;
    if (shouldReduceMotion) {
      setDisplay(target.toFixed(decimals));
      return;
    }
    animateCount(target, 1600, (current) => setDisplay(current.toFixed(decimals)));
  }, [inView, shouldReduceMotion, target, decimals]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
