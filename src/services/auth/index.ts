import { createAxiosInstance } from "@/axios";
import { AuthNS } from "@/services/auth/type";

const api = createAxiosInstance();
export class AuthService {
  static login = (data: AuthNS.LoginRequest): Promise<AuthNS.LoginResponse> => {
    return api.post("/auth/login", data);
  };
  static register = (data: AuthNS.RegisterRequest) => {
    return api.post("/auth/register", data);
  };
}
