import { createAxiosInstance } from "@/axios";
import { DynamicHealthNS } from "@/services/dynamic-health/type";

const api = createAxiosInstance();

export class DynamicHealthService {
  static addDynamicHealth(params: DynamicHealthNS.AddDynamicHealthParams) {
    return api.post("/dynamic-health", params);
  }
  static getDynamicHealthMyStatuses(): Promise<DynamicHealthNS.DynamicHealthStatusesRes> {
    return api.get("/dynamic-health/my-statuses");
  }
  static getCategorizedStatuses(): Promise<DynamicHealthNS.CategorizedStatusRes> {
    return api.get("/dynamic-health/my-categorized-statuses");
  }
  static getCommonSymptoms(): Promise<DynamicHealthNS.CategorizedStatusRes> {
    return api.get("/dynamic-health/my-symptoms");
  }

  static getUserMostSymptoms(): Promise<DynamicHealthNS.DynamicHealthStatusesRes> {
    return api.get("/dynamic-health/my-symptoms-rank");
  }
}
