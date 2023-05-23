import axios from "@/axios";
import { DynamicHealthNS } from "@/services/dynamic-health/type";

export class DynamicHealthService {
  static addDynamicHealth(params: DynamicHealthNS.AddDynamicHealthParams) {
    return axios.post("/dynamic-health", params);
  }
  static getDynamicHealthMyStatuses(): Promise<number[]> {
    return axios.get("/dynamic-health/my-statuses");
  }
}
