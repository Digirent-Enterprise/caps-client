import React, { useEffect } from "react";

import "@/styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { useImmer } from "use-immer";

import { AuthProvider } from "@/contexts/auth-context";
import { ConversationProvider } from "@/contexts/conversation-context";
import { LoadingProvider } from "@/contexts/loading-context";
import Loading from "@/core/loading";
import ToastContainer from "@/core/toast-container";
import nextI18nextConfig from "next-i18next.config";

import "react-toastify/dist/ReactToastify.css";

interface ICustomAppProps extends AppProps {
  err: Error;
}

function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
  err,
}: ICustomAppProps) {
  const [loading, setLoading] = useImmer<boolean>(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);

    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);

    router.events.on("routeChangeComplete", handleComplete);

    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);

      router.events.off("routeChangeComplete", handleComplete);

      router.events.off("routeChangeError", handleComplete);
    };
  }, [router, setLoading]);
  return (
    <>
      <ChakraProvider>
        <LoadingProvider>
          <AuthProvider>
            <ConversationProvider>
              <ThemeProvider attribute="class">
                <Component {...pageProps} err={err} />
              </ThemeProvider>
            </ConversationProvider>
          </AuthProvider>
        </LoadingProvider>
      </ChakraProvider>
      <Loading loadingProps={loading} />
      <ToastContainer />
    </>
  );
}

export default appWithTranslation(App, nextI18nextConfig);
