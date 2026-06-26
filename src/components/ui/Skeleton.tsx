import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const skeletonVariants = cva('animate-pulse bg-slate-200', {
  variants: {
    variant: {
      text: 'h-4 w-full rounded',
      avatar: 'size-12 rounded-full',
      card: 'h-48 w-full rounded-2xl',
      image: 'aspect-video w-full rounded-xl',
    },
  },
  defaultVariants: { variant: 'text' },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

export function Skeleton({ className, variant, ...props }: SkeletonProps) {
  return <div className={cn(skeletonVariants({ variant }), className)} aria-hidden="true" {...props} />;
}
