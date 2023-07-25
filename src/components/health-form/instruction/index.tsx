import Link from "next/link";
import { useTranslation } from "next-i18next";

import Button from "@/core/button";
import useDevice from "@/hooks/useDevice";
const Component = () => {
  const { t } = useTranslation("instruction");
  const { isMobile } = useDevice();
  return (
    <div
      className={`mx-auto max-w-3xl bg-light-background-gray px-4 py-8 dark:bg-dark-gray-heavy ${
        isMobile ? "sm:px-6" : "lg:px-8"
      }`}
    >
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-light-blue-hover dark:text-dark-green">
          {t("form_instructions")}
        </h2>
        <div className="mb-4">
          <h3 className="mb-2 text-lg font-bold dark:text-white">
            {t("purpose")}
          </h3>
          <p className="text-light-blue-hover dark:text-dark-white">
            {t("the_purpose_of_this_health_form")}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="mb-2 text-lg font-bold text-light-blue-hover dark:text-dark-white">
            {t("rules")}
          </h3>
          <p className="text-light-blue-hover dark:text-dark-white">
            {t("please_read")}
          </p>
          <ol className="list-decimal pt-5 text-light-blue-hover dark:text-dark-white">
            <li>{t("please_answer")}</li>
            <li>{t("if_not_know_answer")}</li>
            <li>{t("by_submitting")}</li>
          </ol>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold text-light-blue-hover dark:text-dark-white">
            {t("instruction")}
          </h3>
          <ul className="list-disc pb-5 text-light-blue-hover dark:text-dark-white">
            <li>{t("blood_pressure")}</li>
            <li>{t("blood_type")}</li>
            <li>{t("height")}</li>
            <li>{t("weight")}</li>
            <li>{t("medical_conditions")}</li>
            <li>{t("medications")}</li>
            <li>{t("allergies")}</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold text-light-blue-hover dark:text-dark-white">
            {t("data_privacy")}
          </h3>
          <p className="text-light-blue-hover dark:text-dark-white">
            {t("we_take_data")}
          </p>
        </div>
      </div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-light-blue-hover dark:text-dark-white">
            {t("estimated_time")}{" "}
            <span className="font-bold">{t("15_minutes")}</span>
          </p>
        </div>
        <div>
          <Link href={"/health-form/health-data"}>
            <Button mode="primary">{t("start")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Component.displayName = "HealthFormInstruction";

export default Component;
