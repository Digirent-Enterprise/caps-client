import React, {
  useCallback,
  useContext,
  useEffect,
  ComponentType,
  FC,
} from "react";

import { debounce } from "lodash";
import { useRouter } from "next/router";

import { AuthContext } from "@/contexts/auth-context";

const WAIT_TIME_BEFORE_REDIRECT = 5000;
export default function withAuth<P extends object>(
  Component: ComponentType<P>,
) {
  const WithAuth: FC<P> = (props) => {
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
