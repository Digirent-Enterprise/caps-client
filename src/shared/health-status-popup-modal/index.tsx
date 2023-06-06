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
      className="flex h-full items-center justify-center"
    >
      <div
        id="health-status-popup-modal"
        className="rounded-lg bg-white p-8 shadow-lg"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Update Health Status</h2>
          <button
            onClick={onRequestClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <IconX />
          </button>
        </div>
        <div className="mb-4">
          <label
            htmlFor="feeling"
            className="mb-2 block font-bold text-gray-700"
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
                    feeling === feelingIcon.label ? "bg-gray-200" : ""
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
            <label htmlFor="symptoms" className="mb-2 block font-medium">
              Select any symptoms you are experiencing (select multiple)
            </label>
            <select
              id="symptoms"
              multiple
              value={symptoms}
              onChange={_handleSymptomsChange}
              className="focus:ring-blue w-full rounded-lg border px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2"
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
            className="focus:ring-opacity/50 bg-blue focus:ring-blue mt-6 rounded-lg px-4 py-2 font-medium text-white transition-colors duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2"
            onClick={onRequestClose}
          >
            Cancel
          </button>
          <button
            className=" focus:ring-opacity/50 bg-darker-blue focus:ring-blue mt-6 rounded-lg px-4 py-2 font-medium text-white transition-colors duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2"
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
