import axios from "@/utils/axios";

export default class ChatBotService {
  static generalDiagnosis = (): Promise<DiagnosisNS.DiagnosisResults> => {
    return axios.get(`/chat-bot/diagnosis/`);
  };

  static createNewDiagnosis = (): Promise<DiagnosisNS.Diagnosis> => {
    return axios.post(`/chat-bot/diagnosis/create`);
  };

  static couldGetDiagnosis = (): Promise<DiagnosisNS.CouldGetDiagnosis> => {
    return axios.get(`/chat-bot/diagnosis/status`);
  };
}
