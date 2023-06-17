import React from "react";

import Link from "next/link";

import useDevice from "@/hooks/useDevice";

const Component = React.memo(() => {
  const { isMobile } = useDevice();
  return (
    <footer
      data-testid="footer"
      className="fixed bottom-0 h-10 w-full bg-light-background-gray bg-opacity-60  p-2 shadow-amber-50  dark:bg-dark-header-footer md:p-3"
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <span className="block text-sm text-light-blue-hover dark:text-dark-white sm:text-center">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline">
            DICA™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
});

Component.displayName = "Footer";

export default Component;
