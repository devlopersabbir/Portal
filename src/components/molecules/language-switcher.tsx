'use client';

import { useTransition } from 'react';
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { LocalEnums, usePathname, useRouter } from '@/config/navigation';
import { cn } from '@/lib/utils/cn';

export function useLanguageSwitcher() {
  const [isSwitching, startTransition] = useTransition();

  const localActive = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function switchTo(lang: LocalEnums) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        { pathname, params },
        { locale: lang }
      );
    });
  }

  return {
    currentLocal: localActive as LocalEnums,
    switchTo,
    isSwitching,
  };
}

export function LanguageSwitcher() {
  const localActive = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();


  function handleChange(lang: LocalEnums) {
    // Check if the current locale is already the selected one to avoiding duplication
    if (params.locale === lang) return;

    // Update the URL with the new language, avoiding duplication
    startTransition(() => {
      // Check if the current pathname already has the locale in it
      const newPathname = pathname.replace(`/${params.locale}`, '');
      
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        { pathname: lang, params },
        { locale: lang }
      );
    });
  }

  return (
    <div className="flex gap-1 p-3">
      <button
        disabled={isPending}
        onClick={() => handleChange(LocalEnums.EN)}
        className={cn(
          'rounded px-2 py-1 text-left',
          params.locale === LocalEnums.EN && 'bg-primary text-white'
        )}
      >
        English
      </button>
      <button
        disabled={isPending}
        onClick={() => handleChange(LocalEnums.BN)}
        className={cn(
          'rounded px-2 py-1 text-left',
          params.locale === LocalEnums.BN && 'bg-primary text-white'
        )}
      >
        বাংলা
      </button>
    </div>
  );
}
