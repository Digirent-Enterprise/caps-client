import React, { memo, useContext, useEffect, useMemo, useRef } from "react";

import { useImmer } from "use-immer";

import DashboardAverageHealthScore from "@/components/dashboard-average-health-score";
import DashboardPieChart from "@/components/dashboard-pie-chart";
import DashboardStatusChart from "@/components/dashboard-status-chart";
import WeatherReport from "@/components/weather-report";
import { AuthContext } from "@/contexts/auth-context";
import HealthStatusPopupModal from "@/shared/health-status-popup-modal";

const Component = memo(() => {
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

  const progress = useMemo(() => {
    return 1;
  }, []);
  return (
    <>
      <div
        ref={containerRef}
        className="relative mt-5 h-auto min-h-[15rem] w-1/3 overflow-hidden rounded-xl bg-[#2d325a] p-10 md:w-full"
      >
        <WeatherReport classes="absolute top-1 right-0 p-4 bg-[#475D78] bg-opacity-0 rounded-xl" />
        <div
          ref={cloudRef}
          className="relative"
          style={{ top: "-5rem", left: "-2rem" }}
        >
          <img
            className="h-auto w-28 opacity-10 "
            src={"/static/dashboard/cloud.png"}
          />
        </div>

        <div className="absolute -bottom-6 left-0 flex h-2/3 w-full flex-col items-start justify-start bg-transparent/10 p-4 pt-2 drop-shadow-md backdrop-blur-xl">
          <div className="mt-3 text-3xl font-semibold text-white ">
            Welcome back, {user?.name}
          </div>
          <div>
            We are always happy to hear from you. Taking care of your health is
            our pleasure.
          </div>
          <div className="flex flex-row gap-1">
            Please let DICA know your
            <div
              className="text-main-blue animate-pulse cursor-pointer"
              onClick={_openModal}
            >
              latest status
            </div>
            .
          </div>
        </div>
      </div>
      <div className="mt-6  grid gap-6  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <DashboardPieChart type="symptoms" />
        <DashboardPieChart type="categorized-status" />
        <DashboardStatusChart />
        <DashboardAverageHealthScore />
      </div>
      <HealthStatusPopupModal isOpen={open} onRequestClose={_onCloseModal} />
    </>
  );
});

Component.displayName = "DashboardMyGeneralHealthStatistic";
export default Component;
