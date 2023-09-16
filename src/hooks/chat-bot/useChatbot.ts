import { useContext, useState } from "react";

import { useImmer } from "use-immer";

import { LoadingContext } from "@/contexts/loading-context";
import ChatBotService from "@/services/chat-bot";
import { StatusType } from "@/types/enum/common/status-type";
import { showToast } from "@/utils/toast";

export type ChatBotResult = {
  getDiagnosisResults: () => void;
  diagnosis: () => Promise<DiagnosisNS.Diagnosis | undefined>;
  diagnosisLoading: boolean;
  diagnosisResults: DiagnosisNS.DiagnosisResults;
};

const useChatBot = (): ChatBotResult => {
  const { setLoading } = useContext(LoadingContext);
  const [diagnosisLoading, setDiagnosisLoading] = useState<boolean>(false);
  const [diagnosisResults, setDiagnosisResults] =
    useImmer<DiagnosisNS.DiagnosisResults>([]);

  const getDiagnosisResults = async () => {
    try {
      setLoading(true);
      const response = await ChatBotService.generalDiagnosis();
      if (response) {
        setDiagnosisResults(response);
      }
      setDiagnosisLoading(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const couldGetDiagnosis = async () => {
    try {
      setLoading(true);
      const response = await ChatBotService.couldGetDiagnosis();
      setLoading(false);
      if (response) {
        return response.couldDiagnosis;
      }
      return false;
    } catch (error) {
      setLoading(false);
    }
  };

  const diagnosis = async () => {
    const couldDiagnosis = await couldGetDiagnosis();
    if (!couldDiagnosis) return;
    setLoading(true);
    setDiagnosisLoading(true);
    try {
      const response = await ChatBotService.createNewDiagnosis();
      if (response) {
        setLoading(false);
        setDiagnosisLoading(false);
        setDiagnosisResults((prev) => [...prev, response]);
        showToast(StatusType.SUCCESS, "Diagnosis created successfully");
        return response;
      }
    } catch (error) {
      setLoading(false);
      setDiagnosisLoading(false);
    }
  };
  return {
    getDiagnosisResults,
    diagnosis,
    diagnosisLoading,
    diagnosisResults,
  } as ChatBotResult;
};

export default useChatBot;
