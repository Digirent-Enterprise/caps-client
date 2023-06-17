import React, { useContext } from "react";

import {
  IconArrowBack,
  IconBellPlusFilled,
  IconDeviceIpadHeart,
  IconHistory,
} from "@tabler/icons-react";
import Link from "next/link";

import { AuthContext } from "@/contexts/auth-context";
import useDevice from "@/hooks/useDevice";
import {IDashboardSidebarProps} from "@/components/dashboard-sidebar/type";
import {DashboardContentTabs} from "@/components/dashboard-content/type";

const Component = React.memo((props: IDashboardSidebarProps) => {
  const { isMobile } = useDevice();
  const { tab, onChangeTab } = props
  const { user, signOut } = useContext(AuthContext);

  const _onChangeTab = (tab: DashboardContentTabs) => {
    if (onChangeTab) onChangeTab(tab)
  }


  return (
    <section
      className={`group flex ${
        isMobile ? "h-full" : ""
      } flex-none flex-col overflow-auto border-r border-gray-800 transition-all duration-300 ease-in-out  md:w-1/3 lg:max-w-sm `}
    >
      <div className="flex flex-col justify-start gap-1 p-4">
        <p className="hidden text-lg font-bold md:block">
          Welcome, {user?.name}
        </p>
      </div>
      <div className="my-2 flex border-t border-gray-800 p-2">
        <Link
          href={"/home"}
          className="flex cursor-pointer flex-row items-center justify-start gap-1"
        >
          <IconArrowBack />
          <span className="ml-2 cursor-pointer text-lg text-white ">
            Back to Chat Assistant
          </span>
        </Link>
      </div>
      <div className="flex border-t border-gray-800 p-3">
        <div className="flex w-full flex-col gap-3">
          <div
            className={`flex w-full cursor-pointer flex-row items-center gap-1 p-2 ${tab === 'MyGeneralHealthStatistics' ? 'bg-gray-800' : ''}`}
            onClick={() => _onChangeTab('MyGeneralHealthStatistics')}
          >
            <IconDeviceIpadHeart />
            <span className="ml-2 cursor-pointer text-sm text-white">
              My General Heath Statistic
            </span>
          </div>
          <Link
            href={"/health-record"}
            className="flex cursor-pointer flex-row items-center gap-1 p-2 opacity-25"
          >
            <IconHistory />
            <span className="ml-2 cursor-pointer text-sm text-white">
              My Health History
            </span>
          </Link>
          <div
            className={`flex cursor-pointer flex-row items-center gap-1 p-2 ${ tab === 'MySecretRecommendation' ? 'bg-gray-800' : ''}`}
            onClick={() => _onChangeTab('MySecretRecommendation')}
          >
            <IconBellPlusFilled />
            <span className="ml-2 cursor-pointer text-sm text-white">
              My secret recommendations
            </span>
          </div>
        </div>
      </div>
      <div className="flex-none p-4"></div>

      <div className="grow"></div>
    </section>
  );
});

Component.displayName = "DashboardSideBar";

export default Component;
