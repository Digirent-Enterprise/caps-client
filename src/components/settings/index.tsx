import React, { Fragment, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { IconExternalLink, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import LanguageSwitcher from "@/components/language-switcher";
import { tabs } from "@/components/settings/constant";
import { ISettingsModalProps } from "@/components/settings/type";
import ThemeSwitcher from "@/components/theme-switcher";
import Switcher from "@/core/switcher";

const Component: React.FC<ISettingsModalProps> = ({ isOpen, onClose }) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [isEnabledNotification, setIsEnabledNotification] = useState(false);
  const { t } = useTranslation("settings");
  const _handleToggle = () => {
    setIsEnabledNotification(!isEnabledNotification);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex min-h-screen items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-light-text-modal bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition-transform ease-in-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="w-full max-w-screen-md">
              <div className="relative rounded-lg bg-light-background-gray dark:bg-dark-blue p-8 shadow-xl">
                <div className="mb-4 flex items-center justify-between ">
                  <h2 className="ml-4 text-xl text-light-blue-hover dark:text-dark-white font-semibold">
                    {t("settings")}
                  </h2>
                  <button
                    type="button"
                    className="text-light-text-modal hover:text-light-blue-hover dark:text-dark-white dark:hover:text-light-text-modal focus:outline-none"
                    onClick={onClose}
                  >
                    <IconX className="h-6 w-6" />
                  </button>
                </div>

                <div className="flex">
                  <div className="border-gray-200">
                    <nav className="flex flex-col justify-start">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          className={`px-4 py-2 text-left text-light-text-modal hover:text-light-blue-hover dark:text-dark-white dark:hover:text-light-text-modal focus:outline-none ${
                            selectedTab === tab.id
                              ? "font-medium light-blue-hover"
                              : ""
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
                      {selectedTab === 2 && (
                        <>{/* Add account settings content here */}</>
                      )}
                    </div>
                    {selectedTab === 3 && (
                      <>{/* Add privacy settings content here */}</>
                    )}
                    <div className="ml-4 mt-2">
                      {selectedTab === 4 && (
                        <Switcher
                          title={t("notifications_enalble")}
                          description={t("notifications_enalble_description")}
                          checked={isEnabledNotification}
                          onChange={_handleToggle}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <Link href="/faq" className="flex items-center">
                      <IconExternalLink className="ml-4 h-4 w-4 text-light-text-modal hover:text-light-blue-hover dark:text-dark-white dark:hover:text-light-text-modal" />
                      <span className="ml-2 text-light-text-modal hover:text-light-blue-hover dark:text-dark-white dark:hover:text-light-text-modal">
                        {t("help_faq")}
                      </span>
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      className="ml-4 rounded-lg bg-light-gray text-light-background-gray hover:bg-light-blue-hover dark:hover:bg-dark-orange-hover px-4 py-2 focus:outline-none"
                      onClick={onClose}
                    >
                      {t("cancel")}
                    </button>
                    <button
                      type="button"
                      className="rounded-lg text-light-background-gray bg-light-blue hover:bg-light-blue-hover dark:bg-light-maroon dark:hover:bg-dark-orange-hover px-4 py-2  focus:outline-none"
                      onClick={onClose}
                    >
                      {t("save")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

Component.displayName = "Settings";
export default Component;
