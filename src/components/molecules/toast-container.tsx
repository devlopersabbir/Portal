'use client';

import { Toaster } from 'sonner';

export function ToastContainer() {
  return (
    <Toaster
      richColors
      position="top-center"
      gap={8}
      toastOptions={{
        className: 'cursor-pointer',
        duration: 5000,
      }}
    />
  );
}
