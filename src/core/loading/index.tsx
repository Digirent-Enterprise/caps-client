import React, { memo, useContext } from "react";

import { useTranslation } from "next-i18next";

import { LoadingContext } from "@/contexts/loading-context";

const Component = memo((props: { loadingProps?: boolean }) => {
  const { t } = useTranslation("home");
  const { loadingProps } = props;
  const { loading } = useContext(LoadingContext);
  if (!loading && !loadingProps) {
    return null;
  }

  return (
    <div className="absolute z-50 flex h-screen w-screen items-center justify-center bg-transparent backdrop-blur-sm">
      <div className="flex h-1/4 w-1/6 flex-col items-center justify-center gap-10  rounded-md shadow-2xl">
        <div role="status">
          <img
            alt="loading"
            src={"/static/dashboard/cloud.png"}
            className="w-36  animate-bounce"
          />
        </div>
        <div className="relative bottom-12 flex space-x-1">
          <div className="animate-bounce font-bold text-light-blue-hover">
            {t("dengue")}
          </div>
          <div className="animate-bounce font-bold text-light-blue-hover delay-75">
            {t("portal")}
          </div>
          <div className="animate-bounce font-bold text-light-blue-hover delay-100">
            {t("is")}
          </div>
          <div className="animate-bounce font-bold text-light-blue-hover delay-150">
            {t("loading")}
          </div>
          <div className="animate-bounce font-bold text-light-blue-hover delay-200">
            ...
          </div>
        </div>
      </div>
    </div>
  );
});

Component.displayName = "Loading";

export default Component;
