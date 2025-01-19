'use client';

import React from 'react';

import { PopoverContent } from './popover-content';
import { PopoverProvider, type PopoverProviderProps } from './popover-context';
import { PopoverTrigger } from './popover-trigger';

export type PopoverProps = {} & PopoverProviderProps;

export function Popover({
  isOpen,
  setIsOpen,
  gap = 8,
  animation = 'zoomIn',
  placement = 'bottom',
  enableOverlay = false,
  showArrow = true,
  arrowClassName,
  overlayClassName,
  children,
}: React.PropsWithChildren<PopoverProps>) {
  return (
    <PopoverProvider
      value={{
        isOpen,
        setIsOpen,
        gap,
        animation,
        enableOverlay,
        showArrow,
        placement,
        arrowClassName,
        overlayClassName,
      }}
    >
      <>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === PopoverTrigger) {
            return child;
          }
          if (React.isValidElement(child) && child.type === PopoverContent) {
            return child;
          }
          return null;
        })}
      </>
    </PopoverProvider>
  );
}

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;

Popover.displayName = 'Popover';
