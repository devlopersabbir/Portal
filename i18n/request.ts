import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';


// export const port = process.env.PORT || 3001;
// export const host = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : `http://localhost:${port}`;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !routing.locales.includes(locale as any)) {
  locale = routing.defaultLocale;
 }

  return {
    messages: (
      await (locale === 'en'
        ? // When using Turbopack, this will enable HMR for `en`
        //   import('./lang-text-data/en.json')
        import("@/lang-text-data/en.json")
        : import(`@/lang-text-data/${locale}.json`))
    ).default,
    locale
  };
});