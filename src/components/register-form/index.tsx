import React, { useState } from "react";

import { cloneDeep } from "lodash";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useImmer } from "use-immer";
import * as yup from "yup";

import {
  DefaultGenderOption,
  GenderOptions,
} from "@/components/register-form/constant";
import { DefaultRegisterForm } from "@/constant/auth-page";
import Button from "@/core/button";
import Option from "@/core/select-option";
import { SelectOption } from "@/core/select-option/type";
import TextInput from "@/core/text-input";
import { FormExtension } from "@/core/text-input/type";
import useRegister from "@/hooks/auth/useRegister";
import useDevice from "@/hooks/useDevice";

const Component = React.memo(() => {
  const { t } = useTranslation("register");
  const { isDesktop } = useDevice();
  const [form, setForm] = useImmer(DefaultRegisterForm);
  const [selectedGender, setSelectedGender] =
    useImmer<SelectOption>(DefaultGenderOption);
  const { register } = useRegister();

  const _onInputChange = (value: string, extension?: FormExtension): void => {
    const { dataKey } = extension!;
    const temp = cloneDeep(form);
    switch (dataKey) {
      case "email":
        temp.email = value;
        clearErrorMessage("email");
        break;
      case "password":
        temp.password = value;
        clearErrorMessage("password");
        break;
      case "confirmPassword":
        temp.confirmPassword = value;
        clearErrorMessage("confirmPassword");
        break;
      case "name":
        temp.name = value;
        clearErrorMessage("name");
        break;
    }
    setForm(temp);
  };

  const clearErrorMessage = (field: string): void => {
    setErrorMessages((prevErrorMessages) => {
      const newErrorMessages = { ...prevErrorMessages };
      delete newErrorMessages[field];
      return newErrorMessages;
    });
  };

  interface ErrorMessages {
    [key: string]: string;
  }
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({});

  const schema = yup.object().shape({
    name: yup
      .string()
      .test("word-count", "Name should be between 1 and 100 words", (value) => {
        if (!value) {
          return false;
        }
        const words = value.trim().split(/\s+/);
        const isNumberFormat = /^\d+$/.test(value);
        return words.length >= 1 && words.length <= 100 && !isNumberFormat;
      }),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+/,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
      )
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password"), ""], "Passwords must match"),
  });

  const _handleSubmitForm = () => {
    schema
      .validate(form, { abortEarly: false })
      .then(async () => {
        register(form);
      })
      .catch((validationErrors) => {
        console.error("Validation errors:", validationErrors);

        const newErrorMessages: ErrorMessages = {};

        validationErrors.inner.forEach((error: ErrorMessages) => {
          newErrorMessages[error.path] = error.message;
        });

        setErrorMessages(newErrorMessages);
      });
  };

  const _onChangeSelectOption = (
    option: SelectOption,
    extension?: FormExtension
  ) => {
    const { dataKey } = extension!;
    const temp = cloneDeep(form);
    setSelectedGender(option);
    switch (dataKey) {
      case "gender":
        temp.gender = option.value;
    }
    setForm(temp);
  };

  return (
    <div
      className={
        isDesktop
          ? "flex w-2/5 flex-col gap-4 bg-light-background-gray dark:bg-dark-blue"
          : "flex w-full flex-col gap-1 bg-light-background-gray dark:bg-dark-blue"
      }
    >
      <div className="mb-[40px] w-full text-center text-3xl font-bold tracking-normal text-light-blue-hover dark:text-dark-white">
        {t("register")}
      </div>
      <TextInput
        label={t("full_name")}
        type="text"
        value={form.name}
        errorMessage={errorMessages.name || ""}
        name="fullName"
        placeHolder={t("full_name")}
        dataKey="name"
        onChange={_onInputChange}
      />
      <TextInput
        label={t("email")}
        type="text"
        name="email"
        value={form.email}
        errorMessage={errorMessages.email || ""}
        placeHolder={t("email")}
        dataKey="email"
        onChange={_onInputChange}
      />
      <TextInput
        label={t("password")}
        type="password"
        name="password"
        value={form.password}
        errorMessage={errorMessages.password || ""}
        placeHolder={t("password")}
        dataKey="password"
        onChange={_onInputChange}
      />
      <TextInput
        label={t("confirm_password")}
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        errorMessage={errorMessages.confirmPassword || ""}
        placeHolder={t("retype")}
        dataKey="confirmPassword"
        onChange={_onInputChange}
      />
      <Option
        onChange={_onChangeSelectOption}
        dataKey="gender"
        selectedOption={selectedGender}
        options={GenderOptions}
        title={t("Gender")}
      />
      <Button onClick={_handleSubmitForm} mode="primary">
        {t("register")}
      </Button>
      <label className="text-xl">
        {t("have_account")}{" "}
        <Link href={"/auth/login"}>
          <span className="text-light-button-green">{t("sign_in")}</span>
        </Link>
      </label>
    </div>
  );
});

Component.displayName = "RegisterForm";

export default Component;
