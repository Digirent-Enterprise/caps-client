import { useContext, useState } from "react";

import { useRouter } from "next/router";

import axios from "@/axios";
import { LoadingContext } from "@/contexts/loading-context";
import { AuthNS } from "@/services/auth/type";
import { showToast } from "@/utils/toast";

type RegisterResult = {
  register: (x: AuthNS.RegisterRequest) => void;
};

const useRegister = () => {
  const [_, setData] = useState<any>(null);
  const { setLoading } = useContext(LoadingContext);
  const router = useRouter();
  const register = async (authData: AuthNS.RegisterRequest) => {
    if (!authData) return;
    setLoading(true);
    try {
      const response = await axios.post("/auth/register", authData);
      if (response) {
        setLoading(false);
        showToast("success", "Register successfully!");
      }
      const data = response.data;
      setData(data);
      await router.push("/auth/login");
    } catch (error) {
      setLoading(false);
      return;
    }
  };

  return { register } as RegisterResult;
};

export default useRegister;
