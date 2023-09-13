import React, { Fragment, FC } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { IconX } from "@tabler/icons-react";
import { useTranslation } from "next-i18next";

import { ISliceOverProps } from "@/shared/sliceover/type";

const Component: FC<ISliceOverProps> = ({ open, setOpen, metadata }) => {
  const { t } = useTranslation("metadata");

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-40 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <IconX className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex flex-row items-center gap-3 bg-light-button-blue p-4 sm:px-6">
                      <Dialog.Title className="text-2xl font-semibold leading-6 text-white">
                        References
                      </Dialog.Title>
                      <p className="mt-1 w-fit rounded border-2 border-light-orange bg-light-orange px-3 font-semibold text-white">
                        BETA
                      </p>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <ul className="list-disc pl-5">
                        {metadata.map((item, index) => (
                          <li key={index} className="mb-4">
                            <div className="text-lg font-semibold capitalize">
                              {item.source_type}
                            </div>
                            <div className="text-gray-600">
                              {t("source")}: {item.source}
                            </div>
                            <div className="text-gray-600">
                              {t("page")}: {item.page}
                            </div>
                            <div className="text-gray-600">
                              {t("publisher")}: {item.publisher}
                            </div>
                            <div className="text-gray-600">
                              {t("author")}: {item.author}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

Component.displayName = "SliceOver";
export default Component;
