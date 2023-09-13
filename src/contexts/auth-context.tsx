import React, { createContext, useContext, useState, useEffect } from "react";

import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import { useImmer } from "use-immer";

import axios from "@/axios";
import { LoadingContext } from "@/contexts/loading-context";
import useUser from "@/hooks/user/useUser";
import { LocalStorageService } from "@/services/local-storage";
import { LocalStorageKeys } from "@/services/local-storage/constant";
import {
  AuthContextData,
  IAuthContextProps,
  IUser,
} from "@/types/context/with-auth-context";

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const useAuth = (): AuthContextData => useContext(AuthContext);

export const AuthProvider = (props: IAuthContextProps) => {
  const { children } = props;
  const [user, setUser] = useState<IUser | null>(null);
  const { user: newUser, getUser } = useUser();
  const [forceInit, setForceInit] = useImmer<boolean>(false);
  const [accessToken, setAccessToken] = useImmer<string>("");
  const [refreshToken, setRefreshToken] = useImmer<string>("");
  const { loading, setLoading } = useContext(LoadingContext);
  const router = useRouter();
  const [redirect, setRedirect] = useState<boolean>(false);
  const signIn = (user: IUser) => {
    setUser(user);
  };

  const signOut = async () => {
    setLoading(true);
    setUser(null);
    LocalStorageService.getInstance().removeItem(LocalStorageKeys.access_token);
    LocalStorageService.getInstance().removeItem(
      LocalStorageKeys.refresh_token,
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

  const _initUser = async () => {
    try {
      const newUser = await getUser();
      if (!isEmpty(newUser)) {
        setUser(newUser);
        setRedirect(false);
      } else setRedirect(true);
    } catch (error) {
      setRedirect(true);
    }
  };

  // const _debounceGetUser = debounce((newUser: IUser) => {
  //   if (!newUser) {
  //     const storage = LocalStorageService.getInstance();
  //     const storedAccessToken = storage.getItem(LocalStorageKeys.access_token);
  //     const storedRefreshToken = storage.getItem(
  //         LocalStorageKeys.refresh_token
  //     );
  //
  //     if (storedAccessToken && storedRefreshToken) {
  //       setAxiosAuthHeader(storedAccessToken);
  //       setAccessToken(storedAccessToken);
  //       setRefreshToken(storedRefreshToken);
  //     }
  //     if (storedAccessToken && isEmpty(newUser)) {
  //       _initUser();
  //     }
  //   }
  // }, 3000)
  //
  // const _callbackGetUser = useCallback((newUser: IUser) => {
  //   _debounceGetUser(newUser);
  // }, [])

  // useEffect(() => {
  //   _callbackGetUser(user);
  // }, [user]);

  useEffect(() => {
    if (!user) {
      const storage = LocalStorageService.getInstance();
      const storedAccessToken = storage.getItem(LocalStorageKeys.access_token);
      if (storedAccessToken) _initUser();
    }
  }, []);

  useEffect(() => {
    if (forceInit) {
      _initUser();
      setForceInit(false);
    }
  }, [forceInit]);

  useEffect(() => {
    if (redirect) setRedirect(false);
  }, [redirect]);
  // useEffect(() => {
  //   const storage = LocalStorageService.getInstance();
  //   const storedAccessToken = storage.getItem(LocalStorageKeys.access_token);
  //   const storedRefreshToken = storage.getItem(LocalStorageKeys.refresh_token);
  //
  //   if (storedAccessToken && storedRefreshToken) {
  //     setAxiosAuthHeader(storedAccessToken);
  //     setAccessToken(storedAccessToken);
  //     setRefreshToken(storedRefreshToken);
  //   }
  //   if (storedAccessToken && isEmpty(user)) {
  //     console.log('run callback get user')
  //     _initUser();
  //   }
  // }, []);

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, loading, setForceInit, redirect }}
    >
      {children}
    </AuthContext.Provider>
  );
};
