import { LocalePrefix, Pathnames } from "next-intl/routing";

export const defaultLocale = 'en' as const;
export const locales = ['en', 'bn'] as const;
export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    bn: '/pfadnamen',
  },
};
export const localePrefix: LocalePrefix<typeof locales> = 'always';

