import React, { Fragment, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { IconExternalLink, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import AccountSettings from "@/components/account-settings";
import LanguageSwitcher from "@/components/language-switcher";
import { tabs } from "@/components/settings/constant";
import { ISettingsModalProps } from "@/components/settings/type";
import ThemeSwitcher from "@/components/theme-switcher";
import BaseModal from "@/core/base-modal";
import Button from "@/core/button";
import Switcher from "@/core/switcher";

const Component: React.FC<ISettingsModalProps> = ({ isOpen, onClose }) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [isEnabledNotification, setIsEnabledNotification] = useState(false);
  const { t } = useTranslation("settings");
  const _handleToggle = () => {
    setIsEnabledNotification(!isEnabledNotification);
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title={t("settings")}>
      <>
        <div className="flex">
          <div className="border-gray-200">
            <nav className="flex flex-col justify-start">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-4 py-2 text-left focus:outline-none ${
                    selectedTab === tab.id
                      ? "font-bold text-light-blue-hover dark:text-dark-green"
                      : "text-light-text-modal hover:text-light-blue-hover dark:text-dark-white dark:hover:text-dark-green"
                  }`}
                  onClick={() => setSelectedTab(tab.id)}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="ml-4 mt-2">
            {selectedTab === 1 && (
              <>
                <div className="mb-4">
                  <ThemeSwitcher />
                </div>
                <div>
                  <LanguageSwitcher />
                </div>
              </>
            )}
            <div className="ml-4 mt-2">
              {selectedTab === 2 && <AccountSettings />}
            </div>
            {selectedTab === 3 && (
              <>{/* Add privacy settings content here */}</>
            )}
            <div className="ml-4 mt-2">
              {selectedTab === 4 && (
                <Switcher
                  title={t("notifications_enable")}
                  description={t("notifications_enable_description")}
                  checked={isEnabledNotification}
                />
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/faq" className="flex items-center">
              <IconExternalLink className="ml-4 h-4 w-4 text-light-text-modal hover:text-light-blue-hover dark:text-dark-white dark:hover:text-dark-green" />
              <span className="ml-2 text-light-text-modal hover:text-light-blue-hover dark:text-dark-white dark:hover:text-dark-green">
                {t("help_faq")}
              </span>
            </Link>
          </div>
          <div className="mt-6 flex justify-end">
            <Button onClick={onClose} mode="secondary">
              {t("cancel")}
            </Button>
            <div className="ml-2">
              <Button onClick={onClose} mode="primary">
                {t("save")}
              </Button>
            </div>
          </div>
        </div>
      </>
    </BaseModal>
  );
};

Component.displayName = "Settings";
export default Component;
