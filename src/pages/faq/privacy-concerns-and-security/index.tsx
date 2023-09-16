import React, { FC } from "react";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import FaqHeader from "@/components/faq/faq-header";
import Footer from "@/shared/footer";

const Component: FC = () => {
  const { t } = useTranslation("faq");
  const router = useRouter();
  const currentPage = router.pathname;

  return (
    <div className="flex min-h-screen flex-col bg-light-gray dark:bg-dark-gray-heavy">
      <div className="mb-20">
        <FaqHeader currentPage={currentPage} />
        <div className="mx-auto mt-10 max-w-3xl bg-light-gray dark:bg-dark-gray-heavy">
          <h2 className="mb-4 text-2xl font-bold text-light-blue-hover dark:text-white">
            {t("privacy-concerns-and-security")}
          </h2>
          <div className="rounded bg-light-gray p-4 shadow dark:bg-dark-gray-heavy">
            <h3 className="mb-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("personal_secure")}
            </h3>
            <p className="dark:text-dark-white">
              {t("personal_secure_description")}
            </p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("person_protected")}
            </h3>
            <p className="dark:text-dark-white">
              {t("person_protected_description")}
            </p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("chat_history_stored")}
            </h3>
            <p className="dark:text-dark-white">
              {t("chat_history_stored_description")}
            </p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("delete_personal")}
            </h3>
            <p className="dark:text-dark-white">
              {t("delete_personal_description")}
            </p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("conpliant_regulations")}
            </h3>
            <p className="dark:text-dark-white">
              {t("conpliant_regulations_description")}
            </p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("security_measures")}
            </h3>
            <p className="dark:text-dark-white">
              {t("security_measures_description")}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Component.displayName = "PrivacyConcernsAndSecurity";
export default Component;
