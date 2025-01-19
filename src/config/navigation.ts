import { localePrefix, locales, pathnames } from '@/i18n';
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  });

export enum LocalEnums {
  EN = 'en',
  BN = 'bn',
}
