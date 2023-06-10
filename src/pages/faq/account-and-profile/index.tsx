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
          <h2 className="mb-4 text-2xl font-bold">{t("account")}</h2>
          <div className="rounded bg-white p-4 shadow">
            <h3 className="mb-2 text-xl font-bold">{t("creating_account")}</h3>
            <p>{t("creating_account_description")}</p>

            <h3 className="my-2 text-xl font-bold">{t("update_profile")}</h3>
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
