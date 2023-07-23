import React from "react";

import { IconBrandFacebook, IconBrandGoogle } from "@tabler/icons-react";
import { cloneDeep } from "lodash";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { useImmer } from "use-immer";

import { DefaultLoginForm } from "@/constant/auth-page";
import Button from "@/core/button";
import TextInput from "@/core/text-input";
import { FormExtension } from "@/core/text-input/type";
import useLogin from "@/hooks/auth/useLogin";
import useDevice from "@/hooks/useDevice";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const Component = React.memo(() => {
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
          ? "flex w-2/5 flex-col gap-4 bg-light-background-gray dark:bg-dark-gray-heavy"
          : "flex w-full flex-col gap-1 bg-light-background-gray dark:bg-dark-gray-heavy"
      }
    >
      <div className="mb-[40px] w-full text-center text-3xl font-bold tracking-normal text-light-blue-hover dark:text-dark-white">
        {t("login_heading")}
      </div>
      <button
        className="border-gray-400 flex cursor-pointer items-center justify-center rounded border  px-4 py-2 font-bold text-white dark:text-dark-white bg-[#4267B2] hover:bg-[#3b5998]"
        onClick={() => signIn("facebook")}
      >
        <IconBrandFacebook className="mr-2 h-8 w-8" />
        <span className="whitespace-nowrap">{t("login_with_google")}</span>
      </button>
      <button
        onClick={() => signIn("google")}
        className="text-light-text border-gray-400 mt-4 flex cursor-pointer items-center justify-center rounded border  px-4 py-2 font-bold dark:text-dark-white bg-[#EA4335] hover:bg-[#C20806]"
      >
        <IconBrandGoogle className="mr-2 h-8 w-8" />
        <span className="whitespace-nowrap">{t("login_with_google")}</span>
      </button>
      <div className="inline-flex w-full items-center justify-center text-light-blue-hover">
        <hr className="my-8 h-px w-full border-0 bg-gray-200 dark:bg-gray-700" />
        <span className="absolute left-1/2 -translate-x-1/2 px-3 font-medium text-light-blue-hover dark:text-dark-white">
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

      <Button onClick={_handleSubmit} mode="primary">
        {t("login_description")}
      </Button>
      <label className="text-xl text-light-button-blue dark:text-dark-white">
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

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        session,
      },
    };
  }
}
