import React, { useState, useEffect } from "react";

import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";

import { Theme } from "@/components/theme-switcher/type";

const Component: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    setTheme(savedTheme ?? preferredTheme);
  }, []);

  const _handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const getCheckIcon = (selected: boolean) => {
    if (selected) {
      return (
        <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-light-blue">
          <IconCheck className="h-4 w-4 text-white" />
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <h2 className="mb-4 text-xl font-semibold">Theme</h2>

      <div className="flex flex-col items-center">
        <div className="flex cursor-pointer">
          <div className="relative mr-4">
            <div
              className={`rounded border-2 ${
                theme === "system" ? "border-light-blue" : ""
              }`}
              onClick={() => _handleThemeChange("system")}
            >
              <Image
                src="/theme/dark.png"
                alt="System Theme"
                width={300}
                height={300}
              />
              {getCheckIcon(theme === "system")}
            </div>
            <p className="mt-2 text-center font-medium">System Preference</p>
          </div>
          <div className="relative mr-4">
            <div
              className={`rounded border-2 ${
                theme === "light" ? "border-light-blue" : ""
              }`}
              onClick={() => _handleThemeChange("light")}
            >
              <Image
                src="/theme/dark.png"
                alt="Light Theme"
                width={300}
                height={300}
              />
              {getCheckIcon(theme === "light")}
            </div>
            <p className="mt-2 text-center font-medium">Light Theme</p>
          </div>
          <div className="relative">
            <div
              className={`rounded border-2 ${
                theme === "dark" ? "border-light-blue" : ""
              }`}
              onClick={() => _handleThemeChange("dark")}
            >
              <Image
                src="/theme/dark.png"
                alt="Dark Theme"
                width={300}
                height={300}
              />
              {getCheckIcon(theme === "dark")}
            </div>
            <p className="mt-2 text-center font-medium">Dark Theme</p>
          </div>
        </div>
      </div>
    </>
  );
};

Component.displayName = "ThemeSwitcher";

export default Component;
