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
    <div className="flex w-full flex-col gap-2 bg-light-background-gray p-2 dark:bg-dark-gray-heavy sm:gap-1 md:w-2/5 md:gap-4 md:p-0">
      <div className="mb-2 w-full text-center text-2xl font-bold tracking-normal text-light-blue-hover dark:text-dark-white md:mb-[40px] md:text-3xl">
        {t("login_heading")}
      </div>
      <button
        className="focus:ring-blue text-light-hover-blue flex cursor-pointer flex-wrap items-center justify-center rounded border border-solid border-light-gray bg-light-button-green-hover  px-3 py-1 font-bold hover:bg-light-gray focus:ring-2 dark:bg-dark-gray-heavy dark:text-dark-white dark:hover:bg-dark-gray md:px-4 md:py-2"
        onClick={() => signIn("facebook")}
      >
        <IconBrandFacebook className="mr-2 h-6 w-6 text-white md:h-8 md:w-8" />
        <span className="whitespace-nowrap text-xs text-white md:text-base">
          {t("login_with_facebook")}
        </span>
      </button>
      <button
        className="focus:ring-blue text-light-hover-blue mt-2 flex cursor-pointer flex-wrap items-center justify-center rounded border border-solid border-light-gray bg-light-button-green-hover px-3  py-1 font-bold hover:bg-light-gray focus:ring-2 dark:bg-dark-gray-heavy dark:text-dark-white dark:hover:bg-dark-gray md:mt-4 md:px-4 md:py-2"
        onClick={() => signIn("google")}
      >
        <IconBrandGoogle className="mr-2 h-6 w-6 text-white md:h-8 md:w-8" />
        <span className="whitespace-nowrap text-xs text-white md:text-base">
          {t("login_with_google")}
        </span>
      </button>
      <div className="inline-flex w-full items-center justify-center text-light-blue-hover">
        <hr className="my-2 h-px w-full border-0 bg-gray-200 dark:bg-gray-700 md:my-8" />
        <span className="absolute left-1/2 -translate-x-1/2 bg-white px-1 text-xs font-medium text-light-blue-hover dark:bg-dark-gray dark:text-dark-white md:px-3 md:text-base">
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
      <label className="md:text-md text-light-button-green dark:text-dark-white sm:text-sm lg:text-lg">
        {t("have_not_registered")}{" "}
        <Link href={"/auth/register"}>
          <span className="text-light-button-green dark:text-dark-orange ">
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
