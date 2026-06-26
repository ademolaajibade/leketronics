import { Skeleton } from '@/components/ui/Skeleton';

export function ContactFormSkeleton() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]" role="status" aria-label="Loading contact form">
      <div className="flex flex-col gap-8 rounded-3xl border border-slate-200 p-6 sm:p-8">
        <Skeleton variant="text" className="h-2 w-full" />
        <div className="flex flex-col gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <Skeleton variant="text" className="h-4 w-32" />
              <Skeleton variant="text" className="h-11 w-full rounded-lg" />
            </div>
          ))}
        </div>
        <Skeleton variant="text" className="h-11 w-32 self-end rounded-lg" />
      </div>
      <div className="flex flex-col gap-6">
        <Skeleton variant="card" className="h-72" />
        <Skeleton variant="card" className="h-24" />
        <Skeleton variant="image" className="h-64" />
      </div>
      <span className="sr-only">Loading your quote form…</span>
    </div>
  );
}
