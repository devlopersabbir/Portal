import { ROUTES } from './routes';
import { TRANSLATION_KEYS } from './translation-keys';

export type TMenuItem = {
  href: string;
  translationKey: string;
};

export const menuItems: TMenuItem[] = [
  { href: ROUTES.INDEX, translationKey: TRANSLATION_KEYS.HOME },
  { href: ROUTES.ABOUT, translationKey: TRANSLATION_KEYS.ABOUT_US },
];
