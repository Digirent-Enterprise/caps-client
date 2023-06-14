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
      <div className="my-10">
        <FaqHeader currentPage={convertUrlToTitle(currentPage)} />
        <div className="bg-background-gray mx-auto mt-10 max-w-3xl dark:bg-dark-blue">
          <h2 className="mb-4 text-2xl font-bold text-light-blue-hover dark:text-dark-orange">
            {t("general")}
          </h2>
          <div className="bg-background-gray rounded p-4 shadow dark:bg-dark-blue">
            <h3 className="mb-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("what_dica")}
            </h3>
            <p>{t("what_dica_description")}</p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("started_with_dica")}
            </h3>
            <p>{t("started_with_dica_description")}</p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("dica_on_mobile")}
            </h3>
            <p>{t("dica_on_mobile_description")}</p>

            <h3 className="my-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("chatbot_update")}
            </h3>
            <p>{t("chatbot_update_description")}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Component.displayName = "GeneralInformation";
export default Component;
