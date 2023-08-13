import axios from "@/axios";
import { UserNS } from "@/services/user/type";

export class UserService {
  static getAllUsers = (): Promise<UserNS.UserDetailResponse[]> => {
    return axios.get("/users");
  };

  static getUserDetail = (): Promise<UserNS.UserDetailResponse> => {
    return axios.get("/users/user-detail");
  };

  static updateUser = (
    data: UserNS.UpdateUserReq
  ): Promise<UserNS.UpdateUserReq> => {
    return axios.put("/users/update", { firstLogin: false });
  };
}
