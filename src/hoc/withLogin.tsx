import React, { useContext, useEffect, useMemo } from "react";

import { useRouter } from "next/router";

import { AuthContext, AuthProvider, useAuth } from "@/contexts/auth-context";
import { LoadingProvider } from "@/contexts/loading-context";
import useUser from "@/hooks/user/useUser";
import { showToast } from "@/utils/toast";

export default function withAuth<P extends object>(
  Component: React.ComponentType<P>
) {
  const WithAuth: React.FC<P> = (props) => {
    const router = useRouter();
    const { user, getUser, isLoading } = useUser();
    const { signIn } = useContext(AuthContext);
    const _firstGetUser = async () => {
      const response = await getUser();
      if (response) {
        if (signIn) signIn(response);
      }
    };
    useEffect(() => {
      if (!user) {
        _firstGetUser();
      }
    }, [user]);

    useEffect(() => {
      if (!user && !isLoading) {
        router.replace("/auth/login");
      }
    }, [user, isLoading, router]);

    return user ? (
      <LoadingProvider>
        <Component {...props} />
      </LoadingProvider>
    ) : null;
  };

  return WithAuth;
}
