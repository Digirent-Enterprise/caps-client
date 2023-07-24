import React, { useMemo } from "react";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { languageOptions } from "@/components/language-switcher/constant";
import { LocalStorageService } from "@/services/local-storage";

const Component: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation("settings");
  const _handleChangeLanguage = (lang: string) => () => {
    const localStorageService = LocalStorageService.getInstance();
    const { pathname, asPath, query } = router;

    if (router.locale === lang) return;

    router.replace({ pathname, query }, asPath, {
      locale: lang,
      shallow: true,
    });

    localStorageService.setItem("NEXT_LOCALE", lang);
  };

  const currentLocale = useMemo(
    () => languageOptions.find(({ locale }) => router.locale === locale),
    [router.locale]
  );

  return (
    <>
      <h2 className="my-4 text-xl font-semibold text-light-blue-hover dark:text-dark-white">
        {t("language")}
      </h2>

      <div className="flex items-center">
        {languageOptions.map(({ name, locale }) => (
          <button
            key={locale}
            className={`rounded-lg p-2 ${
              currentLocale?.locale === locale
                ? "dark:bg-hover:light-button-blue-hover border-white bg-light-button-blue text-white hover:bg-light-button-blue-hover dark:border-dark-blue dark:bg-light-button-blue"
                : "border-solid border-gray-400 bg-light-background-gray text-light-blue-hover hover:bg-light-gray dark:border-dark-white dark:bg-dark-gray-heavy dark:text-dark-white dark:hover:bg-light-button-blue-hover"
            }`}
            onClick={_handleChangeLanguage(locale)}
          >
            {name}
          </button>
        ))}
      </div>
    </>
  );
};

Component.displayName = "LanguageSwitcher";
export default Component;
