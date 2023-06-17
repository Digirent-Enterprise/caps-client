import React, { useContext } from "react";
import { useTranslation } from "next-i18next";
import {
  IconArrowBack,
  IconBellPlusFilled,
  IconDeviceIpadHeart,
  IconHistory,
} from "@tabler/icons-react";
import Link from "next/link";

import { AuthContext } from "@/contexts/auth-context";
import useDevice from "@/hooks/useDevice";

const Component = React.memo(() => {
  const { t } = useTranslation("health_record");
  const { isMobile } = useDevice();
  const { user, signOut } = useContext(AuthContext);

  return (
    <section
      className={`group flex ${
        isMobile ? "h-full" : ""
      } flex-none flex-col overflow-auto border-r border-light-gray transition-all duration-300 ease-in-out  md:w-1/3 lg:max-w-sm `}
    >
      <div className="flex flex-col justify-start gap-1 p-4">
        <p className="hidden text-light-blue-hover text-lg font-bold md:block">
          {t("welcome")} {user?.name}
        </p>
      </div>
      <div className="my-2 flex border-t border-light-gray p-2">
        <Link
          href={"/home"}
          className="flex cursor-pointer flex-row items-center justify-start gap-1"
        >
          <IconArrowBack />
          <span className="ml-2 cursor-pointer text-lg text-light-blue-hover">
            {t("back")}
          </span>
        </Link>
      </div>
      <div className="flex border-t border-light-gray p-3">
        <div className="flex w-full flex-col gap-3">
          <Link
            href={"/health-record"}
            className="flex w-full cursor-pointer flex-row items-center gap-1 text-light-white bg-light-button-green p-2"
          >
            <IconDeviceIpadHeart />
            <span className="ml-2 cursor-pointer text-sm text-light-white">
              {t("my_general")}
            </span>
          </Link>
          <Link
            href={"/health-record"}
            className="flex cursor-pointer flex-row items-center gap-1 p-2 opacity-25"
          >
            <IconHistory />
            <span className="ml-2 cursor-pointer text-sm text-light-blue-hover">
              {t("my_health")}
            </span>
          </Link>
          <Link
            href={"/health-record"}
            className="flex cursor-pointer flex-row items-center gap-1 p-2 opacity-25"
          >
            <IconBellPlusFilled />
            <span className="ml-2 cursor-pointer text-sm text-light-blue-hover">
              {t("my_secret")}
            </span>
          </Link>
        </div>
      </div>
      <div className="flex-none p-4"></div>

      <div className="grow"></div>
    </section>
  );
});

Component.displayName = "DashboardSideBar";

export default Component;
