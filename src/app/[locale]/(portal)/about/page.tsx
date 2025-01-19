import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: 'About',
  description: 'About',
};

export default async function Page() {
  const t = await getTranslations('AboutUsPage');
  return (
    <>
      <h1 className="text-3xl font-bold mt-8">{t('title')}</h1>
    </>
  );
}
