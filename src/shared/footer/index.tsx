import React from "react";

import Link from "next/link";

import useDevice from "@/hooks/useDevice";

const Component = React.memo(() => {
  const { isMobile } = useDevice();
  return (
    <footer
      data-testid="footer"
      className="fixed bottom-0 h-14 w-full bg-light-blue bg-opacity/60 p-4 dark:bg-dark-bg-primary md:p-3"
    >
      <div className="mx-auto w-full max-w-screen-xl">
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
