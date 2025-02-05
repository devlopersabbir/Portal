import { localePrefix, locales, pathnames } from '@/constant';
import { createNavigation } from 'next-intl/navigation';

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation({
    locales,
    pathnames,
    localePrefix,
  });

export enum LocalEnums {
  EN = 'en',
  BN = 'bn',
}
