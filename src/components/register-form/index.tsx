import React from "react";

import { cloneDeep } from "lodash";
import Link from "next/link";
import { useImmer } from "use-immer";

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
  const { isDesktop } = useDevice();
  const [form, setForm] = useImmer(DefaultRegisterForm);
  const [selectedGender, setSelectedGender] =
    useImmer<SelectOption>(DefaultGenderOption);
  const { register } = useRegister();

  const _onInputChange = (value: string, extension?: FormExtension) => {
    const { dataKey } = extension!;
    const temp = cloneDeep(form);
    switch (dataKey) {
      case "email":
        temp.email = value;
        break;
      case "password":
        temp.password = value;
        break;
      case "confirmPassword":
        temp.confirmPassword = value;
        break;
      case "name":
        temp.name = value;
    }
    setForm(temp);
  };

  const _handleSubmit = () => {
    register(form);
    // setForm(DefaultRegisterForm);
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
        isDesktop ? "flex w-2/5 flex-col gap-4" : "flex w-full flex-col gap-1"
      }
    >
      <div className="mb-[40px] w-full text-center text-3xl font-bold tracking-normal text-blue">
        Register
      </div>
      <TextInput
        label="Full name"
        type="text"
        value={form.name}
        name="fullName"
        placeHolder="full name"
        dataKey="name"
        onChange={_onInputChange}
      />
      <TextInput
        label="Email"
        type="text"
        name="email"
        value={form.email}
        placeHolder="email"
        dataKey="email"
        onChange={_onInputChange}
      />
      <TextInput
        label="Password"
        type="password"
        name="password"
        value={form.password}
        placeHolder="password"
        dataKey="password"
        onChange={_onInputChange}
      />
      <TextInput
        label="Confirm password"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        placeHolder="retype your password"
        dataKey="confirmPassword"
        onChange={_onInputChange}
      />
      <Option
        onChange={_onChangeSelectOption}
        dataKey="gender"
        selectedOption={selectedGender}
        options={GenderOptions}
        title="Gender"
      />
      <Button onClick={_handleSubmit} mode="primary">
        Register
      </Button>
      <label className="text-xl">
        Already have account?{" "}
        <Link href={"/auth/login"}>
          <span className="text-blue">Sign in</span>
        </Link>
      </label>
    </div>
  );
});

Component.displayName = "RegisterForm";

export default Component;
