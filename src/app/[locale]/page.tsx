import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();
  return (
    <div>
      <h1>
        {t("HomePage.title")}
      </h1>
      <h1>{t('HomePage.about')}</h1>
    </div>
  );
}