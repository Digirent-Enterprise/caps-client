import { useContext, useState } from "react";

import axios from "@/axios";
import { AuthContext } from "@/contexts/auth-context";
import { LocalStorageService } from "@/services/local-storage";
import { LocalStorageKeys } from "@/services/local-storage/constant";
import { UserService } from "@/services/user";
import { UserNS } from "@/services/user/type";
import { IUser } from "@/types/context/with-auth-context";

type UseUserResult = {
  user: IUser;
  allUsers: IUser[];
  getUser: () => Promise<IUser | undefined>;
  getAllUsers: () => Promise<IUser[] | undefined>;
  isLoading: boolean;
  updateUser: (data: UserNS.UpdateUserReq) => Promise<IUser>;
  getUserById: (userId: number) => Promise<IUser | undefined>;
  patient: IUser;
};

const useUser = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<IUser | null>(null);
  const [patient, setPatient] = useState<IUser | null>(null);
  const [allUsers, setAllUsers] = useState<IUser[] | null>(null);
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
      const userDetail = response as IUser;
      setUser(userDetail);
      return userDetail;
    }
    setLoading(false);
  };

  const getAllUsers = async () => {
    setLoading(true);
    handleAccessToken();
    const response = await UserService.getAllUsers();
    if (response) {
      const allUsers = response as IUser[];
      setAllUsers(allUsers);
      return allUsers;
    }
    setLoading(false);
  };

  const updateUser = async (data: UserNS.UpdateUserReq) => {
    setLoading(true);
    handleAccessToken();
    const response = await UserService.updateUser(data);
    if (response) {
      const userDetail = response as IUser;
      setUser(userDetail);
      return userDetail;
    }
    setLoading(false);
  };

  const getUserById = async (userId: number) => {
    setLoading(true);
    const response = await UserService.getUserById(userId);
    if (response) {
      const userDetail = response as IUser;
      setPatient(userDetail);
      return userDetail;
    }
    setLoading(false);
  };

  return {
    user,
    allUsers,
    getUser,
    getAllUsers,
    isLoading,
    updateUser,
    getUserById,
    patient,
  } as UseUserResult;
};

export default useUser;
