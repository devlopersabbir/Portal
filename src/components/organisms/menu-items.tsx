'use client';

import { Link } from '@/components/atom/link';

type TMenuItem = {
  href: string;
  label: string;
};

type Props = {
  menuItems: TMenuItem[];
};

export function MenuItems({ menuItems }: Props) {
  return (
    <menu className="hidden items-center gap-6 lg:flex">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="font-medium leading-6 text-[#757575]"
        >
          {item.label}
        </Link>
      ))}
    </menu>
  );
}
