import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations('Footer');
  return (
    <footer>
      <p>{t('title')}</p>
    </footer>
  );
}
