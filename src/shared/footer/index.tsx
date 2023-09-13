import React, { memo } from "react";

import Link from "next/link";
import { useTranslation } from "next-i18next";

const Component = memo(() => {
  const { t } = useTranslation("home");
  return (
    <footer
      data-testid="footer"
      className="bg-opacity/60 fixed bottom-0 h-14 w-full bg-light-blue p-4 dark:bg-dark-bg-primary md:p-3"
    >
      <div className="mx-auto w-full max-w-screen-xl">
        <span className="block text-sm text-white dark:text-dark-white sm:text-center">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline">
            DICA™
          </Link>
          . {t("all_right_reserved")}.
        </span>
      </div>
    </footer>
  );
});

Component.displayName = "Footer";

export default Component;
