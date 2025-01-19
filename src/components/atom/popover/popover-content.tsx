'use client';

import React from 'react';

import { FloatingArrow, FloatingPortal } from '@floating-ui/react';

import { cn } from '@/lib/utils/cn';

import { usePopover } from './popover-context';

const popoverStyles = {
  base: 'z-[999] min-w-max bg-white dark:bg-muted/80 dark:backdrop-blur-3xl border border-muted',
  arrow: 'fill-background dark:fill-muted/80 [&>path]:stroke-muted',
  shadow: {
    sm: 'drop-shadow-md',
    md: 'drop-shadow-lg',
    lg: 'drop-shadow-xl',
    xl: 'drop-shadow-2xl',
  },
  size: {
    sm: 'p-2.5',
    md: 'p-4',
    lg: 'p-5',
    xl: 'p-6',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    pill: 'rounded-full',
  },
};

type PopoverContentProps = {
  children:
    | React.ReactNode
    | (({
        open,
        setOpen,
      }: {
        open: boolean;
        setOpen: React.Dispatch<React.SetStateAction<boolean>>;
      }) => React.ReactNode);
  className?: string;
};

export function PopoverContent({ children, className }: PopoverContentProps) {
  const {
    open,
    setOpen,
    strategy,
    isMounted,
    x,
    y,
    refs,
    styles,
    arrowRef,
    context,
    enableOverlay,
    showArrow,
    getFloatingProps,
    arrowClassName,
    overlayClassName,
  } = usePopover();
  const isChildrenFunction = typeof children === 'function';

  return (
    <>
      {(isMounted || open) && (
        <FloatingPortal>
          {enableOverlay ? (
            <div
              className={cn(
                'popover-overlay',
                'fixed inset-0 z-[998] cursor-pointer bg-black bg-opacity-60 transition-opacity duration-200',
                open ? 'bg-opacity-60 dark:bg-opacity-80' : 'opacity-0',
                overlayClassName
              )}
            >
              <span className="sr-only">popover overlay</span>
            </div>
          ) : null}

          <div
            role="popover"
            ref={refs.setFloating}
            className={className}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              ...styles,
            }}
            {...getFloatingProps()}
          >
            {isChildrenFunction
              ? setOpen && children({ open, setOpen })
              : children}

            {showArrow ? (
              <FloatingArrow
                ref={arrowRef}
                context={context}
                data-testid="popover-arrow"
                className={cn(
                  'popover-arrow',
                  popoverStyles.arrow,
                  arrowClassName
                )}
                style={{ strokeDasharray: '0,14, 5' }}
              />
            ) : null}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}

PopoverContent.displayName = 'PopoverContent';
