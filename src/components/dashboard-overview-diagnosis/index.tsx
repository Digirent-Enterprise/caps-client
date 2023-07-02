import React, { useContext, useEffect, useMemo } from "react";

import { useImmer } from "use-immer";

import DashboardDiagnosisDetailModal from "@/components/dashboard-diagnosis-detail-modal";
import { IDiagnosisCardProps } from "@/components/dashboard-overview-diagnosis/type";
import DashboardWelcomeSection from "@/components/dashboard-welcome-section";
import { AuthContext } from "@/contexts/auth-context";
import useChatBot from "@/hooks/chat-bot/useChatbot";
import CustomResponsiveCard from "@/shared/custom-responsive-card";
import { formatDateTime } from "@/utils/common";

const DiagnosisCard = React.memo((props: IDiagnosisCardProps) => {
  const { item } = props;
  const [open, setOpen] = useImmer<boolean>(false);
  const _onOpenDetailModal = () => setOpen(true);
  const _onCloseDetailModal = () => setOpen(false);

  return (
    <CustomResponsiveCard>
      <div className="h-full w-full rounded-lg border border-gray-200 bg-white text-left shadow dark:border-gray-700 dark:bg-gray-800">
        <img
          className="rounded-t-lg"
          src={"/static/dashboard/diag.svg"}
          alt=""
        />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {formatDateTime(item.createdAt)}
            </h5>
          </a>
          <p className="mb-3 line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
            {item.description}
          </p>
          <div
            className="inline-flex items-center rounded-lg bg-accent px-3 py-2 text-center text-sm font-medium 
          text-white hover:cursor-pointer dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={_onOpenDetailModal}
          >
            Read more
          </div>
        </div>
        <DashboardDiagnosisDetailModal
          open={open}
          item={item}
          onClose={_onCloseDetailModal}
        />
      </div>
    </CustomResponsiveCard>
  );
});

DiagnosisCard.displayName = "DiagnosisCard";

const Component = React.memo(() => {
  const chatBotResult = useChatBot();
  const { getDiagnosisResults, diagnosisResults, diagnosisLoading, diagnosis } =
    chatBotResult;
  const { user } = useContext(AuthContext);
  useEffect(() => {
    getDiagnosisResults();
  }, []);
  return (
    <>
      <DashboardWelcomeSection
        user={user}
        page={"diagnosis"}
        useChatBot={chatBotResult}
      />
      <div className="mt-6  grid gap-6  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {diagnosisResults.map((result, index) => (
          <DiagnosisCard key={index} item={result} />
        ))}
      </div>
    </>
  );
});

Component.displayName = "DashboardDiagnosis";

export default Component;
