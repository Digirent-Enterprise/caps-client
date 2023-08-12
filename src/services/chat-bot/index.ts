import { createAxiosInstance } from "@/axios";

const api = createAxiosInstance();

export default class ChatBotService {
  static generalDiagnosis = (): Promise<DiagnosisNS.DiagnosisResults> => {
    return api.get(`/chat-bot/diagnosis/`);
  };

  static createNewDiagnosis = (): Promise<DiagnosisNS.Diagnosis> => {
    return api.post(`/chat-bot/diagnosis/create`);
  };

  static couldGetDiagnosis = (): Promise<DiagnosisNS.CouldGetDiagnosis> => {
    return api.get(`/chat-bot/diagnosis/status`);
  };
}
