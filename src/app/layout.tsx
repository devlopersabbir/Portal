import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Prompt } from 'next/font/google';

import axios from 'axios';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import 'swiper/css';
import 'swiper/css/pagination';

import { config } from '@/config/config';

import { cn } from '@/lib/utils/cn';

import { PageLoader } from '@/components/atom/page-loader';

import '@/app/globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});
const prompt = Prompt({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-prompt',
});

export const metadata: Metadata = {
  title: 'wefixit',
  description: 'Your Modern, Phone Repair Solution',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
axios.defaults.withCredentials = true;
axios.defaults.baseURL = config.apiEndpointBase;
export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={cn(plusJakartaSans.variable, prompt.variable)}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>

        <PageLoader />
      </body>
    </html>
  );
}
