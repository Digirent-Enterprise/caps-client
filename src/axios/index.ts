import * as process from "process";

import { useContext } from "react";

import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import dotenv from "dotenv";

import { LoadingContext } from "@/contexts/loading-context";
import { LocalStorageService } from "@/services/local-storage";
import { LocalStorageKeys } from "@/services/local-storage/constant";
import { HttpResponse } from "@/types/enum/http-response";
import { showToast } from "@/utils/toast";
dotenv.config();
export const API_BASE_URL = process.env.BACKEND_URL || "http://localhost:3003";
console.log(
  "process.env.BACKEND_URLprocess.env.BACKEND_URL123",
  process.env.BACKEND_URL,
);
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
          showToast("error", `Bad Request: ${message}`);
          break;
        case HttpResponse.UNAUTHORIZED:
          //TODO: add axios refresh token mechanism
          showToast("error", `Unauthorized: ${message}`);
          break;
        case HttpResponse.FORBIDDEN:
          showToast("error", `Forbidden: ${message}`);
          break;
        case HttpResponse.NOT_FOUND:
          showToast("error", `Not Found: ${message}`);
          break;
        case HttpResponse.INTERNAL_SERVER_ERROR:
          showToast("error", `Internal Server Error: ${message}`);
          break;
        default:
          showToast("error", `Error ${status}: ${message}`);
          break;
      }
    } else if (error.request) {
      showToast("error", `No response received: ${error.message}`);
    } else {
      showToast("error", `Request error: ${error.message}`);
    }
    return Promise.reject(error);
  },
);

export default api;
