import React, { Fragment, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { IconExternalLink, IconX } from "@tabler/icons-react";
import Link from "next/link";

import LanguageSwitcher from "@/components/language-switcher";
import { tabs } from "@/components/settings/constant";
import { ISettingsModalProps } from "@/components/settings/type";
import ThemeSwitcher from "@/components/theme-switcher";
import Switcher from "@/core/switcher";

const Component: React.FC<ISettingsModalProps> = ({ isOpen, onClose }) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [isEnabledNotification, setIsEnabledNotification] = useState(false);

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
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
              <div className="relative rounded-lg bg-white p-8 shadow-xl">
                <div className="mb-4 flex items-center justify-between ">
                  <h2 className="ml-4 text-xl font-semibold">Settings</h2>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
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
                          className={`px-4 py-2 text-left text-gray-500 hover:text-indigo-600 focus:outline-none ${
                            selectedTab === tab.id
                              ? "font-medium text-indigo-600"
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
                          title="Enable email notification"
                          description="Receive regular emails tailored to your interests and geographic location. Our system will analyze your symptoms and provide personalized updates on dengue-related information specific to your needs."
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
                      <IconExternalLink className="ml-4 h-4 w-4 text-gray-500" />
                      <span className="ml-2 text-gray-500">Help & FAQ</span>
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      className="ml-4 rounded-lg bg-white px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none"
                      onClick={onClose}
                    >
                      Save
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
