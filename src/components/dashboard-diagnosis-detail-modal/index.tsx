import React, { Fragment, useMemo } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { IconX } from "@tabler/icons-react";

import { IDashboardDiagnosisDetail } from "@/components/dashboard-diagnosis-detail-modal/type";
import { formatDateTime } from "@/utils/common";

const Component = React.memo((props: IDashboardDiagnosisDetail) => {
  const { open: isOpen, onClose, item, img } = props;
  const textWithLineBreaks = useMemo(() => {
    return item.description.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <div className="pb-1" />
      </React.Fragment>
    ));
  }, [item]);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 top-[10%] z-50 max-h-[80vh] overflow-scroll overflow-y-auto "
        onClose={onClose}
      >
        <div className="flex items-center justify-center">
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
            <Dialog.Panel>
              <div className="h-full w-full max-w-screen-md ">
                <div className="relative rounded-lg bg-light-background-gray p-8 shadow-xl dark:bg-dark-blue">
                  <div className="mb-4 flex items-center justify-between ">
                    <h2 className="text-xl font-semibold text-light-blue-hover dark:text-dark-white">
                      Diagnosis Detail - {formatDateTime(item.createdAt)}
                    </h2>
                    <button
                      type="button"
                      className="text-light-text-modal hover:text-light-blue-hover focus:outline-none dark:text-dark-white dark:hover:text-light-text-modal"
                      onClick={onClose}
                    >
                      <IconX className="h-6 w-6" />
                    </button>
                  </div>
                  <img
                    className="mb-2 rounded-t-lg"
                    src={"/static/dashboard/diag.svg"}
                    alt=""
                  />
                  <Dialog.Description>{textWithLineBreaks}</Dialog.Description>

                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      className="border-light-gray hover:bg-light-gray ml-4 rounded-md border bg-light-background-gray px-4 py-2 text-light-blue-hover focus:outline-none dark:hover:bg-dark-orange-hover"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
});

Component.displayName = "DashboardDiagnosisDetailModal";

export default Component;
