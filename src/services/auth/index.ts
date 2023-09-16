import { AuthNS } from "@/services/auth/type";
import axios from "src/utils/axios";

export class AuthService {
  static login = (data: AuthNS.LoginRequest): Promise<AuthNS.LoginResponse> => {
    return axios.post("/auth/login", data);
  };
  static register = (data: AuthNS.RegisterRequest) => {
    return axios.post("/auth/register", data);
  };
}
