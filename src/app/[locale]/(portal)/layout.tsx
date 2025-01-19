import type { Metadata } from 'next';

import { DrawerContainer } from '@/components/atom/drawer';
import { AfterMount } from '@/components/helpers/after-mount';
import { Footer } from '@/components/molecules/footer';
import { Header } from '@/components/organisms/header';

export const metadata: Metadata = {
  title: 'Hack Your Future Portal',
  description: 'Hack Your Future Portal',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function Layout({ children }: Readonly<RootLayoutProps>) {
  return (
    <div className="overflow-x-hidden p-12">
      <AfterMount />
      <Header />
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
      <DrawerContainer />
    </div>
  );
}
