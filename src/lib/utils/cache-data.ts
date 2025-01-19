import { unstable_cache } from 'next/cache';

import { config } from '@/config/config';

const revalidateTime = config.nextCacheTime ?? 5 * 60;
type Callback = (...args: any[]) => Promise<any>;

export const cacheData = <T extends Callback>(
  cb: T,
  tags: string[],
  revalidate: number = revalidateTime
): T => unstable_cache(cb, tags, { tags, revalidate });
