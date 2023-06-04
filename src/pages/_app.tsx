import "@/styles/globals.css";
import { useContext, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { appWithTranslation } from "next-i18next";

import { AuthProvider } from "@/contexts/auth-context";
import { ConversationProvider } from "@/contexts/conversation-context";
import { LoadingContext } from "@/contexts/loading-context";
import ToastContainer from "@/core/toast-container";
import nextI18nextConfig from "next-i18next.config";

import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

interface CustomAppProps extends AppProps {
  err: Error;
}

function App({ Component, pageProps, router, err }: CustomAppProps) {
  const { loading, setLoading } = useContext(LoadingContext);

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
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <div className={inter.className}>
          <AuthProvider>
            <ConversationProvider>
              <Component {...pageProps} err={err} />
            </ConversationProvider>
          </AuthProvider>
          <ToastContainer />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default appWithTranslation(App, nextI18nextConfig);
