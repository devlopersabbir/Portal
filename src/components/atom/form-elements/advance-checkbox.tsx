import React, { forwardRef } from 'react';

import { cn } from '@/lib/utils/cn';

export interface AdvancedCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  inputClassName?: string;
  className?: string;
}

export const AdvanceCheckbox = forwardRef<
  HTMLInputElement,
  AdvancedCheckboxProps
>(({ children, inputClassName, className, ...props }, ref) => (
  <label className={cn('relative block', className)}>
    <input
      type="checkbox"
      ref={ref}
      className={cn('peer invisible absolute -z-[1] opacity-0', inputClassName)}
      {...props}
    />
    {children}
  </label>
));

AdvanceCheckbox.displayName = 'AdvanceCheckbox';
