import { useState } from "react";

import axios from "@/axios";
import { LocalStorageService } from "@/services/local-storage";
import { LocalStorageKeys } from "@/services/local-storage/constant";
import { UserService } from "@/services/user";
import { UserNS } from "@/services/user/type";
import { User } from "@/types/context/with-auth-context";

type UseUserResult = {
  user: User;
  getUser: () => Promise<User | undefined>;
  isLoading: boolean;
  updateUser: (data: UserNS.UpdateUserReq) => Promise<User>;
};

const useUserDetail = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  const handleAccessToken = () => {
    const accessToken = LocalStorageService.getInstance().getItem(
      LocalStorageKeys.access_token
    );
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      axios.defaults.headers.post["Content-Type"] = "application/json";
    }
  };

  const getUser = async () => {
    setLoading(true);
    handleAccessToken();
    const response = await UserService.getUserDetail();
    if (response) {
      const userDetail = response as User;
      setUser(userDetail);
      return userDetail;
    }
    setLoading(false);
  };

  const updateUser = async (data: UserNS.UpdateUserReq) => {
    setLoading(true);
    handleAccessToken();
    const response = await UserService.updateUser(data);
    if (response) {
      const userDetail = response as User;
      setUser(userDetail);
      return userDetail;
    }
    setLoading(false);
  };

  return { user, getUser, isLoading, updateUser } as UseUserResult;
};

export default useUserDetail;
