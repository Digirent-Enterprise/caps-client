import React, { memo, useEffect, useRef } from "react";

import { isEmpty } from "lodash";
import { useTranslation } from "next-i18next";
import { useImmer } from "use-immer";

import DashboardCreateDiagnosisModal from "@/components/dashboard/dashboard-create-diagnosis-modal";
import { IDashboardWelcomeSection } from "@/components/dashboard/dashboard-welcome-section/type";
import HealthStatusPopupModal from "@/shared/health-status-popup-modal";
import WeatherReport from "@/shared/weather-report";

const Component = memo((props: IDashboardWelcomeSection) => {
  const { t } = useTranslation();
  const { user, page, useChatBot } = props;
  const cloudRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useImmer<boolean>(false);
  const [openDiagnosisModal, setOpenDiagnosisModal] = useImmer<boolean>(false);
  const _openModal = () => {
    switch (page) {
      case "diagnosis":
        setOpenDiagnosisModal(true);
        break;
      default:
        setOpen(true);
    }
  };

  const _onCloseDiagnosisModal = () => {
    switch (page) {
      case "diagnosis":
        setOpenDiagnosisModal(false);
        break;
      default:
        setOpen(false);
    }
  };
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
    <>
      <div
        ref={containerRef}
        className="relative mt-5 h-auto min-h-[15rem] w-1/3 overflow-hidden rounded-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 p-10 md:w-full"
      >
        <WeatherReport classes="absolute rounded top-5 p-2 right-2" />
        <div
          ref={cloudRef}
          className="relative"
          style={{ top: "-5rem", left: "-2rem" }}
        >
          <img className="h-auto w-28 " src={"/static/dashboard/cloud.png"} />
        </div>

        <div className="absolute -bottom-6 left-0 flex h-2/3 w-full flex-col items-start justify-start bg-[#213363] bg-opacity-60 p-4 pt-2 text-white drop-shadow-md backdrop-blur-xl">
          <div className="mt-3 text-3xl font-semibold text-white ">
            {t("welcome")}, {user?.name}
          </div>
          <div>
            We are always happy to hear from you. Taking care of your health is
            our pleasure.
          </div>
          {!page && (
            <div className="flex flex-row gap-1">
              Please let DICA know your
              <div
                className="cursor-pointer text-light-gray underline"
                onClick={_openModal}
              >
                latest status
              </div>
              .
            </div>
          )}
          {page === "diagnosis" && (
            <div className="flex flex-row gap-1">
              DICA is able to general diagnosis your health status based on your
              provided information.
              <div
                className="cursor-pointer text-light-gray underline"
                onClick={_openModal}
              >
                Give us a try!
              </div>
            </div>
          )}
        </div>
      </div>
      <HealthStatusPopupModal isOpen={open} onRequestClose={_onCloseModal} />
      {!isEmpty(useChatBot) && (
        <DashboardCreateDiagnosisModal
          open={openDiagnosisModal}
          onClose={_onCloseDiagnosisModal}
          useChatBot={useChatBot}
        />
      )}
    </>
  );
});

Component.displayName = "DashboardWelcomeSection";
export default Component;
