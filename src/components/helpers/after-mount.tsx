'use client';

import { useEffect } from 'react';

import { useBodyScrolled } from '@/lib/hooks/use-body-scrolled';

export function AfterMount() {
  const bodyScrolled = useBodyScrolled();

  useEffect(() => {
    if (document && bodyScrolled) {
      document.body.classList.add('body-scrolled');
    } else {
      document.body.classList.remove('body-scrolled');
    }
  }, [bodyScrolled]);

  return <></>;
}
