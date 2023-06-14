import React, { useContext } from "react";

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
    <div className="flex bg-background-gray dark:bg-dark-blue min-h-screen flex-col">
      <div className="my-10">
        <FaqHeader currentPage={convertUrlToTitle(currentPage)} />
        <div className="mx-auto bg-background-gray dark:bg-dark-blue mt-10 max-w-3xl">
          <h2 className="mb-4 text-light-blue-hover dark:text-dark-orange text-2xl font-bold">
            {t("privacy")}
          </h2>
          <div className="rounded bg-background-gray dark:bg-dark-blue p-4 shadow">
            <h3 className="mb-2 text-light-blue-hover dark:text-dark-white text-xl font-bold">
              {t("personal_secure")}
            </h3>
            <p>{t("personal_secure_description")}</p>

            <h3 className="my-2 text-light-blue-hover dark:text-dark-white text-xl font-bold">
              {t("person_protected")}
            </h3>
            <p>{t("person_protected_description")}</p>

            <h3 className="my-2 text-light-blue-hover dark:text-dark-white text-xl font-bold">
              {t("chat_history_stored")}
            </h3>
            <p>{t("chat_history_stored_description")}</p>

            <h3 className="my-2 text-light-blue-hover dark:text-dark-white text-xl font-bold">
              {t("delete_personal")}
            </h3>
            <p>{t("delete_personal_description")}</p>

            <h3 className="my-2 text-light-blue-hover dark:text-dark-white text-xl font-bold">
              {t("conpliant_regulations")}
            </h3>
            <p>{t("conpliant_regulations_description")}</p>

            <h3 className="my-2 text-light-blue-hover dark:text-dark-white text-xl font-bold">
              {t("security_measures")}
            </h3>
            <p>{t("security_measures_description")}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Component.displayName = "PrivacyConcernsAndSecurity";
export default Component;
