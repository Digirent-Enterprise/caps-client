import React, { useMemo, useState } from "react";

import { useRouter } from "next/router";
import { useImmer } from "use-immer";

import axios from "@/axios";
import {
  CheckboxOptions,
  DefaultCheckboxOption,
} from "@/components/health-form/constant";
import { IHealthFormProps } from "@/components/health-form/type";
import BadgeListInput from "@/core/badge-list-input";
import Button from "@/core/button";
import Option from "@/core/select-option";
import { SelectOption } from "@/core/select-option/type";
import TextInput from "@/core/text-input";
import Textarea from "@/core/textarea";
import withAuth from "@/hoc/withLogin";
import useDevice from "@/hooks/useDevice";
import { showToast } from "@/utils/toast";

const Component = () => {
  const { isMobile } = useDevice();
  const router = useRouter();
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const [bloodPressure, setBloodPressure] = useState("");
  const [bloodType, setBloodType] = useState("");

  const [allergies, setAllergies] = useState<string[]>([]);
  const [medications, setMedications] = useState<string[]>([]);
  const [hasSurgery, setHasSurgery] = useImmer<SelectOption>(
    DefaultCheckboxOption
  );
  const [surgeryDescription, setSurgeryDescription] = useState("");
  const [hasChronicIllness, setHasChronicIllness] = useImmer<SelectOption>(
    DefaultCheckboxOption
  );
  const [chronicIllnessDescription, setChronicIllnessDescription] =
    useState("");
  const [hasHereditaryDisease, setHasHereditaryDisease] =
    useImmer<SelectOption>(DefaultCheckboxOption);
  const [familyHistoryDescription, setFamilyHistoryDescription] = useState("");

  const _handleChangeAge = (value: string) => {
    setAge(value);
  };

  const _handleChangeWeight = (value: string) => {
    setWeight(value);
  };

  const _handleChangeHeight = (value: string) => {
    setHeight(value);
  };

  const _handleChangeBloodPressure = (value: string) => {
    setBloodPressure(value);
  };

  const _handleChangeBloodType = (value: string) => {
    setBloodType(value);
  };

  const _handleAllergiesChange = (allergies: string[]) => {
    setAllergies(allergies);
  };

  const _handleMedicationsChange = (allergies: string[]) => {
    setMedications(allergies);
  };

  const _handleHasSurgery = (value: SelectOption) => {
    setHasSurgery(value);
  };

  const _handleHasChronicIllness = (value: SelectOption) => {
    setHasChronicIllness(value);
  };

  const _handleHasHereditaryDisease = (value: SelectOption) => {
    setHasHereditaryDisease(value);
  };

  const _handleSurgeryDescription = (value: string) => {
    setSurgeryDescription(value);
  };

  const _handleChangeChronicIllnessDescription = (value: string) => {
    setChronicIllnessDescription(value);
  };

  const _handleChangeFamilyHistoryDescription = (value: string) => {
    setFamilyHistoryDescription(value);
  };

  const _handleSubmitForm = async () => {
    // TODO: refactor this using formData instead of multiple useState
    const finalForm: IHealthFormProps = {
      age,
      height,
      weight,
      bloodPressure,
      bloodType,
      allergies,
      medications,
      hasSurgery,
      surgeryDescription,
      hasChronicIllness,
      chronicIllnessDescription,
      hasHereditaryDisease,
      familyHistoryDescription,
    } as unknown as IHealthFormProps;
    await axios.post("/static-health", finalForm);
    showToast("success", "Congratulations. You have updated your health data.");
    await router.push("/");
  };

  const containerClass = useMemo(() => {
    if (isMobile) {
      return "flex flex-col min-h-screen px-5 py-10";
    } else {
      return "flex min-h-screen items-center justify-center py-5 px-2";
    }
  }, [isMobile]);

  const formClass = useMemo(() => {
    if (isMobile) {
      return "w-full";
    } else {
      return "w-full max-w-6xl";
    }
  }, [isMobile]);

  const formItemClass = useMemo(() => {
    if (isMobile) {
      return "mb-5";
    } else {
      return "col-span-3";
    }
  }, [isMobile]);

  const buttonContainerClass = useMemo(() => {
    if (isMobile) {
      return "flex flex-col items-center justify-between sm:flex-row mt-10";
    } else {
      return "mt-10 flex w-full flex-col items-center justify-between sm:flex-row";
    }
  }, [isMobile]);

  return (
    <div className={containerClass}>
      <div className={formClass}>
        <div className="mb-10 text-center text-5xl font-bold tracking-normal text-blue">
          Health form
        </div>
        <div className="w-full">
          <div className="mt-5 grid grid-cols-3 gap-4">
            <TextInput
              value={age}
              type="text"
              placeHolder="age"
              label="Age"
              name="age"
              onChange={(value) => _handleChangeAge(value)}
            />
            <TextInput
              value={weight}
              type="text"
              placeHolder="weight in kg"
              label="Weight"
              name="weight"
              onChange={(value) => _handleChangeWeight(value)}
            />
            <TextInput
              value={height}
              type="text"
              placeHolder="height in cm"
              label="Height"
              name="height"
              onChange={(value) => _handleChangeHeight(value)}
            />

            <TextInput
              value={bloodPressure}
              type="text"
              placeHolder="blood pressure"
              label="Blood pressure"
              name="blood-pressure"
              onChange={(value) => _handleChangeBloodPressure(value)}
            />
            <TextInput
              value={bloodType}
              type="text"
              placeHolder="blood type"
              label="Blood type"
              name="blood-type"
              onChange={(value) => _handleChangeBloodType(value)}
            />
            <BadgeListInput
              label="Allergies (please press enter to input)"
              onSubmit={_handleAllergiesChange}
            />
            <BadgeListInput
              label="Medications (please press enter to input)"
              onSubmit={_handleMedicationsChange}
            />

            <div className="col-span-3">
              <Option
                type="checkbox"
                options={CheckboxOptions}
                selectedOption={hasSurgery}
                onChange={_handleHasSurgery}
                title="Have you ever had surgery?"
                dataKey="hasSurgery"
              />
            </div>
            <div className="col-span-3">
              <Textarea
                value={surgeryDescription}
                onChange={_handleSurgeryDescription}
                label="Please describe your surgery history"
              />
            </div>
            <div className="col-span-3">
              <Option
                type="checkbox"
                options={CheckboxOptions}
                selectedOption={hasChronicIllness}
                onChange={_handleHasChronicIllness}
                title="Do you have any chronic illnesses?"
                dataKey="hasChronicIllness"
              />
            </div>
            <div className="col-span-3">
              <Textarea
                value={chronicIllnessDescription}
                onChange={_handleChangeChronicIllnessDescription}
                label="Please describe any chronic illnesses you have"
              />
            </div>
            <div className="col-span-3">
              <Option
                type="checkbox"
                options={CheckboxOptions}
                selectedOption={hasHereditaryDisease}
                onChange={_handleHasHereditaryDisease}
                title="Is there a history of hereditary disease in your family?"
                dataKey="hasHereditaryDisease"
              />
            </div>
            <div className="col-span-3">
              <Textarea
                value={familyHistoryDescription}
                onChange={_handleChangeFamilyHistoryDescription}
                label="Please describe any history of hereditary diseases in your family"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col items-center justify-between sm:flex-row">
          <div>
            <Button onClick={() => router.back()} mode="secondary">
              Back
            </Button>
          </div>
          <div className="flex justify-end">
            <Button onClick={_handleSubmitForm} mode="primary">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Component.displayName = "HealthFormHealthData";

export default withAuth(Component);
