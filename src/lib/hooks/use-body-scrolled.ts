'use client';

import { useEffect, useState } from 'react';

export function useBodyScrolled() {
  const [scrolled, setScrolled] = useState(false);

  function handleScroll() {
    const scrolled = window.scrollY;
    if (scrolled > 5) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return scrolled;
}
