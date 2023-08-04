import React, { Fragment, memo } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { IconX } from "@tabler/icons-react";

import { IBaseModalProps } from "@/core/base-modal/type";

const Component = memo((props: IBaseModalProps) => {
  const { onClose, isOpen, title, children } = props;
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
            enterTo="opacity-50"
            leave="transition-opacity ease-linear duration-200"
            leaveFrom="opacity-50"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-light-text-modal transition-opacity" />
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
              <div className="relative rounded-lg bg-light-background-gray p-8 shadow-xl dark:bg-dark-gray-heavy">
                <div className="mb-4 flex items-center justify-between ">
                  <h2 className=" text-xl font-semibold text-light-blue-hover dark:text-dark-white">
                    {title}
                  </h2>
                  <button
                    type="button"
                    className="text-light-text-modal hover:text-light-blue-hover focus:outline-none dark:text-dark-white dark:hover:text-light-text-modal"
                    onClick={onClose}
                  >
                    <IconX className="h-6 w-6" />
                  </button>
                </div>

                {children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
});

Component.displayName = "BaseModal";
export default Component;
