import axios from "@/axios";

import { UserNS } from "./type";

export class UserService {
  static getUserDetail = (): Promise<UserNS.UserDetailResponse> => {
    return axios.get("/users/user-detail");
  };

  static updateUser = (
    data: UserNS.UpdateUserReq
  ): Promise<UserNS.UpdateUserReq> => {
    return axios.put("/users/update", { firstLogin: false });
  };
}
