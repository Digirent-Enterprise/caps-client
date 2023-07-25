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
    <div className="flex min-h-screen flex-col dark:bg-dark-gray-heavy">
      <div className="mb-10">
        <FaqHeader currentPage={convertUrlToTitle(currentPage)} />
        <div className="mx-auto mt-10 max-w-3xl dark:bg-dark-gray-heavy">
          <h2 className="mb-4 text-2xl font-bold text-light-blue-hover dark:text-white">
            {t("account")}
          </h2>
          <div className="rounded py-4 shadow dark:bg-dark-gray-heavy">
            <h3 className="mb-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("creating_account")}
            </h3>
            <p className="dark:text-dark-white">
              {t("creating_account_description")}
            </p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("update_profile")}
            </h3>
            <p className="dark:text-dark-white">
              {t("update_profile_description")}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Component.displayName = "AccountAndProfile";

export default Component;
