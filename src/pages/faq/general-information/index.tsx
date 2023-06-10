import React from "react";

import { useTranslation } from "next-i18next";

import FaqHeader from "@/components/faq/header";
import Footer from "@/shared/footer";

const Component: React.FC = () => {
  const { t } = useTranslation("faq");
  return (
    <div className="flex min-h-screen flex-col">
      <div className="my-10">
        <FaqHeader />
        <div className="mx-auto mt-10 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold">{t("general")}</h2>
          <div className="rounded bg-white p-4 shadow">
            <h3 className="mb-2 text-xl font-bold">{t("what_dica")}</h3>
            <p>{t("what_dica_description")}</p>

            <h3 className="my-2 text-xl font-bold">{t("started_with_dica")}</h3>
            <p>{t("started_with_dica_description")}</p>

            <h3 className="my-2 text-xl font-bold">{t("dica_on_mobile")}</h3>
            <p>{t("dica_on_mobile_description")}</p>

            <h3 className="my-2 text-xl font-bold">{t("chatbot_update")}</h3>
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
