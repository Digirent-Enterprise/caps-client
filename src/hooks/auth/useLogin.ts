import { useContext, useState } from "react";

import { useRouter } from "next/router";

import axios from "@/axios";
import { LoadingContext } from "@/contexts/loading-context";
import { AuthService } from "@/services/auth";
import { AuthNS } from "@/services/auth/type";
import { LocalStorageService } from "@/services/local-storage";
import { LocalStorageKeys } from "@/services/local-storage/constant";
import { showToast } from "@/utils/toast";

type LoginResult = {
  data: AuthNS.LoginResponse;
  login: (x: AuthNS.LoginRequest) => void;
};

const useLogin = () => {
  const [data, setData] = useState<AuthNS.LoginResponse | null>(null);
  const route = useRouter();
  const { setLoading } = useContext(LoadingContext);

  const setAxiosAuthHeader = (accessToken: string) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  };

  const login = async (authData: AuthNS.LoginRequest) => {
    if (!authData) return;
    setLoading(true);
    try {
      const response: AuthNS.LoginResponse = await AuthService.login(authData);
      setData(response);
      showToast("success", "Login successfully!");
      setAxiosAuthHeader(response.access_token);
      LocalStorageService.getInstance().setItem(
        LocalStorageKeys.access_token,
        response.access_token
      );
      LocalStorageService.getInstance().setItem(
        LocalStorageKeys.refresh_token,
        response.refresh_token
      );
      await route.push("/home/");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return { data, login } as LoginResult;
};

export default useLogin;
