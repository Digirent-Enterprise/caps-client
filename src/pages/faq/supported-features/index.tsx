import React from "react";

import { useTranslation } from "next-i18next";

import FaqHeader from "@/components/faq/header";
import Footer from "@/shared/footer";

const Component: React.FC = () => {
  const { t } = useTranslation("faq");
  return (
    <div className="flex bg-background-gray dark:bg-dark-blue min-h-screen flex-col">
      <div className="my-10">
        <FaqHeader />
        <div className="mx-auto  mt-10 max-w-3xl">
          <h2 className="mb-4 text-light-blue-hover dark:text-dark-orange text-2xl font-bold">
            {t("features")}
          </h2>
          <div className="rounded bg-background-gray dark:bg-dark-blue p-4 shadow">
            <h3 className="mb-2 text-light-blue-hover dark:text-dark-white text-xl font-bold">
              {t("support_natural_language")}
            </h3>
            <p>{t("support_natural_language_description")}</p>

            <h3 className="my-2 text-light-blue-hover dark:text-dark-white text-xl font-bold">
              {t("what_languages")}
            </h3>
            <p>{t("what_languages_description")}</p>

            <h3 className="my-2 text-light-blue-hover dark:text-dark-white text-xl font-bold">
              {t("key_features")}
            </h3>
            <p>{t("key_features_description")}</p>

            <h3 className="my-2 text-light-blue-hover dark:text-dark-white text-xl font-bold">
              {t("new_feature")}
            </h3>
            <p>{t("new_feature_description")}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Component.displayName = "SupportedFeatures";
export default Component;
