import {defineRouting} from 'next-intl/routing';
import { defaultLocale, localePrefix, pathnames } from './constant';

export const routing = defineRouting({
    locales: ['en', 'bn'],
    defaultLocale,
    localePrefix,
    pathnames
});