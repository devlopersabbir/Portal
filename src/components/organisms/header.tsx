import { getTranslations } from 'next-intl/server';

import { menuItems } from '@/config/menu-data';

import { MenuItems } from './menu-items';
import { LanguageSwitcher } from '../molecules/language-switcher';

export async function Header() {
  const t = await getTranslations('Navigation');

  const translatedMenuItems = menuItems.map((item) => ({
    href: item.href,
    label: t(item.translationKey),
  }));

  return (
    <header className="flex items-center justify-between">
      <MenuItems menuItems={translatedMenuItems} />
      <LanguageSwitcher/>
    </header>
  );
}
