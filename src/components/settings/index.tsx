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
              <div className="relative rounded-lg bg-light-background-gray p-8 shadow-xl dark:bg-dark-blue">
                <div className="mb-4 flex items-center justify-between ">
                  <h2 className="ml-4 text-xl font-semibold text-light-blue-hover dark:text-dark-white">
                    {t("settings")}
                  </h2>
                  <button
                    type="button"
                    className="text-light-text-modal hover:text-light-blue-hover focus:outline-none dark:text-dark-white dark:hover:text-light-text-modal"
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
                          className={`px-4 py-2 text-left text-light-text-modal hover:text-light-blue-hover focus:outline-none dark:text-dark-white dark:hover:text-light-text-modal ${
                            selectedTab === tab.id
                              ? "light-blue-hover font-medium"
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
                      {selectedTab === 2 && <></>}
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
                      <IconExternalLink className="ml-4 h-4 w-4 text-light-text-modal hover:text-light-blue-hover dark:text-dark-white dark:hover:text-light-text-modal" />
                      <span className="ml-2 text-light-text-modal hover:text-light-blue-hover dark:text-dark-white dark:hover:text-light-text-modal">
                        {t("help_faq")}
                      </span>
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      className="ml-4 rounded-md bg-light-background-gray border border-light-gray px-4 py-2 text-light-blue-hover hover:bg-light-gray focus:outline-none dark:hover:bg-dark-orange-hover"
                      onClick={onClose}
                    >
                      {t("cancel")}
                    </button>
                    <div className="ml-2">
                      <button
                        type="button"
                        className="rounded-md bg-light-button-green px-4 py-2 text-light-background-gray hover:bg-light-button-green-hover focus:outline-none dark:bg-light-maroon  dark:hover:bg-dark-orange-hover"
                        onClick={onClose}
                      >
                        {t("save")}
                      </button>
                    </div>
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
