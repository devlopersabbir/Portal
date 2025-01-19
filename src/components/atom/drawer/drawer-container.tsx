'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import { Drawer } from '@/components/atom/drawer';

import { useDrawer } from './use-drawer';

export function DrawerContainer() {
  const {
    isOpen,
    view,
    placement,
    // customSize,
    closeDrawer,
    closeOnPathnameChange,
    containerClassName,
  } = useDrawer();
  const pathname = usePathname();
  useEffect(() => {
    if (closeOnPathnameChange) {
      closeDrawer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer
      isOpen={isOpen}
      onClose={closeDrawer}
      placement={placement}
      // customSize={customSize}
      containerClassName={containerClassName}
      className="z-[9999]"
    >
      {view}
    </Drawer>
  );
}
