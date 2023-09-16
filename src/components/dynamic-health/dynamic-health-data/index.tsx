import React, { useMemo, useState } from "react";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import * as yup from "yup";

import {
  CheckboxOptions,
  DefaultCheckboxOption,
} from "@/components/dynamic-health/constant";
import BadgeListInput from "@/core/badge-list-input";
import BaseButton from "@/core/base-button";
import Option from "@/core/select-option";
import { SelectOption } from "@/core/select-option/type";
import TextInput from "@/core/text-input";
import Textarea from "@/core/textarea";
import withAuth from "@/hoc/withLogin";
import useDevice from "@/hooks/useDevice";
import { StatusType } from "@/types/enum/common/status-type";
import axios from "@/utils/axios";
import { showToast } from "@/utils/toast";

const Component = () => {
  const { t } = useTranslation("health_data");
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
      .matches(/^\d+$/, `${t("age_error")}`),
    weight: yup
      .string()
      .required("Weight is required")
      .matches(/^\d+$/, `${t("weight_error")}`),
    height: yup
      .string()
      .required("Height is required")
      .matches(/^\d+$/, `${t("height_error")}`),
    bloodPressure: yup
      .string()
      .required("BloodPressure is required")
      .matches(/^\d+$/, `${t("blood_pressure_error")}`),
    bloodType: yup.string().required("Blood type is required"),
    allergies: yup
      .array()
      .of(yup.string())
      .required("Allergies are required")
      .min(1, `${t("allergies_blank_error")}`)
      .test(
        "unique-allergies",
        `${t("allergies_error")}`,
        function (allergies) {
          if (!allergies || allergies.length === 0) {
            return true;
          }
          const uniqueElements = new Set(allergies);
          return uniqueElements.size === allergies.length;
        },
      ),
    medications: yup
      .array()
      .of(yup.string())
      .required("Allergies are required")
      .min(1, `${t("medications_blank_error")}`)
      .test(
        "unique-allergies",
        `${t("medications_error")}`,
        function (medications) {
          if (!medications || medications.length === 0) {
            return true;
          }
          const uniqueElements = new Set(medications);
          return uniqueElements.size === medications.length;
        },
      ),
    surgeryDescription: yup
      .string()
      .test("word-count", `${t("surgery_description_error")}`, (value) => {
        if (!value) {
          return false;
        }
        const words = value.trim().split(/\s+/);
        return words.length >= 1 && words.length <= 100;
      }),
    chronicIllnessDescription: yup
      .string()
      .test(
        "word-count",
        `${t("chronic_illness_description_error")}`,
        (value) => {
          if (!value) {
            return false;
          }
          const words = value.trim().split(/\s+/);
          return words.length >= 1 && words.length <= 100;
        },
      ),
    familyHistoryDescription: yup
      .string()
      .test(
        "word-count",
        `${t("family_history_description_error")}`,
        (value) => {
          if (!value) {
            return false;
          }
          const words = value.trim().split(/\s+/);
          return words.length >= 1 && words.length <= 100;
        },
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
          StatusType.SUCCESS,
          "Congratulations. You have updated your health data.",
        );
        await router.push("/chat");
      })
      .catch((validationErrors) => {
        const newErrorMessages: ErrorMessages = {};

        const errorMessages: { [key: string]: string } = {};

        validationErrors.inner.forEach((error: any) => {
          newErrorMessages[error.path] = error.message;
        });

        setErrorMessages(newErrorMessages);

        Object.keys(errorMessages).forEach((fieldName) => {
          showToast(
            StatusType.ERROR,
            `${fieldName}: ${errorMessages[fieldName]}`,
          );
        });
      });
  };

  const containerClass = useMemo(() => {
    if (isMobile) {
      return "flex bg-light-background-gray dark:bg-dark-gray-heavy flex-col min-h-screen px-5 py-10";
    } else {
      return "flex bg-light-background-gray dark:bg-dark-gray-heavy min-h-screen items-center justify-center py-5 px-2";
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
        <div className="mb-10 text-center text-5xl font-bold tracking-normal text-light-text dark:text-dark-green">
          {t("health_form")}
        </div>
        <div className="w-full">
          <div className="mt-5 grid grid-cols-3 gap-4">
            <TextInput
              value={healthForm.age}
              errorMessage={errorMessages.age || ""}
              type="text"
              placeHolder={t("age")}
              label={t("age_lable")}
              name="age"
              onChange={(value) => _handleChangeAge(value)}
            />
            <TextInput
              value={healthForm.weight}
              errorMessage={errorMessages.weight || ""}
              type="text"
              placeHolder={t("weight")}
              label={t("weight_label")}
              name="weight"
              onChange={(value) => _handleChangeWeight(value)}
            />
            <TextInput
              value={healthForm.height}
              errorMessage={errorMessages.height || ""}
              type="text"
              placeHolder={t("height")}
              label={t("height_label")}
              name="height"
              onChange={(value) => _handleChangeHeight(value)}
            />

            <TextInput
              value={healthForm.bloodPressure}
              errorMessage={errorMessages.bloodPressure || ""}
              type="text"
              placeHolder={t("blood_presure")}
              label={t("blood_pressure_label")}
              name="blood-pressure"
              onChange={(value) => _handleChangeBloodPressure(value)}
            />
            <TextInput
              value={healthForm.bloodType}
              errorMessage={errorMessages.bloodType || ""}
              type="text"
              placeHolder={t("blood_type")}
              label={t("blood_type_label")}
              name="blood-type"
              onChange={(value) => _handleChangeBloodType(value)}
            />
            <BadgeListInput
              label={t("allergies")}
              errorMessage={errorMessages.allergies || ""}
              onSubmit={_handleAllergiesChange}
            />
            <BadgeListInput
              label={t("medications")}
              errorMessage={errorMessages.medications || ""}
              onSubmit={_handleMedicationsChange}
            />

            <div className="col-span-3">
              <Option
                type="checkbox"
                options={CheckboxOptions}
                selectedOption={healthForm.hasSurgery}
                onChange={_handleHasSurgery}
                title={t("has_surgery")}
                dataKey="hasSurgery"
              />
            </div>
            <div className="col-span-3">
              <Textarea
                value={healthForm.surgeryDescription}
                errorMessage={errorMessages.surgeryDescription || ""}
                onChange={_handleSurgeryDescription}
                label={t("surgery_description")}
              />
            </div>
            <div className="col-span-3">
              <Option
                type="checkbox"
                options={CheckboxOptions}
                selectedOption={healthForm.hasChronicIllness}
                onChange={_handleHasChronicIllness}
                title={t("has_chronic_illness")}
                dataKey="hasChronicIllness"
              />
            </div>
            <div className="col-span-3">
              <Textarea
                value={healthForm.chronicIllnessDescription}
                errorMessage={errorMessages.chronicIllnessDescription || ""}
                onChange={_handleChangeChronicIllnessDescription}
                label={t("chronic_illness_description")}
              />
            </div>
            <div className="col-span-3">
              <Option
                type="checkbox"
                options={CheckboxOptions}
                selectedOption={healthForm.hasHereditaryDisease}
                onChange={_handleHasHereditaryDisease}
                title={t("has_hereditary_disease")}
                dataKey="hasHereditaryDisease"
              />
            </div>
            <div className="col-span-3">
              <Textarea
                value={healthForm.familyHistoryDescription}
                errorMessage={errorMessages.familyHistoryDescription || ""}
                onChange={_handleChangeFamilyHistoryDescription}
                label={t("family_history_description")}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col items-center justify-between sm:flex-row">
          <div>
            <BaseButton onClick={() => router.back()} mode="secondary">
              {t("back")}
            </BaseButton>
          </div>
          <div className="flex justify-end">
            <BaseButton onClick={_handleSubmitForm} mode="primary">
              {t("submit")}
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
};

Component.displayName = "DynamicHealthData";

export default withAuth(Component);
