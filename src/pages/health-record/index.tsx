import React, { FC } from "react";

import {
  IconArrowBack,
  IconBellPlusFilled,
  IconDeviceIpadHeart,
} from "@tabler/icons-react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useImmer } from "use-immer";

import DashboardContent from "@/components/dashboard/dashboard-content";
import { DashboardContentTabType } from "@/components/dashboard/dashboard-content/type";
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import withAuth from "@/hoc/withLogin";
import useDevice from "@/hooks/useDevice";
import { PersonalizedDashboardTab } from "@/types/enum/common/tabs";

const Component: FC = () => {
  const { isMobile } = useDevice();
  const [selectedTab, setSelectedTab] = useImmer<DashboardContentTabType>(
    PersonalizedDashboardTab.GENERAL_HEALTH_STATISTIC,
  );
  const { t } = useTranslation("health_record");

  return (
    <div
      className={`flex h-screen  w-full overflow-hidden bg-light-background-gray text-light-blue-hover antialiased  ${
        isMobile ? "flex-col" : ""
      }`}
    >
      <DashboardSidebar
        tab={selectedTab}
        onChangeTab={setSelectedTab}
        title={"My health dashboard"}
      >
        <>
          <div className="my-2 flex border-t p-2 dark:border-dark-gray dark:text-dark-white">
            <Link
              href={"/chat"}
              className="flex cursor-pointer flex-row items-center justify-start gap-1"
            >
              <IconArrowBack />
              <span className="ml-2 cursor-pointer text-lg text-light-blue-hover dark:text-dark-white">
                {t("back")}
              </span>
            </Link>
          </div>
          <div className="flex border-t p-3">
            <div className="flex w-full flex-col gap-3">
              <div
                className={`flex w-full cursor-pointer flex-row items-center gap-1 p-2 shadow-2xl ${
                  selectedTab ===
                  PersonalizedDashboardTab.GENERAL_HEALTH_STATISTIC
                    ? "bg-light-secondary-button text-white shadow-inner"
                    : "text-black"
                }`}
                onClick={() =>
                  setSelectedTab(
                    PersonalizedDashboardTab.GENERAL_HEALTH_STATISTIC,
                  )
                }
              >
                <IconDeviceIpadHeart className="text-black dark:text-white" />
                <span className="ml-2 cursor-pointer text-sm dark:text-white">
                  {t("my_general")}
                </span>
              </div>
              <div
                className={`flex w-full cursor-pointer  flex-row items-center gap-1 p-2 shadow-2xl ${
                  selectedTab === PersonalizedDashboardTab.SECRET_RECOMMENDATION
                    ? "bg-light-secondary-button text-white shadow-inner"
                    : "text-black"
                }`}
                onClick={() =>
                  setSelectedTab(PersonalizedDashboardTab.SECRET_RECOMMENDATION)
                }
              >
                <IconBellPlusFilled className="text-black dark:text-white" />
                <span className="ml-2 cursor-pointer text-sm dark:text-white">
                  {t("my_health")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex-none p-4"></div>

          <div className="grow"></div>
        </>
      </DashboardSidebar>
      <DashboardContent tab={selectedTab} />
    </div>
  );
};

Component.displayName = "HeathRecordPage";
export default withAuth(Component);
