import React, { FC } from "react";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import FaqHeader from "@/components/faq/header";
import Footer from "@/shared/footer";
import { convertUrlToTitle } from "@/utils/common";

const Component: FC = () => {
  const { t } = useTranslation("faq");
  const router = useRouter();
  const currentPage = router.pathname;

  return (
    <div className="flex min-h-screen flex-col bg-light-gray dark:bg-dark-gray-heavy">
      <div className="mb-20">
        <FaqHeader currentPage={convertUrlToTitle(currentPage)} />
        <div className="mx-auto mt-10 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-light-blue-hover dark:text-white">
            {t("release")}
          </h2>
          <div className="rounded bg-light-gray p-4 shadow dark:bg-dark-gray-heavy">
            <h3 className="mb-2 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("version_1.0.0")}
            </h3>
            <ul className="list-inside list-disc dark:text-dark-white">
              <li>{t("version_1.0.0_description")}</li>
              <li>{t("version_1.0.0_description2")}</li>
              <li>{t("version_1.1.0_description3")}</li>
            </ul>

            <h3 className="my-4 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("version_1.1.0")}
            </h3>
            <ul className="list-inside list-disc dark:text-dark-white">
              <li>{t("version_1.1.0_description")}</li>
              <li>{t("version_1.1.0_description2")}</li>
              <li>{t("version_1.1.0_description3")}</li>
              <li>{t("version_1.1.0_description4")}</li>
            </ul>

            <h3 className="my-4 text-xl font-bold text-light-blue-hover dark:text-dark-white">
              {t("version_1.2.0")}
            </h3>
            <ul className="list-inside list-disc dark:text-dark-white">
              <li>{t("version_1.2.0_description")}</li>
              <li>{t("version_1.2.0_description2")}</li>
              <li>{t("version_1.2.0_description3")}</li>
            </ul>

            <h3 className="my-4 text-xl font-bold dark:text-dark-white">
              {t("version_1.3.0")}
            </h3>
            <ul className="list-inside list-disc dark:text-dark-white">
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
