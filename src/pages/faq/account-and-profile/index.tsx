import React from "react";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import FaqHeader from "@/components/faq/header";
import Footer from "@/shared/footer";
import { convertUrlToTitle } from "@/utils/common";

const Component: React.FC = () => {
  const { t } = useTranslation("faq");
  const router = useRouter();
  const currentPage = router.pathname;

  return (
    <div className="flex bg-background-gray dark:bg-dark-blue min-h-screen flex-col">
      <div className="mb-10">
        <FaqHeader currentPage={convertUrlToTitle(currentPage)} />
        <div className="mx-auto bg-background-gray dark:bg-dark-blue mt-10 max-w-3xl">
          <h2 className="mb-4 text-light-blue-hover dark:text-dark-orange text-2xl font-bold">
            {t("account")}
          </h2>
          <div className="rounded bg-background-gray dark:bg-dark-blue  p-4 shadow">
            <h3 className="mb-2 text-light-blue-hover dark:text-dark-white text-xl font-bold">
              {t("creating_account")}
            </h3>
            <p>{t("creating_account_description")}</p>

            <h3 className="my-2 text-light-blue-hover dark:text-dark-white text-xl font-bold">
              {t("update_profile")}
            </h3>
            <p>{t("update_profile_description")}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Component.displayName = "AccountAndProfile";

export default Component;
