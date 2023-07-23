import React from "react";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import FaqHeader from "@/components/faq/header";
import Footer from "@/shared/footer";
import { convertUrlToTitle } from "@/utils/common";

const Component: React.FC = () => {
  const { t } = useTranslation("faq");
  const router = useRouter();
  const currentPage = router.pathname;

  return (
    <div className="bg-light-gray flex min-h-screen flex-col dark:bg-dark-gray-heavy">
      <div className="mb-10">
        <FaqHeader currentPage={convertUrlToTitle(currentPage)} />
        <div className="mx-auto  mt-10 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-light-blue-hover dark:text-white">
            {t("features")}
          </h2>
          <div className="bg-background-gray rounded py-4 shadow dark:bg-dark-gray-heavy">
            <h3 className="mb-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("support_natural_language")}
            </h3>
            <p className="dark:text-dark-white">
              {t("support_natural_language_description")}
            </p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("what_languages")}
            </h3>
            <p className="dark:text-dark-white">
              {t("what_languages_description")}
            </p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("key_features")}
            </h3>
            <p className="dark:text-dark-white">
              {t("key_features_description")}
            </p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("new_feature")}
            </h3>
            <p className="dark:text-dark-white">
              {t("new_feature_description")}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Component.displayName = "SupportedFeatures";
export default Component;
