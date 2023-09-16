import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

import { HttpResponse } from "@/types/enum/common/http-response";
import { StatusType } from "@/types/enum/common/status-type";
import { showToast } from "@/utils/toast";

export const API_BASE_URL =
  process.env.BACKEND_SERVER_URL || "http://localhost:3003";

const TWENTY_MINUTES = 20 * 60 * 1000;

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: TWENTY_MINUTES,
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response) {
      const { status, data } = error.response;
      const { message } = data as AxiosError;
      switch (status) {
        case HttpResponse.BAD_REQUEST:
          showToast(StatusType.ERROR, `Bad Request: ${message}`);
          break;
        case HttpResponse.UNAUTHORIZED:
          //TODO: add axios refresh token mechanism
          showToast(StatusType.ERROR, `Unauthorized: ${message}`);
          break;
        case HttpResponse.FORBIDDEN:
          showToast(StatusType.ERROR, `Forbidden: ${message}`);
          break;
        case HttpResponse.NOT_FOUND:
          showToast(StatusType.ERROR, `Not Found: ${message}`);
          break;
        case HttpResponse.INTERNAL_SERVER_ERROR:
          showToast(StatusType.ERROR, `Internal Server Error: ${message}`);
          break;
        default:
          showToast(StatusType.ERROR, `Error ${status}: ${message}`);
          break;
      }
    } else if (error.request) {
      showToast(StatusType.ERROR, `No response received: ${error.message}`);
    } else {
      showToast(StatusType.ERROR, `Request error: ${error.message}`);
    }
    return Promise.reject(error);
  },
);

export default api;
