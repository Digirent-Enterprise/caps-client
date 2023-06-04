import axios from "@/axios";
import { DynamicHealthNS } from "@/services/dynamic-health/type";

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
}
