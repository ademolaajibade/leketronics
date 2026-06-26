'use client';

import { useEffect, useState } from 'react';

export function useScrollY(threshold = 0): boolean {
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsPast(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return isPast;
}
