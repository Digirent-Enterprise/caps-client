import React, { Fragment, memo, useEffect, useMemo } from "react";

import { Checkbox } from "@chakra-ui/react";
import { Dialog, Transition } from "@headlessui/react";
import { IconX } from "@tabler/icons-react";
import { isEmpty } from "lodash";
import Image from "next/image";
import { useImmer } from "use-immer";

import { IDashboardCreateDiagnosisModal } from "@/components/dashboard/dashboard-create-diagnosis-modal/type";
import BaseButton from "@/core/base-button";

const Component = memo((props: IDashboardCreateDiagnosisModal) => {
  const { open: isOpen, onClose, img, useChatBot } = props;
  const { diagnosisLoading, diagnosis } = useChatBot!;
  const [checked, setChecked] = useImmer<boolean>(false);
  const [tempDiagnosis, setTempDiagnosis] = useImmer<
    DiagnosisNS.Diagnosis | undefined
  >(undefined);

  const _onDiagnosis = async () => {
    const response = await diagnosis();
    if (!isEmpty(response)) {
      setTempDiagnosis(response);
    }
  };

  const _onToggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const textWithLineBreaks = useMemo(() => {
    if (!tempDiagnosis) return "";
    return tempDiagnosis.description.split("\n").map((line, index) => (
      <Fragment key={index}>
        {line}
        <div className="pb-1" />
      </Fragment>
    ));
  }, [tempDiagnosis]);

  useEffect(() => {
    if (!isOpen) {
      setChecked(false);
      setTempDiagnosis(undefined);
    }
  }, [isOpen]);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 top-1/4 z-50 h-2/3 overflow-scroll overflow-y-auto "
        onClose={diagnosisLoading ? () => {} : onClose}
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
            <Dialog.Overlay className="bg-opacity/75 fixed inset-0 bg-light-text-modal transition-opacity" />
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
                <div className="relative min-w-[20rem] rounded-lg bg-light-background-gray p-8 shadow-xl dark:bg-dark-blue">
                  <div className="mb-4 flex items-center justify-between ">
                    <h2 className="text-xl font-semibold text-light-blue-hover dark:text-white">
                      Quick diagnosis
                    </h2>
                    {!diagnosisLoading && (
                      <button
                        type="button"
                        className="text-light-text-modal hover:text-light-blue-hover focus:outline-none dark:text-dark-white dark:hover:text-light-text-modal"
                        onClick={onClose}
                      >
                        <IconX className="h-6 w-6" />
                      </button>
                    )}
                  </div>
                  {!diagnosisLoading && !tempDiagnosis && (
                    <Dialog.Description>
                      <div className="flex flex-col gap-1">
                        <div>
                          <span className="mr-1 w-fit text-xl font-bold italic text-light-blue-hover underline dark:text-white">
                            Notes:
                          </span>
                          <span className="text-xl text-light-blue-hover dark:text-white">
                            This feature is currently in BETA for DICA, and it
                            was initially conceived to enhance your health
                            management experience. It should always be
                            recognized as a BETA offering from DICA. The
                            responses provided by this feature are intended for
                            reference only. For a comprehensive understanding of
                            your health, we highly recommend seeking
                            professional medical advice from reputable
                            healthcare institutions.
                          </span>
                        </div>
                        <div className="mb-4 flex items-center">
                          <Checkbox
                            checked={checked}
                            onChange={_onToggleChecked}
                          >
                            <span className="text-light-blue-hover dark:text-white">
                              I understand and agree that the responses provided
                              by this feature are intended for reference only
                            </span>
                          </Checkbox>
                        </div>
                        <div className="flex w-full flex-row items-center justify-center">
                          <BaseButton
                            mode="primary"
                            disabled={!checked}
                            onClick={_onDiagnosis}
                          >
                            Diagnosis my health
                          </BaseButton>
                        </div>
                      </div>
                    </Dialog.Description>
                  )}

                  {diagnosisLoading && !tempDiagnosis && (
                    <Dialog.Description>
                      <div className="h-full w-full">
                        <img
                          className="mb-2 rounded-t-lg"
                          src={"/static/dashboard/lookup.gif"}
                          alt=""
                        />
                        <div className="animate-pulse text-center text-xl">
                          Wait a minute! DICA is generating diagnosis...
                        </div>
                      </div>
                    </Dialog.Description>
                  )}

                  {!diagnosisLoading && textWithLineBreaks && (
                    <>
                      <Image
                        className="mb-2 rounded-t-lg"
                        src={"/static/dashboard/diag.svg"}
                        alt=""
                        width={144}
                        height={144}
                      />
                      <Dialog.Description>
                        {textWithLineBreaks}
                      </Dialog.Description>
                    </>
                  )}
                  <div className="flex justify-end">
                    {!diagnosisLoading && (
                      <BaseButton mode="secondary" onClick={onClose}>
                        Cancel
                      </BaseButton>
                    )}
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

Component.displayName = "DashboardCreateDiagnosisModal";

export default Component;