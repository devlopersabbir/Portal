import { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: TContainerProps) {
  return (
    <div className={cn('mx-auto max-w-[1280px] px-5 md:px-10', className)}>
      {children}
    </div>
  );
}
