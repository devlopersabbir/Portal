'use client';

import React from 'react';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export function PageLoader() {
  return (
    <ProgressBar
      height="2px"
      color="#0072DE"
      // #0072DE
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
