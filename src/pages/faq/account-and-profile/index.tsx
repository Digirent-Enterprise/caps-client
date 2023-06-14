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
    <div className="bg-background-gray flex min-h-screen flex-col dark:bg-dark-blue">
      <div className="mb-10">
        <FaqHeader currentPage={convertUrlToTitle(currentPage)} />
        <div className="bg-background-gray mx-auto mt-10 max-w-3xl dark:bg-dark-blue">
          <h2 className="mb-4 text-2xl font-bold text-light-blue-hover dark:text-dark-orange">
            {t("account")}
          </h2>
          <div className="bg-background-gray rounded p-4  shadow dark:bg-dark-blue">
            <h3 className="mb-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("creating_account")}
            </h3>
            <p>{t("creating_account_description")}</p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
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
