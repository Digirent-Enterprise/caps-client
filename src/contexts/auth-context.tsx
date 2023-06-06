import React, { createContext, useContext, useState, useEffect } from "react";

import { useRouter } from "next/router";
import { useImmer } from "use-immer";

import axios from "@/axios";
import { LoadingContext } from "@/contexts/loading-context";
import { LocalStorageService } from "@/services/local-storage";
import { LocalStorageKeys } from "@/services/local-storage/constant";
import {
  AuthContextData,
  IAuthContextProps,
  IUser,
} from "@/types/context/with-auth-context";

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const useAuth = (): AuthContextData => useContext(AuthContext);

export const AuthProvider = (props: IAuthContextProps) => {
  const { children } = props;
  const [user, setUser] = useState<IUser | null>(null);
  const [accessToken, setAccessToken] = useImmer<string>("");
  const [refreshToken, setRefreshToken] = useImmer<string>("");
  const { setLoading } = useContext(LoadingContext);
  const router = useRouter();

  const signIn = (user: IUser) => {
    setUser(user);
  };

  const signOut = async () => {
    setLoading(true);
    setUser(null);
    LocalStorageService.getInstance().removeItem(LocalStorageKeys.access_token);
    LocalStorageService.getInstance().removeItem(
      LocalStorageKeys.refresh_token
    );
    resetAxiosHeader();
    await router.reload();
    setLoading(false);
  };

  const setAxiosAuthHeader = (accessToken: string) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    axios.defaults.headers.post["Content-Type"] = "application/json";
  };

  const resetAxiosHeader = () => {
    axios.defaults.headers.common["Authorization"] = ``;
  };

  useEffect(() => {
    const storage = LocalStorageService.getInstance();
    const storedAccessToken = storage.getItem(LocalStorageKeys.access_token);
    const storedRefreshToken = storage.getItem(LocalStorageKeys.refresh_token);

    if (storedAccessToken && storedRefreshToken) {
      setAxiosAuthHeader(storedAccessToken);
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
