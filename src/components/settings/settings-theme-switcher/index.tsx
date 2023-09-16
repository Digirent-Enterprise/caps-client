import React, { FC } from "react";

import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useTheme } from "next-themes";

import { Theme } from "@/types/enum/common/theme";

const Component: FC = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation("settings");
  const getCheckIcon = (selected: boolean) => {
    if (selected) {
      return (
        <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-light-button-blue">
          <IconCheck className="h-4 w-4 bg-light-button-blue text-white" />
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <h2 className="mb-4 text-xl font-semibold text-light-blue-hover dark:text-dark-white">
        {t("theme")}
      </h2>

      <div className="flex flex-col items-center">
        <div className="flex cursor-pointer">
          <div className="relative mr-4">
            <div
              className={`rounded border-2 ${
                theme === Theme.SYSTEM ? "border-light-button-blue" : ""
              }`}
              onClick={() => setTheme(Theme.SYSTEM)}
            >
              <Image
                src="/theme/system.png"
                alt="System Theme"
                width={300}
                height={300}
              />
              {getCheckIcon(theme === Theme.SYSTEM)}
            </div>
            <p className="mt-2 text-center font-medium text-light-blue-hover dark:text-dark-white">
              {t("system_preference")}
            </p>
          </div>
          <div className="relative mr-4">
            <div
              className={`rounded border-2 ${
                theme === Theme.LIGHT ? "border-light-button-blue" : ""
              }`}
              onClick={() => setTheme(Theme.LIGHT)}
            >
              <Image
                src="/theme/light.png"
                alt="Light Theme"
                width={300}
                height={300}
              />
              {getCheckIcon(theme === Theme.LIGHT)}
            </div>
            <p className="mt-2 text-center font-medium text-light-blue-hover dark:text-dark-white">
              {t("light")}
            </p>
          </div>
          <div className="relative">
            <div
              className={`rounded border-2 ${
                theme === Theme.DARK ? "border-light-button-blue" : ""
              }`}
              onClick={() => setTheme(Theme.DARK)}
            >
              <Image
                src="/theme/dark.png"
                alt="Dark Theme"
                width={300}
                height={300}
              />
              {getCheckIcon(theme === Theme.DARK)}
            </div>
            <p className="mt-2 text-center font-medium text-light-blue-hover dark:text-dark-white">
              {t("dark")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

Component.displayName = "ThemeSwitcher";

export default Component;
