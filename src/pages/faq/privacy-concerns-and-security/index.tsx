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
    <div className="bg-background-gray flex min-h-screen flex-col dark:bg-dark-blue">
      <div className="my-10">
        <FaqHeader currentPage={convertUrlToTitle(currentPage)} />
        <div className="bg-background-gray mx-auto mt-10 max-w-3xl dark:bg-dark-blue">
          <h2 className="mb-4 text-2xl font-bold text-light-blue-hover dark:text-dark-orange">
            {t("privacy")}
          </h2>
          <div className="bg-background-gray rounded p-4 shadow dark:bg-dark-blue">
            <h3 className="mb-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("personal_secure")}
            </h3>
            <p>{t("personal_secure_description")}</p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("person_protected")}
            </h3>
            <p>{t("person_protected_description")}</p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("chat_history_stored")}
            </h3>
            <p>{t("chat_history_stored_description")}</p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("delete_personal")}
            </h3>
            <p>{t("delete_personal_description")}</p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("conpliant_regulations")}
            </h3>
            <p>{t("conpliant_regulations_description")}</p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
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
