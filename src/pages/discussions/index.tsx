import React, { memo } from "react";

import {
  IconArrowBack,
  IconBellPlusFilled,
  IconDeviceDesktopQuestion,
  IconDeviceDesktopShare,
  IconDeviceDesktopStar,
  IconDeviceDesktopUp,
  IconDeviceIpadHeart,
} from "@tabler/icons-react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useImmer } from "use-immer";

import DashboardSidebar from "@/components/dashboard-sidebar";
import DiscussionPageContent from "@/components/discussion-page-content";
import { DiscussionPageContentTabs } from "@/components/discussion-page-content/type";
import useDevice from "@/hooks/useDevice";

export const Component = memo(() => {
  const { isMobile } = useDevice();
  const [selectedTab, setSelectedTab] =
    useImmer<DiscussionPageContentTabs>("pending");
  const { t } = useTranslation();
  return (
    <div
      className={`flex h-screen  w-full overflow-hidden bg-light-background-gray text-light-blue-hover antialiased  ${
        isMobile ? "flex-col" : ""
      }`}
    >
      <DashboardSidebar
        tab={selectedTab}
        onChangeTab={setSelectedTab}
        title="Discussion Dashboard"
      >
        <>
          <div className="my-2 flex border-t p-2 dark:border-dark-gray dark:text-dark-white">
            <Link
              href={"/chat"}
              className="flex cursor-pointer flex-row items-center justify-start gap-1"
            >
              <IconArrowBack />
              <span className="ml-2 cursor-pointer text-lg text-light-blue-hover dark:text-dark-white">
                Back to Chat Assistant
              </span>
            </Link>
          </div>
          <div className="flex border-t p-3">
            <div className="flex w-full flex-col gap-3">
              <div
                className={`flex w-full cursor-pointer flex-row items-center gap-1 p-2 shadow-2xl ${
                  selectedTab === "pending"
                    ? "bg-light-secondary-button text-white shadow-inner"
                    : "text-black"
                }`}
                onClick={() => setSelectedTab("pending")}
              >
                <IconDeviceDesktopQuestion className="text-black dark:text-white" />
                <span className="ml-2 cursor-pointer text-sm dark:text-white">
                  Pending Questions
                </span>
              </div>
              <div
                className={`flex w-full cursor-pointer  flex-row items-center gap-1 p-2 shadow-2xl ${
                  selectedTab === "answered"
                    ? "bg-light-secondary-button text-white shadow-inner"
                    : "text-black"
                }`}
                onClick={() => setSelectedTab("answered")}
              >
                <IconDeviceDesktopShare className="text-black dark:text-white" />
                <span className="ml-2 cursor-pointer text-sm dark:text-white">
                  Answered Questions
                </span>
              </div>
              <div
                className={`flex w-full cursor-pointer  flex-row items-center gap-1 p-2 shadow-2xl ${
                  selectedTab === "peer-reviewed"
                    ? "bg-light-secondary-button text-white shadow-inner"
                    : "text-black"
                }`}
                onClick={() => setSelectedTab("peer-reviewed")}
              >
                <IconDeviceDesktopStar className="text-black dark:text-white" />
                <span className="ml-2 cursor-pointer text-sm dark:text-white">
                  Peer-Reviewed Questions
                </span>
              </div>
            </div>
          </div>
          <div className="flex-none p-4"></div>

          <div className="grow"></div>
        </>
      </DashboardSidebar>
      <DiscussionPageContent tab={selectedTab} />
    </div>
  );
});
Component.displayName = "Discussions";
export default Component;
