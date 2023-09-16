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
            {t("general-information")}
          </h2>
          <div className="rounded bg-light-gray p-4 shadow dark:bg-dark-gray-heavy">
            <h3 className="mb-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("what_dica")}
            </h3>
            <p className="dark:text-dark-white">{t("what_dica_description")}</p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("started_with_dica")}
            </h3>
            <p className="dark:text-dark-white">
              {t("started_with_dica_description")}
            </p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("dica_on_mobile")}
            </h3>
            <p className="dark:text-dark-white">
              {t("dica_on_mobile_description")}
            </p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("chatbot_update")}
            </h3>
            <p className="dark:text-dark-white">
              {t("chatbot_update_description")}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Component.displayName = "GeneralInformation";
export default Component;
