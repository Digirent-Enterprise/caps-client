import React, { useContext } from "react";

import {
  IconArrowBack,
  IconBellPlusFilled,
  IconDeviceIpadHeart,
  IconHistory,
} from "@tabler/icons-react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { DashboardContentTabs } from "@/components/dashboard-content/type";
import { IDashboardSidebarProps } from "@/components/dashboard-sidebar/type";
import { AuthContext } from "@/contexts/auth-context";
import useDevice from "@/hooks/useDevice";

const Component = React.memo((props: IDashboardSidebarProps) => {
  const { t } = useTranslation("health_record");
  const { isMobile } = useDevice();
  const { user, signOut } = useContext(AuthContext);
  const { children, title } = props;

  return (
    <section
      className={`group flex ${
        isMobile ? "h-full" : ""
      } flex-none flex-col overflow-auto border-r transition-all duration-300 ease-in-out  dark:border-dark-gray dark:bg-dark-gray-heavy md:w-1/3 lg:max-w-sm `}
    >
      <div className="flex flex-col justify-start gap-1 p-4">
        <p className="hidden text-lg font-bold text-light-blue-hover dark:text-dark-white md:block">
          {title}
        </p>
      </div>
      {children}
    </section>
  );
});

Component.displayName = "DashboardSideBar";

export default Component;
