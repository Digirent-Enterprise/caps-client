import React, { useContext, useEffect, useRef } from "react";

import { useImmer } from "use-immer";

import DashboardPieChart from "@/components/dashboard-pie-chart";
import DashboardStatusChart from "@/components/dashboard-status-chart";
import WeatherReport from "@/components/weather-report";
import { AuthContext } from "@/contexts/auth-context";
import withAuth from "@/hoc/withLogin";
import useDevice from "@/hooks/useDevice";
import HealthStatusPopupModal from "@/shared/health-status-popup-modal";
import StatusModal from "@/shared/status-modal";

const Component = React.memo(() => {
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
        fX += gap;
        dom.style.left = `${fX}px`;
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
      className={`mx-4 flex flex-auto flex-col overflow-y-scroll border border-gray-800 px-8 shadow-accent-dark ${
        isMobile ? "" : "w-full"
      }`}
    >
      <div
        ref={containerRef}
        className="relative mt-5 h-auto min-h-[15rem] w-1/3 overflow-x-hidden rounded-xl bg-[#2d325a] p-10 md:w-full"
      >
        <WeatherReport classes="absolute top-1 right-0 p-4 bg-[#475D78] bg-opacity-20 rounded-xl" />
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
            Please let us know your
            <div
              className="animate-pulse cursor-pointer text-main-blue"
              onClick={_openModal}
            >
              latest status
            </div>
            .
          </div>
        </div>
      </div>
      <div className="mt-4 grid  gap-6  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <DashboardPieChart type="symptoms" />
        <DashboardPieChart type="categorized-status" />
        <DashboardStatusChart />
      </div>
      <HealthStatusPopupModal isOpen={open} onRequestClose={_onCloseModal} />
    </section>
  );
});
Component.displayName = "DashboardContent";

export default Component;
