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
          <h2 className="mb-4 text-2xl font-bold">{t("release")}</h2>
          <div className="rounded bg-white p-4 shadow">
            <h3 className="mb-2 text-xl font-bold">{t("version_1.0.0")}</h3>
            <ul className="list-inside list-disc">
              <li>{t("version_1.0.0_description")}</li>
              <li>{t("version_1.0.0_description2")}</li>
              <li>{t("version_1.1.0_description3")}</li>
            </ul>

            <h3 className="my-4 text-xl font-bold">{t("version_1.1.0")}</h3>
            <ul className="list-inside list-disc">
              <li>{t("version_1.1.0_description")}</li>
              <li>{t("version_1.1.0_description2")}</li>
              <li>{t("version_1.1.0_description3")}</li>
              <li>{t("version_1.1.0_description4")}</li>
            </ul>

            <h3 className="my-4 text-xl font-bold">{t("version_1.2.0")}</h3>
            <ul className="list-inside list-disc">
              <li>{t("version_1.2.0_description")}</li>
              <li>{t("version_1.2.0_description2")}</li>
              <li>{t("version_1.2.0_description3")}</li>
            </ul>

            <h3 className="my-4 text-xl font-bold">{t("version_1.3.0")}</h3>
            <ul className="list-inside list-disc">
              <li>{t("version_1.3.0_description")}</li>
              <li>{t("version_1.3.0_description2")}</li>
              <li>{t("version_1.3.0_description3")}</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Component.displayName = "ReleaseNotes";
export default Component;
