import { createAxiosInstance } from "@/axios";
import { UserNS } from "@/services/user/type";

const api = createAxiosInstance();

export class UserService {
  static getAllUsers = (): Promise<UserNS.UserDetailResponse[]> => {
    return api.get("/users");
  };

  static getUserDetail = (): Promise<UserNS.UserDetailResponse> => {
    return api.get("/users/user-detail");
  };

  static updateUser = (
    data: UserNS.UpdateUserReq
  ): Promise<UserNS.UpdateUserReq> => {
    return api.put("/users/update", { firstLogin: false });
  };
}
