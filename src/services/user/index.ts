import { UserNS } from "@/services/user/type";
import { IUser } from "@/types/context/with-auth-context";
import axios from "src/utils/axios";

export class UserService {
  static getAllUsers = (): Promise<UserNS.UserDetailResponse[]> => {
    return axios.get("/users");
  };

  static getUserDetail = (): Promise<UserNS.UserDetailResponse> => {
    return axios.get("/users/user-detail");
  };

  static getUserById = (id: number): Promise<IUser> => {
    return axios.get("/users/user-basic-info", { params: { id } });
  };

  static updateUser = (
    data: UserNS.UpdateUserReq,
  ): Promise<UserNS.UpdateUserReq> => {
    return axios.put("/users/update", { firstLogin: false });
  };
}
