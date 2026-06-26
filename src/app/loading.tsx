import { Skeleton } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <div className="container-width section-padding flex flex-col gap-6 py-20" role="status" aria-label="Loading page">
      <Skeleton variant="text" className="h-4 w-40" />
      <Skeleton variant="text" className="h-12 w-3/4" />
      <Skeleton variant="text" className="h-5 w-1/2" />
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Skeleton variant="card" />
        <Skeleton variant="card" />
        <Skeleton variant="card" />
      </div>
      <span className="sr-only">Loading content…</span>
    </div>
  );
}
