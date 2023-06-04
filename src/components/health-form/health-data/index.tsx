import React, { useMemo, useState } from "react";

import { useRouter } from "next/router";
import * as yup from "yup";
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
  const [healthForm, setHealthForm] = useState({
    age: "",
    weight: "",
    height: "",
    bloodPressure: "",
    bloodType: "",
    allergies: [] as string[],
    medications: [] as string[],
    hasSurgery: DefaultCheckboxOption,
    surgeryDescription: "",
    hasChronicIllness: DefaultCheckboxOption,
    chronicIllnessDescription: "",
    hasHereditaryDisease: DefaultCheckboxOption,
    familyHistoryDescription: "",
  });

  interface ErrorMessages {
    [key: string]: string;
  }
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({});

  const schema = yup.object().shape({
    age: yup
      .string()
      .required("Age is required")
      .matches(/^\d+$/, "Age must be a number"),
    weight: yup
      .string()
      .required("Weight is required")
      .matches(/^\d+$/, "Weight must be a number"),
    height: yup
      .string()
      .required("Height is required")
      .matches(/^\d+$/, "Height must be a number"),
    bloodPressure: yup
      .string()
      .required("BloodPressure is required")
      .matches(/^\d+$/, "Blood pressure must be a number"),
    bloodType: yup
      .string()
      .required("Blood type is required")
      .oneOf(["A", "B", "AB", "O"], "Invalid blood type"),
    allergies: yup
      .array()
      .of(yup.string())
      .required("Allergies are required")
      .min(1, "At least one allergy must be specified")
      .test(
        "unique-allergies",
        "Allergies must be unique",
        function (allergies) {
          if (!allergies || allergies.length === 0) {
            return true;
          }
          const uniqueElements = new Set(allergies);
          return uniqueElements.size === allergies.length;
        }
      ),
    medications: yup
      .array()
      .of(yup.string())
      .required("Allergies are required")
      .min(1, "At least one medication must be specified")
      .test(
        "unique-allergies",
        "Medications must be unique",
        function (medications) {
          if (!medications || medications.length === 0) {
            return true;
          }
          const uniqueElements = new Set(medications);
          return uniqueElements.size === medications.length;
        }
      ),
    surgeryDescription: yup
      .string()
      .test(
        "word-count",
        "Surgery description should be between 1 and 100 words",
        (value) => {
          if (!value) {
            return false;
          }
          const words = value.trim().split(/\s+/);
          return words.length >= 1 && words.length <= 100;
        }
      ),
    chronicIllnessDescription: yup
      .string()
      .test(
        "word-count",
        "Surgery description should be between 1 and 100 words",
        (value) => {
          if (!value) {
            return false;
          }
          const words = value.trim().split(/\s+/);
          return words.length >= 1 && words.length <= 100;
        }
      ),
    familyHistoryDescription: yup
      .string()
      .test(
        "word-count",
        "Surgery description should be between 1 and 100 words",
        (value) => {
          if (!value) {
            return false;
          }
          const words = value.trim().split(/\s+/);
          return words.length >= 1 && words.length <= 100;
        }
      ),
  });

  const _handleChangeAge = (value: string) => {
    setHealthForm({
      ...healthForm,
      age: value,
    });
    setErrorMessages({ ...errorMessages, age: "" });
  };

  const _handleChangeWeight = (value: string) => {
    setHealthForm({
      ...healthForm,
      weight: value,
    });
    setErrorMessages({ ...errorMessages, weight: "" });
  };

  const _handleChangeHeight = (value: string) => {
    setHealthForm({
      ...healthForm,
      height: value,
    });
    setErrorMessages({ ...errorMessages, height: "" });
  };

  const _handleChangeBloodPressure = (value: string) => {
    setHealthForm({
      ...healthForm,
      bloodPressure: value,
    });
    setErrorMessages({ ...errorMessages, bloodPressure: "" });
  };

  const _handleChangeBloodType = (value: string) => {
    setHealthForm({
      ...healthForm,
      bloodType: value,
    });
    setErrorMessages({ ...errorMessages, bloodType: "" });
  };

  const _handleAllergiesChange = (selectedAllergies: string[]) => {
    setHealthForm({
      ...healthForm,
      allergies: selectedAllergies,
    });
    setErrorMessages({ ...errorMessages, allergies: "" });
  };

  const _handleMedicationsChange = (selectedMedications: string[]) => {
    setHealthForm({
      ...healthForm,
      medications: selectedMedications,
    });
    setErrorMessages({ ...errorMessages, medications: "" });
  };

  const _handleHasSurgery = (value: SelectOption) => {
    setHealthForm({
      ...healthForm,
      hasSurgery: value,
    });
    setErrorMessages({ ...errorMessages, hasSurgery: "" });
  };

  const _handleSurgeryDescription = (value: string) => {
    setHealthForm({
      ...healthForm,
      surgeryDescription: value,
    });
    setErrorMessages({ ...errorMessages, surgeryDescription: "" });
  };

  const _handleHasChronicIllness = (value: SelectOption) => {
    setHealthForm({
      ...healthForm,
      hasChronicIllness: value,
    });
    setErrorMessages({ ...errorMessages, hasChronicIllness: "" });
  };

  const _handleChangeChronicIllnessDescription = (value: string) => {
    setHealthForm({
      ...healthForm,
      chronicIllnessDescription: value,
    });
    setErrorMessages({ ...errorMessages, chronicIllnessDescription: "" });
  };

  const _handleHasHereditaryDisease = (value: SelectOption) => {
    setHealthForm({
      ...healthForm,
      hasHereditaryDisease: value,
    });
    setErrorMessages({ ...errorMessages, hasHereditaryDisease: "" });
  };

  const _handleChangeFamilyHistoryDescription = (value: string) => {
    setHealthForm({
      ...healthForm,
      familyHistoryDescription: value,
    });
    setErrorMessages({ ...errorMessages, familyHistoryDescription: "" });
  };

  const _handleSubmitForm = () => {
    schema
      .validate(healthForm, { abortEarly: false })
      .then(async (validatedData) => {
        await axios.post("/static-health", healthForm);
        showToast(
          "success",
          "Congratulations. You have updated your health data."
        );
        await router.push("/");
      })
      .catch((validationErrors) => {
        console.error("Validation errors:", validationErrors);

        const newErrorMessages: ErrorMessages = {};

        const errorMessages: { [key: string]: string } = {};

        validationErrors.inner.forEach((error: any) => {
          newErrorMessages[error.path] = error.message;
        });

        setErrorMessages(newErrorMessages);

        Object.keys(errorMessages).forEach((fieldName) => {
          showToast("error", `${fieldName}: ${errorMessages[fieldName]}`);
        });
      });
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
              value={healthForm.age}
              errorMessage={errorMessages.age || ""}
              type="text"
              placeHolder="age"
              label="Age"
              name="age"
              onChange={(value) => _handleChangeAge(value)}
            />
            <TextInput
              value={healthForm.weight}
              errorMessage={errorMessages.weight || ""}
              type="text"
              placeHolder="weight in kg"
              label="Weight"
              name="weight"
              onChange={(value) => _handleChangeWeight(value)}
            />
            <TextInput
              value={healthForm.height}
              errorMessage={errorMessages.height || ""}
              type="text"
              placeHolder="height in cm"
              label="Height"
              name="height"
              onChange={(value) => _handleChangeHeight(value)}
            />

            <TextInput
              value={healthForm.bloodPressure}
              errorMessage={errorMessages.bloodPressure || ""}
              type="text"
              placeHolder="blood pressure"
              label="Blood pressure"
              name="blood-pressure"
              onChange={(value) => _handleChangeBloodPressure(value)}
            />
            <TextInput
              value={healthForm.bloodType}
              errorMessage={errorMessages.bloodType || ""}
              type="text"
              placeHolder="blood type"
              label="Blood type"
              name="blood-type"
              onChange={(value) => _handleChangeBloodType(value)}
            />
            <BadgeListInput
              label="Allergies (please press enter to input)"
              errorMessage={errorMessages.allergies || ""}
              onSubmit={_handleAllergiesChange}
            />
            <BadgeListInput
              label="Medications (please press enter to input)"
              errorMessage={errorMessages.medications || ""}
              onSubmit={_handleMedicationsChange}
            />

            <div className="col-span-3">
              <Option
                type="checkbox"
                options={CheckboxOptions}
                selectedOption={healthForm.hasSurgery}
                onChange={_handleHasSurgery}
                title="Have you ever had surgery?"
                dataKey="hasSurgery"
              />
            </div>
            <div className="col-span-3">
              <Textarea
                value={healthForm.surgeryDescription}
                errorMessage={errorMessages.surgeryDescription || ""}
                onChange={_handleSurgeryDescription}
                label="Please describe your surgery history"
              />
            </div>
            <div className="col-span-3">
              <Option
                type="checkbox"
                options={CheckboxOptions}
                selectedOption={healthForm.hasChronicIllness}
                onChange={_handleHasChronicIllness}
                title="Do you have any chronic illnesses?"
                dataKey="hasChronicIllness"
              />
            </div>
            <div className="col-span-3">
              <Textarea
                value={healthForm.chronicIllnessDescription}
                errorMessage={errorMessages.chronicIllnessDescription || ""}
                onChange={_handleChangeChronicIllnessDescription}
                label="Please describe any chronic illnesses you have"
              />
            </div>
            <div className="col-span-3">
              <Option
                type="checkbox"
                options={CheckboxOptions}
                selectedOption={healthForm.hasHereditaryDisease}
                onChange={_handleHasHereditaryDisease}
                title="Is there a history of hereditary disease in your family?"
                dataKey="hasHereditaryDisease"
              />
            </div>
            <div className="col-span-3">
              <Textarea
                value={healthForm.familyHistoryDescription}
                errorMessage={errorMessages.familyHistoryDescription || ""}
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
