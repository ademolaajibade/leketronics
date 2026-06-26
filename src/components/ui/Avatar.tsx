import { cn, getInitials, getAvatarColor } from '@/lib/utils';

export interface AvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZE_CLASSES = {
  sm: 'size-9 text-xs',
  md: 'size-12 text-sm',
  lg: 'size-16 text-lg',
} as const;

export function Avatar({ name, size = 'md', className }: AvatarProps) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full font-semibold text-white',
        SIZE_CLASSES[size],
        getAvatarColor(name),
        className
      )}
      role="img"
      aria-label={name}
    >
      {getInitials(name)}
    </span>
  );
}
