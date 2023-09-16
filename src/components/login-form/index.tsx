import React, { memo } from "react";

import { IconBrandFacebook, IconBrandGoogle } from "@tabler/icons-react";
import { cloneDeep } from "lodash";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useImmer } from "use-immer";

import { DefaultLoginForm } from "@/constants/auth-page";
import BaseButton from "@/core/base-button";
import TextInput from "@/core/text-input";
import { FormExtension } from "@/core/text-input/type";
import useLogin from "@/hooks/auth/useLogin";
import useDevice from "@/hooks/useDevice";

const Component = memo(() => {
  const { t } = useTranslation("login");
  const { isDesktop } = useDevice();

  const [form, setForm] = useImmer(DefaultLoginForm);
  const { login } = useLogin();
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
    }
    setForm(temp);
  };

  const _handleSubmit = () => {
    login(form);
    setForm(DefaultLoginForm);
  };

  return (
    <div
      className={
        isDesktop
          ? "flex w-full flex-col gap-2 bg-light-background-gray p-2 dark:bg-dark-gray-heavy sm:gap-1 md:mb-[40px] md:w-2/5 md:gap-4  md:p-0"
          : "mb-2 flex w-full flex-col gap-1 bg-light-background-gray  text-2xl dark:bg-dark-gray-heavy"
      }
    >
      <div className="mb-[40px] w-full text-center text-3xl font-bold tracking-normal text-light-blue-hover dark:text-dark-white">
        {t("login_heading")}
      </div>
      <button
        className="flex cursor-pointer items-center justify-center rounded border border-gray-400  bg-[#4267B2]  px-4 py-2 font-bold text-white hover:bg-[#3b5998] dark:text-dark-white"
        onClick={() => {}}
      >
        <IconBrandFacebook className="mr-2 h-6 w-6 text-white md:h-8 md:w-8" />
        <span className="whitespace-nowrap text-xs text-white md:text-base">
          {t("login_with_facebook")}
        </span>
      </button>
      <button
        onClick={() => {}}
        className="mt-4 flex cursor-pointer items-center justify-center rounded border border-gray-400 bg-[#EA4335]  px-4 py-2 font-bold text-light-text hover:bg-[#C20806] dark:text-dark-white"
      >
        <IconBrandGoogle className="mr-2 h-6 w-6 text-white md:h-8 md:w-8" />
        <span className="whitespace-nowrap text-xs text-white md:text-base">
          {t("login_with_google")}
        </span>
      </button>
      <div className="inline-flex w-full items-center justify-center text-light-blue-hover">
        <hr className="my-2 h-px w-full border-0 bg-gray-200 dark:bg-gray-700 md:my-8" />
        <span className="absolute left-1/2 -translate-x-1/2 px-1 text-xs font-medium text-light-blue-hover dark:bg-dark-gray dark:text-dark-white md:px-3 md:text-base">
          {t("or")}
        </span>
      </div>
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
        label={t("password")}
        type="password"
        name="password"
        value={form.password}
        placeHolder={t("password")}
        dataKey="password"
        onChange={_onInputChange}
      />

      <BaseButton onClick={_handleSubmit} mode="primary">
        {t("login_description")}
      </BaseButton>
      <label className="md:text-md text-light-button-blue dark:text-dark-white sm:text-sm lg:text-lg">
        {t("have_not_registered")}{" "}
        <Link href={"/auth/register"}>
          <span className="text-light-button-blue dark:text-light-user-message">
            {t("register")}
          </span>
        </Link>
      </label>
    </div>
  );
});

Component.displayName = "LoginForm";

export default Component;
