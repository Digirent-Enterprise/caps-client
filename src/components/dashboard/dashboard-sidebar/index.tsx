import React, { memo, useContext } from "react";

import { useTranslation } from "next-i18next";
import { useImmer } from "use-immer";

import { IDashboardSidebarProps } from "@/components/dashboard/dashboard-sidebar/type";
import { AuthContext } from "@/contexts/auth-context";
import useDevice from "@/hooks/useDevice";

const Component = memo((props: IDashboardSidebarProps) => {
  const { t } = useTranslation("health_record");
  const [showSidebar, setShowSidebar] = useImmer<boolean>(false);
  const { isMobile } = useDevice();
  const { user, signOut } = useContext(AuthContext);
  const { children, title } = props;

  const _onToggleSideBar = () => setShowSidebar((prev) => !prev);

  if (isMobile)
    return (
      <>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          onClick={_onToggleSideBar}
          className="ml-3 mt-2 inline-flex w-10 items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
        >
          <span>Open sidebar</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        {showSidebar && (
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
        )}
      </>
    );

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
