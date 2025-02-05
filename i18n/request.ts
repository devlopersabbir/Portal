import { notFound } from 'next/navigation';

import { LocalePrefix, Pathnames } from 'next-intl/routing';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (
      await (locale === 'en'
        ? // When using Turbopack, this will enable HMR for `en`
        //   import('./lang-text-data/en.json')
        import("@/lang-text-data/en.json")
        : import(`@/lang-text-data/${locale}.json`))
    ).default,
  };
});

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

// export const port = process.env.PORT || 3001;
// export const host = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : `http://localhost:${port}`;
