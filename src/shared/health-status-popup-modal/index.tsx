import React, { useMemo, useState } from "react";

import {
  IconX,
  IconMoodConfuzed,
  IconMoodHappy,
  IconMoodEmpty,
  IconMoodCry,
  IconMoodSmile,
} from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import Modal from "react-modal";

import Button from "@/core/button";
import useDynamicHealth from "@/hooks/dynamic-health";
import { DynamicHealthNS } from "@/services/dynamic-health/type";
import {
  allSymptoms,
  FeelingIcons,
  IHealthStatusPopupModalProps,
} from "@/shared/health-status-popup-modal/type";

Modal.setAppElement("#__next");

const Component: React.FC<IHealthStatusPopupModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { t } = useTranslation("update_health");
  const [feeling, setFeeling] = useState<DynamicHealthNS.Status>("Good");
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const { addDynamicHealth } = useDynamicHealth();
  const _handleSymptomsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSymptoms = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSymptoms(selectedSymptoms);
  };

  const _handleSubmit = () => {
    const healthStatus = { feeling, symptoms };
    setFeeling("Good");
    setSymptoms([]);
    addDynamicHealth({
      status: feeling,
      symptoms,
    });
    onRequestClose();
  };

  const feelingIcons: FeelingIcons = [
    {
      label: t("critical"),
      icon: <IconMoodCry size={50} className=" text-red" />,
    },
    {
      label: t("poor"),
      icon: <IconMoodConfuzed size={50} className="text-light-orange" />,
    },
    {
      label: t("not_good"),
      icon: <IconMoodEmpty size={50} className="text-light-yellow" />,
    },
    {
      label: t("fair"),
      icon: <IconMoodSmile size={50} className="text-light-button-blue" />,
    },
    {
      label: t("good"),
      icon: (
        <IconMoodHappy size={50} className="text-light-button-blue-hover" />
      ),
    },
  ];

  const isShowSymptoms = useMemo(() => {
    return (
      feeling &&
      (feeling === t("critical") ||
        feeling === t("poor") ||
        feeling === t("not_good"))
    );
  }, [feeling]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="flex h-full items-center justify-center dark:bg-dark-gray dark:bg-opacity-70"
    >
      <div
        id="health-status-popup-modal"
        className="rounded-lg bg-white p-8 shadow-lg dark:bg-dark-gray-heavy"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-light-text-heading dark:text-dark-white">
            {t("update")}
          </h2>
          <button
            onClick={onRequestClose}
            className="text-light-primary-button hover:text-light-blue-hover dark:text-dark-white"
          >
            <IconX />
          </button>
        </div>
        <div className="mb-4">
          <label
            htmlFor="feeling"
            className="mb-2 block font-bold text-light-text dark:text-dark-white"
          >
            {t("how")}
          </label>
          <div className="flex justify-between">
            {feelingIcons.map((feelingIcon) => {
              return (
                <div
                  key={feelingIcon.label}
                  onClick={() => setFeeling(feelingIcon.label)}
                  className={`flex flex-col items-center dark:text-dark-white ${
                    feeling === feelingIcon.label
                      ? "bg-light-gray dark:bg-dark-green"
                      : ""
                  } cursor-pointer rounded-lg p-2 transition-colors duration-200 ease-in-out`}
                >
                  {feelingIcon.icon}
                  <span className="text-sm font-semibold text-light-text dark:text-white">
                    {feelingIcon.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        {isShowSymptoms && (
          <div className="mt-6">
            <label
              htmlFor="symptoms"
              className="mb-2 block font-medium dark:text-dark-white"
            >
              {t("select")}
            </label>
            <select
              id="symptoms"
              multiple
              value={symptoms}
              onChange={_handleSymptomsChange}
              className="hide-scrollbar w-full rounded-lg border border-gray-400 px-3 py-2 text-light-text shadow-sm focus:outline-none focus:ring-2 dark:bg-dark-gray dark:text-dark-white"
            >
              {allSymptoms.map((symptom) => (
                <option key={symptom} value={symptom}>
                  {symptom}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="mt-6 flex justify-end gap-2">
          <div className="w-1/3">
            <Button onClick={onRequestClose} mode="secondary">
              {t("cancel")}
            </Button>
          </div>
          <div className="w-1/3">
            <Button onClick={_handleSubmit} mode="primary">
              {t("submit")}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

Component.displayName = "HealthStatusModal";

export default Component;
