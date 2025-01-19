import { BG_PATTERNS } from './common';
import { HOME_PAGE_IMAGES } from './home';
import { SERVICE_PAGE_IMAGES } from './service';

export const WEBSITE_IMAGES = {
  HOME: HOME_PAGE_IMAGES,
  SERVICE: SERVICE_PAGE_IMAGES,
  COMMON: {
    BG_PATTERNS,
  },
} as const;
