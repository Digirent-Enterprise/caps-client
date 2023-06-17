import React from "react";

import { useTranslation } from "next-i18next";
const Component = () => {
  const { t } = useTranslation("home");
  return (
    <div className="text-light-blue-hover my-4 text-center text-sm">
      {t("welcome_to_chatbot")}
    </div>
  );
};

Component.displayName = "DefaultChatMessage";
export default Component;
