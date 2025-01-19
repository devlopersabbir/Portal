'use client';

import { ComponentProps } from 'react';

import { Link as NextIntlLink } from '@/config/navigation';

type LocaleLink = ComponentProps<'a'> & {
  href: string;
};

export function Link(props: LocaleLink) {
  return <NextIntlLink {...props} />;
}
