import React, { useMemo } from "react";

import { useRouter } from "next/router";

import { languageOptions } from "@/components/language-switcher/constant";
import { LocalStorageService } from "@/services/local-storage";

const Component: React.FC = () => {
  const router = useRouter();

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
      <h2 className="my-4 text-xl font-semibold">Language</h2>

      <div className="flex items-center">
        {languageOptions.map(({ name, locale }) => (
          <button
            key={locale}
            className={`rounded-lg p-2 ${
              currentLocale?.locale === locale
                ? "bg-blue text-white"
                : "bg-white text-black"
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
