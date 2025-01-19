export const config = {
  apiEndpointBase: process.env.NEXT_PUBLIC_API_ENDPOINT,
  nextCacheTime: Number(process.env.NEXT_PUBLIC_CACHE_TIME_IN_SECOND),
} as const;
