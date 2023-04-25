import "@/styles/globals.css";
import React, { useState } from "react";

import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import AppErrorFallback from "@/components/appErrorFallback";

const inter = Inter({ subsets: ["latin"] });

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: React.ReactElement) => React.ReactElement;
};

interface CustomAppProps extends AppProps {
  err: Error;
  Component: Page;
}

function App({ Component, pageProps, router, err }: CustomAppProps) {
  const [errorInfo, setErrorInfo] = useState<React.ErrorInfo | null>(null);

  const handleOnError = (error: Error, info: React.ErrorInfo) => {
    setErrorInfo(info);
  };

  const queryClient = new QueryClient();

  const handleFallbackRender = (fallbackProps: {
    error: Error;
    resetErrorBoundary: () => void;
  }) => {
    return (
      <AppErrorFallback
        error={fallbackProps.error}
        resetErrorBoundary={fallbackProps.resetErrorBoundary}
        errorInfo={errorInfo}
      />
    );
  };

  return (
    <SessionProvider session={pageProps.session}>
      <div className={inter.className}>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary
            onError={handleOnError}
            fallbackRender={handleFallbackRender}
          >
            {<Component {...pageProps} err={err} />}
          </ErrorBoundary>
        </QueryClientProvider>
      </div>
    </SessionProvider>
  );
}

export default appWithTranslation(App);
