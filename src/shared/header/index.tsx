import React, { useContext, useEffect } from "react";

import { isEmpty } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { AuthContext } from "@/contexts/auth-context";
import useDevice from "@/hooks/useDevice";
import useUser from "@/hooks/user/useUser";

const Component = React.memo(() => {
  const { isMobile } = useDevice();
  const { getUser, user } = useUser();
  const { t } = useTranslation("landing_page");

  useEffect(() => {
    getUser();
  }, []);
  return (
    <header
      data-testid="header"
      className="h-22 fixed top-0 z-10 w-full bg-light-white bg-opacity-60 p-2 shadow-amber-50"
    >
      <div className="flex w-full flex-row content-between items-center gap-2">
        <div className="ml-32 w-40">
          <Link href={"/"}>
            <Image
              src={"/static/dica.png"}
              width={331}
              height={137}
              className="h-17 w-40 bg-transparent"
              alt="dica_logo"
            />
          </Link>
        </div>
        <div className=" ml-auto mr-32 w-2/3 font-semibold  text-light-blue-hover dark:text-dark-white">
          <div className="flex w-full flex-nowrap items-center justify-end gap-5">
            <Link href={"/landing-page"}>
              <div className="ho mr-2 w-fit text-center"> {t("home")} </div>
            </Link>
            {isEmpty(user) && (
              <>
                <Link href={"/auth/login"}>
                  <div className="mr-2 w-fit text-center"> {t("login")} </div>
                </Link>
                <Link href={"/auth/register"}>
                  <div className="mr-2 w-fit text-center">{t("register")}</div>
                </Link>
              </>
            )}
            {!isEmpty(user) && (
              <Link href={"/home"}>
                <div className="mr-2 w-fit text-center"> {t("my_health")} </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
});

Component.displayName = "Header";

export default Component;
