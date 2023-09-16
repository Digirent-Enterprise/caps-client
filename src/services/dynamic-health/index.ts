import { DynamicHealthNS } from "@/services/dynamic-health/type";
import axios from "src/utils/axios";

export class DynamicHealthService {
  static addDynamicHealth(params: DynamicHealthNS.AddDynamicHealthParams) {
    return axios.post("/dynamic-health", params);
  }

  static getDynamicHealthMyStatuses(): Promise<DynamicHealthNS.DynamicHealthStatusesRes> {
    return axios.get("/dynamic-health/my-statuses");
  }

  static getCategorizedStatuses(): Promise<DynamicHealthNS.CategorizedStatusRes> {
    return axios.get("/dynamic-health/my-categorized-statuses");
  }

  static getCommonSymptoms(): Promise<DynamicHealthNS.CategorizedStatusRes> {
    return axios.get("/dynamic-health/my-symptoms");
  }

  static getMostUserSymptomRanking(): Promise<DynamicHealthNS.MostUserSymptomRankingRes> {
    return axios.get("/dynamic-health/my-symptoms-rank", {
      params: {
        limit: 5,
      },
    });
  }
}
