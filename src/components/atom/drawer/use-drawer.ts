'use client';

import { atom, useAtomValue, useSetAtom } from 'jotai';

import { cn } from '@/lib/utils/cn';

export type DrawerPlacements = 'left' | 'right' | 'top' | 'bottom';

type DrawerTypes = {
  view: React.ReactNode;
  isOpen: boolean;
  placement?: DrawerPlacements;
  customSize?: string;
  closeOnPathnameChange?: boolean;
  containerClassName?: string;
};

const drawerAtom = atom<DrawerTypes>({
  isOpen: false,
  view: null,
  placement: 'right',
  customSize: '320px',
  closeOnPathnameChange: true,
  containerClassName: 'w-[500px] bg-white',
});

export function useDrawer() {
  const state = useAtomValue(drawerAtom);
  const setState = useSetAtom(drawerAtom);

  const openDrawer = ({
    view,
    placement = 'right',
    customSize,
    closeOnPathnameChange = true,
    containerClassName,
  }: {
    view: React.ReactNode;
    placement?: DrawerPlacements;
    customSize?: string;
    closeOnPathnameChange?: boolean;
    containerClassName?: string;
  }) => {
    setState({
      ...state,
      isOpen: true,
      view,
      placement,
      customSize,
      closeOnPathnameChange,
      containerClassName: cn('w-[500px] bg-white', containerClassName),
    });
  };

  const closeDrawer = () => {
    setState({
      ...state,
      isOpen: false,
    });
  };

  return {
    ...state,
    openDrawer,
    closeDrawer,
  };
}
