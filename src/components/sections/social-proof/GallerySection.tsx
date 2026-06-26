'use client';

import * as React from 'react';
import { Dialog } from 'radix-ui';
import { ChevronLeft, ChevronRight, X, ImageOff } from 'lucide-react';
import { InstallationVisual } from '@/components/ui/InstallationVisual';
import { GALLERY_ITEMS } from '@/lib/data/gallery';
import { cn, hashString } from '@/lib/utils';

const FILTERS = [
  { label: 'All', value: 'all' as const },
  { label: 'Residential', value: 'residential' as const },
  { label: 'Commercial', value: 'commercial' as const },
  { label: 'Off-Grid', value: 'off-grid' as const },
];

const ASPECTS = ['aspect-square', 'aspect-[3/4]', 'aspect-video', 'aspect-[4/5]'];

export function GallerySection() {
  const [filter, setFilter] = React.useState<(typeof FILTERS)[number]['value']>('all');
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const filtered = React.useMemo(
    () => (filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.type === filter)),
    [filter]
  );

  const closeLightbox = () => setLightboxIndex(null);
  const showNext = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  const showPrev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'ArrowRight') showNext();
    if (event.key === 'ArrowLeft') showPrev();
  }

  const active = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section aria-labelledby="gallery-heading" className="bg-slate-50 py-20">
      <div className="container-width section-padding">
        <div className="flex flex-col items-center gap-6">
          <h2 id="gallery-heading" className="text-display-md font-bold text-slate-900">
            Installation Gallery
          </h2>
          <div role="tablist" aria-label="Filter installations by type" className="flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                role="tab"
                aria-selected={filter === f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  filter === f.value ? 'bg-brand-600 text-white' : 'bg-white text-slate-600 hover:bg-brand-50'
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-slate-300 py-16 text-center">
            <ImageOff className="size-10 text-slate-400" aria-hidden="true" />
            <p className="text-lg font-semibold text-slate-700">No installations in this category yet</p>
            <p className="text-sm text-slate-500">Check back soon — we add new projects regularly.</p>
          </div>
        ) : (
          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filtered.map((item, index) => {
              const aspect = ASPECTS[hashString(item.id) % ASPECTS.length];
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className={cn(
                    'group relative mb-4 block w-full overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2',
                    aspect
                  )}
                  aria-label={`View photo: ${item.label}, ${item.location}, ${item.systemSize}`}
                >
                  <InstallationVisual seed={item.id} variant={item.type} className="absolute inset-0" />
                  <span className="absolute inset-0 flex flex-col items-start justify-end gap-0.5 bg-gradient-to-t from-black/60 via-black/0 to-black/0 p-4 text-left opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="text-sm font-semibold text-white">{item.location}</span>
                    <span className="text-xs text-white/80">{item.systemSize}</span>
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Dialog.Root open={active !== null} onOpenChange={(open) => !open && closeLightbox()}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80" />
          <Dialog.Content
            onKeyDown={handleKeyDown}
            className="fixed inset-4 z-50 flex flex-col items-center justify-center focus:outline-none sm:inset-10"
          >
            <Dialog.Title className="sr-only">
              {active ? `${active.label} — ${active.location}` : 'Photo viewer'}
            </Dialog.Title>
            <Dialog.Description className="sr-only">
              Use the left and right arrow keys to browse photos.
            </Dialog.Description>
            {active && (
              <div className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-2xl">
                <InstallationVisual seed={active.id} variant={active.type} className="absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-lg font-semibold text-white">{active.location}</p>
                  <p className="text-sm text-white/80">
                    {active.systemSize} &middot; {active.label}
                  </p>
                </div>
              </div>
            )}
            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="size-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="size-6" aria-hidden="true" />
            </button>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close photo viewer"
                className="absolute right-2 top-2 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6 sm:top-6"
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
