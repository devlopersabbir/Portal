import { cn } from '@/lib/utils/cn';

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'h-3.5 w-3.5 animate-spin rounded-full border-2 border-b-0 border-r-0 border-current',
        className
      )}
    />
  );
}
