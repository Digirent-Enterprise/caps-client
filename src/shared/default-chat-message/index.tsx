import React from "react";

import { useTranslation } from "next-i18next";
const Component = () => {
  const { t } = useTranslation("home");
  return (
    <div className="my-4 text-center text-sm text-light-blue-hover dark:text-white">
      {t("welcome_to_chatbot")}
    </div>
  );
};

Component.displayName = "DefaultChatMessage";
export default Component;
