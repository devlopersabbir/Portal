'use client';

import * as React from 'react';

import { DayPicker } from 'react-day-picker';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

import { cn } from '@/lib/utils/cn';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(
          'test [&_tbody>tr]:overflow-hidden [&_tbody>tr]:rounded-full [&_tbody_tr_td_button]:!outline-none',
          className
        )}
        classNames={{
          months:
            'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full',
          month: 'space-y-4 w-full',
          caption: 'flex justify-center pt-1 relative items-center',
          caption_label: 'text-base font-medium text-gray-600 mb-2',
          nav: 'space-x-1 flex items-center',
          nav_button: 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          nav_button_previous: 'absolute left-2 duration-200',
          nav_button_next: 'absolute right-1 duration-200',
          table: 'w-full border-collapse space-y-1',
          head_row: 'flex pb-1 w-full mb-3',
          head_cell: 'w-[var(--cell-size)] font-medium text-gray-600 text-sm',
          row: 'flex w-full h-[var(--cell-size)] mt-[3px]',
          cell: 'aspect-square w-[var(--cell-size)] flex items-center justify-center text-center text-sm p-0 relative rounded-full [&:has([aria-selected].day-range-end)]:rounded-full [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-full last:[&:has([aria-selected])]:rounded-full focus-within:relative focus-within:z-20',
          day: 'aspect-square w-[calc(var(--cell-size)-10px)] text-black/50 font-medium aria-selected:opacity-100 rounded-full aria-selected:text-white md:text-base',
          day_selected:
            'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
          day_today: 'bg-accent text-accent-foreground',
          day_outside:
            'day-outside hidden text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
          day_disabled: 'text-muted-foreground opacity-50',
          day_hidden: 'invisible',
          ...classNames,
        }}
        components={{
          // IconLeft: ({ ...props }) => <PiCaretLeftBold className="h-6 w-6" />,
          // IconRight: ({ ...props }) => <PiCaretRightBold className="h-6 w-6" />,
          IconLeft: () => <PiCaretLeftBold className="h-5 w-5 duration-200" />,
          IconRight: () => (
            <PiCaretRightBold className="h-5 w-5 duration-200" />
          ),
        }}
        {...props}
      />
    </>
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
