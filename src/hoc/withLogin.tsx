import React, { useCallback, useContext, useEffect, useMemo } from "react";

import { debounce } from "lodash";
import { useRouter } from "next/router";

import { AuthContext, AuthProvider, useAuth } from "@/contexts/auth-context";
import { LoadingProvider } from "@/contexts/loading-context";
import useUser from "@/hooks/user/useUser";
import { IUser } from "@/types/context/with-auth-context";
import { showToast } from "@/utils/toast";

const WAIT_TIME_BEFORE_REDIRECT = 5000;
export default function withAuth<P extends object>(
  Component: React.ComponentType<P>
) {
  const WithAuth: React.FC<P> = (props) => {
    const router = useRouter();
    const {
      user,
      loading: isLoading,
      setForceInit,
      redirect,
    } = useContext(AuthContext);
    const _debounceCheckUser = debounce(() => {
      router.replace("/auth/login");
    }, WAIT_TIME_BEFORE_REDIRECT);

    const callbackCheckUser = useCallback(() => {
      _debounceCheckUser();
    }, [redirect]);

    useEffect(() => {
      if (!user && !isLoading) {
        setForceInit(true);
      }
    }, [user, isLoading, router]);

    useEffect(() => {
      if (redirect) {
        callbackCheckUser();
      }
    }, [redirect]);

    return user ? <Component {...props} /> : null;
  };

  return WithAuth;
}
