import React, { useContext, useEffect, useRef } from "react";
import { Progress } from "@nextui-org/react";
import { useImmer } from "use-immer";

import DashboardPieChart from "@/components/dashboard-pie-chart";
import DashboardStatusChart from "@/components/dashboard-status-chart";
import WeatherReport from "@/components/weather-report";
import { AuthContext } from "@/contexts/auth-context";
import withAuth from "@/hoc/withLogin";
import useDevice from "@/hooks/useDevice";
import ContainerCard from "@/shared/chart-container-card";
import HealthStatusPopupModal from "@/shared/health-status-popup-modal";
import StatusModal from "@/shared/status-modal";
import { useTranslation } from "next-i18next";
const Component = React.memo(() => {
  const { t } = useTranslation("health_record");
  const { isMobile } = useDevice();
  const cloudRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useImmer<boolean>(false);
  const { user } = useContext(AuthContext);
  const _moveHandler = () => {};

  const _openModal = () => setOpen(true);
  const _onCloseModal = () => setOpen(false);

  useEffect(() => {
    if (cloudRef.current && containerRef.current) {
      let gap = 0.25;
      let fX = -2.5;
      const interval = setInterval(() => {
        const dom = cloudRef.current as HTMLDivElement;
        const container = containerRef.current as HTMLDivElement;
        if (container) {
          fX += gap;
          dom.style.left = `${fX}px`;
        }
        if (container && fX > container.clientWidth) gap = gap * -1;
        else gap = Math.abs(gap);
      }, 100);
      return () => {
        clearInterval(interval);
      };
    }
  }, [cloudRef.current, containerRef.current]);

  return (
    <section
      className={`mx-4 flex flex-auto flex-col overflow-y-scroll border border-light-gray px-8 shadow-accent-dark hide-scrollbar ${
        isMobile ? "" : "w-full"
      }`}
    >
      <div
        ref={containerRef}
        className="relative mt-5 h-auto min-h-[15rem] w-1/3 overflow-hidden rounded-xl bg-light-button-green p-10 md:w-full"
      >
        <WeatherReport classes="absolute top-1 right-0 p-4 bg-light-button-green bg-opacity-0 rounded-xl" />
        <div
          ref={cloudRef}
          className="relative"
          style={{ top: "-5rem", left: "-2rem" }}
        >
          <img
            className="h-auto w-28 opacity-50 "
            src={"/static/dashboard/cloud.png"}
          />
        </div>

        <div className="absolute -bottom-6 left-0 flex h-2/3 w-full text-light-white flex-col items-start justify-start bg-transparent/10 p-4 pt-2 drop-shadow-md backdrop-blur-xl">
          <div className="mt-3 text-3xl font-semibold text-white ">
            {t("welcome_back")} {user?.name}
          </div>
          <div>{t("we_are")}</div>
          <div className="flex flex-row gap-1">
            {t("please_let")}
            <div
              className="text-main-blue animate-pulse cursor-pointer"
              onClick={_openModal}
            >
              {t("latest_status")}
            </div>
            .
          </div>
        </div>
      </div>
      <div className="mt-6  grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <DashboardPieChart type="symptoms" />
        <DashboardPieChart type="categorized-status" />
        <DashboardStatusChart />
        <ContainerCard
          chart={
            <div className="h-full w-full">
              <div className="w-full p-1 text-center text-white">
                {" "}
                {t("general_score")}{" "}
              </div>
              <div />
              <Progress value={80} color="primary" size="xl" />
            </div>
          }
        />
      </div>
      <HealthStatusPopupModal isOpen={open} onRequestClose={_onCloseModal} />
    </section>
  );
});
Component.displayName = "DashboardContent";

export default Component;
