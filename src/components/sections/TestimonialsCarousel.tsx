'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import type { Testimonial } from '@/types';

export interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const trackRef = React.useRef<HTMLUListElement>(null);
  const itemRefs = React.useRef<(HTMLLIElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const scrollToIndex = React.useCallback((index: number) => {
    const track = trackRef.current;
    const item = itemRefs.current[index];
    if (!track || !item) return;
    track.scrollTo({ left: item.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  }, []);

  const goTo = React.useCallback(
    (direction: 1 | -1) => {
      setActiveIndex((current) => {
        const next = (current + direction + testimonials.length) % testimonials.length;
        scrollToIndex(next);
        return next;
      });
    },
    [scrollToIndex, testimonials.length]
  );

  React.useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => goTo(1), 5000);
    return () => clearInterval(id);
  }, [isPaused, goTo]);

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) {
          const index = itemRefs.current.findIndex((el) => el === mostVisible.target);
          if (index !== -1) setActiveIndex(index);
        }
      },
      { root: track, threshold: 0.6 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [testimonials.length]);

  return (
    <div
      role="region"
      aria-label="Customer testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className="relative"
    >
      <ul
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
        style={{ scrollbarWidth: 'none' }}
      >
        {testimonials.map((testimonial, index) => (
          <li
            key={testimonial.id}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="w-full shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <Card variant="outlined" className="flex h-full flex-col gap-4 p-6">
              <div className="flex items-center gap-3">
                <Avatar name={testimonial.name} />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'size-4',
                      i < testimonial.rating ? 'fill-solar-amber text-solar-amber' : 'text-slate-200'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="flex-1 text-slate-700">{testimonial.quote}</p>
              <Badge variant="default">{testimonial.systemSize}</Badge>
            </Card>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => goTo(-1)}
          aria-label="Previous testimonial"
          className="flex size-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                scrollToIndex(index);
              }}
              aria-label={`Go to testimonial ${index + 1} of ${testimonials.length}`}
              aria-current={index === activeIndex || undefined}
              className={cn(
                'size-2.5 rounded-full transition-colors',
                index === activeIndex ? 'bg-brand-600' : 'bg-slate-300'
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(1)}
          aria-label="Next testimonial"
          className="flex size-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing testimonial {activeIndex + 1} of {testimonials.length}: {testimonials[activeIndex]?.name}
      </p>
    </div>
  );
}
