import React, { useMemo, useState } from "react";

import {
  IconX,
  IconMoodConfuzed,
  IconMoodHappy,
  IconMoodEmpty,
  IconMoodCry,
  IconMoodSmile,
} from "@tabler/icons-react";
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

const HealthStatusModal: React.FC<IHealthStatusPopupModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
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
      label: "Critical",
      icon: <IconMoodCry size={50} className=" text-red" />,
    },
    {
      label: "Poor",
      icon: <IconMoodConfuzed size={50} className="text-orange" />,
    },
    {
      label: "Not Good",
      icon: <IconMoodEmpty size={50} className="text-yellow" />,
    },
    {
      label: "Fair",
      icon: <IconMoodSmile size={50} className="text-blue" />,
    },
    {
      label: "Good",
      icon: <IconMoodHappy size={50} className="text-green" />,
    },
  ];

  const isShowSymptoms = useMemo(() => {
    return (
      feeling &&
      (feeling === "Critical" || feeling === "Poor" || feeling === "Not Good")
    );
  }, [feeling]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="flex items-center justify-center h-full"
    >
      <div
        id="health-status-popup-modal"
        className="p-8 bg-white shadow-lg drounded-lg dark:bg-dark-blue"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Update Health Status</h2>
          <button
            onClick={onRequestClose}
            className="text-gray-600 hover:text-gray-800 dark:text-dark-white"
          >
            <IconX />
          </button>
        </div>
        <div className="mb-4">
          <label
            htmlFor="feeling"
            className="block mb-2 font-bold text-gray-700 dark:text-dark-white"
          >
            How are you feeling today?
          </label>
          <div className="flex justify-between">
            {feelingIcons.map((feelingIcon) => {
              return (
                <div
                  key={feelingIcon.label}
                  onClick={() => setFeeling(feelingIcon.label)}
                  className={`flex flex-col items-center ${
                    feeling === feelingIcon.label ? "bg-gray-200 dark:bg-dark-orange" : ""
                  } cursor-pointer rounded-lg p-2 transition-colors duration-200 ease-in-out`}
                >
                  {feelingIcon.icon}
                  <span className="text-sm font-medium">
                    {feelingIcon.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        {isShowSymptoms && (
          <div className="mt-6">
            <label htmlFor="symptoms" className="block mb-2 font-medium">
              Select any symptoms you are experiencing (select multiple)
            </label>
            <select
              id="symptoms"
              multiple
              value={symptoms}
              onChange={_handleSymptomsChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-blue focus:border-transparent focus:outline-none focus:ring-2"
            >
              {allSymptoms.map((symptom) => (
                <option key={symptom} value={symptom}>
                  {symptom}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="flex justify-end gap-1">
          <button
            className="px-4 py-2 mt-6 font-medium text-white transition-colors duration-200 ease-in-out rounded-lg dark:bg-dark-red focus:ring-opacity/50 bg-blue focus:ring-blue hover:bg-blue-600 focus:outline-none focus:ring-2"
            onClick={onRequestClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 mt-6 font-medium text-white transition-colors duration-200 ease-in-out rounded-lg dark:bg-dark-blue focus:ring-opacity/50 bg-darker-blue focus:ring-blue hover:bg-blue-600 focus:outline-none focus:ring-2"
            onClick={_handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default HealthStatusModal;
