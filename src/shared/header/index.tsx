import React from "react";

import Image from "next/image";
import Link from "next/link";

import useDevice from "@/hooks/useDevice";

const Component = React.memo(() => {
  const { isMobile } = useDevice();
  return (
    <header
      data-testid="header"
      className="h-22 fixed top-0 w-full bg-gray-100 bg-opacity-60 p-2 shadow-amber-50"
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
        <div className=" ml-auto mr-32 w-2/3 font-semibold  text-blue">
          <div className="flex w-full flex-nowrap items-center justify-end gap-5">
            <Link href={"/landing-page"}>
              <div className="ho mr-2 w-fit text-center"> Home </div>
            </Link>
            <Link href={"/auth/login"}>
              <div className="mr-2 w-fit text-center"> Login </div>
            </Link>
            <Link href={"/auth/register"}>
              <div className="mr-2 w-fit text-center"> Register </div>
            </Link>
            <Link href={"/home"}>
              <div className="mr-2 w-fit text-center"> My Health </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
});

Component.displayName = "Header";

export default Component;
